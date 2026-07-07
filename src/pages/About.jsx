import { CardList, SectionHeading, Surface, SectionBadge } from '../components/layout/Ui.jsx';
import { communityPoints, talkRoomPoints, highlights } from '../data/aboutData.js';

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

        {/* ========================================= */}
        {/* Highlights */}
        {/* ========================================= */}
        <section className="pb-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-12 text-center" data-aos="fade-up">
              <SectionBadge>
                Why DAEHWA Cafe?
              </SectionBadge>

              <h2 className="mt-5 text-4xl font-black text-stone-900">
                More than just a community.
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-600">
                We believe learning should feel welcoming,
                practical and inspiring. Every initiative at
                DAEHWA Cafe is designed to help people connect,
                learn and grow together.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((highlight, index) => (
                <Surface
                  key={highlight}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative overflow-hidden rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2"
                >
                  {/* Decorative Circle */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-200/30 blur-2xl transition duration-300 group-hover:scale-125" />
                  {/* Number */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-lg font-bold text-white">
                    0{index + 1}
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                    Highlight
                  </p>

                  <p className="mt-4 text-base leading-8 text-stone-600">
                    {highlight}
                  </p>
                </Surface>
              ))}
            </div>

            {/* Bottom Brand Strip */}
            <div
              className="mt-16"
              data-aos="fade-up"
            >
              <Surface className="w-full md:w-[75%]! mx-auto overflow-hidden rounded-3xl py-3!">
                <div className="text-center p-8">
                  <div>
                    <SectionBadge>
                      Our Mission
                    </SectionBadge>

                    <h3 className="mt-5 text-2xl md:text-3xl font-black text-stone-900">
                      Creating meaningful experiences
                      beyond language learning.
                    </h3>

                    <p className="mt-5 text-sm md:text-base leading-8 text-stone-600">
                      DAEHWA Cafe brings together people
                      interested in Korean language,
                      culture, networking and collaboration.
                      Through our Community and TalkRoom,
                      we create opportunities where everyone
                      can learn, contribute and grow together.
                    </p>
                  </div>
                </div>
              </Surface>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default About;