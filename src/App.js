import React, { useState } from 'react';
import { Menu, X, Home, Info, Mail, Github } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ href, icon: Icon, children, page }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPage === page 
          ? 'bg-indigo-100 text-indigo-700' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );

  const HomePage = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Resorts of Mexico
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover paradise in Mexico's most beautiful resort destinations. Your dream vacation awaits!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage('about')}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 py-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Luxury Accommodations</h3>
          <p className="text-gray-600">Experience world-class resorts with premium amenities and stunning ocean views.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-green-600 rounded"></div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Amazing Activities</h3>
          <p className="text-gray-600">From water sports to cultural tours, create unforgettable memories.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-purple-600 rounded"></div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Perfect Locations</h3>
          <p className="text-gray-600">Discover Mexico's most beautiful beaches and vibrant destinations.</p>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Resorts of Mexico</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          At Resorts of Mexico, we specialize in curating exceptional vacation experiences across Mexico's 
          most stunning destinations. From the pristine beaches of the Riviera Maya to the vibrant culture 
          of Puerto Vallarta, we connect travelers with their perfect Mexican getaway.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us:</h2>
        <ul className="space-y-2 text-gray-600 mb-6">
          <li>• Hand-picked luxury resorts and boutique hotels</li>
          <li>• Personalized vacation planning services</li>
          <li>• Local expertise and insider knowledge</li>
          <li>• 24/7 customer support throughout your stay</li>
          <li>• Best price guarantee on all bookings</li>
        </ul>
        <p className="text-gray-600">
          Whether you're planning a romantic getaway, family vacation, or group retreat, our team of Mexico 
          travel specialists will help you create the perfect itinerary tailored to your preferences and budget.
        </p>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Plan Your Mexican Adventure</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Destination
            </label>
            <select
              id="destination"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Select a destination</option>
              <option>Cancun & Riviera Maya</option>
              <option>Puerto Vallarta</option>
              <option>Los Cabos</option>
              <option>Playa del Carmen</option>
              <option>Cozumel</option>
              <option>Other / Not Sure</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tell us about your dream vacation
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Number of travelers, travel dates, interests, budget range, special occasions..."
            ></textarea>
          </div>
          
          <button
            type="button"
            onClick={() => alert('Thank you for your interest! We will contact you within 24 hours to start planning your perfect Mexican vacation.')}
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition-colors"
          >
            Start Planning My Trip
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-indigo-600">Resorts of Mexico</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#" icon={Home} page="home">Home</NavLink>
              <NavLink href="#" icon={Info} page="about">About</NavLink>
              <NavLink href="#" icon={Mail} page="contact">Contact</NavLink>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <NavLink href="#" icon={Home} page="home">Home</NavLink>
              <NavLink href="#" icon={Info} page="about">About</NavLink>
              <NavLink href="#" icon={Mail} page="contact">Contact</NavLink>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8">
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Resorts of Mexico. Your gateway to paradise.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
