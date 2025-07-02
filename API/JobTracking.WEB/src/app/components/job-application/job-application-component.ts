import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from './job-application-service';
import { JobApplication } from './job-application-model';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application-component.html',
})
export class JobApplicationComponent implements OnInit {
  jobApplications: JobApplication[] = [];

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.loadJobApplications();
  }

  loadJobApplications(): void {
    this.jobApplicationService.getJobApplications().subscribe(data => {
      this.jobApplications = data;
    });
  }

  addJobApplication(jobTitle: string, company: string, status: string): void {
    const newJobApplication: JobApplication = {
        jobTitle, company, status, dateApplied: new Date(), userId: 1,
        id: 0
    }; // Set userId appropriately
    this.jobApplicationService.addJobApplication(newJobApplication).subscribe(() => {
      this.loadJobApplications(); // Refresh the list after adding
    });
  }

  deleteJobApplication(id: number): void {
    this.jobApplicationService.deleteJobApplication(id).subscribe(() => {
      this.loadJobApplications(); // Refresh the list after deletion
    });
  }
}
