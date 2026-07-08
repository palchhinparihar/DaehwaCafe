import { SectionHeading, Surface } from '../components/layout/Ui.jsx';
import Accordion from '../components/layout/Accordion.jsx';
import { servicesData } from '../data/servicesData.js';

function Service() {
  const { hero, community, talkRoom, additional, commitment } = servicesData;

  return (
    <section
      id="services"
      className="scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-16 text-stone-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeading
          badge={hero.badge}
          title={hero.title}
          accent={hero.accent}
          description={hero.description}
        />

        {/* ========================= */}
        {/* Community & TalkRoom */}
        {/* ========================= */}
        <div className="grid gap-8 xl:grid-cols-2">

          {/* Community */}
          <Surface
            className="overflow-hidden p-8"
            data-aos="fade-up"
          >
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
                {community.badge}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-stone-950">
                {community.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-600">
                {community.description}
              </p>
            </div>

            <Accordion
              items={community.services}
              tone="violet"
            />
          </Surface>

          {/* TalkRoom */}
          <Surface
            className="overflow-hidden p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-700">
                {talkRoom.badge}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-stone-950">
                {talkRoom.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-600">
                {talkRoom.description}
              </p>
            </div>

            <Accordion
              items={talkRoom.services}
              tone="indigo"
            />
          </Surface>
        </div>

        {/* ========================= */}
        {/* Additional Services */}
        {/* ========================= */}
        <Surface
          className="p-8"
          data-aos="fade-up"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
              {additional.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-950">
              {additional.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              {additional.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {additional.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-violet-200 bg-violet-50 px-5 py-3 text-sm font-medium text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-100 hover:shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Surface>

        {/* ========================= */}
        {/* Our Commitment */}
        {/* ========================= */}
        <Surface
          className="overflow-hidden bg-[linear-gradient(135deg,#2e1065_0%,#4f46e5_100%)] p-0 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid lg:grid-cols-[1.45fr_0.9fr]">
            {/* Left Content */}

            <div className="p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
                {commitment.badge}
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight">
                {commitment.title}
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-violet-100">
                {commitment.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  Education
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  Community
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  Korean Culture
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  Youth Empowerment
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  Collaboration
                </span>
              </div>
            </div>

            {/* Motto */}
            <div className="flex flex-col justify-center border-t border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:border-l lg:border-t-0 lg:p-10">
              <div className="mt-8 h-1 w-16 rounded-full bg-violet-300" />

              <p className="mt-8 text-sm leading-8 text-violet-100">
                We believe that meaningful growth happens when people learn,
                share knowledge, support one another, and create opportunities
                that benefit both individuals and the wider community.
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}

export default Service;