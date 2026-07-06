import { CardList, Metric, SectionHeading, Surface } from '../components/layout/Ui.jsx';

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

function FutureProjects() {
  return (
    <section id="future-projects" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="Future Projects"
          title="Future Projects"
          accent="Step Up and beyond"
          description="DAEHWA Cafe Community and DAEHWA Cafe TalkRoom are expanding to create more opportunities in Korean language education, Korean culture, youth development, and international collaboration."
        />

        <div className="grid gap-6 sm:grid-cols-3" data-aos="fade-up">
          <Metric value="Step Up" label="The official workshop series for practical skill-building" />
          <Metric value="Bridge" label="Connecting India and Korea through meaningful programs" />
          <Metric value="Growth" label="A future built around learning, creativity, and exchange" />
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] text-white" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">STEP UP Workshop Series</p>
            <h3 className="mt-3 text-3xl font-bold text-white">Programs built for practical growth</h3>
            <div className="mt-6 grid gap-4">
              {stepUpWorkshops.map((workshop) => (
                <div key={workshop.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h4 className="text-lg font-bold text-white">{workshop.title}</h4>
                  <CardList className="mt-4 sm:grid-cols-2" tone="indigo" items={workshop.items} />
                </div>
              ))}
            </div>
          </Surface>

          <div className="flex flex-col gap-6">
            <Surface className="p-7" data-aos="fade-up" data-aos-delay="80">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Expanding Vision</p>
              <h3 className="mt-3 text-2xl font-bold text-stone-950">Programs that widen impact</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                These future initiatives are designed to widen the impact of the community, deepen Korean culture engagement, and create practical opportunities for members and partners.
              </p>

              <CardList className="mt-6" items={futureInitiatives} />

              <div className="mt-6 border-t border-violet-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Our Vision</p>
                <p className="mt-2 text-lg font-medium leading-8 text-stone-900">
                  Through Step Up, DAEHWA Cafe Community and DAEHWA Cafe TalkRoom aim to become a bridge between India and Korea.
                </p>
              </div>
            </Surface>

            <Surface className="p-7" data-aos="fade-up" data-aos-delay="120">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Focus Areas</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <CardList items={festivalIdeas} />
                <CardList items={volunteerTracks} />
              </div>
              <CardList className="mt-4" items={growthGoals} />
            </Surface>
          </div>
        </section>

        <Surface className="p-7" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">International Collaborations</p>
          <h3 className="mt-3 text-2xl font-bold text-stone-950">Partners across education, culture, and youth development</h3>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            We plan to strengthen collaborations with organizations across education, culture, events, youth development, and the Korean entertainment ecosystem.
          </p>

          <CardList className="mt-6 sm:grid-cols-2 lg:grid-cols-3" items={collaborationTargets} />
        </Surface>

        <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] text-white" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Our Motto</p>
          <h3 className="mt-3 text-2xl font-bold text-white">A future built around people</h3>
          <p className="mt-4 text-sm leading-7 text-violet-100/80">
            DAEHWA Cafe Community will continue organizing programs that help young people learn, create, lead, exchange cultures, and grow with confidence.
          </p>

          <p className="mt-6 text-lg font-semibold italic text-violet-200">“Grow Yourself and Help Others Grow.”</p>
        </Surface>
      </section>
    </section>
  );
}

export default FutureProjects;