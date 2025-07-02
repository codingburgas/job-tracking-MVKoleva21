import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { JobService } from '../../../core/services/job.service';
import { Job } from '../../../core/models/job.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: string = '';
  jobs: Job[] = [];

  constructor(
    private authService: AuthService,
    private jobService: JobService
  ) {
    const user = this.authService.user;
    if (user) {
      this.userName = user.name;
    }
    this.jobs = this.jobService.getAll();
  }

  countByStatus(status: string): number {
    return this.jobs.filter(job => job.status === status).length;
  }
}
