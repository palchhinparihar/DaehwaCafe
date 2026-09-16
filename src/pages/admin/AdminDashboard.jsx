import React from "react";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight, FiCalendar, FiGlobe, FiInfo } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-300/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-indigo-300/20 blur-[120px]" />

      {/* Header */}
      <div className="relative mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
          Admin Panel
        </p>

        <h1 className="text-4xl font-black leading-tight text-stone-900 md:text-5xl">
          Welcome to Daehwa Cafe
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
          Manage your events and keep the Daehwa Cafe website up to date.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="relative grid gap-6 md:grid-cols-2">
        <NavLink
          to="/admin/events"
          className="group rounded-3xl border border-violet-200/80 bg-white/80 p-7 shadow-[0_20px_70px_rgba(91,33,182,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_30px_80px_rgba(91,33,182,0.16)]"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition duration-300 group-hover:bg-violet-700 group-hover:text-white">
            <FiCalendar size={25} aria-hidden="true" />
          </div>

          <h2 className="text-xl font-bold text-stone-900">
            Manage Events
          </h2>

          <p className="mt-3 text-sm leading-6 text-stone-600">
            Add new events, update existing events, or remove events from the
            website.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-700">
            Manage events
            <FiArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </NavLink>

        <div className="group cursor-pointer rounded-3xl border border-indigo-200/80 bg-white/80 p-7 shadow-[0_20px_70px_rgba(79,70,229,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_30px_80px_rgba(79,70,229,0.16)]">
          <NavLink
            to="/"
            className="mt-6 text-sm font-bold text-indigo-700"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 transition duration-300 group-hover:bg-indigo-700 group-hover:text-white">
            <FiGlobe size={25} aria-hidden="true" />
          </div>

          <h2 className="text-xl font-bold text-stone-900">
            View Website
          </h2>

          <p className="mt-3 text-sm leading-6 font-normal text-stone-600">
            Open the public Daehwa Cafe website and see how visitors see your
            content.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
            Visit Website
            <FiArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
          </NavLink>
        </div>
      </div>

      {/* Info */}
      <div className="relative mt-8 flex gap-4 rounded-3xl border border-fuchsia-200/70 bg-gradient-to-r from-violet-50/90 via-fuchsia-50/70 to-indigo-50/90 p-6 shadow-[0_18px_60px_rgba(124,58,237,0.06)]">
        <FiInfo
          size={22}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-fuchsia-700"
        />

        <div>
          <h2 className="text-lg font-bold text-stone-900">
          What can you manage?
          </h2>

          <p className="mt-2 text-sm leading-6 text-stone-600">
            The admin panel currently focuses on managing Daehwa Cafe events.
            More management features can be added later if needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;