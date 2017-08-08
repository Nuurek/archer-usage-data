import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsModule } from './jobs/jobs.module';
import { ChartComponent } from './jobs/chart/chart.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JobsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
