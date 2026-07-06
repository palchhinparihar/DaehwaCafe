import { CardList, Metric, SectionHeading, Surface } from '../components/layout/Ui.jsx';

const talkRoomActivities = [
  {
    title: 'Tteokbokki Workshop',
    description:
      'A signature DAEHWA Cafe TalkRoom activity where participants learned about the history, cultural significance, and preparation of one of Korea\'s most popular traditional street foods.',
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

function Activities() {
  return (
    <section id="activities" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="Previous Activities"
          title="Activities"
          accent="Community events and learning experiences"
          description="Since its establishment, DAEHWA Cafe Community and DAEHWA Cafe TalkRoom have organized educational, cultural, creative, and youth development programs focused on Korean language, Korean culture, leadership, community engagement, and personal growth."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] text-white" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">DAEHWA Cafe TalkRoom</p>
            <h3 className="mt-3 text-3xl font-bold text-white">Signature learning and culture programs</h3>
            <p className="mt-3 text-sm leading-7 text-violet-100/80">
              Focused experiences that connect Korean language, culture, and hands-on learning.
            </p>

            <div className="mt-6 grid gap-4">
              {talkRoomActivities.map((activity) => (
                <div key={activity.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h4 className="text-xl font-bold text-white">{activity.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-violet-100/80">{activity.description}</p>
                  <p className="mt-4 text-sm font-medium text-violet-200">{activity.note}</p>
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="p-7" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">DAEHWA Cafe Community</p>
            <h3 className="mt-3 text-3xl font-bold text-stone-950">Creative, cultural, and youth-focused activities</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              These activities reflect the community side of DAEHWA Cafe, including food workshops, creator competitions,
              personal growth sessions, and interactive cultural programs.
            </p>

            <div className="mt-6 grid gap-4">
              {communityActivities.map((activity) => (
                <div key={activity.title} className="rounded-[1.5rem] border border-violet-100 bg-violet-50/70 p-5">
                  <h4 className="text-xl font-bold text-stone-950">{activity.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{activity.description}</p>
                  {activity.focus ? <p className="mt-4 text-sm font-medium text-violet-700">{activity.focus}</p> : null}
                  {activity.highlights ? <CardList items={activity.highlights} className="mt-4 sm:grid-cols-2" /> : null}
                </div>
              ))}
            </div>
          </Surface>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Surface className="p-7 lg:col-span-2" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Activity Themes</p>
            <h3 className="mt-3 text-2xl font-bold text-stone-950">What these programs are designed to build</h3>
            <CardList
              className="mt-6 sm:grid-cols-2"
              items={[
                'Korean language exposure',
                'Cultural understanding',
                'Creative participation',
                'Confidence and communication',
                'Community engagement',
                'Youth leadership',
                'Online and offline collaboration',
                'Personal growth',
              ]}
            />
          </Surface>

          <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] text-white" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Our Motto</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Growing through shared experience</h3>
            <p className="mt-4 text-sm leading-7 text-violet-100/80">
              Every workshop, competition, and community event is designed to help members learn, connect, and grow together.
            </p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">Official Motto</p>
              <p className="mt-2 text-lg font-medium leading-8 text-white">“Grow Yourself and Help Others Grow.”</p>
            </div>
          </Surface>
        </div>
      </section>
    </section>
  );
}

export default Activities;