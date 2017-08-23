import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { BubbleChartModule } from '@swimlane/ngx-charts/release';
import { JobsService } from './jobs.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { NouisliderModule } from 'ng2-nouislider';


@NgModule({
  imports: [
    CommonModule,
    BubbleChartModule,
    NouisliderModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule
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
