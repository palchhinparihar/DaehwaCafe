import { CardList, Metric, SectionHeading, Surface } from '../components/layout/Ui.jsx';

const leadershipRoles = [
  {
    title: 'Founder & Director',
    name: 'Sandeep Singh',
    subtitle: 'Founder & Director – DAEHWA Cafe',
    summary:
      'Leads the overall vision and strategic development of DAEHWA Cafe, oversees educational programs and partnerships, and guides national and international collaborations related to Korean language and culture.',
    responsibilities: [
      'Founder of DAEHWA Cafe TalkRoom',
      'Leads the overall vision and strategic development of DAEHWA Cafe.',
      'Oversees educational programs, partnerships, and organizational growth.',
      'Guides national and international collaborations related to Korean language and culture.',
    ],
  },
  {
    title: 'Community Creator',
    name: 'JOOBUNYJ (Indrani Banerjee)',
    subtitle: 'Community Creator – DAEHWA Cafe Community',
    summary:
      'Creates and develops the community, supports member engagement, and helps coordinate volunteer, creative, and cultural initiatives.',
    responsibilities: [
      'Creator of DAEHWA Cafe Community',
      'Leads community planning, development, and member engagement.',
      'Coordinates community projects, volunteer activities, and cultural initiatives.',
      'Works to build opportunities for youth through Korean culture and educational programs.',
    ],
  },
];

const structureGroups = [
  {
    role: 'Core Team',
    count: '3 Members',
    responsibilities: [
      'Project Planning',
      'Event Management',
      'Partnership Coordination',
      'Creative Direction',
      'Community Operations',
    ],
  },
  {
    role: 'Main Team',
    count: '8 Members',
    responsibilities: [
      'Community Management',
      'Event Support',
      'Social Media',
      'Creative Projects',
      'Volunteer Coordination',
      'Member Engagement',
    ],
  },
  {
    role: 'Intern Team',
    count: '80+ Active Interns',
    responsibilities: [
      'Creative Design',
      'Content Creation',
      'Photography & Videography',
      'Hosting & Communication',
      'Event Management',
      'Community Promotion',
      'Korean Culture Activities',
      'Volunteer Programs',
    ],
  },
];

function Leadership() {
  return (
    <section id="leadership" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="Founders & Leadership"
          title="Leadership"
          accent="That builds community"
          description="The leadership of DAEHWA Cafe is built on teamwork, creativity, and a shared vision of promoting Korean language, Korean culture, youth development, and meaningful collaborations."
        />

        <div className="grid gap-6 sm:grid-cols-3" data-aos="fade-up">
          <Metric value="2" label="Core founders leading the brand and community" />
          <Metric value="3" label="Members in the core team coordinating operations" />
          <Metric value="80+" label="Interns supporting programs, content, and events" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {leadershipRoles.map((person, index) => (
            <Surface key={person.title} className="p-7" data-aos="fade-up" data-aos-delay={index * 80}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">{person.title}</p>
              <h3 className="mt-3 text-2xl font-bold text-stone-950">{person.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{person.subtitle}</p>

              <div className="mt-5 rounded-[1.25rem] border border-violet-100 bg-violet-50/70 px-5 py-4 text-sm text-stone-600">
                Add a professional photograph.
              </div>

              <p className="mt-5 text-sm leading-7 text-stone-600">{person.summary}</p>

              <CardList className="mt-6 sm:grid-cols-2" items={person.responsibilities} />
            </Surface>
          ))}
        </div>

        <section className="grid gap-6 border-t border-violet-200/70 pt-10 lg:grid-cols-[0.95fr_1.05fr]" data-aos="fade-up">
          <Surface className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Leadership Structure</p>
            <h3 className="mt-3 text-2xl font-bold text-stone-950">A structure that keeps the work moving</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              DAEHWA Cafe is organized across leadership, core operations, and a large internship network so that programs,
              community activities, and creative projects stay coordinated and consistent.
            </p>
          </Surface>

          <CardList
            className="grid grid-cols-1 sm:grid-cols-2"
            items={['Project planning', 'Event support', 'Creative direction', 'Community operations', 'Volunteer coordination', 'Member engagement', 'Content creation', 'Korean culture activities']}
          />
        </section>

        <section className="grid gap-6 border-t border-violet-200/70 pt-10 lg:grid-cols-[0.95fr_1.05fr]" data-aos="fade-up">
          <Surface className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Working Together</p>
            <h3 className="mt-3 text-2xl font-bold text-stone-950">One shared vision</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              At DAEHWA Cafe, every member plays an important role. Whether as a leader, core team member, main team member,
              or intern, the organization moves together with one shared purpose.
            </p>
            <p className="mt-6 text-lg font-semibold italic text-violet-700">“Grow Yourself and Help Others Grow.”</p>
          </Surface>

          <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">Role Summary</p>
            <CardList
              className="mt-4 sm:grid-cols-2"
              tone="indigo"
              items={['Project planning', 'Event support', 'Creative direction', 'Community operations', 'Volunteer coordination', 'Member engagement', 'Content creation', 'Korean culture activities']}
            />
          </Surface>
        </section>
      </section>
    </section>
  );
}

export default Leadership;