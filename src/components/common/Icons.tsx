import React from 'react';

export const SheetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="16" height="14" rx="2" fill="currentColor" fillOpacity="0.12" />
    <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="6" width="10" height="2" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="5" y="10" width="6" height="2" rx="1" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const DotsMenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="10" r="1.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

export const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="10" cy="10" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="10" cy="10" rx="3" ry="8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-2 2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 7a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7l2-2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const RefreshIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16v-4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 8a6 6 0 0 1 9.33-4.93" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 12a6 6 0 0 1-9.33 4.93" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const GroupSortIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4v12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DotsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="10" r="1.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 18c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 2v3M13 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const StatusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10V5a2 2 0 1 1 4 0v5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 10V7a2 2 0 1 1 4 0v3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 10v2a7 7 0 0 0 14 0v-2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const EyeOffIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.5 11.5a2 2 0 1 1 3-3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="3" y1="17" x2="17" y2="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const SortIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 6l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="5" width="12" height="2" rx="1" fill="currentColor" />
    <rect x="7" y="9" width="6" height="2" rx="1" fill="currentColor" />
    <rect x="9" y="13" width="2" height="2" rx="1" fill="currentColor" />
  </svg>
);

export const CellViewIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="7" y="7" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="11" y="7" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="7" y="11" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="11" y="11" width="2" height="2" rx="0.5" fill="currentColor" />
  </svg>
);

export const ImportIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="4" y="15" width="12" height="2" rx="1" fill="currentColor" />
  </svg>
);

export const ExportIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17V7m0 0l-3 3m3-3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="4" y="3" width="12" height="2" rx="1" fill="currentColor" />
  </svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.7 8.7l4-1.4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.7 11.3l4 1.4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
