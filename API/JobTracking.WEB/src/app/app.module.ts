import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Component } from './app';
import { JobApplicationComponent } from './components/job-application/job-application-component';

@NgModule({
  declarations: [
    JobApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add this line
  ],
  providers: [],
  bootstrap: [Component]
})
export class AppModule { }
