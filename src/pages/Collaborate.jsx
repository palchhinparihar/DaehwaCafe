import { CardList, Metric, SectionHeading, Surface } from '../components/common/Ui.jsx';

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

function Collaborate() {
  return (
    <main id="collaborate" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="Why Collaborate"
          title="Collaborate"
          accent="With DAEHWA Cafe"
          description="We build collaborations on creativity, professionalism, and meaningful community engagement. Partners get a clearer, more polished experience built around Korea, education, and youth development."
        />

        <div className="grid gap-6 sm:grid-cols-3" data-aos="fade-up">
          <Metric value="10" label="Support services available for events and partnerships" />
          <Metric value="80+" label="Active interns and volunteers ready to help" />
          <Metric value="Grow" label="A shared purpose for every collaboration" />
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Surface className="p-7" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">What We Can Provide</p>
            <h3 className="mt-3 text-3xl font-bold text-stone-950">Practical support for events and partnerships</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              We provide flexible support that helps partners deliver smoother events, stronger outreach, and more meaningful engagement.
            </p>

            <div className="mt-6 grid gap-4">
              {offerings.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-violet-100 bg-violet-50/70 p-5">
                  <h4 className="text-lg font-bold text-stone-950">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
                </div>
              ))}
            </div>
          </Surface>

          <div className="flex flex-col gap-6">
            <Surface className="p-7" data-aos="fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Our Strength</p>
              <h3 className="mt-3 text-3xl font-bold text-stone-950">A team ready to support collaboration</h3>
              <CardList className="mt-6" items={strengths} />
            </Surface>

            <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] text-white" data-aos="fade-up" data-aos-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Our Promise</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Long-term partnerships with shared purpose</h3>
              <p className="mt-4 text-sm leading-7 text-violet-100/80">
                We are committed to building long-term partnerships based on professionalism, creativity, mutual growth, and cultural exchange.
              </p>
              <p className="mt-4 text-sm leading-7 text-violet-100/80">
                Together, we aim to create opportunities that inspire, educate, and connect people through Korea.
              </p>

              <p className="mt-6 text-lg font-semibold italic text-violet-200">“Grow Yourself and Help Others Grow.”</p>
            </Surface>
          </div>
        </section>

        <section className="border-t border-violet-200/70 pt-10" data-aos="fade-up">
          <SectionHeading
            badge="We Welcome Collaborations With"
            title="Partners who share our vision"
            description="Organizations and groups that want to support education, culture, youth development, and community-led initiatives."
          />

          <CardList className="mt-7 sm:grid-cols-2 lg:grid-cols-3" items={collaborationTargets} />
        </section>
      </section>
    </main>
  );
}

export default Collaborate;