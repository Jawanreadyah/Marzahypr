import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionSeparatorProps {
  nextSection: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ nextSection }) => {
  return (
    <div className="relative py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center">
          {/* Dark Line Segment */}
          <div className="w-1/3 h-px bg-gray-700"></div>
          
          {/* Light Line Segment */}
          <div className="flex-1 h-px bg-gray-300"></div>
          
          {/* Button Group */}
          <div className="ml-4 flex items-center space-x-4">
            {/* Pill-shaped Button */}
            <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors duration-200">
              {nextSection}
            </button>
            
            {/* Circular Arrow Button */}
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <ArrowRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeparator;