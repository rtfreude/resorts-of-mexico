import React from 'react';
import { ContactForm } from '../../components/organisms';

const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Plan Your Mexican Adventure</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
