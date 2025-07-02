export type Status = 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
export type Priority = 'High' | 'Medium' | 'Low';

export interface SpreadsheetRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: Status;
  submitter: string;
  url: string;
  assigned: string;
  priority: Priority;
  dueDate: string;
  estValue: string;
} 