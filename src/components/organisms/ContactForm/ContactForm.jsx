import React, { useState } from 'react';
import { Input, Select, TextArea, Button } from '../../atoms';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });

  const destinations = [
    'Cancun & Riviera Maya',
    'Puerto Vallarta',
    'Los Cabos',
    'Playa del Carmen',
    'Cozumel',
    'Other / Not Sure'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you within 24 hours to start planning your perfect Mexican vacation.');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          id="name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        
        <Input
          label="Email Address"
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />

        <Select
          label="Preferred Destination"
          id="destination"
          placeholder="Select a destination"
          options={destinations}
          value={formData.destination}
          onChange={(e) => handleInputChange('destination', e.target.value)}
        />
        
        <TextArea
          label="Tell us about your dream vacation"
          id="message"
          placeholder="Number of travelers, travel dates, interests, budget range, special occasions..."
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
        />
        
        <Button type="submit" className="w-full">
          Start Planning My Trip
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
