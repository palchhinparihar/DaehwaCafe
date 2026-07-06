import React, { useState } from 'react';
import FullLogo from "../../assets/full_logo.png";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-violet-300 via-violet-400 to-purple-400 shadow-[0_18px_50px_rgba(15,11,28,0.28)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:py-1 sm:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center"
          onClick={handleNavigate}
        >
          <img
            src={FullLogo}
            alt="DAEHWA Cafe Community and TalkRoom"
            className="h-12 w-auto md:h-20"
          />
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-violet-300 hover:text-white 2xl:px-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full border border-violet-300/20 bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 transition duration-300 hover:-translate-y-1 hover:shadow-violet-300/40 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/12"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-stone-100 transition hover:bg-white/10 xl:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-200 ${isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-200 ${isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`} />
          </span>
        </button>
      </nav>

      <div className={`${isOpen ? 'max-h-[34rem] border-t border-white/10 opacity-100' : 'max-h-0 border-t border-transparent opacity-0'} overflow-hidden transition-all duration-300 xl:hidden`}>
        <div className="mx-auto grid max-w-7xl gap-2 px-6 py-4 sm:px-8 lg:px-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavigate}
              className="rounded-2xl border border-white/10 bg-purple-100 px-4 py-3 text-sm font-medium text-stone-200 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavigate}
            className="mt-2 rounded-2xl bg-[linear-gradient(135deg,#7c3aed_0%,#a855f7_52%,#4f46e5_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(79,70,229,0.22)]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
