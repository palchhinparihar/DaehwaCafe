import { CardList, Chip, SectionBadge, SectionHeading, Surface } from '../components/layout/Ui.jsx';
import { aboutSections, featureCards, missionCards } from '../data/aboutData.js';
import { tones } from '../data/theme/tones.js';

function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-28 bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        {/* ====================================================== */}
        {/* Intro */}
        {/* ====================================================== */}
        <section>
          <SectionHeading
            badge="About DAEHWA Cafe"
            title="Grow Together"
            accent="With clarity and purpose"
            description="DAEHWA Cafe is a modern community built around Korean language, culture, and meaningful learning experiences."
          />

          <div
            className="mt-6 flex flex-wrap gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Chip>Community</Chip>
            <Chip tone="indigo">Language Learning</Chip>
            <Chip>Korean Culture</Chip>
            <Chip tone="indigo">Networking</Chip>
            <Chip>Collaboration</Chip>
          </div>
        </section>

        {/* ====================================================== */}
        {/* Community & TalkRoom */}
        {/* ====================================================== */}
        <section className="relative">
          <div className="absolute left-1/2 top-24 hidden h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-200 to-transparent lg:block" />
        
          <div className="grid gap-8 lg:grid-cols-2">
            {aboutSections.map((section, index) => {
              const Icon = section.icon;
              const theme = tones[section.tone];

              return (
                <Surface
                  key={section.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`group relative shadow-lg overflow-hidden rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 ${theme.shadow}`}
                >
                  <div className={theme.blob} />

                  <article className="relative">
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.28em] ${theme.label}`}
                    >
                      {section.label}
                    </p>

                    <div className="mt-5 flex items-center gap-5">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.icon}`}
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-3xl font-black leading-tight text-stone-950">
                          {section.title}

                          <span className={`block ${theme.accent}`}>
                            {section.accent}
                          </span>
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 leading-8 text-stone-600">
                      {section.description}
                    </p>

                    <CardList
                      items={section.points}
                      tone={theme.cardTone}
                      className="mt-6"
                    />
                  </article>
                </Surface>
              );
            })}
          </div>
        </section>

        {/* ====================================================== */}
        {/* Why DAEHWA Cafe */}
        {/* ====================================================== */}
        <section className="relative">
          {/* Background Accent */}
          <div className="absolute inset-x-0 top-10 -z-10 h-72 rounded-[3rem] bg-gradient-to-r from-violet-100/50 via-transparent to-indigo-100/50 blur-3xl" />

          <div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <SectionBadge className="mx-auto">
              Why DAEHWA Cafe?
            </SectionBadge>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
              Built around
              <span className="block bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-500 bg-clip-text text-transparent">
                people, learning & growth.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              We believe meaningful communities are created
              when people learn together, support one another,
              and share experiences beyond the classroom.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              const theme = tones[card.tone];

              return (
                <Surface
                  key={card.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`group relative overflow-hidden rounded-[2rem] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02] ${theme.shadow}`}
                >
                  <div className={theme.blob} />

                  <div className="relative">
                    <div className="flex items-center gap-5">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.icon}`}>
                        <Icon size={24} />
                      </div>

                      <h3 className="text-xl font-black leading-tight text-stone-950">
                        {card.title}
                      </h3>
                    </div>

                    <p className="mt-5 text-sm md:text-[15px] leading-8 text-stone-600">
                      {card.description}
                    </p>
                  </div>
                </Surface>
              );
            })}
          </div>
        </section>

        {/* ====================================================== */}
        {/* Mission */}
        {/* ====================================================== */}
        <section className="relative">
          <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-gradient-to-r from-violet-200/30 via-fuchsia-200/20 to-indigo-200/30 blur-3xl" />

          <Surface
            data-aos="fade-up"
            className="relative overflow-hidden rounded-[2.75rem] border border-white/80 p-8 md:pt-14"
          >
            {/* Decorative blobs */}
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-violet-200/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl" />

            <div className="relative mx-auto max-w-5xl">
              <div className="text-center">
                <SectionBadge className="mx-auto">
                  Our Mission
                </SectionBadge>

                <blockquote className="mt-6 text-3xl font-black italic text-stone-950 md:text-4xl">
                  “Language is only the beginning.”
                </blockquote>

                <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-stone-600">
                  Our mission is to create an inclusive space
                  where learning Korean becomes the starting
                  point for cultural exchange, collaboration,
                  and lifelong growth.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {missionCards.map((card, index) => {
                  const theme = tones[card.tone];

                  return (
                    <div
                      key={card.id}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className={`rounded-[1.75rem] border bg-white/60 p-7 text-center shadow-lg transition duration-300 hover:-translate-y-1 ${
                        card.tone === 'violet'
                          ? 'border-violet-100'
                          : card.tone === 'indigo'
                            ? 'border-indigo-100'
                            : 'border-fuchsia-100'
                      }`}
                    >
                      <div
                        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${theme.icon}`}
                      >
                        <span className="text-lg font-black">
                          {index + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl font-black text-stone-950">
                        {card.title}
                      </h3>

                      <p className="mt-4 leading-7 text-stone-600">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 border-t border-violet-100 pt-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-700">
                  One community. Endless possibilities.
                </p>
              </div>
            </div>
          </Surface>
        </section>
      </div>
    </section>
  );
}

export default About;