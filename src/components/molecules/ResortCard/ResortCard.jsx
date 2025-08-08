import React from 'react';
import { Button } from '../../atoms';

const ResortCard = ({ 
  name, 
  image, 
  description, 
  rating, 
  price, 
  originalPrice, 
  features = [], 
  onExplore, 
  onBookNow 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Save ${originalPrice - price}
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          ⭐ {rating}/5
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-green-600">${price}</span>
            <span className="text-gray-500">per night</span>
            {originalPrice && (
              <span className="text-lg text-gray-400 line-through ml-2">${originalPrice}</span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">All-inclusive package</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={onExplore}
            variant="secondary"
            className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-xl transition-all duration-200"
          >
            🔍 Explore
          </Button>
          <Button
            onClick={onBookNow}
            className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            📅 Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResortCard;
