import React from 'react';
import { quickActions, categories } from '../data/chatData';
import { QuickAction, ChatCategory } from '../types';
import { ArrowLeft, Search, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';

interface QuickActionsPageProps {
  onBack: () => void;
  onActionClick: (query: string) => void;
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

const QuickActionsPage: React.FC<QuickActionsPageProps> = ({
  onBack,
  onActionClick,
  selectedCategory,
  onCategorySelect
}) => {
  const filteredActions = selectedCategory 
    ? quickActions.filter(action => action.category === selectedCategory)
    : quickActions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Chat</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Quick Actions</h1>
                  <p className="text-sm text-gray-500">Common queries and shortcuts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onCategorySelect(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>🏠</span>
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span>📚</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {selectedCategory 
                ? `${categories.find(c => c.id === selectedCategory)?.name} Actions` 
                : 'All Quick Actions'
              }
            </h2>
            <div className="text-sm text-gray-500">
              {filteredActions.length} action{filteredActions.length !== 1 ? 's' : ''} available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredActions.map((action) => {
              const IconComponent = Icons[action.icon as keyof typeof Icons] as React.ComponentType<{ size?: number }>;
              
              return (
                <button
                  key={action.id}
                  onClick={() => onActionClick(action.query)}
                  className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {action.description}
                      </p>
                      <div className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 font-mono">
                        "{action.query}"
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
              <Search size={24} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Something Else?</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? You can always type your own question in the chat. 
                University Buddy understands natural language and can help with any university-related query.
              </p>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ArrowLeft size={16} />
                Go Back to Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsPage;