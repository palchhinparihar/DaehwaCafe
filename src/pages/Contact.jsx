import { CardList, SectionHeading, Surface } from '../components/common/Ui.jsx';

const contactItems = [
  {
    id: 'community-email',
    title: 'Official Email',
    subtitle: 'DAEHWA Cafe Community',
    description: 'Add the official community email address here.',
  },
  {
    id: 'talkroom-email',
    title: 'Official Email',
    subtitle: 'DAEHWA Cafe TalkRoom',
    description: 'Add the official TalkRoom email address here.',
  },
  {
    id: 'instagram',
    title: 'Official Instagram',
    subtitle: 'Social media profile',
    description: 'Add the official Instagram handle or profile link.',
  },
  {
    id: 'facebook',
    title: 'Official Facebook',
    subtitle: 'Social media page',
    description: 'Add the official Facebook page link.',
  },
  {
    id: 'website',
    title: 'Official Website',
    subtitle: '(if available)',
    description: 'Add the official website link if one is available.',
  },
  {
    id: 'qr-code',
    title: 'QR Code',
    subtitle: 'Quick access',
    description: 'Place the QR code here for contact or social links.',
  },
  {
    id: 'contact-number',
    title: 'Contact Number',
    subtitle: '(if appropriate)',
    description: 'Add the contact number only if you want it displayed.',
  },
];

function Contact() {
  return (
    <main id="contact" className="min-h-screen scroll-mt-28 bg-[radial-gradient(circle_at_top,_rgba(246,237,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#f6efff_48%,_#efe4ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeading
          badge="Contact Information"
          title="Let’s stay"
          accent="Connected"
          description="Use these slots for the official DAEHWA Cafe Community and DAEHWA Cafe TalkRoom contact details."
        />

        <div className="grid gap-0 overflow-hidden border border-violet-100 bg-white/75 shadow-[0_24px_70px_rgba(91,33,182,0.08)] md:grid-cols-2 xl:grid-cols-3">
          {contactItems.map((item) => (
            <article
              key={`${item.title}-${item.subtitle}`}
              id={item.id}
              className="border-b border-r border-violet-100 px-5 py-6 last:border-b-0 xl:[&:nth-child(3n)]:border-r-0"
              data-aos="fade-up"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">{item.title}</p>
              <h2 className="mt-3 text-2xl font-bold text-stone-950">{item.subtitle}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Surface className="p-7" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Closing Page</p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950">Thank you</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              “We look forward to building meaningful collaborations and creating opportunities together.”
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-violet-700">DAEHWA Cafe</p>
            <p className="mt-3 text-xl font-medium leading-8 text-stone-900">
              “Grow Yourself and Help Others Grow.”
            </p>
          </Surface>

          <Surface className="p-7 bg-[linear-gradient(180deg,rgba(46,16,101,0.98),rgba(17,11,37,1))] text-white" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Contact Page Note</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Ready for official details</h2>
            <p className="mt-3 text-sm leading-7 text-violet-100/80">
              This page is structured to hold the official email addresses, social media links, website, QR code, and contact number whenever they are ready to publish.
            </p>
          </Surface>
        </div>
      </section>
    </main>
  );
}

export default Contact;