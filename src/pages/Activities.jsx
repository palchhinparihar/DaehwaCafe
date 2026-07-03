const talkRoomActivities = [
  {
    title: 'Tteokbokki Workshop',
    description:
      'A signature DAEHWA Cafe.TalkRoom activity where participants learned about the history, cultural significance, and preparation of one of Korea\'s most popular traditional street foods.',
    note: 'Combine Korean language, Korean culture, and hands-on learning.',
  },
];

const communityActivities = [
  {
    title: 'Kimbap Making Workshop',
    description:
      'A Korean cultural food workshop where participants learned how to prepare Kimbap while exploring Korean food culture and traditions.',
  },
  {
    title: 'International Global Influencer Collaboration Competition',
    description:
      'One of the flagship online projects connecting creators and Korean culture enthusiasts from different regions.',
    highlights: ['Creativity', 'Content Creation', 'Community Engagement', 'International Networking'],
  },
  {
    title: 'Influencer Competition',
    description:
      'An ongoing community activity that encourages young creators and promotes Korean culture through social media.',
  },
  {
    title: 'Motivation & Personal Growth Workshop',
    description:
      'A youth development workshop designed to help participants overcome insecurity, inferiority feelings, lack of confidence, and communication barriers.',
    focus: 'Confidence-building, communication skills, and leadership qualities.',
  },
  {
    title: 'K-Music Workshop',
    description:
      'An interactive workshop introducing participants to Korean music, the K-pop industry, and Korean entertainment culture.',
  },
  {
    title: 'K-Quiz Program',
    description:
      'An engaging quiz event designed to improve participants\' knowledge of Korean language, culture, history, traditions, and entertainment.',
  },
];

function ActivityCard({ title, description, note, highlights, focus, dark = false }) {
  return (
    <article
      className={dark
        ? 'rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-sm'
        : 'rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5 shadow-sm'}
    >
      <h3 className={dark ? 'text-xl font-bold text-white' : 'text-xl font-bold text-stone-950'}>{title}</h3>
      <p className={dark ? 'mt-3 text-sm leading-7 text-stone-200' : 'mt-3 text-sm leading-7 text-stone-600'}>{description}</p>

      {note ? (
        <div className={dark ? 'mt-4 rounded-2xl bg-white/5 px-4 py-3 text-sm text-stone-200' : 'mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-stone-600'}>
          {note}
        </div>
      ) : null}

      {focus ? (
        <p className={dark ? 'mt-4 text-sm font-medium text-purple-200' : 'mt-4 text-sm font-medium text-purple-700'}>{focus}</p>
      ) : null}

      {highlights ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className={dark ? 'rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-200' : 'rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600'}
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function Activities() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdf9_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            PREVIOUS ACTIVITIES
          </div>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl">
            Activities
            <span className="block text-purple-700">Community Events and Learning Experiences</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
            Since its establishment, DAEHWA Cafe Community and DAEHWA Cafe.TalkRoom have organized educational, cultural,
            creative, and youth development programs focused on Korean language, Korean culture, leadership, community
            engagement, and personal growth.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
            Note: Add high-quality photographs for every activity wherever possible.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">DAEHWA Cafe.TalkRoom</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Signature learning and culture programs</h2>

            <div className="mt-6 space-y-4">
              {talkRoomActivities.map((activity) => (
                <ActivityCard key={activity.title} dark {...activity} />
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">DAEHWA Cafe Community</p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950">Creative, cultural, and youth-focused activities</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              These activities reflect the community side of DAEHWA Cafe, including food workshops, creator competitions,
              personal growth sessions, and interactive cultural programs.
            </p>

            <div className="mt-6 grid gap-4">
              {communityActivities.map((activity) => (
                <ActivityCard key={activity.title} {...activity} />
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Activity Themes</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">What these programs are designed to build</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Korean language exposure',
                'Cultural understanding',
                'Creative participation',
                'Confidence and communication',
                'Community engagement',
                'Youth leadership',
                'Online and offline collaboration',
                'Personal growth',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Our Motto</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Growing through shared experience</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Every workshop, competition, and community event is designed to help members learn, connect, and grow together.
            </p>
            <div className="mt-6 rounded-[1.75rem] bg-white/5 px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-200">Official Motto</p>
              <p className="mt-2 text-lg font-medium leading-8 text-white">“Grow Yourself and Help Others Grow.”</p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Activities;