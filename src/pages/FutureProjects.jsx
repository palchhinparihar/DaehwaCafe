import { CardList, SectionHeading, Surface } from "../components/layout/Ui.jsx";
import { futureProjectsContent, futurePrograms, stepUpWorkshops } from "../data/futureProjects.js";

function FutureProjects() {
  return (
    <section
      id="future-projects"
      className="scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-16 text-stone-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeading
          badge={futureProjectsContent.badge}
          title={futureProjectsContent.title}
          accent={futureProjectsContent.accent}
          description={futureProjectsContent.description}
        />

        {/* STEP UP Workshop Series */}
        <section className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
              Workshops
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-950">
              {futureProjectsContent.stepUpTitle}
            </h2>

            <p className="mt-4 leading-8 text-stone-600">
              {futureProjectsContent.stepUpDescription}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {stepUpWorkshops.map((workshop, index) => (
              <Surface
                key={workshop.title}
                className="p-7"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <h3 className="text-xl font-bold text-stone-950">
                  {workshop.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {workshop.description}
                </p>

                <CardList
                  className="mt-6"
                  tone="indigo"
                  items={workshop.items}
                />
              </Surface>
            ))}
          </div>
        </section>

        {/* Beyond Step Up */}
        <section className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
              Future Initiatives
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-950">
              {futureProjectsContent.futureProgramsTitle}
            </h2>

            <p className="mt-4 leading-8 text-stone-600">
              {futureProjectsContent.futureProgramsDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {futurePrograms.map((program, index) => (
              <Surface
                key={program.title}
                className="p-7"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <h3 className="text-xl font-bold text-stone-950">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {program.description}
                </p>

                <CardList
                  className="mt-6"
                  items={program.items}
                />
              </Surface>
            ))}
          </div>
        </section>

        {/* Vision */}
        <Surface
          className="overflow-hidden bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] p-8 text-white lg:p-10"
          data-aos="fade-up"
        >
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
              {futureProjectsContent.visionTitle}
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white lg:text-4xl">
              Building a bridge between India and Korea
            </h2>

            <p className="mt-6 text-base leading-8 text-violet-100/85">
              {futureProjectsContent.vision}
            </p>
          </div>
        </Surface>
      </div>
    </section>
  );
}

export default FutureProjects;