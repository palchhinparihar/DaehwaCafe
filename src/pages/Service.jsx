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

function ServiceSection({ title, items, dark = false }) {
  return (
    <article
      className={dark
        ? 'rounded-[2rem] border border-stone-900/10 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)]'
        : 'rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur'}
    >
      <h3 className={dark ? 'text-2xl font-bold text-white' : 'text-2xl font-bold text-stone-950'}>{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={dark
              ? 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-stone-200'
              : 'rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-700'}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Service() {
  return (
    <main id="services" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdf9_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            OUR SERVICES
          </div>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl">
            Services
            <span className="block text-purple-700">Built for Community and Learning</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            DAEHWA Cafe operates through two dedicated divisions: DAEHWA Cafe Community and DAEHWA Cafe.TalkRoom. Together,
            they provide educational, cultural, creative, and youth development services while strengthening connections
            between India and Korea.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">DAEHWA Cafe Community</p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950">Programs that connect and empower people</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Community services focus on volunteerism, cultural exchange, event support, youth growth, and creative
              collaboration.
            </p>

            <div className="mt-6 grid gap-5">
              {communityServices.map((service) => (
                <div key={service.title} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                  <h3 className="text-lg font-bold text-stone-950">{service.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
                    {service.items.map((item) => (
                      <li key={item} className="rounded-2xl bg-white px-4 py-2.5 shadow-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)]" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">DAEHWA Cafe.TalkRoom</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Practical Korean learning and student guidance</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              TalkRoom services are designed to make Korean language education accessible, confidence-building, and closely
              connected to real opportunities.
            </p>

            <div className="mt-6 grid gap-5">
              {talkRoomServices.map((service) => (
                <div key={service.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-200">
                    {service.items.map((item) => (
                      <li key={item} className="rounded-2xl bg-white/5 px-4 py-2.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)]" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Additional Services</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Support that extends across programs</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              These services support workshops, outreach, member engagement, and collaboration across both divisions.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {additionalServices.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Our Commitment</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">A service model built around people</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              DAEHWA Cafe is committed to meaningful educational experiences, cultural promotion, youth empowerment, and
              professional collaboration through community-driven initiatives.
            </p>

            <div className="mt-6 rounded-[1.75rem] bg-stone-950 px-5 py-5 text-stone-50 shadow-[0_18px_50px_rgba(37,24,15,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Official Motto</p>
              <p className="mt-2 text-lg font-medium leading-8 text-white">“Grow Yourself and Help Others Grow.”</p>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <ServiceSection
            title="Community Focus"
            items={['Volunteer management', 'Event support', 'Cultural programs', 'Youth activities']}
          />
          <ServiceSection
            title="TalkRoom Focus"
            dark
            items={['Korean classes', 'Speaking practice', 'TOPIK guidance', 'Study in Korea support']}
          />
          <ServiceSection
            title="Shared Value"
            items={['Learning with purpose', 'Confidence through practice', 'Respect and inclusivity', 'Community growth']}
          />
        </section>
      </section>
    </main>
  );
}

export default Service;