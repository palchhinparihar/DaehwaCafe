import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiEdit2, FiMapPin, FiPlus, FiTrash2 } from "react-icons/fi";

const ManageEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Korean Cultural Workshop",
      date: "2026-08-15",
      location: "New Delhi",
      status: "Past",
    },
    {
      id: 2,
      title: "Korean Language Meetup",
      date: "2026-09-20",
      location: "New Delhi",
      status: "Upcoming",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    setEvents((currentEvents) =>
      currentEvents.filter((event) => event.id !== id)
    );
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-600">
              Community calendar
            </p>
            <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">
              Manage events
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Keep workshops, meetups, and cultural gatherings up to date.
            </p>
          </div>

          <NavLink
            to="/admin/add-event"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-300/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-300/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            <FiPlus aria-hidden="true" size={17} />
            Add event
          </NavLink>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(91,33,182,0.12)] backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-violet-100 px-5 py-4 sm:px-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">All events</h2>
              <p className="mt-1 text-sm text-slate-500">
                {events.length} {events.length === 1 ? "event" : "events"} in your calendar
              </p>
            </div>
            <span className="hidden rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700 sm:inline-flex">
              Live schedule
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left">
              <thead className="border-b border-violet-100 bg-violet-50/60">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-violet-900/70">
                    Event
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-violet-900/70">
                    Date
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-violet-900/70">
                    Location
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-violet-900/70">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-violet-900/70">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {events.length > 0 ? (
                  events.map((event) => (
                    <tr
                      key={event.id}
                      className="border-b border-violet-100/80 last:border-b-0 hover:bg-violet-50/40"
                    >
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-900">
                          {event.title}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-slate-600">
                        {event.date}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-slate-600">
                        <span className="inline-flex items-center gap-2">
                          <FiMapPin aria-hidden="true" className="text-violet-500" />
                          {event.location}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                            event.status === "Upcoming"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {event.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            aria-label={`Edit ${event.title}`}
                            title={`Edit ${event.title}`}
                            className="inline-flex cursor-pointer h-9 w-9 items-center justify-center rounded-full border border-violet-200 text-violet-600 transition hover:border-violet-300 hover:bg-violet-100 hover:text-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                            onClick={() =>
                              console.log("Edit event:", event.id)
                            }
                          >
                            <FiEdit2 aria-hidden="true" size={16} />
                          </button>

                          <button
                            type="button"
                            aria-label={`Delete ${event.title}`}
                            title={`Delete ${event.title}`}
                            className="inline-flex cursor-pointer h-9 w-9 items-center justify-center rounded-full border border-rose-200 text-rose-600 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                            onClick={() => handleDelete(event.id)}
                          >
                            <FiTrash2 aria-hidden="true" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-16 text-center text-sm text-slate-500"
                    >
                      No events found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;