import React from 'react';
import { ChatCategory } from '../types';
import * as Icons from 'lucide-react';

interface CategoryFilterProps {
  categories: ChatCategory[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === null
              ? 'bg-blue-500 text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ size?: number }>;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <IconComponent size={16} />
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;