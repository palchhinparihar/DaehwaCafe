import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiEdit2,
  FiMapPin,
  FiPlus,
  FiTrash2,
  FiImage,
  FiVideo,
} from "react-icons/fi";

import { supabase } from "../lib/supabase";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // -----------------------------
  // Fetch Events
  // -----------------------------
  const fetchEvents = async () => {
    setLoading(true);
    setError("");

    try {
      const { data, error: fetchError } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setEvents(data || []);
    } catch (err) {
      console.error("Error fetching events:", err);

      setError(
        err.message || "Something went wrong while loading events."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // -----------------------------
  // Format Date
  // -----------------------------
  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // -----------------------------
  // Event Status
  // -----------------------------
  const getEventStatus = (date) => {
    if (!date) return "Unknown";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDate = new Date(`${date}T00:00:00`);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate >= today ? "Upcoming" : "Past";
  };

  // -----------------------------
  // Delete Event
  // -----------------------------
  const handleDelete = async (id, title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (!confirmDelete) return;

    try {
      setError("");

      const { error: deleteError } = await supabase
        .from("events")
        .delete()
        .eq("id", id);

      if (deleteError) {
        throw deleteError;
      }

      setEvents((currentEvents) =>
        currentEvents.filter((event) => event.id !== id)
      );
    } catch (err) {
      console.error("Error deleting event:", err);

      setError(
        err.message || "Something went wrong while deleting the event."
      );
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-600">
              Community calendar
            </p>

            <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">
              Manage events
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Create, update, and manage Daehwa Cafe events.
            </p>
          </div>

          <NavLink
            to="/admin/add-event"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-bold !text-white shadow-lg shadow-violet-300/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-300/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            <FiPlus aria-hidden="true" size={17} />
            Add event
          </NavLink>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </div>
        )}

        {/* Events Card */}
        <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(91,33,182,0.12)] backdrop-blur-sm">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-violet-100 px-5 py-4 sm:px-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                All events
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {events.length}{" "}
                {events.length === 1 ? "event" : "events"} in your calendar
              </p>
            </div>

            <span className="hidden rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700 sm:inline-flex">
              Live schedule
            </span>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="px-6 py-16 text-center">
              <p className="text-sm font-medium text-slate-500">
                Loading events...
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
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
                      Category
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-violet-900/70">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-violet-900/70">
                      Media
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-violet-900/70">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {events.length > 0 ? (
                    events.map((event) => {
                      const status = getEventStatus(event.date);

                      return (
                        <tr
                          key={event.id}
                          className="border-b border-violet-100/80 last:border-b-0 hover:bg-violet-50/40"
                        >
                          {/* Event */}
                          <td className="px-6 py-5">
                            <div className="max-w-[260px]">
                              <p className="font-bold text-slate-900">
                                {event.title}
                              </p>

                              <p className="mt-1 text-xs font-medium text-violet-600">
                                {event.event_type}
                              </p>
                            </div>
                          </td>

                          {/* Date */}
                          <td className="px-6 py-5">
                            <p className="whitespace-nowrap text-sm font-medium text-slate-600">
                              {formatDate(event.date)}
                            </p>
                          </td>

                          {/* Location */}
                          <td className="px-6 py-5">
                            <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-600">
                              <FiMapPin
                                aria-hidden="true"
                                className="shrink-0 text-violet-500"
                                size={15}
                              />

                              {event.location || "—"}
                            </span>
                          </td>

                          {/* Category */}
                          <td className="px-6 py-5">
                            {event.category ? (
                              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                {event.category}
                              </span>
                            ) : (
                              <span className="text-sm text-slate-400">
                                —
                              </span>
                            )}
                          </td>

                          {/* Status */}
                          <td className="px-6 py-5">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                                status === "Upcoming"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {status}
                            </span>
                          </td>

                          {/* Media */}
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              {event.images?.length > 0 && (
                                <span
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500"
                                  title={`${event.images.length} image${
                                    event.images.length > 1 ? "s" : ""
                                  }`}
                                >
                                  <FiImage
                                    aria-hidden="true"
                                    className="text-violet-500"
                                    size={15}
                                  />

                                  {event.images.length}
                                </span>
                              )}

                              {event.video && (
                                <span
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500"
                                  title="Video available"
                                >
                                  <FiVideo
                                    aria-hidden="true"
                                    className="text-fuchsia-500"
                                    size={15}
                                  />
                                </span>
                              )}

                              {!event.images?.length && !event.video && (
                                <span className="text-sm text-slate-400">
                                  —
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-5">
                            <div className="flex justify-end gap-2">
                              {/* Edit */}
                              <button
                                type="button"
                                aria-label={`Edit ${event.title}`}
                                title={`Edit ${event.title}`}
                                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-violet-200 text-violet-600 transition hover:border-violet-300 hover:bg-violet-100 hover:text-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                                onClick={() =>
                                  console.log("Edit event:", event.id)
                                }
                              >
                                <FiEdit2
                                  aria-hidden="true"
                                  size={16}
                                />
                              </button>

                              {/* Delete */}
                              <button
                                type="button"
                                aria-label={`Delete ${event.title}`}
                                title={`Delete ${event.title}`}
                                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-rose-200 text-rose-600 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                                onClick={() =>
                                  handleDelete(event.id, event.title)
                                }
                              >
                                <FiTrash2
                                  aria-hidden="true"
                                  size={16}
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-16 text-center"
                      >
                        <p className="text-sm font-semibold text-slate-600">
                          No events found.
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          Add your first event to get started.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;