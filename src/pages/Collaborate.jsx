const offerings = [
  {
    title: 'Volunteer Team',
    description:
      'A trained and enthusiastic volunteer team to assist with event operations, registration, guest management, audience engagement, and on-site support.',
  },
  {
    title: 'Event Promotion',
    description:
      'Promotion of your event through our official community platforms and network to help increase visibility and participation.',
  },
  {
    title: 'Social Media Promotion',
    description:
      'Creative promotional content, posters, reels, stories, photography, and digital campaigns to reach a wider audience.',
  },
  {
    title: 'Community Outreach',
    description:
      'Direct access to an active community of Korean language learners, Korean culture enthusiasts, students, and young professionals across India.',
  },
  {
    title: 'Student Network',
    description:
      'Connection with students interested in Korean language, higher education, scholarships, cultural exchange, and career opportunities related to Korea.',
  },
  {
    title: 'Youth Engagement',
    description:
      'Interactive activities, volunteer opportunities, leadership programs, and community initiatives designed to encourage active youth participation.',
  },
  {
    title: 'Korean Culture Promotion',
    description:
      'Support in promoting Korean culture through workshops, seminars, cultural events, educational programs, and community activities.',
  },
  {
    title: 'Workshop & Seminar Management',
    description:
      'Planning, coordination, registration support, volunteer management, creative support, and smooth execution of workshops and seminars.',
  },
  {
    title: 'Creative Design & Content Support',
    description:
      'Assistance with posters, presentations, event branding, photography, videography, social media creatives, and promotional materials.',
  },
  {
    title: 'Event Coordination',
    description:
      'Support in planning and managing educational, cultural, corporate, and community events from concept to execution.',
  },
];

const strengths = [
  'Dedicated Founder & Leadership Team',
  '3 Core Team Members',
  '8 Main Team Members',
  '80+ Active Interns & Volunteers',
  'Growing community across India',
  'Passion for Korean language, culture, education, and youth development',
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

function CollaborateCard({ title, description }) {
  return (
    <article className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5 shadow-sm">
      <h3 className="text-lg font-bold text-stone-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
    </article>
  );
}

function Collaborate() {
  return (
    <main id="collaborate" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdf9_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-4xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            WHY COLLABORATE WITH DAEHWA CAFE?
          </div>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl">
            Collaborate
            <span className="block text-purple-700">With DAEHWA Cafe</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
            At DAEHWA Cafe, we believe that successful collaborations are built on creativity, professionalism, and meaningful
            community engagement. We work closely with organizations, educational institutions, brands, and cultural partners to
            create impactful experiences related to Korea, education, and youth development.
          </p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
            By partnering with DAEHWA Cafe, you gain access to a passionate and growing network dedicated to delivering
            high-quality support and promoting meaningful connections.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">What We Can Provide</p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950">Practical support for events and partnerships</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              We provide flexible support that helps partners deliver smoother events, stronger outreach, and more meaningful
              engagement.
            </p>

            <div className="mt-6 grid gap-4">
              {offerings.map((item) => (
                <CollaborateCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <article className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)]" data-aos="fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Our Strength</p>
              <h2 className="mt-3 text-3xl font-bold text-white">A team ready to support collaboration</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {strengths.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur" data-aos="fade-up" data-aos-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Our Promise</p>
              <h2 className="mt-3 text-2xl font-bold text-stone-950">Long-term partnerships with shared purpose</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                We are committed to building long-term partnerships based on professionalism, creativity, mutual growth, and
                cultural exchange.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Together, we aim to create opportunities that inspire, educate, and connect people through Korea.
              </p>

              <div className="mt-6 rounded-[1.75rem] bg-stone-950 px-5 py-5 text-stone-50 shadow-[0_18px_50px_rgba(37,24,15,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Our Motto</p>
                <p className="mt-2 text-lg font-medium leading-8 text-white">“Grow Yourself and Help Others Grow.”</p>
              </div>
            </article>
          </div>
        </section>

        <section className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)] sm:p-8" data-aos="fade-up">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">We Welcome Collaborations With</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Partners who share our vision</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              We welcome collaborations with organizations and groups that want to support education, culture, youth development,
              and community-led initiatives.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationTargets.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200">
                {item}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Collaborate;