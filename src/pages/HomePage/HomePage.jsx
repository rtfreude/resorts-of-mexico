import React, { useState } from 'react';
import { Button } from '../../components/atoms';
import { FeatureCard, MexicoMap } from '../../components/molecules';

const HomePage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    alert(`Thanks for subscribing with ${email}! We'll send you amazing trip ideas soon.`);
    setEmail('');
  };

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
    // Navigate to specific region page or show region details
    if (regionId === 'eastern-mexico') {
      onNavigate('cancun');
    }
    // Add more navigation logic for other regions as needed
  };

  const features = [
    {
      title: '🏖️ Luxury Beach Resorts',
      description: 'All-inclusive paradise with pristine beaches, world-class spas, and gourmet dining experiences.',
      colorScheme: 'blue'
    },
    {
      title: '🌊 Adventure & Activities',
      description: 'Snorkeling, zip-lining, cultural tours, and water sports - create memories that last forever.',
      colorScheme: 'green'
    },
    {
      title: '🌴 Exclusive Destinations',
      description: 'From Cancun to Tulum, discover Mexico\'s hidden gems and most sought-after locations.',
      colorScheme: 'purple'
    }
  ];

  const destinations = [
    { name: 'Cancun', highlight: 'Vibrant nightlife & pristine beaches', image: '/images/luxury-resort.jpg' },
    { name: 'Riviera Maya', highlight: 'Ancient ruins & cenotes', image: '/images/cenote-swimming.jpg' },
    { name: 'Tulum', highlight: 'Bohemian luxury & eco-resorts', image: '/images/tulum-ruins.jpg' },
    { name: 'Playa del Carmen', highlight: 'Shopping & beach clubs', image: '/images/adventure-activities.jpg' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-teal-500 to-green-400 text-white py-20 px-6 rounded-3xl mb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-beach.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Your Dream Mexican 
            <span className="block text-yellow-300">Paradise Awaits!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Discover all-inclusive luxury resorts, pristine beaches, and unforgettable experiences. 
            <strong className="text-yellow-300"> Book now and save up to 40%!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🏖️ Book Now - Save 40%
            </Button>
            <Button 
              onClick={() => onNavigate('trip-wizard')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🧭 Build Your Trip
            </Button>
            <Button 
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full"
              onClick={() => onNavigate('about')}
            >
              🌴 Explore Destinations
            </Button>
          </div>
          
          <div className="text-sm opacity-75">
            ⭐ Trusted by 50,000+ happy travelers | 🛡️ Best Price Guarantee
          </div>
        </div>
      </div>

      {/* Quick Destinations Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-16 border border-gray-100">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">🔥 Trending Destinations</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="relative h-32 rounded-xl overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => dest.name === 'Cancun' ? onNavigate('cancun') : null}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${dest.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                <div className="font-bold text-lg group-hover:text-yellow-300 transition-colors">{dest.name}</div>
                <div className="text-sm opacity-90">{dest.highlight}</div>
                {dest.name === 'Cancun' && (
                  <div className="text-xs text-yellow-300 mt-1 font-medium">Click to explore resorts →</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Why Choose Mexican Resorts?</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Everything you need for the perfect getaway</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              colorScheme={feature.colorScheme}
            />
          ))}
        </div>
      </div>

      {/* Experience Gallery Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Experience the Magic of Mexico</h2>
        <p className="text-xl text-center text-gray-600 mb-12">From pristine beaches to ancient wonders</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: 'url(/images/luxury-resort.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Luxury Resorts</h3>
              <p className="text-sm opacity-90">World-class amenities & service</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: 'url(/images/cenote-swimming.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Natural Wonders</h3>
              <p className="text-sm opacity-90">Swim in crystal-clear cenotes</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: 'url(/images/tulum-ruins.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Ancient Culture</h3>
              <p className="text-sm opacity-90">Explore Mayan ruins & history</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mexico Map Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Explore Mexico by Region</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Click on any region to discover amazing destinations and resorts</p>
        
        <MexicoMap 
          onRegionClick={handleRegionClick}
          selectedRegion={selectedRegion}
        />
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white rounded-3xl p-12 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">🌟 Join Our Travel Community!</h2>
        <p className="text-xl mb-8 opacity-90">
          Get exclusive deals, insider tips, and personalized trip ideas delivered to your inbox
        </p>
        
        <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for trip ideas..."
              className="flex-1 px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full whitespace-nowrap"
            >
              Subscribe for Trip Ideas ✈️
            </Button>
          </div>
        </form>
        
        <div className="text-sm mt-4 opacity-75">
          📧 Weekly inspiration • 🎁 Exclusive deals • 🚫 No spam, unsubscribe anytime
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="text-center py-16 bg-gray-50 rounded-3xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Start Planning Your Trip?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't wait - the best deals and dates fill up fast. Your Mexican paradise is just one click away!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🚀 Start Planning Your Trip
          </Button>
          <Button 
            variant="secondary"
            className="border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold text-xl px-10 py-5 rounded-full"
            onClick={() => onNavigate('contact')}
          >
            💬 Get Expert Help
          </Button>
        </div>
        
        <div className="mt-6 text-gray-500">
          🕒 Limited time offer • 💳 Secure booking • 📞 24/7 support
        </div>
      </div>
    </div>
  );
};

export default HomePage;
