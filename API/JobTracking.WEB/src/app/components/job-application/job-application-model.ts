export interface JobApplication {
    id: number;          // Unique identifier for the job application
    userId: number;     // Foreign key to the User who applied
    jobTitle: string;   // Title of the job applied for
    company: string;    // Company offering the job
    status: string;     // Status of the application (e.g., Applied, Interviewed, etc.)
    dateApplied: Date;  // Date when the application was submitted
}
