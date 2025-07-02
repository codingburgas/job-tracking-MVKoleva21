export interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  salary?: string;
  appliedDate: Date;
  status: 'pending' | 'interview' | 'accepted' | 'rejected';
  description?: string;
  requirements?: string;
  applicationUrl?: string;
}
