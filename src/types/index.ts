export interface SpreadsheetRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: string;
}

export interface CellSelection {
  row: number;
  col: string;
}

export interface ActionCard {
  id: string;
  title: string;
  icon: string;
  bgColor: string;
  iconBgColor: string;
  subtitle?: string;
}

export type TabType = 'All Orders' | 'Pending' | 'Reviewed' | 'Arrived';