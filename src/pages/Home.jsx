const highlights = [
  {
    title: 'DAEHWA Cafe Community',
    description: 'A warm space for shared learning, open discussion, and steady growth together.',
  },
  {
    title: 'DAEHWA Cafe TalkRoom',
    description: 'A focused room for conversation, support, and ideas that help people move forward.',
  },
];

const pillars = ['Logo', 'Mascot', 'Growth', 'Support'];

function Home() {
  return (
    <main id="home" className="min-h-screen scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(241,232,255,0.95),_transparent_42%),linear-gradient(180deg,_#fbf7ff_0%,_#f5eeff_54%,_#efe6ff_100%)] text-stone-900">
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-12">
        <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute right-[-7rem] top-16 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/70 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              WELCOME TO DAEHWA CAFE
            </div>

            <h1 className="max-w-2xl text-5xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl lg:text-8xl">
              DAEHWA
              <span className="block text-purple-700">Cafe</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
              A community built for meaningful talk, shared growth, and the kind of support that helps everyone move forward together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {pillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-[0_20px_50px_rgba(120,82,40,0.08)] backdrop-blur"
                >
                  <h2 className="text-lg font-bold text-stone-900">{highlight.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{highlight.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-purple-200/80 bg-stone-950 px-6 py-5 text-stone-50 shadow-[0_24px_60px_rgba(37,24,15,0.22)] sm:flex sm:items-end sm:justify-between sm:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">Tagline</p>
                <p className="mt-2 max-w-xl text-xl font-medium leading-8 text-stone-50 sm:text-2xl">
                  “Grow Yourself and Help Others Grow.”
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-purple-200 sm:mt-0">
                <span className="h-2 w-2 rounded-full bg-purple-300" />
                Community first
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-x-8 top-10 h-72 rounded-[2.5rem] bg-stone-900/10 blur-2xl" />
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(91,53,26,0.18)] backdrop-blur">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                <span>Cover Page</span>
                <span>01</span>
              </div>

              <div className="mt-6 rounded-[1.75rem] bg-[linear-gradient(180deg,_#1f130d_0%,_#3d2517_100%)] px-6 py-7 text-stone-50 shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-200">DAEHWA Cafe</p>
                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-100/80">Logo</p>
                  <div className="mt-4 flex h-28 items-center justify-center rounded-[1.25rem] border border-dashed border-purple-200/40 bg-white/5 text-center text-2xl font-black tracking-[0.18em] text-purple-50">
                    DAEHWA
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-purple-50 px-5 py-5 text-stone-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-700">Mascot</p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-200 text-2xl">
                      ☕
                    </div>
                    <div>
                      <p className="font-bold">Warm, friendly, and welcoming</p>
                      <p className="mt-1 text-sm text-stone-600">A face that represents support, conversation, and growth.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold text-stone-700">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">Community</div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">TalkRoom</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
