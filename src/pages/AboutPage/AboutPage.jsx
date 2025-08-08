import React from 'react';

const AboutPage = () => {
  return (
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
};

export default AboutPage;
