import { useEffect, useState } from "react";

import {
  CardList,
  SectionHeading,
  Surface,
} from "../components/layout/Ui.jsx";

import EventCard from "../components/layout/EventCard.jsx";

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

        {/* Activities Heading */}
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
              <EventCard
                key={event.id}
                event={event}
                index={index}
              />
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