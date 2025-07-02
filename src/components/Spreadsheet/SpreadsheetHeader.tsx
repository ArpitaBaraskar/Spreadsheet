import React from 'react';
import { SheetIcon } from '../common/Icons';

const AVATAR_URL = 'https://randomuser.me/api/portraits/men/32.jpg';

const SpreadsheetHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <SheetIcon className="w-5 h-5 text-green-700 mr-2" />
        <span>Folder 2</span>
        <span className="mx-1">&gt;</span>
        <span className="font-semibold text-gray-900">Spreadsheet 3</span>
      </div>
      <div className="flex items-center space-x-3">
        {/* Search bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 min-w-[240px]">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 20 20" stroke="currentColor">
            <circle cx="9" cy="9" r="7" strokeWidth="1.5" />
            <path d="M16 16l-3-3" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search within sheet"
            className="bg-transparent outline-none border-none text-sm w-full"
          />
        </div>
        {/* Bell */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 20 20" stroke="currentColor">
            <path d="M10 2a4 4 0 00-4 4v2a6 6 0 01-2 4.47V14h12v-1.53A6 6 0 0114 8V6a4 4 0 00-4-4z" />
            <path d="M6 16a2 2 0 004 0" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">2</span>
        </button>
        {/* Avatar, name, email */}
        <div className="flex items-center space-x-2">
          <img src={AVATAR_URL} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex flex-col text-right leading-tight">
            <span className="text-sm font-medium text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">john.doe@email.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SpreadsheetHeader;