import { SpreadsheetRow, ActionCard } from '../types';

export const mockRows: SpreadsheetRow[] = [
  {
    id: 1,
    jobRequest: 'Launch social media campaign for product',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: '6,200,000',
  },
  {
    id: 2,
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhanpro.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: '3,500,000',
  },
  {
    id: 3,
    jobRequest: 'Finalize user testing feedback for app',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: '4,750,000',
  },
  {
    id: 4,
    jobRequest: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: '5,900,000',
  },
  {
    id: 5,
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    estValue: '2,800,000',
  },
];

export const actionCards: ActionCard[] = [
  {
    id: 'financial-overview',
    title: 'Q3 Financial Overview',
    icon: '📊',
    bgColor: 'bg-gray-100',
    iconBgColor: 'bg-blue-500',
    subtitle: '🔥'
  },
  {
    id: 'abc',
    title: 'ABC',
    icon: '🤖',
    bgColor: 'bg-green-100',
    iconBgColor: 'bg-green-500',
    subtitle: '...'
  },
  {
    id: 'answer-question',
    title: 'Answer a question',
    icon: '❓',
    bgColor: 'bg-purple-100',
    iconBgColor: 'bg-purple-500',
    subtitle: '...'
  },
  {
    id: 'extract',
    title: 'Extract',
    icon: '📤',
    bgColor: 'bg-orange-100',
    iconBgColor: 'bg-orange-500'
  }
];