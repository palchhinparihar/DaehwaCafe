import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

import { supabase } from "../lib/supabase";
import Carousel from "../components/layout/Carousel.jsx";
import { Surface } from "../components/layout/Ui.jsx";

function Activity() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching activity:", error);
        setError("Unable to load this activity right now.");
        setEvent(null);
      } else {
        setEvent(data);
      }

      setLoading(false);
    };

    fetchActivity();
  }, [id]);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getEventDate = () => {
    if (!event?.start_date) return "Date not available";

    const startDate = formatDate(event.start_date);
    const endDate = formatDate(event.end_date);

    if (!endDate || event.start_date === event.end_date) {
      return startDate;
    }

    return `${startDate} – ${endDate}`;
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(247,238,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f2e9ff_100%)] px-6 py-16 text-stone-900 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Surface className="p-8 text-center lg:p-12">
            <p className="text-stone-600">Loading activity...</p>
          </Surface>
        </div>
      </section>
    );
  }

  if (error || !event) {
    return (
      <section className="min-h-screen px-6 py-16 text-stone-900 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Surface className="p-8 text-center lg:p-12">
            <p className="text-red-600">
              {error || "Activity not found."}
            </p>

            <Link
              to="/activities"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
            >
              <FiArrowLeft aria-hidden="true" />
              Back to Activities
            </Link>
          </Surface>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_8%,_rgba(216,180,254,0.4),_transparent_24%),radial-gradient(circle_at_88%_18%,_rgba(129,140,248,0.2),_transparent_26%),linear-gradient(180deg,_#fffdfd_0%,_#faf5ff_48%,_#f0eaff_100%)] px-5 py-10 text-stone-900 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full border border-violet-200/50 bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          to="/activities"
          className="group inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 transition-colors hover:text-violet-950"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-white/70 transition-transform group-hover:-translate-x-1">
            <FiArrowLeft aria-hidden="true" />
          </span>
          <span>Back to Activities</span>
        </Link>

        <Surface className="mt-8 overflow-hidden border-white/80 bg-white/70 shadow-[0_30px_90px_rgba(91,33,182,0.12)] sm:mt-10">
          <div className="px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8 lg:px-12 lg:pb-10 lg:pt-10">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-violet-700">
              <span className="h-px w-10 bg-violet-400" />
              <span>{event.event_type || "Featured activity"}</span>
            </div>

            <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.98] tracking-[-0.02em] text-stone-950 sm:text-5xl lg:text-6xl">
              <span className="block">{event.title}</span>
              <span className="mt-4 block h-1.5 w-20 rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-500" />
            </h1>

            {event.category && (
              <p className="mt-4 text-base font-medium text-stone-600 sm:text-lg">
                {event.category}
              </p>
            )}
          </div>

          <div className="grid gap-px border-y border-violet-100 bg-violet-100 sm:grid-cols-2">
            <div className="flex items-center gap-4 bg-white/65 px-5 py-5 sm:px-8 lg:px-12">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <FiCalendar aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-stone-500">
                  Date
                </p>

                <p className="mt-1 text-sm font-bold text-stone-900">
                  {getEventDate()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/65 px-5 py-5 sm:px-8 lg:px-12">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <FiMapPin aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-stone-500">
                  Location
                </p>

                <p className="mt-1 truncate text-sm font-bold text-stone-900">
                  {event.location}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-violet-100 p-3 sm:p-5 lg:p-6">
            <div className="relative">
              <div className="absolute left-5 top-5 z-10 rounded-full bg-stone-950/80 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                Field notes / 01
              </div>

              <Carousel
                images={event.images || []}
                video={event.video}
                title={event.title}
              />
            </div>

            <div className="grid gap-8 border-t border-violet-100 px-2 pb-2 pt-8 sm:px-3 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14 lg:pt-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-700">
                  The story
                </p>

                <h2 className="mt-3 text-3xl font-bold text-stone-950 sm:text-4xl">
                  About this activity
                </h2>

                <div className="mt-5 max-w-3xl whitespace-pre-line text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
                  {event.description}
                </div>
              </div>

              {event.tags?.length > 0 && (
                <div className="lg:border-l lg:border-violet-100 lg:pl-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-500">
                    Themes
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 lg:block">
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={`${event.id}-tag-${tagIndex}`}
                        className="mb-2 mr-1 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-violet-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}

export default Activity;