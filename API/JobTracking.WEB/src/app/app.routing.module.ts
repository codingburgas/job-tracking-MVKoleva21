import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './components/authentication/login-component';
import { RegisterComponent } from './components/authentication/register-component';
import { JobApplicationComponent } from './components/job-application/job-application-component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'job-applications', component: JobApplicationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
=======
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { AddJobComponent } from './pages/add-job/add-job.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'add-job', component: AddJobComponent },
  { path: '**', redirectTo: 'login' }
>>>>>>> d40806d57a250322488dfda7070bf9e4209c23f4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule {}
>>>>>>> d40806d57a250322488dfda7070bf9e4209c23f4
