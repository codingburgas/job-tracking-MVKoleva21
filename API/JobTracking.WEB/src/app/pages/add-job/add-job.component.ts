import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../../core/services/job.service';
import { Job } from '../../../core/models/job.model';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  job!: Job;
  editing = false;

  constructor(private jobService: JobService, private router: Router) {
    const editJob = this.jobService.getEditingJob();
    if (editJob !== undefined && editJob !== null && typeof editJob === 'object') {
      this.job = Object.assign({}, editJob);
      this.editing = true;
    } else {
      this.job = this.jobService.getEmptyJob();
    }
  }

  save() {
    if (this.editing) {
      this.jobService.update(this.job);
    } else {
      this.jobService.add(this.job);
    }
    this.router.navigate(['/jobs']);
  }

  cancel() {
    this.router.navigate(['/jobs']);
  }
}
