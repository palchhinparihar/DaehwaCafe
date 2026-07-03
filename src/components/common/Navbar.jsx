import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Services', href: '#services' },
  { label: 'Activities', href: '#activities' },
  { label: 'Future Projects', href: '#future-projects' },
  { label: 'Collaborate', href: '#collaborate' },
  { label: 'What We Can Provide', href: '#what-we-can-provide' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 text-stone-50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3 text-left" onClick={handleNavigate}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-black tracking-[0.18em] text-purple-200 shadow-[0_16px_30px_rgba(0,0,0,0.2)]">
            D
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">DAEHWA Cafe</span>
            <span className="block text-sm text-stone-300">Community and TalkRoom</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
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
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;