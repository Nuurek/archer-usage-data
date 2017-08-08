import { HttpModule } from '@angular/http';
import { JobsService } from './jobs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    HttpModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
