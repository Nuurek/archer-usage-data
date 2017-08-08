import { JobsService } from '../jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  jobs: Object[];

  public constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.jobsService.getJobs().then(jobs => this.jobs = jobs);
  }
}
