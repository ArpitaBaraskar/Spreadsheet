import React from 'react';

const tabs = [
  'All Orders',
  'Pending',
  'Reviewed',
  'Arrived',
];

interface BottomTabsProps {
  activeTab: number;
  onTabChange: (idx: number) => void;
}

const BottomTabs: React.FC<BottomTabsProps> = ({ activeTab, onTabChange }) => {
  const handleTabClick = (idx: number) => {
    onTabChange(idx);
    console.log(`Tab changed: ${tabs[idx]}`);
  };

  const handleAddTab = () => {
    console.log('Add new tab');
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex items-center px-6" style={{ zIndex: 20 }}>
      <ul className="flex space-x-6 py-2">
        {tabs.map((tab, idx) => (
          <li key={tab}>
            <button
              className={`px-1 pb-1 text-base font-medium border-b-2 transition-colors duration-150 ${
                activeTab === idx
                  ? 'border-green-200 text-green-900' // active
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => handleTabClick(idx)}
            >
              {tab}
            </button>
          </li>
        ))}
        <li>
          <button
            className="px-2 pb-1 text-2xl font-light text-gray-400 hover:text-gray-700 border-b-2 border-transparent"
            onClick={handleAddTab}
            aria-label="Add new tab"
          >
            +
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BottomTabs;
