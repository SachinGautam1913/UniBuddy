import React from 'react';
import { QuickAction } from '../types';
import * as Icons from 'lucide-react';

interface QuickActionsProps {
  actions: QuickAction[];
  onActionClick: (query: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions, onActionClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {actions.map((action) => {
        const IconComponent = Icons[action.icon as keyof typeof Icons] as React.ComponentType<{ size?: number }>;
        
        return (
          <button
            key={action.id}
            onClick={() => onActionClick(action.query)}
            className="flex items-center gap-3 p-2.5 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-200 text-left group"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <IconComponent size={16} className="text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 text-sm truncate">{action.title}</div>
              <div className="text-xs text-gray-500 mt-0.5 truncate">{action.description}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;