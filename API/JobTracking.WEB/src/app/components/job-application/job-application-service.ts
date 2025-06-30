import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from './job-application-model';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = 'https://localhost:5001/api/jobapplication'; // Update with your API URL

  constructor(private http: HttpClient) { }

  // Get all job applications
  getJobApplications(): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(this.apiUrl);
  }

  // Add a new job application
  addJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(this.apiUrl, jobApplication);
  }

  // Update an existing job application
  updateJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.put<JobApplication>(`${this.apiUrl}/${jobApplication.id}`, jobApplication);
  }

  // Delete a job application
  deleteJobApplication(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
