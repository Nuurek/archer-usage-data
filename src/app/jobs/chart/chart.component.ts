import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsService } from '../jobs.service';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';
import { MaterializeDirective } from 'angular2-materialize';


class ChartSettings {
  periodOptions = [
    { value: 'last_day', name: 'Last Day' },
    { value: 'last_7_days', name: 'Last 7 Days' },
    { value: 'last_30_days', name: 'Last 30 Days' }
  ];
  period: string;

  classOptions = [
    { value: 'project_name' , name: 'Project' },
    { value: 'research_area', name: 'Research Area' },
    { value: 'institution', name: 'Institution' },
    { value: 'application_name', name: 'Application Name' },
    { value: 'language', name: 'Language' },
    { value: 'model', name: 'Model' },
    { value: 'licence', name: 'Licence' }
  ]
  dataClass: string;

  axisOptions = [
    { value: 'nodes' , name: 'Nodes [pc.]' },
    { value: 'memory' , name: 'Memory [MB]' },
    { value: 'energy' , name: 'Energy [Wh]' },
    { value: 'runtime' , name: 'Runtime [s]' },
    { value: 'queue_time' , name: 'Queue time [s]' }
  ];
  xAxis: string;
  yAxis: string;
  bubbleSize: string;
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

  settings = new ChartSettings();
  chartForm: FormGroup;

  public constructor(
    private jobsService: JobsService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): any {
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
