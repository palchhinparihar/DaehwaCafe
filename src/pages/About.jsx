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
    <main id="about" className="min-h-screen scroll-mt-28 bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdf9_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            ABOUT DAEHWA CAFE
          </div>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl">
            Grow Together
            <span className="block text-purple-700">With DAEHWA Cafe</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            DAEHWA Cafe is a community and learning space built around Korean culture, education, and meaningful collaboration.
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            We create opportunities for people to learn, connect, and grow together through supportive programs and shared experiences.
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            Our motto is simple: “Grow Yourself and Help Others Grow.”
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="border-t border-purple-200/70 pt-6" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">DAEHWA Cafe Community</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">A supportive community for culture and growth</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              DAEHWA Cafe Community connects people through Korean culture, education, creativity, and meaningful collaboration.
            </p>

            <div className="mt-6 divide-y divide-purple-100 overflow-hidden rounded-[1.75rem] border border-purple-100 bg-white/70">
              {communityPoints.map((point) => (
                <div
                  key={point}
                  className="px-5 py-4 text-sm leading-6 text-stone-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </article>

          <article className="border-t border-purple-200/70 pt-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">DAEHWA Cafe TalkRoom</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">A practical platform for Korean learning</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              DAEHWA Cafe TalkRoom helps learners build confidence in Korean language learning with practical guidance and cultural understanding.
            </p>

            <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              {talkRoomPoints.map((point) => (
                <div key={point} className="px-5 py-4 text-sm leading-6 text-stone-600">
                  {point}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;