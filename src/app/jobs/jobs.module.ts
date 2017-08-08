import { HttpModule } from '@angular/http';
import { BubbleChartModule } from '@swimlane/ngx-charts/release';
import { JobsService } from './jobs.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    BubbleChartModule,
    HttpModule
  ],
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent
  ],
  providers: [
    JobsService
  ]
})
export class JobsModule { }
