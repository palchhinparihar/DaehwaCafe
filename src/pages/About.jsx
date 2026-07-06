import { CardList, SectionHeading, Surface } from '../components/layout/Ui.jsx';

const communityPoints = [
  'Independent community connecting people through Korean culture, education, creativity, and collaboration.',
  'Built to support learning, growth, skill development, and meaningful cultural exchange.',
  'Focused on youth leadership, volunteerism, and safe community engagement.',
];

const talkRoomPoints = [
  'Korean language learning platform created to make education practical, affordable, and accessible.',
  'Helps learners build confidence in speaking, writing, and understanding Korean culture.',
  'Supports TOPIK preparation, study in Korea guidance, and future opportunities related to Korea.',
];

function About() {
  return (
    <section id="about" className="min-h-screen scroll-mt-28 bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="About DAEHWA Cafe"
          title="Grow together"
          accent="With clarity and purpose"
          description="DAEHWA Cafe is a community and learning space built around Korean culture, education, and meaningful collaboration."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Surface className="p-7" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">DAEHWA Cafe Community</p>
            <h3 className="mt-3 text-2xl font-bold text-stone-950">A supportive community for culture and growth</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              DAEHWA Cafe Community connects people through Korean culture, education, creativity, and meaningful collaboration.
            </p>

            <CardList items={communityPoints} className="mt-6" />
          </Surface>

          <Surface className="p-7" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">DAEHWA Cafe TalkRoom</p>
            <h3 className="mt-3 text-2xl font-bold text-stone-950">A practical platform for Korean learning</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              DAEHWA Cafe TalkRoom helps learners build confidence in Korean language learning with practical guidance and cultural understanding.
            </p>

            <CardList items={talkRoomPoints} className="mt-6" tone="indigo" />
          </Surface>
        </div>
      </section>
    </section>
  );
}

export default About;