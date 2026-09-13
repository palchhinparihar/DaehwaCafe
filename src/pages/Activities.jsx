import { useEffect, useState } from "react";

import {
  CardList,
  SectionHeading,
  Surface,
} from "../components/layout/Ui.jsx";

import Carousel from "../components/layout/Carousel.jsx";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

import { supabase } from "../lib/supabase";

import {
  activitiesHero,
  upcomingProjects,
  commitment,
} from "../data/activitiesData.js";

function Activities() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching events:", error);
        setError("Unable to load activities right now.");
        setEvents([]);
      } else {
        setEvents(data || []);
      }

      setLoading(false);
    };

    fetchEvents();
  }, []);

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

        {/* Events */}
        <div className="flex flex-col gap-10">
          {loading ? (
            <Surface className="p-8 text-center">
              <p className="text-stone-600">Loading activities...</p>
            </Surface>
          ) : error ? (
            <Surface className="p-8 text-center">
              <p className="text-red-600">{error}</p>
            </Surface>
          ) : events.length === 0 ? (
            <Surface className="p-8 text-center">
              <p className="text-stone-600">
                No activities have been added yet.
              </p>
            </Surface>
          ) : (
            events.map((event, index) => (
              <Surface
                key={event.id}
                className="overflow-hidden p-6 lg:p-8"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    index % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  {/* Event Media */}
                  <Carousel
                    images={event.images || []}
                    video={event.video}
                    title={event.title}
                  />

                  {/* Event Details */}
                  <div>
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
                          {event.event_type}
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-stone-950">
                          {event.title}
                        </h3>
                      </div>

                      <div className="flex shrink-0 flex-col gap-2 border-l-2 border-violet-300 pl-4 sm:items-end">
                        <div className="flex items-center gap-2 text-sm font-semibold text-stone-700">
                          <FiCalendar
                            className="text-violet-700"
                            aria-hidden="true"
                          />
                          <span>{event.date}</span>
                          {event.time && (
                            <>
                              <FiClock
                                className="ml-1 text-violet-700"
                                aria-hidden="true"
                              />
                              <span>{event.time}</span>
                            </>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold text-stone-700">
                          <FiMapPin
                            className="text-violet-700"
                            aria-hidden="true"
                          />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {event.category && (
                      <div className="mt-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-violet-300" />
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                          {event.category}
                        </p>
                      </div>
                    )}

                    <p className="mt-5 text-base leading-8 text-stone-600">
                      {event.description}
                    </p>

                    {event.tags?.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={`${event.id}-tag-${tagIndex}`}
                            className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Surface>
            ))
          )}
        </div>

        {/* Upcoming Projects + Commitment */}
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