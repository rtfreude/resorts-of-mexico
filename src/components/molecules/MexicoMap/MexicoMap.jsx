import React, { useState } from 'react';

const MexicoMap = ({ onRegionClick, selectedRegion }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = {
    'baja-peninsula': { name: 'Baja Peninsula', color: '#8b5cf6' },
    'western-mexico': { name: 'Western Mexico', color: '#f59e0b' },
    'eastern-mexico': { name: 'Eastern Mexico', color: '#3b82f6' },
    'southern-mexico': { name: 'Southern Mexico', color: '#10b981' }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Mexico's Regions</h2>
        <p className="text-gray-600">Click on a region to discover amazing resorts and destinations</p>
      </div>
      
      {/* Simple region buttons as fallback */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {Object.entries(regions).map(([regionId, region]) => (
          <button
            key={regionId}
            onClick={() => onRegionClick(regionId)}
            onMouseEnter={() => setHoveredRegion(regionId)}
            onMouseLeave={() => setHoveredRegion(null)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedRegion === regionId
                ? 'border-blue-500 bg-blue-50'
                : hoveredRegion === regionId
                ? 'border-gray-400 bg-gray-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            style={{
              backgroundColor: hoveredRegion === regionId ? region.color + '20' : undefined
            }}
          >
            <div className="text-center">
              <div 
                className="w-8 h-8 rounded-full mx-auto mb-2"
                style={{ backgroundColor: region.color }}
              ></div>
              <span className="text-sm font-medium text-gray-700">{region.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">Select a region to explore resorts and destinations</p>
      </div>
    </div>
  );
};

export default MexicoMap;
