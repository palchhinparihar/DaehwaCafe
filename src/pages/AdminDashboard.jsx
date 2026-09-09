import React from "react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-violet-600">
          Admin Panel
        </p>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Welcome to Daehwa Cafe
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Manage your events and keep the Daehwa Cafe website up to date.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <NavLink
          to="/admin/events"
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
            📅
          </div>

          <h2 className="text-xl font-semibold text-slate-900">
            Manage Events
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add new events, update existing events, or remove events from the
            website.
          </p>

          <span className="mt-5 inline-block text-sm font-semibold text-violet-600 transition group-hover:translate-x-1">
            Manage events →
          </span>
        </NavLink>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
            🌐
          </div>

          <h2 className="text-xl font-semibold text-slate-900">
            View Website
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Open the public Daehwa Cafe website and see how visitors see your
            content.
          </p>

          <NavLink
            to="/"
            className="mt-5 inline-block text-sm font-semibold text-violet-600 transition hover:translate-x-1"
          >
            Visit website →
          </NavLink>
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 rounded-3xl border border-violet-100 bg-violet-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          What can you manage?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          The admin panel currently focuses on managing Daehwa Cafe events.
          More management features can be added later if needed.
        </p>
      </div>
    </section>
  );
};

export default AdminDashboard;