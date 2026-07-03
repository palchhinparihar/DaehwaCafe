const stepUpWorkshops = [
  {
    title: 'Step Up: Korean Language Workshop',
    items: [
      'Korean speaking-focused learning',
      'Practical conversation skills',
      'Pronunciation improvement',
      'Beginner to advanced sessions',
    ],
  },
  {
    title: 'Step Up: Study Korea Seminar',
    items: ['Study in Korea guidance', 'Korean university information', 'Scholarship guidance', 'Student life in Korea', 'Career pathways'],
  },
  {
    title: 'Step Up: K-pop Workshop',
    items: [
      'Understanding the K-pop industry',
      'Idol training system',
      'Performance skills',
      'Dance and stage presentation',
      'Career opportunities',
    ],
  },
  {
    title: 'Step Up: K-Beauty Workshop',
    items: ['Korean skincare', 'K-beauty trends', 'Beauty routines', 'Makeup techniques', 'Korean beauty products'],
  },
  {
    title: 'Step Up: AI for Korean Language',
    items: ['Korean language learning', 'Vocabulary building', 'Speaking practice', 'Writing improvement', 'Study planning', 'Productivity tools'],
  },
  {
    title: 'Step Up: Korean Culture Workshop',
    items: [
      'Korean traditions',
      'Korean etiquette',
      'Korean festivals',
      'Korean lifestyle',
      'Korean food culture',
      'Modern Korean society',
    ],
  },
];

const futureInitiatives = [
  'Korean Cultural Festivals',
  'Volunteer Programs',
  'International Collaborations',
  'Creative & Youth Development',
  'Personal Growth & Mental Well-being',
];

const festivalIdeas = [
  'Korean Food Experience',
  'K-pop Activities',
  'K-drama Discussions',
  'Korean Games',
  'Cultural Performances',
  'Cultural Exchange Programs',
];

const volunteerTracks = ['Event Management', 'Workshop Support', 'Community Outreach', 'Leadership Development', 'Cultural Event Operations'];

const collaborationTargets = [
  'Korean educational organizations',
  'Universities and colleges',
  'Cultural institutions',
  'Community organizations',
  'Brands and event organizers',
  'Korean entertainment industry',
  'International youth organizations',
];

const growthGoals = [
  'Build confidence',
  'Overcome insecurity',
  'Improve communication skills',
  'Develop leadership',
  'Strengthen teamwork',
  'Grow personally and professionally',
];

function SectionCard({ title, children, dark = false }) {
  return (
    <article className="border-t border-purple-200/70 pt-6">
      <h3 className="text-2xl font-bold text-stone-950">{title}</h3>
      <div className="mt-5">{children}</div>
    </article>
  );
}

function FutureProjects() {
  return (
    <main id="future-projects" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdf9_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-4xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            FUTURE PROJECTS
          </div>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl">
            Future Projects
            <span className="block text-purple-700">Step Up and Beyond</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
            DAEHWA Cafe Community and DAEHWA Cafe.TalkRoom are continuously expanding their activities to provide more opportunities
            in Korean language education, Korean culture, youth development, and international collaboration.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
            Under our official workshop series, “Step Up”, we aim to help participants develop practical skills while exploring Korea
            from different perspectives.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionCard title="STEP UP Workshop Series" dark>
            <div className="divide-y divide-purple-100">
              {stepUpWorkshops.map((workshop) => (
                <article key={workshop.title} className="py-5">
                  <h4 className="text-lg font-bold text-stone-950">{workshop.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-600">
                    {workshop.items.map((item) => (
                      <li key={item} className="border-b border-stone-200 pb-2 last:border-b-0 last:pb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Expanding Vision">
            <p className="text-sm leading-7 text-stone-600">
              These future initiatives are designed to widen the impact of the community, deepen Korean culture engagement, and create
              practical opportunities for members and partners.
            </p>

            <div className="mt-6 divide-y divide-purple-100 overflow-hidden border border-purple-100 bg-white/70">
              {futureInitiatives.map((item) => (
                <div key={item} className="px-5 py-4 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-purple-200/70 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Our Vision</p>
              <p className="mt-2 text-lg font-medium leading-8 text-stone-900">
                Through Step Up, DAEHWA Cafe Community and DAEHWA Cafe.TalkRoom aim to become a bridge between India and Korea.
              </p>
            </div>
          </SectionCard>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <SectionCard title="Korean Cultural Festivals">
            <div className="divide-y divide-purple-100 overflow-hidden border border-purple-100 bg-white/70">
              {festivalIdeas.map((item) => (
                <div key={item} className="px-5 py-4 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Volunteer Programs">
            <div className="divide-y divide-purple-100 overflow-hidden border border-purple-100 bg-white/70">
              {volunteerTracks.map((item) => (
                <div key={item} className="px-5 py-4 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Personal Growth & Well-being">
            <div className="divide-y divide-purple-100 overflow-hidden border border-purple-100 bg-white/70">
              {growthGoals.map((item) => (
                <div key={item} className="px-5 py-4 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionCard title="International Collaborations" dark>
            <p className="text-sm leading-7 text-stone-600">
              We plan to strengthen collaborations with organizations across education, culture, events, youth development, and the
              Korean entertainment ecosystem.
            </p>

            <div className="mt-6 grid gap-0 overflow-hidden border border-purple-100 bg-white/70 sm:grid-cols-2">
              {collaborationTargets.map((item) => (
                <div key={item} className="border-b border-r border-purple-100 px-5 py-4 text-sm font-medium text-stone-700 last:border-b-0 sm:[&:nth-child(2n)]:border-r-0">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Our Motto">
            <p className="text-sm leading-7 text-stone-600">
              DAEHWA Cafe Community will continue organizing programs that help young people learn, create, lead, exchange cultures,
              and grow with confidence.
            </p>

            <p className="mt-6 text-lg font-semibold italic text-purple-700">“Grow Yourself and Help Others Grow.”</p>
          </SectionCard>
        </section>
      </section>
    </main>
  );
}

export default FutureProjects;