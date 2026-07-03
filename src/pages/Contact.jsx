const contactItems = [
  {
    title: 'Official Email',
    subtitle: 'DAEHWA Cafe Community',
    description: 'Add the official community email address here.',
  },
  {
    title: 'Official Email',
    subtitle: 'DAEHWA Cafe TalkRoom',
    description: 'Add the official TalkRoom email address here.',
  },
  {
    title: 'Official Instagram',
    subtitle: 'Social media profile',
    description: 'Add the official Instagram handle or profile link.',
  },
  {
    title: 'Official Facebook',
    subtitle: 'Social media page',
    description: 'Add the official Facebook page link.',
  },
  {
    title: 'Official Website',
    subtitle: '(if available)',
    description: 'Add the official website link if one is available.',
  },
  {
    title: 'QR Code',
    subtitle: 'Quick access',
    description: 'Place the QR code here for contact or social links.',
  },
  {
    title: 'Contact Number',
    subtitle: '(if appropriate)',
    description: 'Add the contact number only if you want it displayed.',
  },
];

function Contact() {
  return (
    <main id="contact" className="min-h-screen scroll-mt-28 bg-[radial-gradient(circle_at_top,_rgba(246,237,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdf9_0%,_#f6efff_48%,_#efe4ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium tracking-[0.2em] text-stone-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            CONTACT INFORMATION
          </div>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-6xl">
            Let’s Stay
            <span className="block text-purple-700">Connected</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            The following contact details are listed from the README and can be filled with the official information for DAEHWA Cafe Community and DAEHWA Cafe TalkRoom.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contactItems.map((item) => (
            <article
              key={`${item.title}-${item.subtitle}`}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_70px_rgba(120,82,40,0.12)] backdrop-blur"
              data-aos="fade-up"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">{item.title}</p>
              <h2 className="mt-3 text-2xl font-bold text-stone-950">{item.subtitle}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_24px_70px_rgba(37,24,15,0.24)]" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">Closing Page</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Thank You</h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              “We look forward to building meaningful collaborations and creating opportunities together.”
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-purple-200">DAEHWA Cafe</p>
            <p className="mt-3 text-xl font-medium leading-8 text-stone-50">
              “Grow Yourself and Help Others Grow.”
            </p>
          </article>

          <article className="rounded-[2rem] border border-stone-200 bg-white/80 p-7 shadow-[0_24px_70px_rgba(120,82,40,0.1)] backdrop-blur" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">Contact Page Note</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-950">Ready for official details</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              This page is structured to hold the official email addresses, social media links, website, QR code, and contact number whenever they are ready to publish.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Contact;