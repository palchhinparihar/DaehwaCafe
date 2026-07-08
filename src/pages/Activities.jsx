import {
  CardList,
  SectionHeading,
  Surface,
} from "../components/layout/Ui.jsx";

import Carousel from "../components/layout/Carousel.jsx";

import {
  activitiesHero,
  activitySections,
  currentCollaboration,
  upcomingProjects,
  commitment,
} from "../data/activitiesData.js";

function Activities() {
  return (
    <section
      id="activities"
      className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">

        <SectionHeading
          badge={activitiesHero.badge}
          title={activitiesHero.title}
          accent={activitiesHero.accent}
          description={activitiesHero.description}
        />

        <div className="flex flex-col gap-10">
          {activitySections.map((activity, index) => (
            <Surface
              key={activity.id}
              className="overflow-hidden p-6 lg:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
              >
                <Carousel
                  media={activity.media}
                  title={activity.title}
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
                    {activity.organization}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-stone-950">
                    <span className="mr-2">{activity.emoji}</span>
                    {activity.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-stone-600">
                    {activity.description}
                  </p>

                  {activity.highlights ? (
                    <CardList
                      items={activity.highlights}
                      className="mt-6 sm:grid-cols-2"
                    />
                  ) : null}
                </div>
              </div>
            </Surface>
          ))}
        </div>

        <Surface
          className="overflow-hidden p-6 lg:p-8"
          data-aos="fade-up"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Carousel
              media={currentCollaboration.media}
              title={currentCollaboration.title}
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
                {currentCollaboration.badge}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-stone-950">
                <span className="mr-2">{currentCollaboration.emoji}</span>
                {currentCollaboration.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-stone-600">
                {currentCollaboration.description}
              </p>

              <CardList
                items={currentCollaboration.highlights}
                className="mt-6 sm:grid-cols-2"
              />
            </div>
          </div>
        </Surface>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Surface
            className="p-7"
            data-aos="fade-up"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
              Upcoming Projects
            </p>

            <h3 className="mt-3 text-3xl font-bold text-stone-950">
              Looking Ahead
            </h3>

            <p className="mt-4 text-base leading-8 text-stone-600">
              We continue to expand our initiatives through educational,
              cultural, leadership, and community-driven programs that create
              meaningful opportunities for young people to learn, collaborate,
              and grow.
            </p>

            <CardList
              items={upcomingProjects}
              className="mt-6 sm:grid-cols-2"
            />
          </Surface>

          <Surface
            className="bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] p-7 text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
              {commitment.title}
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              More than a Korean culture community
            </h3>

            <p className="mt-5 text-base leading-8 text-violet-100/80">
              {commitment.description}
            </p>
          </Surface>
        </div>

      </div>
    </section>
  );
}

export default Activities;