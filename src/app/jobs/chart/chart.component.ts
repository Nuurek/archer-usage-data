import { JobOptions } from '../jobs-options';
import { distinct } from 'rxjs/operator/distinct';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsService } from '../jobs.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';
import { MaterializeDirective } from 'angular2-materialize';

import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  jobs: Object[] = [];

  public fraction = 0.05;
  frameWidth = 0.2;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Memory usage [MB]';
  yAxisLabel = 'Nodes [pc.]';
  public disabled = false;

  public someRange: number[] = [3, 6];
  periodResolution: number;

  chartOptions = new JobOptions();
  settings: Object;
  chartForm: FormGroup;

  public constructor(
    private jobsService: JobsService,
    private formBuilder: FormBuilder
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
    this.jobsService.getPeriodResolutionInSeconds(this.chartForm.getRawValue())
      .then(resolution => {this.periodResolution = resolution; console.log(this.periodResolution)});
  }

  ngOnInit() {
    this.updateJobs();
  }

  onChange(value: any) {
    this.someRange = value;
  }

  private updateJobs() {
    this.jobsService.getJobs(this.settings).then(jobs => this.jobs = jobs);
  }
}
