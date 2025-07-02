import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { Component } from './app';
import { JobApplicationComponent } from './components/job-application/job-application-component';

@NgModule({
  declarations: [
    JobApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add this line
=======
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
>>>>>>> d40806d57a250322488dfda7070bf9e4209c23f4
  ],
  providers: [],
  bootstrap: [Component]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {}
>>>>>>> d40806d57a250322488dfda7070bf9e4209c23f4
