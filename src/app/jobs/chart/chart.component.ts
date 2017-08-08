import { JobsService } from '../jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  jobs: Object[] = [];

  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Memory usage [MB]';
  yAxisLabel = 'Nodes [pc.]';

  public constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.jobsService.getJobsByProject().then(jobs => this.jobs = jobs);
  }
}
