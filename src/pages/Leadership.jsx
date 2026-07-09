import { FiInstagram, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { CardList, Metric, SectionHeading, Surface } from '../components/layout/Ui.jsx';
import { leadershipMetrics, leadershipRoles, structureGroups } from '../data/leadershipData.js';

function Leadership() {
  return (
    <section
      id="leadership"
      className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="Founder & Leadership"
          title="Leadership"
          accent="That builds community"
          description="The leadership of DAEHWA Cafe is built on teamwork, creativity, and a shared vision of promoting Korean language, Korean culture, youth development, and meaningful collaborations."
        />

        {/* Metrics */}
        <div
          className="grid gap-6 sm:grid-cols-3"
          data-aos="fade-up"
        >
          {leadershipMetrics.map((metric) => (
            <Metric
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>

        {/* Founder Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {leadershipRoles.map((person, index) => (
            <Surface
              key={person.id}
              className="p-7"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
                {person.title}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-stone-950">
                {person.name}
              </h3>

              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                {person.subtitle}
              </p>

              <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-start">
                <div className="flex flex-col items-center lg:w-48 lg:flex-shrink-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-56 w-full rounded-3xl border border-violet-100 object-contain md:object-cover shadow-lg lg:h-64"
                  />

                  <div className="mt-5 flex items-center justify-center gap-3">
                    {person.socials.linkedin && (
                      <a
                        href={person.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} LinkedIn`}
                        className="rounded-full border border-violet-200 p-2.5 text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-700"
                      >
                        <FiLinkedin size={18} />
                      </a>
                    )}

                    {person.socials.instagram && (
                      <a
                        href={person.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} Instagram`}
                        className="rounded-full border border-violet-200 p-2.5 text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-700"
                      >
                        <FiInstagram size={18} />
                      </a>
                    )}

                    {person.socials.portfolio && (
                      <a
                        href={person.socials.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} Portfolio`}
                        className="rounded-full border border-violet-200 p-2.5 text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-700"
                      >
                        <FiGlobe size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <CardList
                    className="sm:grid-cols-1"
                    items={person.responsibilities}
                  />
                </div>
              </div>
            </Surface>
          ))}
        </div>

        {/* Leadership Structure */}
        <section
          className="border-t border-violet-200/70 pt-10"
          data-aos="fade-up"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
              Leadership Structure
            </p>

            <h3 className="mt-3 text-3xl font-bold text-stone-950">
              One organization, many responsibilities
            </h3>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              DAEHWA Cafe is organized through leadership, dedicated teams,
              and an active internship program that work together to deliver
              educational initiatives, cultural programs, creative projects,
              and community experiences.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {structureGroups.map((group, index) => (
              <Surface
                key={group.role}
                className="p-7"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-stone-950">
                      {group.role}
                    </h4>

                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-violet-700">
                      {group.count}
                    </p>
                  </div>
                </div>

                {group.responsibilities.length > 0 && (
                  <>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                      Responsible for
                    </p>

                    <CardList
                      className="mt-4 sm:grid-cols-2"
                      items={group.responsibilities}
                    />
                  </>
                )}

                {group.description && (
                  <p className="mt-6 text-sm leading-7 text-stone-600">
                    {group.description}
                  </p>
                )}

                {(group.role === 'Core Team' ||
                  group.role === 'Main Team') && (
                    <div className="mt-6 rounded-2xl border border-dashed border-violet-200 bg-violet-50/70 px-5 py-4">
                      <p className="text-sm text-stone-600">
                        <span className="font-semibold text-stone-900">
                          Coming Soon:
                        </span>{' '}
                        Names, positions, and professional photographs of team
                        members will be added here.
                      </p>
                    </div>
                  )}
              </Surface>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Leadership;