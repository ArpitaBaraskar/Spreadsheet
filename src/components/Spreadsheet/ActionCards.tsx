import React from 'react';
import { actionCards } from '../../utils/mockData';

interface ActionCardsProps {
  onButtonClick: (action: string) => void;
}

const ActionCards: React.FC<ActionCardsProps> = ({ onButtonClick }) => {
  return (
    <div className="px-4 py-4">
      <div className="flex space-x-3 mb-4">
        {actionCards.map((card) => (
          <button
            key={card.id}
            onClick={() => onButtonClick(`action-card-${card.id}`)}
            className={`${card.bgColor} rounded-lg p-4 flex items-center space-x-3 flex-1 hover:opacity-90 transition-opacity`}
          >
            <div className={`w-8 h-8 ${card.iconBgColor} rounded-full flex items-center justify-center`}>
              <span className="text-white text-sm">{card.icon}</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">{card.title}</div>
              {card.subtitle && (
                <div className="text-xs text-gray-500">{card.subtitle}</div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionCards;