import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import Carousel from "./Carousel.jsx";
import { Surface } from "./Ui.jsx";

const DESCRIPTION_LIMIT = 100;

function EventCard({ event, index }) {
  const description = event.description || "";
  const isLongDescription = description.length > DESCRIPTION_LIMIT;

  const shortDescription = isLongDescription
    ? `${description.slice(0, DESCRIPTION_LIMIT).trim()}...`
    : description;

  return (
    <Surface
      className="overflow-hidden p-6 lg:p-8"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 ${
          index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
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

            <div className="flex shrink-0 flex-row justify-between gap-4 border-t-2 border-violet-300 pt-3 sm:flex-col sm:items-end sm:gap-2 sm:border-l-2 sm:border-t-0 sm:pl-4 sm:pt-0">
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

          {/* Category */}
          {event.category && (
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-300" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                {event.category}
              </p>
            </div>
          )}

          {/* Description */}
          <p className="mt-5 whitespace-pre-line text-base leading-8 text-stone-600">
            {shortDescription}

            {/* Show More */}
            {isLongDescription && (
              <Link
                to={`/activity/${event.id}`}
                className="group inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-1 text-sm font-bold leading-none !text-violet-600 transition duration-200 hover:-translate-y-0.5 hover:!text-violet-800 hover:!underline"
              >
                Show More

                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            )}
          </p>

          {/* Tags */}
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
  );
}

export default EventCard;