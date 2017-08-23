import { distinct } from 'rxjs/operator/distinct';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsService } from '../jobs.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';
import { MaterializeDirective } from 'angular2-materialize';

import 'rxjs/add/operator/distinctUntilChanged';


class ChartOptions {
  periodOptions = [
    { value: 'last_day', name: 'Last Day' },
    { value: 'last_7_days', name: 'Last 7 Days' },
    { value: 'last_30_days', name: 'Last 30 Days' }
  ];

  classOptions = [
    { value: 'project_name' , name: 'Project' },
    { value: 'research_area', name: 'Research Area' },
    { value: 'institution', name: 'Institution' },
    { value: 'application_name', name: 'Application Name' },
    { value: 'language', name: 'Language' },
    { value: 'model', name: 'Model' },
    { value: 'licence', name: 'Licence' }
  ]

  axisOptions = [
    { value: 'nodes' , name: 'Nodes [pc.]' },
    { value: 'memory' , name: 'Memory [MB]' },
    { value: 'energy' , name: 'Energy [Wh]' },
    { value: 'runtime' , name: 'Runtime [s]' },
    { value: 'queue_time' , name: 'Queue time [s]' }
  ];
}

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

  chartOptions = new ChartOptions();
  settings: Object;
  chartForm: FormGroup;

  public constructor(
    private jobsService: JobsService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): any {
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
  }

  private onChartChanges(data) {
    this.patchDistinctFields(data);
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

    this.chartForm.patchValue(data, {emitEvent: false});
    // update settings so that it can be compared after next change
    this.settings = this.chartForm.getRawValue();
  }

  ngOnInit() {
    this.updateJobs();
  }

  onChange(value: any) {
    console.log('Value changed to', value);
    this.someRange = value;
  }

  private updateJobs() {
    this.jobsService.getJobsByProject(this.fraction, this.frameWidth).then(jobs => this.jobs = jobs);
  }
}
