import { Chip, Metric, SectionBadge, Surface } from '../components/layout/Ui.jsx';
import Logo from '../assets/logo.png';
import Mascot from '../assets/Mascot.png';
import { pillars, highlights } from '../data/homeData.js';

function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_42%),linear-gradient(180deg,#ffffff_0%,#faf5ff_45%,#f3e8ff_100%)] text-stone-900"
    >
      {/* Background Blobs */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-300/30 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-300/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-indigo-300/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          {/* LEFT */}
          <div data-aos="fade-up" className="max-w-2xl">
            <SectionBadge>
              Welcome to DAEHWA Cafe
            </SectionBadge>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-5">
                <img
                  src={Logo}
                  alt="DAEHWA Cafe"
                  className="mx-auto md:mx-0 select-none"
                  draggable="false"
                />

                <div className="flex flex-wrap gap-3">
                  <span className="mx-auto md:mx-0 rounded-full border border-violet-200 bg-violet-100/90 px-4 py-2 text-xs! font-semibold uppercase tracking-[0.2em] text-violet-700">
                    DAEHWA Cafe Community
                  </span>

                  <span className="mx-auto md:mx-0 rounded-full border border-indigo-200 bg-indigo-100/70 px-4 py-2 text-xs! font-semibold uppercase tracking-[0.2em] text-indigo-700">
                    DAEHWA Cafe TalkRoom
                  </span>
                </div>
              </div>

              <h1 className="max-w-xl text-4xl flex flex-col font-black leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
                <span>Grow Yourself</span>
                <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 bg-clip-text animate-pulse text-transparent">
                  and Help Others Grow.
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-8 text-stone-600">
                DAEHWA Cafe is a modern community platform where people
                connect through Korean language, culture, meaningful
                conversations, and collaborative opportunities.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-violet-300/40"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="rounded-full border border-violet-200 bg-white px-7 py-3.5 text-sm font-semibold text-violet-700 shadow-lg transition hover:border-violet-400 hover:bg-violet-50"
              >
                Contact Us
              </a>
            </div>

            {/* Pillars */}
            <div className="mt-10 flex flex-wrap gap-3">
              {pillars.map((pillar, index) => (
                <Chip
                  key={pillar}
                  tone={index === 1 ? 'indigo' : 'violet'}
                >
                  {pillar}
                </Chip>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-violet-400/20 via-fuchsia-400/10 to-indigo-400/20 blur-[70px]" />
            </div>

            {/* Floating Card */}
            <Surface className="absolute left-0 top-4 hidden w-48 p-4 lg:block z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
                Community
              </p>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                Learn, collaborate and grow together.
              </p>
            </Surface>

            {/* Mascot */}
            <img
              src={Mascot}
              alt="DAEHWA Mascot"
              draggable="false"
              className="relative z-7 w-[250px] md:w-[300px] mx-auto drop-shadow-[0_30px_70px_rgba(124,58,237,0.28)] transition duration-500 hover:-translate-y-2"
            />

            {/* Floating Card */}
            <Surface className="absolute z-10 -bottom-13 -right-5 hidden w-56 p-4 lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-700">
                TalkRoom
              </p>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                Practical Korean learning with confidence,
                mentorship and consistency.
              </p>
            </Surface>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* Brand Metrics */}
      {/* ========================================= */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 bg-transparent">
          <div className="rounded-lg">
            <div className="grid gap-6 md:grid-cols-3">
              <Metric
                value="2"
                label="Focused divisions: Community & TalkRoom"
              />

              <Metric
                value="80+"
                label="Active interns and volunteers driving the community"
              />

              <Metric
                value="India ↔ Korea"
                label="Building a bridge through language, culture and collaboration"
              />
            </div>
          </div>
        </div>
      </section>

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
  );
}

export default Home;
