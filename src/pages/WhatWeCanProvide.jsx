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
    <div
      id="what-we-can-provide"
      className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(241,232,255,0.95),_transparent_42%),linear-gradient(180deg,_#fbf7ff_0%,_#f5eeff_54%,_#efe6ff_100%)] pb-16 text-stone-900"
    >
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,rgba(30,18,63,0.96),rgba(88,28,135,0.92))] px-6 py-12 text-center text-white shadow-[0_32px_90px_rgba(30,18,63,0.24)] sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">What We Can Provide</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight drop-shadow-lg md:text-6xl">Modern support for events</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-purple-100/90 md:text-lg">
            Comprehensive services to support your events, initiatives, and collaborations with a polished purple-first visual language.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20" data-aos="fade-up">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => toggleExpand(service.id)}
                className={`cursor-pointer border-t border-purple-200/70 bg-transparent py-4 transition-colors duration-300 ${
                  expandedCard === service.id
                    ? 'text-stone-950'
                    : 'text-stone-700'
                }`}
                data-aos="fade-up"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <span className={`text-2xl font-light transition-opacity ${expandedCard === service.id ? 'opacity-100' : 'opacity-60'}`}>
                    {expandedCard === service.id ? '−' : '+'}
                  </span>
                </div>
                <p
                  className={`overflow-hidden text-sm leading-relaxed transition-all duration-300 ${
                    expandedCard === service.id
                      ? 'mt-3 max-h-96 text-stone-600'
                      : 'max-h-0 text-stone-600'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-16 border-t border-purple-200/70 pt-10" data-aos="fade-up">
          <h2 className="mb-4 text-center text-3xl font-bold text-stone-950">Why Partner With DAEHWA Cafe?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-stone-600">
            At DAEHWA Cafe, we believe that successful collaborations are built on creativity, professionalism, and meaningful community engagement. By partnering with us, you gain access to a passionate and growing network dedicated to delivering high-quality support and promoting meaningful connections.
          </p>

          <h3 className="mb-8 text-center text-2xl font-semibold text-stone-950">We Welcome Collaborations With</h3>
          <div className="grid grid-cols-1 gap-0 overflow-hidden border border-purple-100 bg-white/70 md:grid-cols-2 lg:grid-cols-3">
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
                className="border-b border-r border-purple-100 px-5 py-5 text-sm font-medium text-stone-700 last:border-b-0 md:last:border-b md:[&:nth-child(3n)]:border-r-0"
                data-aos="fade-up"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-purple-200/70 pt-10" data-aos="fade-up">
          <h2 className="mb-12 text-center text-3xl font-bold text-stone-950">Our Strength</h2>
          <div className="mb-8 grid grid-cols-1 gap-0 overflow-hidden border border-purple-100 bg-white/70 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '1', text: 'Dedicated Founder & Leadership Team' },
              { number: '3', text: 'Core Team Members' },
              { number: '8', text: 'Main Team Members' },
              { number: '80+', text: 'Active Interns & Volunteers' }
            ].map((item, index) => (
              <div
                key={index}
                className="border-b border-r border-purple-100 px-5 py-6 text-center last:border-b-0 lg:[&:nth-child(4n)]:border-r-0"
                data-aos="fade-up"
              >
                <div className="text-4xl font-light text-purple-700">{item.number}</div>
                <p className="mt-2 text-sm font-medium text-stone-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base text-stone-600">
            Passion for Korean language, culture, education, and youth development across a growing community in India.
          </p>
        </section>

        <section className="border-t border-purple-200/70 pt-10 text-center" data-aos="fade-up">
          <h2 className="mb-6 text-3xl font-bold text-stone-950">Our Promise</h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-stone-600">
            We are committed to building long-term partnerships based on professionalism, creativity, mutual growth, and cultural exchange. Together, we aim to create opportunities that inspire, educate, and connect people through Korea.
          </p>
          <p className="text-xl font-semibold italic text-purple-700 md:text-2xl">"Grow Yourself and Help Others Grow."</p>
        </section>
      </div>
    </div>
  );
};

export default WhatWeCanProvidePage;
