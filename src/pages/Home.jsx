import { CardList, Chip, Metric, SectionBadge, Surface } from '../components/common/Ui.jsx';

const highlights = [
  'A community space for shared learning, culture, and meaningful collaboration.',
  'TalkRoom focuses on practical Korean learning, confidence, and guidance.',
  'Programs are designed to feel modern, credible, and useful for partners.',
];

const pillars = ['Community', 'TalkRoom', 'Culture', 'Growth'];

function Home() {
  return (
    <section id="home" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(241,232,255,0.94),_transparent_42%),linear-gradient(180deg,_#fffdfd_0%,_#f7f1ff_54%,_#ece4ff_100%)] text-stone-900">
      <section className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-violet-300/40 blur-3xl" />
        <div className="absolute right-[-7rem] top-16 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-300/20 blur-3xl" />

        <div className="relative grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            <SectionBadge>WELCOME TO DAEHWA CAFE</SectionBadge>

            <h1 className="mt-6 max-w-2xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-stone-950 sm:text-6xl lg:text-8xl">
              Purple-led
              <span className="block bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-500 bg-clip-text text-transparent">
                DAEHWA Cafe
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              A modern community platform for Korean culture, practical learning, and partnerships that feel credible,
              polished, and easy to understand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-[linear-gradient(135deg,#7c3aed_0%,#a855f7_52%,#4f46e5_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(79,70,229,0.18)] transition hover:-translate-y-0.5"
              >
                Explore services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-violet-200/80 bg-white/75 px-6 py-3 text-sm font-semibold text-violet-800 shadow-[0_12px_25px_rgba(91,33,182,0.08)] transition hover:bg-white"
              >
                Contact us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {pillars.map((item, index) => (
                <Chip key={item} tone={index === 1 ? 'indigo' : 'violet'}>
                  {item}
                </Chip>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3" data-aos="fade-up" data-aos-delay="250">
              <Metric value="2" label="Focused divisions: Community and TalkRoom" />
              <Metric value="80+" label="Active interns and volunteers driving activity" />
              <Metric value="India → Korea" label="A clear bridge for culture, education, and exchange" />
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((highlight) => (
                <Surface key={highlight} className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Highlight</p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{highlight}</p>
                </Surface>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="180">
            <div className="absolute inset-x-8 top-10 h-72 rounded-[2.5rem] bg-stone-900/10 blur-2xl" />
            <Surface className="relative w-full max-w-md p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                <span>Brand board</span>
                <span>01</span>
              </div>

              <div className="mt-6 rounded-[1.75rem] bg-[linear-gradient(180deg,_#2e1065_0%,_#6d28d9_100%)] px-6 py-7 text-white shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-200">DAEHWA Cafe</p>
                <div className="mt-5 border-l border-white/20 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-100/80">Visual direction</p>
                  <div className="mt-4 flex h-28 items-center justify-center rounded-[1.25rem] border border-dashed border-violet-200/40 bg-white/5 text-center text-2xl font-black tracking-[0.18em] text-violet-50">
                    DAEHWA
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200">Tone</p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl">
                      ☕
                    </div>
                    <div>
                      <p className="font-bold text-white">Warm, credible, and welcoming</p>
                      <p className="mt-1 text-sm text-violet-100/80">A brand surface that feels premium and easy to trust.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold text-stone-700 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-violet-100 bg-violet-50 px-5 py-4 text-center">Community</div>
                <div className="rounded-[1.25rem] border border-indigo-100 bg-indigo-50 px-5 py-4 text-center">TalkRoom</div>
                <div className="rounded-[1.25rem] border border-fuchsia-100 bg-fuchsia-50 px-5 py-4 text-center col-span-2 sm:col-span-1">Partnerships</div>
              </div>
            </Surface>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
