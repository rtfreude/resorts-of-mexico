import React, { useState } from 'react';
import { Button } from '../../components/atoms';
import { ResortCard } from '../../components/molecules';

const CancunPage = ({ onNavigate }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceFilter, setPriceFilter] = useState('all');

  const resorts = [
    {
      id: 1,
      name: 'Moon Palace Cancun',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Luxury all-inclusive resort with pristine beaches, world-class golf courses, and exceptional dining. Perfect for families and couples seeking the ultimate Cancun experience.',
      rating: 4.8,
      price: 299,
      originalPrice: 499,
      features: ['All-Inclusive', 'Beach Access', 'Golf Course', 'Spa', 'Kids Club', 'Multiple Pools']
    },
    {
      id: 2,
      name: 'The Ritz-Carlton Cancun',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Sophisticated beachfront luxury with impeccable service, fine dining, and stunning ocean views. An adults-focused paradise in the heart of Cancun.',
      rating: 4.9,
      price: 450,
      originalPrice: 650,
      features: ['Luxury Service', 'Fine Dining', 'Spa', 'Beach Club', 'Concierge', 'Ocean View']
    },
    {
      id: 3,
      name: 'Hyatt Zilara Cancun',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Adults-only all-inclusive resort featuring swim-up suites, gourmet restaurants, and a tranquil spa. Perfect for romantic getaways and peaceful retreats.',
      rating: 4.7,
      price: 380,
      originalPrice: 550,
      features: ['Adults Only', 'Swim-up Suites', 'Gourmet Dining', 'Spa', 'Infinity Pool', 'Butler Service']
    },
    {
      id: 4,
      name: 'Hotel Xcaret Mexico',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Eco-integrated resort offering unique experiences with nature parks, cenotes, and cultural shows. Adventure and luxury combined in perfect harmony.',
      rating: 4.6,
      price: 320,
      originalPrice: 480,
      features: ['Eco-Luxury', 'Nature Parks', 'Cultural Shows', 'Cenotes', 'Adventure Tours', 'Sustainable']
    },
    {
      id: 5,
      name: 'Secrets The Vine Cancun',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Modern adults-only resort with rooftop pools, wine-focused dining, and contemporary suites. Sophisticated atmosphere with stunning city and ocean views.',
      rating: 4.5,
      price: 275,
      originalPrice: 425,
      features: ['Adults Only', 'Rooftop Pool', 'Wine Bar', 'Modern Suites', 'City Views', 'Nightlife']
    },
    {
      id: 6,
      name: 'Grand Fiesta Americana Coral Beach',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Iconic beachfront resort with exceptional service, multiple dining options, and prime location. A classic choice for discerning travelers.',
      rating: 4.4,
      price: 350,
      originalPrice: 500,
      features: ['Beachfront', 'Multiple Restaurants', 'Spa', 'Prime Location', 'Family Friendly', 'Pool Complex']
    }
  ];

  const handleExplore = (resortId) => {
    alert(`Exploring resort ${resortId}! This would show detailed resort information, photos, and amenities.`);
  };

  const handleBookNow = (resortId) => {
    alert(`Booking resort ${resortId}! This would redirect to the booking system with selected dates and preferences.`);
  };

  const filteredResorts = resorts.filter(resort => {
    if (priceFilter === 'all') return true;
    if (priceFilter === 'budget') return resort.price < 300;
    if (priceFilter === 'mid') return resort.price >= 300 && resort.price < 400;
    if (priceFilter === 'luxury') return resort.price >= 400;
    return true;
  });

  const sortedResorts = [...filteredResorts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured - keep original order
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-teal-500 to-green-400 text-white py-16 px-6 rounded-3xl mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            🏖️ Cancun Resorts
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Discover paradise with our handpicked selection of luxury resorts in Cancun. 
            <strong className="text-yellow-300"> Save up to 40% on your dream vacation!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('home')}
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white font-bold px-6 py-3 rounded-full"
            >
              ← Back to Home
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              💬 Get Expert Help
            </Button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select 
                value={priceFilter} 
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under $300</option>
                <option value="mid">$300 - $400</option>
                <option value="luxury">$400+</option>
              </select>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{sortedResorts.length} Resorts Found</p>
            <p className="text-sm text-gray-600">Best deals available now</p>
          </div>
        </div>
      </div>

      {/* Resorts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {sortedResorts.map((resort) => (
          <ResortCard
            key={resort.id}
            name={resort.name}
            image={resort.image}
            description={resort.description}
            rating={resort.rating}
            price={resort.price}
            originalPrice={resort.originalPrice}
            features={resort.features}
            onExplore={() => handleExplore(resort.id)}
            onBookNow={() => handleBookNow(resort.id)}
          />
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center py-16 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white rounded-3xl">
        <h2 className="text-4xl font-bold mb-6">Ready to Book Your Cancun Adventure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Don't miss out on these exclusive deals! Our travel experts are standing by to help you plan the perfect getaway.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            className="bg-white text-pink-600 hover:bg-gray-100 font-bold text-xl px-10 py-5 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🚀 Book Your Trip Now
          </Button>
          <Button 
            onClick={() => onNavigate('contact')}
            variant="secondary"
            className="border-2 border-white text-white hover:bg-white/20 font-bold text-xl px-10 py-5 rounded-full backdrop-blur-sm"
          >
            💬 Speak to an Expert
          </Button>
        </div>
        
        <div className="mt-6 text-sm opacity-75">
          🕒 Limited time offers • 💳 Secure booking • 📞 24/7 support
        </div>
      </div>
    </div>
  );
};

export default CancunPage;
