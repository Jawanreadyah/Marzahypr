import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Careers = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Departments');

  const departments = [
    'All Departments',
    'Management', 
    'Fresh Foods',
    'Customer Service',
    'Bakery',
    'Operations',
    'Deli',
    'Security',
    'Pharmacy'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-anton text-5xl font-bold text-black mb-6">
            Careers
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-2xl">
            Join our team at Marza Hypermarket and be part of Qatar's premier shopping experience.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-12">
          <div className="relative inline-block">
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:border-gray-500"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Job Sections */}
        <div className="space-y-0">
          {departments.slice(1).map((department, index) => (
            <div key={department}>
              {(selectedFilter === 'All Departments' || selectedFilter === department) && (
                <>
                  <div className="py-8">
                    <h3 className="font-inter text-xl font-semibold text-gray-900 mb-4">
                      {department}
                    </h3>
                    <p className="font-inter text-gray-500">
                      No jobs available for now
                    </p>
                  </div>
                  {index < departments.slice(1).length - 1 && (
                    <div className="border-t border-gray-200"></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="font-inter text-gray-600">
            Interested in future opportunities? Send your CV to{' '}
            <a href="mailto:careers@marzahypermarket.qa" className="text-black hover:text-yellow-600 transition-colors">
              careers@marzahypermarket.qa
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;