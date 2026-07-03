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
    <main id="leadership" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdf9_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            FOUNDERS & LEADERSHIP
          </div>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl">
            Leadership
            <span className="block text-purple-700">That Builds Community</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            The leadership of DAEHWA Cafe is built on teamwork, creativity, and a shared vision of promoting Korean language,
            Korean culture, youth development, and meaningful collaborations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {leadershipRoles.map((person) => (
            <article
              key={person.title}
              className="border-t border-purple-200/70 pt-6"
              data-aos="fade-up"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">{person.title}</p>
              <h2 className="mt-3 text-2xl font-bold text-stone-950">{person.name}</h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{person.subtitle}</p>

              <div className="mt-5 border-y border-stone-200 py-4 text-sm text-stone-500">Add a professional photograph.</div>

              <p className="mt-5 text-sm leading-7 text-stone-600">{person.summary}</p>

              <ul className="mt-6 divide-y divide-purple-100 overflow-hidden border border-purple-100 bg-white/70">
                {person.responsibilities.map((item) => (
                  <li key={item} className="px-5 py-4 text-sm leading-6 text-stone-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="border-t border-purple-200/70 pt-10" data-aos="fade-up">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Leadership Structure</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">A structure that keeps the work moving</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              DAEHWA Cafe is organized across leadership, core operations, and a large internship network so that programs,
              community activities, and creative projects stay coordinated and consistent.
            </p>
          </div>

          <div className="mt-7 grid gap-0 overflow-hidden border border-purple-100 bg-white/70 lg:grid-cols-3">
            {structureGroups.map((group) => (
              <article key={group.role} className="border-b border-r border-purple-100 px-5 py-5 last:border-b-0 lg:[&:nth-child(3n)]:border-r-0">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">{group.role}</p>
                <div className="mt-3 flex items-end justify-between gap-4 border-b border-purple-100 pb-4">
                  <h3 className="text-2xl font-bold text-stone-950">{group.count}</h3>
                  <span className="text-xs uppercase tracking-[0.22em] text-stone-500">Active</span>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                  {group.responsibilities.map((item) => (
                    <li key={item} className="border-b border-purple-100 pb-2 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 border-t border-purple-200/70 pt-10 lg:grid-cols-[0.95fr_1.05fr]" data-aos="fade-up">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Working Together</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">One shared vision</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              At DAEHWA Cafe, every member plays an important role. Whether as a leader, core team member, main team member,
              or intern, the organization moves together with one shared purpose.
            </p>
            <p className="mt-6 text-lg font-semibold italic text-purple-700">“Grow Yourself and Help Others Grow.”</p>
          </div>

          <div className="border-t border-stone-200 pt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Role Summary</p>
            <div className="mt-4 grid gap-0 overflow-hidden border border-purple-100 bg-white/70 sm:grid-cols-2">
              {[
                'Project planning',
                'Event support',
                'Creative direction',
                'Community operations',
                'Volunteer coordination',
                'Member engagement',
                'Content creation',
                'Korean culture activities',
              ].map((item) => (
                <div key={item} className="border-b border-purple-100 px-5 py-4 text-sm font-medium text-stone-700 odd:border-r sm:border-b">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Leadership;