import React, { useState } from 'react';
import { Button } from '../../components/atoms';
import { MexicoMap } from '../../components/molecules';

const TripWizardPage = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedResort, setSelectedResort] = useState(null);

  // Mexico regions with their cities and resorts
  const mexicoRegions = {
    'eastern-mexico': {
      name: 'Eastern Mexico',
      description: 'Yucatan Peninsula, Cancun, Riviera Maya',
      cities: {
        'cancun': {
          name: 'Cancun',
          description: 'Vibrant nightlife & world-class resorts',
          resorts: [
            { name: 'Moon Palace Cancun', rating: 4.5, price: '$299/night', features: ['All-Inclusive', 'Beach Access', 'Golf Course'] },
            { name: 'Hard Rock Hotel Cancun', rating: 4.4, price: '$349/night', features: ['All-Inclusive', 'Adults Only', 'Live Music'] },
            { name: 'Hyatt Zilara Cancun', rating: 4.6, price: '$399/night', features: ['Adults Only', 'Luxury Spa', 'Fine Dining'] }
          ]
        },
        'playa-del-carmen': {
          name: 'Playa del Carmen',
          description: 'Bohemian beach town with cenotes nearby',
          resorts: [
            { name: 'Rosewood Mayakoba', rating: 4.8, price: '$899/night', features: ['Ultra-Luxury', 'Private Beach', 'Overwater Suites'] },
            { name: 'Grand Velas Riviera Maya', rating: 4.7, price: '$599/night', features: ['All-Inclusive', 'Adults Only', 'Spa Included'] },
            { name: 'Xcaret Hotel', rating: 4.5, price: '$449/night', features: ['All-Fun Inclusive', 'Cultural Activities', 'Eco-Park Access'] }
          ]
        },
        'tulum': {
          name: 'Tulum',
          description: 'Eco-luxury meets ancient ruins',
          resorts: [
            { name: 'Be Tulum', rating: 4.3, price: '$399/night', features: ['Beachfront', 'Eco-Luxury', 'Yoga Classes'] },
            { name: 'Azulik Tulum', rating: 4.2, price: '$599/night', features: ['Adults Only', 'Treehouse Villas', 'No WiFi/TV'] },
            { name: 'Casa Malca', rating: 4.4, price: '$499/night', features: ['Boutique Hotel', 'Art Gallery', 'Private Beach'] }
          ]
        }
      }
    },
    'western-mexico': {
      name: 'Western Mexico',
      description: 'Puerto Vallarta, Guadalajara, Pacific Coast',
      cities: {
        'puerto-vallarta': {
          name: 'Puerto Vallarta',
          description: 'Traditional Mexican charm with modern amenities',
          resorts: [
            { name: 'Grand Velas Vallarta', rating: 4.6, price: '$549/night', features: ['All-Inclusive', 'Adults Only', 'Michelin Dining'] },
            { name: 'Casa Velas', rating: 4.5, price: '$399/night', features: ['Adults Only', 'Golf Course', 'Boutique Style'] },
            { name: 'Secrets Vallarta Bay', rating: 4.3, price: '$299/night', features: ['Adults Only', 'Unlimited Luxury', 'Marina Views'] }
          ]
        },
        'mazatlan': {
          name: 'Mazatlan',
          description: 'Historic port city with golden beaches',
          resorts: [
            { name: 'Pueblo Bonito Mazatlan', rating: 4.3, price: '$199/night', features: ['All-Inclusive', 'Beach Resort', 'Family Friendly'] },
            { name: 'El Cid Castilla Beach Hotel', rating: 4.1, price: '$159/night', features: ['Beachfront', 'Golf Course', 'Marina'] }
          ]
        }
      }
    },
    'baja-peninsula': {
      name: 'Baja Peninsula',
      description: 'Cabo San Lucas, La Paz, Desert meets ocean',
      cities: {
        'cabo-san-lucas': {
          name: 'Cabo San Lucas',
          description: 'Desert meets ocean with world-class fishing',
          resorts: [
            { name: 'One&Only Palmilla', rating: 4.8, price: '$999/night', features: ['Ultra-Luxury', 'Golf Course', 'Private Beach'] },
            { name: 'Grand Solmar Land\'s End', rating: 4.4, price: '$449/night', features: ['All-Inclusive', 'Spa Resort', 'Pacific Views'] },
            { name: 'Breathless Cabo San Lucas', rating: 4.2, price: '$349/night', features: ['Adults Only', 'Unlimited Luxury', 'Rooftop Pool'] }
          ]
        },
        'la-paz': {
          name: 'La Paz',
          description: 'Tranquil capital with stunning sea life',
          resorts: [
            { name: 'CostaBaja Resort & Spa', rating: 4.2, price: '$299/night', features: ['Golf Resort', 'Marina', 'Spa'] },
            { name: 'Hotel Catedral La Paz', rating: 4.0, price: '$149/night', features: ['Boutique Hotel', 'Historic Center', 'Rooftop Terrace'] }
          ]
        }
      }
    },
    'southern-mexico': {
      name: 'Southern Mexico',
      description: 'Oaxaca, Chiapas, and cultural heritage',
      cities: {
        'oaxaca': {
          name: 'Oaxaca',
          description: 'Colonial architecture and indigenous culture',
          resorts: [
            { name: 'Quinta Real Oaxaca', rating: 4.5, price: '$249/night', features: ['Historic Convent', 'Cultural Tours', 'Fine Dining'] },
            { name: 'Casa Oaxaca', rating: 4.3, price: '$199/night', features: ['Boutique Hotel', 'Rooftop Restaurant', 'Art Gallery'] }
          ]
        },
        'huatulco': {
          name: 'Huatulco',
          description: 'Nine pristine bays on the Pacific coast',
          resorts: [
            { name: 'Dreams Huatulco Resort & Spa', rating: 4.2, price: '$299/night', features: ['All-Inclusive', 'Multiple Beaches', 'Spa'] },
            { name: 'Secrets Huatulco Resort & Spa', rating: 4.4, price: '$349/night', features: ['Adults Only', 'Unlimited Luxury', 'Golf Course'] }
          ]
        }
      }
    }
  };

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
    setCurrentStep(2);
  };

  const handleCityClick = (cityId) => {
    setSelectedCity(cityId);
    setCurrentStep(3);
  };

  const handleResortSelect = (resort) => {
    setSelectedResort(resort);
    // Could navigate to booking page or show confirmation
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setSelectedRegion(null);
    setSelectedCity(null);
    setSelectedResort(null);
  };

  const renderStep1 = () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Choose Your Mexican Adventure</h1>
      <p className="text-xl text-gray-600 mb-12">Select a region to explore amazing destinations</p>
      
      {/* Interactive Mexico Map */}
      <div className="mb-8">
        <MexicoMap 
          onRegionClick={handleRegionClick}
          selectedRegion={selectedRegion}
        />
      </div>
      
      {/* Region Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {Object.entries(mexicoRegions).map(([regionId, region]) => (
          <div
            key={regionId}
            onClick={() => handleRegionClick(regionId)}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-2 hover:border-blue-300"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">{region.name}</h3>
            <p className="text-gray-600 mb-4">{region.description}</p>
            <div className="text-sm text-blue-600 font-medium">
              {Object.keys(region.cities).length} destinations available →
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => {
    const region = mexicoRegions[selectedRegion];
    return (
      <div className="text-center">
        <Button
          onClick={resetWizard}
          className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          ← Back to Regions
        </Button>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{region.name}</h1>
        <p className="text-xl text-gray-600 mb-12">{region.description}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(region.cities).map(([cityId, city]) => (
            <div
              key={cityId}
              onClick={() => handleCityClick(cityId)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-2 hover:border-blue-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{city.name}</h3>
              <p className="text-gray-600 mb-4">{city.description}</p>
              <div className="text-sm text-blue-600 font-medium">
                {city.resorts.length} resorts available →
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    const region = mexicoRegions[selectedRegion];
    const city = region.cities[selectedCity];
    
    return (
      <div className="text-center">
        <Button
          onClick={() => setCurrentStep(2)}
          className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          ← Back to Cities
        </Button>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{city.name} Resorts</h1>
        <p className="text-xl text-gray-600 mb-12">{city.description}</p>
        
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {city.resorts.map((resort, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-left border-2 hover:border-blue-300 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{resort.name}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{resort.price}</div>
                  <div className="text-yellow-500">
                    {'★'.repeat(Math.floor(resort.rating))} {resort.rating}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {resort.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Button
                onClick={() => handleResortSelect(resort)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg"
              >
                Select This Resort
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Progress Indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
            1
          </div>
          <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
            2
          </div>
          <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
            3
          </div>
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
      
      {selectedResort && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Resort Selected!</h2>
            <p className="text-gray-600 mb-6">
              You've selected <strong>{selectedResort.name}</strong> in {mexicoRegions[selectedRegion].cities[selectedCity].name}.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => setSelectedResort(null)}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg"
              >
                Keep Looking
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripWizardPage;
