import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  getEmptyJob(): Job {
    throw new Error('Method not implemented.');
  }
  getEditingJob() {
    throw new Error('Method not implemented.');
  }
  jobs: Job[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Acme Inc.',
      location: 'New York',
      salary: '$90,000 - $120,000',
      appliedDate: new Date('2024-01-05'),
      status: 'pending',
      description: 'Frontend dev role',
      requirements: 'Angular, JS, CSS'
    }
  ];

  getAll(): Job[] {
    return this.jobs;
  }

  add(job: Job) {
    job.id = Date.now();
    job.appliedDate = new Date();
    job.status = 'pending';
    this.jobs.unshift(job);
  }

  update(job: Job) {
    const idx = this.jobs.findIndex(j => j.id === job.id);
    if (idx > -1) {
      this.jobs[idx] = job;
    }
  }

  delete(id: number) {
    this.jobs = this.jobs.filter(j => j.id !== id);
  }
}
