import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { Component } from './app';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { AddJobComponent } from './pages/add-job/add-job.component';

@NgModule({
  declarations: [
    Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    JobsComponent,
    AddJobComponent
  ],
  imports: [
    BrowserModule,  // <-- add this
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [Component]
})
export class AppModule {}
