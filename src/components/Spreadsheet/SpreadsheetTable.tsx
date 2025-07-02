import React, { useState, useRef, useEffect } from 'react';
import { SpreadsheetRow } from '../../types/spreadsheet';
import StatusBadge from '../UI/StatusBadge';
import { GlobeIcon, ChevronDownIcon, LinkIcon, RefreshIcon, GroupSortIcon, DotsIcon, UserIcon, CalendarIcon, StatusIcon, HandIcon } from '../common/Icons';

interface Column {
  key: string;
  label: string;
  editable: boolean;
  group?: string;
  groupColor?: string;
  icon?: React.ReactNode;
  headerClass?: string;
  width?: string;
}

interface SpreadsheetTableProps {
  rows: SpreadsheetRow[];
  columns: Column[];
  setRows: React.Dispatch<React.SetStateAction<SpreadsheetRow[]>>;
}

type CellCoord = { row: number; col: number } | null;

// Define column groups and columns for pixel-perfect UI
const columnGroups = [
  { label: '', span: 4, color: 'bg-gray-100', text: '', rounded: 'rounded-tl-lg' },
  { label: 'ABC', span: 2, color: 'bg-green-100', text: 'text-green-900', rounded: '' },
  { label: 'Answer a question', span: 2, color: 'bg-purple-100', text: 'text-purple-900', rounded: '' },
  { label: 'Extract', span: 2, color: 'bg-orange-100', text: 'text-orange-900', rounded: 'rounded-tr-lg' },
];

