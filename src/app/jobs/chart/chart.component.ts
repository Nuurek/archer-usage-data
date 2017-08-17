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

  fraction = 0.05;
  frameWidth = 0.2;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Memory usage [MB]';
  yAxisLabel = 'Nodes [pc.]';

  public constructor(
    private jobsService: JobsService,
    private ref: ChangeDetectorRef
  ) {
    setInterval(() => {
      this.fraction = (this.fraction + this.frameWidth / 2) % 1;
      this.updateJobs();
    }, 2000);
  }

  ngOnInit() {
    this.updateJobs();
  }
  
  private updateJobs() {
    this.jobsService.getJobsByProject(this.fraction, this.frameWidth).then(jobs => this.jobs = jobs);
  }
}
