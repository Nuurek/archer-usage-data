import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsService } from '../jobs.service';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';


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

  public constructor(
    private jobsService: JobsService,
  ) {
    setInterval(() => {
      // console.log(this.someRange);
      // this.updateJobs();
    }, 2000);
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
