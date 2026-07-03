import React, { useState } from 'react';

const WhatWeCanProvidePage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Volunteer Team',
      description: 'A trained and enthusiastic volunteer team to assist with event operations, registration, guest management, audience engagement, and on-site support.'
    },
    {
      id: 2,
      title: 'Event Promotion',
      description: 'Promotion of your event through our official community platforms and network to help increase visibility and participation.'
    },
    {
      id: 3,
      title: 'Social Media Promotion',
      description: 'Creative promotional content, posters, reels, stories, photography, and digital campaigns to reach a wider audience.'
    },
    {
      id: 4,
      title: 'Community Outreach',
      description: 'Direct access to an active community of Korean language learners, Korean culture enthusiasts, students, and young professionals across India.'
    },
    {
      id: 5,
      title: 'Student Network',
      description: 'Connection with students interested in Korean language, higher education, scholarships, cultural exchange, and career opportunities related to Korea.'
    },
    {
      id: 6,
      title: 'Youth Engagement',
      description: 'Interactive activities, volunteer opportunities, leadership programs, and community initiatives designed to encourage active youth participation.'
    },
    {
      id: 7,
      title: 'Korean Culture Promotion',
      description: 'Support in promoting Korean culture through workshops, seminars, cultural events, educational programs, and community activities.'
    },
    {
      id: 8,
      title: 'Workshop & Seminar Management',
      description: 'Planning, coordination, registration support, volunteer management, creative support, and smooth execution of workshops and seminars.'
    },
    {
      id: 9,
      title: 'Creative Design & Content Support',
      description: 'Assistance with posters, presentations, event branding, photography, videography, social media creatives, and promotional materials.'
    },
    {
      id: 10,
      title: 'Event Coordination',
      description: 'Support in planning and managing educational, cultural, corporate, and community events from concept to execution.'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div id="what-we-can-provide" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-4 mb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">What We Can Provide</h1>
          <p className="text-lg md:text-xl opacity-95">Comprehensive services to support your events and initiatives</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Services Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => toggleExpand(service.id)}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-indigo-600 ${
                  expandedCard === service.id
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white transform -translate-y-2'
                    : 'hover:-translate-y-2'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <span className={`text-2xl font-bold transition-opacity ${expandedCard === service.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                    {expandedCard === service.id ? '−' : '+'}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                    expandedCard === service.id
                      ? 'max-h-96 mt-4 text-white'
                      : 'max-h-0 text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Section */}
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Partner With DAEHWA Cafe?</h2>
          <p className="text-center text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
            At DAEHWA Cafe, we believe that successful collaborations are built on creativity, professionalism, and meaningful community engagement. By partnering with us, you gain access to a passionate and growing network dedicated to delivering high-quality support and promoting meaningful connections.
          </p>

          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">We Welcome Collaborations With</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Korean and International Organizations',
              'Educational Institutions',
              'Universities & Colleges',
              'Cultural Centers',
              'Event Organizers',
              'Government & Non-Government Organizations',
              'Brands & Companies',
              'Media Partners',
              'Youth Organizations'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5 rounded-lg font-medium text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Strength Section */}
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Strength</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              { number: '1', text: 'Dedicated Founder & Leadership Team' },
              { number: '3', text: 'Core Team Members' },
              { number: '8', text: 'Main Team Members' },
              { number: '80+', text: 'Active Interns & Volunteers' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-indigo-600 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">{item.number}</div>
                <p className="text-gray-800 font-semibold text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 text-base">
            Passion for Korean language, culture, education, and youth development across a growing community in India.
          </p>
        </section>

        {/* Promise Section */}
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Promise</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            We are committed to building long-term partnerships based on professionalism, creativity, mutual growth, and cultural exchange. Together, we aim to create opportunities that inspire, educate, and connect people through Korea.
          </p>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-xl">
            <p className="text-xl md:text-2xl font-bold italic">"Grow Yourself and Help Others Grow."</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeCanProvidePage;
