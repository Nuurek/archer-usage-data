import { JobsService } from './jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jobs: Object[];

  public constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.jobsService.getJobs().then(jobs => this.jobs = jobs);
  }
}
