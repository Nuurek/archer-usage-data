import { DefaultFormatter, NouisliderModule, NouiFormatter } from 'ng2-nouislider/src/nouislider';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { JobOptions } from '../jobs-options';
import { distinct } from 'rxjs/operator/distinct';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsService } from '../jobs.service';
import { AfterContentInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';
import { MaterializeDirective } from 'angular2-materialize';

import 'rxjs/add/operator/distinctUntilChanged';

export class LocaleDateTimeFormatter implements NouiFormatter {
  to(value: number): string {
    const date = new Date(value);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString().replace(' ', '');
  };

  from(value: string): number {
    return 0;
  }
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges, AfterContentInit {
  jobs: Object[] = [];

  public fraction = 0.05;
  frameWidth = 0.2;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Memory usage [MB]';
  yAxisLabel = 'Nodes [pc.]';
  public disabled = false;
  @ViewChild('sliderRef') sliderRef: ElementRef | any;
  sliderConfig = {
    formatter: DefaultFormatter,
    connect: true,
    range: {
      'min': [ 0 ],
      'max': [ 1 ]
    },
    start: [],
    step: 1,
    tooltips: [ new LocaleDateTimeFormatter(), new LocaleDateTimeFormatter() ]
  }

  public range: number[] = [0, 1];
  periodResolution: number;

  chartOptions = new JobOptions();
  settings: Object;
  chartForm: FormGroup;

  public constructor(
    private jobsService: JobsService,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef
  ) {
    this.createForm();
  }

  private createForm(): any {
    const initialValues = {
      period: this.chartOptions.periodOptions[0].value,
      dataClass: this.chartOptions.classOptions[0].value,
      xAxis: this.chartOptions.axisOptions[0].value,
      yAxis: this.chartOptions.axisOptions[1].value,
      bubbleSize: this.chartOptions.axisOptions[2].value
    };
    this.chartForm = this.formBuilder.group(initialValues);
    this.settings = this.chartForm.getRawValue();
    this.chartForm.valueChanges
      .distinctUntilChanged()
      .subscribe(data => this.onChartChanges(data));

    this.chartForm.controls['period'].valueChanges.subscribe(data => this.onPeriodChanges(data));
  }

  private onChartChanges(data) {
    this.patchDistinctFields(data);
    this.updateJobs();
    // update settings so that it can be compared after next change
    this.settings = this.chartForm.getRawValue();
  }

  private patchDistinctFields(data) {
    const changes = Object.keys(data).filter(key => data[key] !== this.settings[key]);
    const distinctFields = ['xAxis', 'yAxis', 'bubbleSize'];

    changes.map(change => {
      // if one of distinct fields changed
      if (distinctFields.includes(change)) {
        // if one or more distinct fields have the same value push them to colliders array
        const colliders = [];
        distinctFields.reduce((acc, key) => {
          if (key !== change && data[key] === data[change]) {
            acc.push(key);
          }
          return acc;
        }, colliders);

        // swap values with colliding fields
        colliders.map(collider => data[collider] = this.settings[change]);
      };
    });

    this.chartForm.patchValue(data, { emitEvent: false });
  }

  private onPeriodChanges(data) {
    this.updatePeriodSettings();
  }

  private updatePeriodSettings() {
    this.jobsService.getPeriodSettings(this.chartForm.getRawValue())
      .then(periodSettings => {
        const oldMinTimestamp = this.sliderConfig['range']['min'][0];
        const oldMaxTimestamp = this.sliderConfig['range']['max'][0];
        const oldPeriod = (oldMaxTimestamp - oldMinTimestamp);
        const oldStartFraction = (this.range[0] - oldMinTimestamp) / oldPeriod;
        const oldEndFraction = (this.range[1] - oldMinTimestamp) / oldPeriod;

        const resolution = periodSettings['resolution'] * 1000
        const minTimestamp = new Date(periodSettings['min']).getTime();
        const maxTimestamp = new Date(periodSettings['max']).getTime() + resolution;
        this.sliderConfig['range']['min'] = [ minTimestamp ];
        this.sliderConfig['range']['max'] = [ maxTimestamp ];

        this.sliderConfig['step'] = resolution;

        const period = maxTimestamp - minTimestamp;
        this.range = [
          Math.round((Math.round(minTimestamp + oldStartFraction * period) / resolution)) * resolution,
          Math.round((Math.round(minTimestamp + oldEndFraction * period) / resolution)) * resolution
        ];
        this.sliderConfig['start'] = this.range;

        this.sliderRef.slider.updateOptions(this.sliderConfig);
      });
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.updateJobs();
    this.updatePeriodSettings();
    this.ref.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges)	{
    console.log(changes);
  }

  private updateJobs() {
    this.jobsService.getJobs(this.settings).then(jobs => {
      this.jobs = jobs;
    });
  }
}
