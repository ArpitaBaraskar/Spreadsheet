import React, { useState, useMemo } from 'react';
import { mockRows } from '../../utils/mockData';
import SpreadsheetTable from './SpreadsheetTable';
import SpreadsheetHeader from './SpreadsheetHeader';
import SpreadsheetToolbar from './SpreadsheetToolbar';
import BottomTabs from './BottomTabs';
import { SpreadsheetRow } from '../../types/spreadsheet';

const allColumns = [
  { key: 'jobRequest', label: 'Job Request', editable: true, width: 'min-w-[220px]' },
  { key: 'submitted', label: 'Submitted', editable: true, width: 'min-w-[120px]' },
  { key: 'status', label: 'Status', editable: false, width: 'min-w-[120px]' },
  { key: 'submitter', label: 'Submitter', editable: true, width: 'min-w-[160px]' },
  { key: 'url', label: 'URL', editable: true, width: 'min-w-[180px]' },
  { key: 'assigned', label: 'Assigned', editable: true, width: 'min-w-[160px]' },
  { key: 'priority', label: 'Priority', editable: true, width: 'min-w-[100px]' },
  { key: 'dueDate', label: 'Due Date', editable: true, width: 'min-w-[120px]' },
  { key: 'estValue', label: 'Est. Value', editable: true, width: 'min-w-[120px]' },
];

type Column = typeof allColumns[number];

type TabFilter = {
  label: string;
  filter: (row: SpreadsheetRow) => boolean;
};

const tabFilters: TabFilter[] = [
  { label: 'All Orders', filter: () => true },
  { label: 'Pending', filter: (row: SpreadsheetRow) => row.status === 'Need to start' },
  { label: 'Reviewed', filter: (row: SpreadsheetRow) => row.status === 'In-process' },
  { label: 'Arrived', filter: (row: SpreadsheetRow) => row.status === 'Complete' },
];

const SpreadsheetApp: React.FC = () => {
  const [rows, setRows] = useState<SpreadsheetRow[]>(mockRows);
  const [visibleCols, setVisibleCols] = useState<string[]>(allColumns.map(col => col.key));
  const [sortCol, setSortCol] = useState<string>('');
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [filterText, setFilterText] = useState<string>('');
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showNewAction, setShowNewAction] = useState(false);

  // Hide fields
  const handleHideFields = () => {
    setVisibleCols(cols =>
      cols.length === allColumns.length ? cols.slice(0, -1) : allColumns.map(col => col.key)
    );
  };

  // Sort
  const handleSort = () => {
    setSortCol('jobRequest');
    setSortAsc(asc => !asc);
  };

  // Filter
  const handleFilter = () => {
    setFilterText(filterText ? '' : '');
  };

  // Cell view
  const handleCellView = () => {
    alert('Cell view modal would open (demo)');
  };

  // Import/Export/Share
  const handleImport = () => alert('Import clicked (demo)');
  const handleExport = () => alert('Export clicked (demo)');
  const handleShare = () => alert('Share clicked (demo)');

  // Tabs
  const handleTabChange = (idx: number) => setActiveTab(idx);

  // New Action
  const handleNewAction = () => {
    setShowNewAction(true);
    setTimeout(() => setShowNewAction(false), 1500);
  };

  // Filtered and sorted rows
  const filteredRows = useMemo(() => {
    let filtered = rows.filter(tabFilters[activeTab].filter);
    if (filterText) {
      filtered = filtered.filter(row =>
        row.jobRequest.toLowerCase().includes(filterText.toLowerCase())
      );
    }
    if (sortCol) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortCol as keyof SpreadsheetRow] || '';
        const bVal = b[sortCol as keyof SpreadsheetRow] || '';
        if (aVal < bVal) return sortAsc ? -1 : 1;
        if (aVal > bVal) return sortAsc ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [rows, activeTab, filterText, sortCol, sortAsc]);

  const columns = allColumns.filter(col => visibleCols.includes(col.key));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SpreadsheetHeader />
      <SpreadsheetToolbar
        onHideFields={handleHideFields}
        onSort={handleSort}
        onFilter={handleFilter}
        onCellView={handleCellView}
        onImport={handleImport}
        onExport={handleExport}
        onShare={handleShare}
        onNewAction={handleNewAction}
      />
      <main className="flex-1 flex flex-col">
        <SpreadsheetTable
          rows={filteredRows}
          columns={columns}
          setRows={setRows}
        />
        {showNewAction && (
          <div className="fixed top-20 right-8 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 transition-all">New Action triggered!</div>
        )}
      </main>
      <BottomTabs activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default SpreadsheetApp;