const tableColumns: Column[] = [
  { key: 'jobRequest', label: 'Job Request', editable: true, width: 'min-w-[220px]' },
  { key: 'submitted', label: 'Submitted', editable: true, icon: <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-400" />, width: 'min-w-[120px]' },
  { key: 'status', label: 'Status', editable: false, width: 'min-w-[120px]' },
  { key: 'submitter', label: 'Submitter', editable: true, width: 'min-w-[160px]' },
  { key: 'url', label: 'URL', editable: true, icon: <GlobeIcon className="w-4 h-4 ml-1 text-gray-400" />, width: 'min-w-[180px]' },
  { key: 'assigned', label: 'Assigned', editable: true, width: 'min-w-[160px]' },
  { key: 'priority', label: 'Priority', editable: true, width: 'min-w-[100px]' },
  { key: 'dueDate', label: 'Due Date', editable: true, icon: <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-400" />, width: 'min-w-[120px]' },
  { key: 'estValue', label: 'Est. Value', editable: true, width: 'min-w-[120px]' },
];

const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({ rows: initialRows, columns, setRows }) => {
  const [selectedCell, setSelectedCell] = useState<CellCoord>(null);
  const [editingCell, setEditingCell] = useState<CellCoord>(null);
  const [editValue, setEditValue] = useState('');
  const cellRefs = useRef<(HTMLTableCellElement | null)[][]>([]);

  // Calculate how many empty rows to add
  const minRows = 15;
  const emptyRowsCount = Math.max(0, minRows - initialRows.length);
  const emptyRows = Array.from({ length: emptyRowsCount }, (_, i) => ({ id: `empty-${i}` }));

  // Initialize refs for each cell
  useEffect(() => {
    cellRefs.current = Array(initialRows.length + emptyRowsCount)
      .fill(null)
      .map(() => Array(columns.length).fill(null));
  }, [initialRows.length, emptyRowsCount, columns.length]);

  // Focus the selected cell
  useEffect(() => {
    if (
      selectedCell &&
      !editingCell &&
      cellRefs.current[selectedCell.row] &&
      cellRefs.current[selectedCell.row][selectedCell.col]
    ) {
      cellRefs.current[selectedCell.row][selectedCell.col]?.focus();
    }
  }, [selectedCell, editingCell]);

  const handleCellClick = (rowIdx: number, colIdx: number) => {
    setSelectedCell({ row: rowIdx, col: colIdx });
    setEditingCell(null);
  };

  const handleCellDoubleClick = (rowIdx: number, colIdx: number, value: string) => {
    if (!columns[colIdx].editable) return;
    setEditingCell({ row: rowIdx, col: colIdx });
    setEditValue(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (editingCell) {
      const { row, col } = editingCell;
      const colKey = columns[col].key as keyof typeof initialRows[0];
      setRows(prevRows => {
        const updatedRows = [...prevRows];
        if (updatedRows[row]) {
          updatedRows[row] = { ...updatedRows[row], [colKey]: editValue };
        }
        return updatedRows;
      });
      setEditingCell(null);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    } else if (e.key === 'Escape') {
      setEditingCell(null);
    }
  };

  const handleCellKeyDown = (
    e: React.KeyboardEvent<HTMLTableCellElement>,
    rowIdx: number,
    colIdx: number,
    value: string
  ) => {
    if (editingCell) return;
    let nextRow = rowIdx;
    let nextCol = colIdx;
    if (e.key === 'ArrowDown') {
      nextRow = Math.min(initialRows.length + emptyRowsCount - 1, rowIdx + 1);
    } else if (e.key === 'ArrowUp') {
      nextRow = Math.max(0, rowIdx - 1);
    } else if (e.key === 'ArrowRight') {
      nextCol = Math.min(columns.length - 1, colIdx + 1);
    } else if (e.key === 'ArrowLeft') {
      nextCol = Math.max(0, colIdx - 1);
    } else if (e.key === 'Enter' && columns[colIdx].editable) {
      handleCellDoubleClick(rowIdx, colIdx, value);
      return;
    } else {
      return;
    }
    setSelectedCell({ row: nextRow, col: nextCol });
    e.preventDefault();
  };

  return (
    <div className="overflow-auto w-full">
      <table className="min-w-full border-separate border-spacing-0 text-sm bg-white">
        <thead>
          {/* Column group headers */}
          <tr>
            <th className="sticky left-0 z-20 bg-gray-100 border-b px-4 py-2 border-r border-gray-200 rounded-tl-lg" />
            {columnGroups.map((group, idx) => (
              <th
                key={group.label + idx}
                colSpan={group.span}
                className={`text-xs font-semibold border-b px-4 py-2 ${group.color} ${group.text || ''} text-left align-bottom border-r border-gray-200 ${group.rounded}`}
              >
                {group.label}
              </th>
            ))}
          </tr>
          {/* Column headers */}
          <tr>
            <th className="sticky left-0 z-10 bg-white border-b px-4 py-2 text-left font-semibold text-gray-700 border-r border-gray-200">#</th>
            {columns.map((col, colIdx) => (
              <th
                key={col.key}
                className={`border-b px-4 py-2 text-left font-semibold text-gray-700 whitespace-nowrap border-r border-gray-200 ${col.headerClass || ''} ${col.width || ''}`}
              >
                <span className="flex items-center">
                  {col.label}
                  {col.icon}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {initialRows.map((row, rowIdx) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="sticky left-0 z-10 bg-white border-b px-4 py-2 text-gray-500 font-medium border-r border-gray-200">{rowIdx + 1}</td>
              {columns.map((col, colIdx) => {
                const isSelected = selectedCell && selectedCell.row === rowIdx && selectedCell.col === colIdx;
                const isEditing = editingCell && editingCell.row === rowIdx && editingCell.col === colIdx;
                const cellValue = row[col.key as keyof typeof row] as string || '';
                let cellContent;
                if (col.key === 'status' && row.status) {
                  cellContent = <StatusBadge status={row.status} />;
                } else if (isEditing && col.editable) {
                  cellContent = (
                    <input
                      className="w-full px-1 py-0.5 border border-green-400 rounded focus:outline-none text-sm"
                      value={editValue}
                      autoFocus
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onKeyDown={handleInputKeyDown}
                    />
                  );
                } else {
                  cellContent = cellValue;
                }
                return (
                  <td
                    key={col.key}
                    ref={el => {
                      if (!cellRefs.current[rowIdx]) cellRefs.current[rowIdx] = [];
                      cellRefs.current[rowIdx][colIdx] = el;
                    }}
                    className={`border-b px-4 py-2 max-w-[180px] truncate border-r border-gray-200 ${isSelected ? 'ring-2 ring-green-400 ring-inset' : ''} ${col.key === 'url' ? 'text-blue-700 underline cursor-pointer' : ''}`}
                    tabIndex={0}
                    onClick={() => handleCellClick(rowIdx, colIdx)}
                    onDoubleClick={() => handleCellDoubleClick(rowIdx, colIdx, cellValue)}
                    onKeyDown={e => handleCellKeyDown(e, rowIdx, colIdx, cellValue)}
                    title={cellValue}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
          {/* Render empty rows */}
          {emptyRows.map((_, i) => {
            const rowIdx = initialRows.length + i;
            return (
              <tr key={`empty-row-${i}`} className="hover:bg-gray-50">
                <td className="sticky left-0 z-10 bg-white border-b px-4 py-2 text-gray-300 border-r border-gray-200">{rowIdx + 1}</td>
                {columns.map((col, colIdx) => {
                  const isSelected = selectedCell && selectedCell.row === rowIdx && selectedCell.col === colIdx;
                  const isEditing = editingCell && editingCell.row === rowIdx && editingCell.col === colIdx;
                  let cellContent;
                  if (isEditing && col.editable) {
                    cellContent = (
                      <input
                        className="w-full px-1 py-0.5 border border-green-400 rounded focus:outline-none text-sm"
                        value={editValue}
                        autoFocus
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyDown={handleInputKeyDown}
                      />
                    );
                  } else {
                    cellContent = '';
                  }
                  return (
                    <td
                      key={col.key}
                      ref={el => {
                        if (!cellRefs.current[rowIdx]) cellRefs.current[rowIdx] = [];
                        cellRefs.current[rowIdx][colIdx] = el;
                      }}
                      className={`border-b px-4 py-2 max-w-[180px] truncate border-r border-gray-200 ${isSelected ? 'ring-2 ring-green-400 ring-inset' : ''}`}
                      tabIndex={0}
                      onClick={() => handleCellClick(rowIdx, colIdx)}
                      onDoubleClick={() => handleCellDoubleClick(rowIdx, colIdx, '')}
                      onKeyDown={e => handleCellKeyDown(e, rowIdx, colIdx, '')}
                    >
                      {cellContent}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;