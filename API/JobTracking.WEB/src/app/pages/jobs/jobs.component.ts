import { Component } from '@angular/core';
import { JobService } from '../../../core/services/job.service';
import { Job } from '../../../core/models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs: Job[] = [];
  searchTerm = '';
  filterStatus = '';

  constructor(private jobService: JobService, private router: Router) {
    this.jobs = this.jobService.getAll();
  }

  filteredJobs(): Job[] {
    return this.jobs
      .filter(job =>
        !this.searchTerm ||
        job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .filter(job => !this.filterStatus || job.status === this.filterStatus);
  }

  updateStatus(job: Job) {
    this.jobService.update(job);
  }

  edit(job: Job) {
    this.jobService.setEditingJob(job);
    this.router.navigate(['/add-job']);
  }

  delete(jobId: number) {
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.delete(jobId);
      this.jobs = this.jobService.getAll();
    }
  }
}
