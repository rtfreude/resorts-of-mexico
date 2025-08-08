import React from 'react';
import { Navigation, Footer } from './components/organisms';
import { HomePage, AboutPage, ContactPage, CancunPage, TripWizardPage } from './pages';
import { useNavigation } from './hooks';

const App = () => {
  const { currentPage, isMenuOpen, navigateTo, toggleMenu } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'cancun':
        return <CancunPage onNavigate={navigateTo} />;
      case 'trip-wizard':
        return <TripWizardPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Navigation 
        currentPage={currentPage}
        onNavigate={navigateTo}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
      />
      
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
