import { CardList, SectionHeading, Surface } from '../components/layout/Ui.jsx';

const communityServices = [
  {
    title: 'Volunteer Management',
    items: ['Volunteer recruitment and training', 'Event volunteer coordination', 'Leadership development', 'Team management'],
  },
  {
    title: 'Event Support',
    items: ['On-site event assistance', 'Registration management', 'Guest support', 'Event operations', 'Audience engagement'],
  },
  {
    title: 'Event Coordination',
    items: ['Planning and organizing events', 'Project management', 'Team coordination', 'Venue and activity support'],
  },
  {
    title: 'Cultural Programs',
    items: ['Korean cultural exchange programs', 'Korean food experiences', 'K-culture activities', 'Community cultural events'],
  },
  {
    title: 'Workshops',
    items: [
      'K-Pop Workshop',
      'K-Beauty Workshop',
      'Korean Culture Workshop',
      'AI for Korean Language Workshop',
      'Motivation & Personal Growth Workshop',
      'Leadership & Communication Workshop',
    ],
  },
  {
    title: 'Youth Activities',
    items: ['Internship Programs', 'Volunteer Programs', 'Influencer Competitions', 'Leadership Development', 'Community Networking', 'Personal Growth Activities'],
  },
  {
    title: 'Social Media & Creative Promotion',
    items: ['Creative content support', 'Photography & Videography', 'Poster & Canva design', 'Social media promotion', 'Event branding'],
  },
];

const talkRoomServices = [
  {
    title: 'Korean Language Education',
    items: ['Beginner to Advanced Korean Classes', 'Speaking-focused learning', 'Pronunciation improvement', 'Practical conversation training'],
  },
  {
    title: 'Study Korea Guidance',
    items: ['Study in Korea consultation', 'University guidance', 'Scholarship information', 'Student life guidance'],
  },
  {
    title: 'Student Support',
    items: ['Academic guidance', 'Learning support', 'Career-related consultation', 'International student preparation'],
  },
  {
    title: 'Language Workshops',
    items: ['Korean Speaking Workshops', 'Korean Grammar Workshops', 'Korean Conversation Practice', 'AI for Korean Language Learning', 'TOPIK Preparation Guidance'],
  },
  {
    title: 'Korean Culture Education',
    items: ['Korean traditions', 'Korean etiquette', 'Korean history', 'Korean lifestyle', 'Korean food culture'],
  },
  {
    title: 'Career Guidance Related to Korea',
    items: ['Opportunities related to Korean language', 'Cultural career pathways', 'Education and professional development'],
  },
];

const additionalServices = [
  'Workshop Planning & Management',
  'Seminar Coordination',
  'Community Building',
  'Event Promotion',
  'Social Media Promotion',
  'Community Outreach',
  'Student Network Development',
  'Youth Engagement Programs',
  'Korean Culture Promotion',
  'International Collaboration Support',
];

function Service() {
  return (
    <section id="services" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="Our Services"
          title="Services"
          accent="Built for community and learning"
          description="DAEHWA Cafe operates through two dedicated divisions: DAEHWA Cafe Community and DAEHWA Cafe TalkRoom. Together, they provide educational, cultural, creative, and youth development services while strengthening connections between India and Korea."
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <Surface className="p-7" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">DAEHWA Cafe Community</p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950">Programs that connect and empower people</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Community services focus on volunteerism, cultural exchange, event support, youth growth, and creative
              collaboration.
            </p>

            <div className="mt-6 grid gap-5">
              {communityServices.map((service) => (
                <div key={service.title} className="rounded-[1.4rem] border border-violet-100 bg-violet-50/60 px-5 py-5">
                  <h3 className="text-lg font-bold text-stone-950">{service.title}</h3>
                  <CardList items={service.items} className="mt-4 sm:grid-cols-2" />
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="p-7" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">DAEHWA Cafe TalkRoom</p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950">Practical Korean learning and student guidance</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              TalkRoom services are designed to make Korean language education accessible, confidence-building, and closely
              connected to real opportunities.
            </p>

            <div className="mt-6 grid gap-5">
              {talkRoomServices.map((service) => (
                <div key={service.title} className="rounded-[1.4rem] border border-indigo-100 bg-indigo-50/60 px-5 py-5">
                  <h3 className="text-lg font-bold text-stone-950">{service.title}</h3>
                  <CardList items={service.items} className="mt-4 sm:grid-cols-2" tone="indigo" />
                </div>
              ))}
            </div>
          </Surface>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Surface className="p-7" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Additional Services</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">Support that extends across programs</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              These services support workshops, outreach, member engagement, and collaboration across both divisions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {additionalServices.map((item) => (
                <div key={item} className="rounded-full border border-violet-100 bg-violet-50/70 px-5 py-3 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="p-7" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Our Commitment</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">A service model built around people</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              DAEHWA Cafe is committed to meaningful educational experiences, cultural promotion, youth empowerment, and
              professional collaboration through community-driven initiatives.
            </p>

            <div className="mt-6 border-t border-violet-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Official Motto</p>
              <p className="mt-2 text-lg font-medium leading-8 text-stone-900">“Grow Yourself and Help Others Grow.”</p>
            </div>
          </Surface>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Surface className="p-7">
            <h3 className="text-2xl font-bold text-stone-950">Community Focus</h3>
            <CardList className="mt-5" items={['Volunteer management', 'Event support', 'Cultural programs', 'Youth activities']} />
          </Surface>
          <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(79,70,229,0.9))] text-white">
            <h3 className="text-2xl font-bold text-white">TalkRoom Focus</h3>
            <CardList className="mt-5" items={['Korean classes', 'Speaking practice', 'TOPIK guidance', 'Study in Korea support']} tone="indigo" />
          </Surface>
          <Surface className="p-7">
            <h3 className="text-2xl font-bold text-stone-950">Shared Value</h3>
            <CardList className="mt-5" items={['Learning with purpose', 'Confidence through practice', 'Respect and inclusivity', 'Community growth']} />
          </Surface>
        </section>
      </section>
    </section>
  );
}

export default Service;