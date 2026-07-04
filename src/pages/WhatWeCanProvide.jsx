import { useState } from 'react';
import { CardList, Metric, SectionHeading, Surface } from '../components/common/Ui.jsx';

const services = [
  {
    id: 'volunteer-team',
    title: 'Volunteer Team',
    description: 'A trained and enthusiastic volunteer team to assist with event operations, registration, guest management, audience engagement, and on-site support.',
  },
  {
    id: 'event-promotion',
    title: 'Event Promotion',
    description: 'Promotion of your event through our official community platforms and network to help increase visibility and participation.',
  },
  {
    id: 'social-media-promotion',
    title: 'Social Media Promotion',
    description: 'Creative promotional content, posters, reels, stories, photography, and digital campaigns to reach a wider audience.',
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach',
    description: 'Direct access to an active community of Korean language learners, Korean culture enthusiasts, students, and young professionals across India.',
  },
  {
    id: 'student-network',
    title: 'Student Network',
    description: 'Connection with students interested in Korean language, higher education, scholarships, cultural exchange, and career opportunities related to Korea.',
  },
  {
    id: 'youth-engagement',
    title: 'Youth Engagement',
    description: 'Interactive activities, volunteer opportunities, leadership programs, and community initiatives designed to encourage active youth participation.',
  },
  {
    id: 'korean-culture-promotion',
    title: 'Korean Culture Promotion',
    description: 'Support in promoting Korean culture through workshops, seminars, cultural events, educational programs, and community activities.',
  },
  {
    id: 'workshop-management',
    title: 'Workshop & Seminar Management',
    description: 'Planning, coordination, registration support, volunteer management, creative support, and smooth execution of workshops and seminars.',
  },
  {
    id: 'creative-design',
    title: 'Creative Design & Content Support',
    description: 'Assistance with posters, presentations, event branding, photography, videography, social media creatives, and promotional materials.',
  },
  {
    id: 'event-coordination',
    title: 'Event Coordination',
    description: 'Support in planning and managing educational, cultural, corporate, and community events from concept to execution.',
  },
];

const collaborationTargets = [
  'Korean and International Organizations',
  'Educational Institutions',
  'Universities & Colleges',
  'Cultural Centers',
  'Event Organizers',
  'Government & Non-Government Organizations',
  'Brands & Companies',
  'Media Partners',
  'Youth Organizations',
];

const strengthItems = [
  { number: '1', text: 'Dedicated Founder & Leadership Team' },
  { number: '3', text: 'Core Team Members' },
  { number: '8', text: 'Main Team Members' },
  { number: '80+', text: 'Active Interns & Volunteers' },
];

const WhatWeCanProvidePage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div
      id="what-we-can-provide"
      className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(241,232,255,0.95),_transparent_42%),linear-gradient(180deg,_#fffdfd_0%,_#f5eeff_54%,_#efe6ff_100%)] pb-16 text-stone-900"
    >
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <Surface className="mx-auto max-w-6xl bg-[linear-gradient(135deg,rgba(46,16,101,0.98),rgba(88,28,135,0.92))] px-6 py-12 text-center text-white sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">What We Can Provide</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight drop-shadow-lg md:text-6xl">
            Modern support
            <span className="block bg-gradient-to-r from-violet-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent">
              For events and partnerships
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-violet-100/90 md:text-lg">
            Comprehensive services to support your events, initiatives, and collaborations with a polished purple-first visual language.
          </p>
        </Surface>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          {services.map((service) => (
            <Surface key={service.id} className="p-6">
              <button
                type="button"
                onClick={() => toggleExpand(service.id)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <div>
                  <h3 className="text-lg font-semibold text-stone-950">{service.title}</h3>
                  <p className={`mt-3 overflow-hidden text-sm leading-relaxed transition-all duration-300 ${expandedCard === service.id ? 'max-h-96 text-stone-600' : 'max-h-20 text-stone-500'}`}>
                    {service.description}
                  </p>
                </div>
                <span className={`text-2xl font-light text-violet-700 transition-opacity ${expandedCard === service.id ? 'opacity-100' : 'opacity-60'}`}>
                  {expandedCard === service.id ? '−' : '+'}
                </span>
              </button>
            </Surface>
          ))}
        </div>

        <section className="mb-16 border-t border-violet-200/70 pt-10" data-aos="fade-up">
          <SectionHeading
            badge="Why Partner With DAEHWA Cafe?"
            title="Partnerships"
            accent="Built on trust and creativity"
            description="Successful collaborations are built on creativity, professionalism, and meaningful community engagement."
            align="center"
          />

          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-stone-600">
            At DAEHWA Cafe, we believe that successful collaborations are built on creativity, professionalism, and meaningful community engagement. By partnering with us, you gain access to a passionate and growing network dedicated to delivering high-quality support and promoting meaningful connections.
          </p>

          <h3 className="mb-8 mt-10 text-center text-2xl font-semibold text-stone-950">We welcome collaborations with</h3>
          <CardList className="sm:grid-cols-2 lg:grid-cols-3" items={collaborationTargets} />
        </section>

        <section className="mb-16 border-t border-violet-200/70 pt-10" data-aos="fade-up">
          <SectionHeading badge="Our Strength" title="A team" accent="Ready to support collaboration" align="center" />
          <div className="mb-8 mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {strengthItems.map((item) => (
              <Metric key={item.text} value={item.number} label={item.text} />
            ))}
          </div>
          <p className="text-center text-base text-stone-600">
            Passion for Korean language, culture, education, and youth development across a growing community in India.
          </p>
        </section>

        <Surface className="p-8 text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-700">Our Promise</p>
          <h3 className="mt-4 text-3xl font-bold text-stone-950">Long-term partnerships with shared purpose</h3>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-stone-600">
            We are committed to building long-term partnerships based on professionalism, creativity, mutual growth, and cultural exchange. Together, we aim to create opportunities that inspire, educate, and connect people through Korea.
          </p>
          <p className="mt-6 text-xl font-semibold italic text-violet-700 md:text-2xl">"Grow Yourself and Help Others Grow."</p>
        </Surface>
      </div>
    </div>
  );
};

export default WhatWeCanProvidePage;
