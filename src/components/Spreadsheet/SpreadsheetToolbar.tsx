import React from 'react';
import {
  ChevronDownIcon,
  EyeOffIcon,
  SortIcon,
  FilterIcon,
  CellViewIcon,
  ImportIcon,
  ExportIcon,
  ShareIcon,
} from '../common/Icons';

interface SpreadsheetToolbarProps {
  onHideFields: () => void;
  onSort: () => void;
  onFilter: () => void;
  onCellView: () => void;
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  onNewAction?: () => void;
}

const SpreadsheetToolbar: React.FC<SpreadsheetToolbarProps> = ({
  onHideFields,
  onSort,
  onFilter,
  onCellView,
  onImport,
  onExport,
  onShare,
  onNewAction,
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white border-b border-gray-200 text-sm">
      <div className="flex items-center space-x-2">
        <span className="font-medium text-gray-700 flex items-center">
          Tool bar <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-400" />
        </span>
        <button className="flex items-center px-2 py-1 hover:bg-gray-100 rounded" onClick={onHideFields}>
          <EyeOffIcon className="w-4 h-4 mr-1 text-gray-500" /> Hide fields
        </button>
        <button className="flex items-center px-2 py-1 hover:bg-gray-100 rounded" onClick={onSort}>
          <SortIcon className="w-4 h-4 mr-1 text-gray-500" /> Sort
        </button>
        <button className="flex items-center px-2 py-1 hover:bg-gray-100 rounded" onClick={onFilter}>
          <FilterIcon className="w-4 h-4 mr-1 text-gray-500" /> Filter
        </button>
        <button className="flex items-center px-2 py-1 hover:bg-gray-100 rounded" onClick={onCellView}>
          <CellViewIcon className="w-4 h-4 mr-1 text-gray-500" /> Cell view
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className="flex items-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm" onClick={onImport}>
          <ImportIcon className="w-4 h-4 mr-2" /> Import
        </button>
        <button className="flex items-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm" onClick={onExport}>
          <ExportIcon className="w-4 h-4 mr-2" /> Export
        </button>
        <button className="flex items-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm" onClick={onShare}>
          <ShareIcon className="w-4 h-4 mr-2" /> Share
        </button>
        <button className="flex items-center bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg text-sm ml-1" onClick={onNewAction}>
          <ImportIcon className="w-4 h-4 mr-2" /> New Action
        </button>
      </div>
    </div>
  );
};

export default SpreadsheetToolbar;