import { FiArrowUpRight } from "react-icons/fi";
import { SectionHeading, Surface } from "../components/layout/Ui.jsx";
import { socialLinks } from "../data/socialLinks";

function Contact() {
  // Flatten all social links for the closing quick-action buttons
  const contactCards = socialLinks.flatMap((item) => {
    if (Array.isArray(item.href)) {
      return item.href.map((href, index) => ({
        id: `${item.title.toLowerCase().replace(/\s+/g, "-")}-${index}`,
        icon: item.icon,
        label: item.title,
        href,
      }));
    }

    return [
      {
        id: item.title.toLowerCase().replace(/\s+/g, "-"),
        icon: item.icon,
        label: item.title,
        href: item.href,
      },
    ];
  });

  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-28 bg-[radial-gradient(circle_at_top,_rgba(246,237,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#f6efff_48%,_#efe4ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12"
    >
      <section className="mx-auto flex flex-col gap-14">
        <SectionHeading
          badge="Contact Information"
          title="Let's stay"
          accent="Connected"
          description="Reach DAEHWA Cafe Community and DAEHWA Cafe TalkRoom through our official communication channels."
        />

        <Surface className="mx-auto w-full overflow-hidden p-0 backdrop-blur-sm md:w-[75%]">
          <div className="divide-y divide-violet-100">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              const rows = Array.isArray(item.href)
                ? item.href.map((href, index) => ({
                    title:
                      item.title === "LinkedIn"
                        ? "DAEHWA Cafe"
                        : index === 0
                        ? "DAEHWA Cafe Community"
                        : "DAEHWA Cafe TalkRoom",
                    value: Array.isArray(item.username)
                      ? item.username[index]
                      : item.username,
                    href,
                  }))
                : [
                    {
                      title: "DAEHWA Cafe",
                      value: item.username,
                      href: item.href,
                    },
                  ];

              return (
                <div
                  key={item.title}
                  className="grid gap-10 p-8 md:p-10 lg:grid-cols-[240px_1fr]"
                >
                  {/* Left Side */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                      <Icon className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700">
                        Official
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-stone-900 md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="space-y-4">
                                        {rows.map((row) => (
                      <a
                        key={row.href}
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                        className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 transition-all duration-300 hover:border-violet-200 hover:bg-violet-50/70"
                      >
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 md:text-sm">
                            {row.title}
                          </p>

                          <p className="mt-2 text-sm font-semibold text-stone-900 transition-colors duration-300 group-hover:text-violet-700 md:text-lg">
                            {row.value}
                          </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-violet-700 group-hover:text-white">
                          <FiArrowUpRight className="text-lg" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Surface>
                {/* Closing Section */}
        <div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          data-aos="fade-up"
        >
          <span className="rounded-full border border-violet-200 bg-violet-100/70 px-5 py-2 text-sm font-semibold tracking-wide text-violet-700">
            Thank You 💜
          </span>

          <h2 className="mt-6 text-3xl font-bold text-stone-900 md:text-4xl">
            We look forward to connecting with you.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Whether you're interested in Korean language learning, cultural
            exchange, partnerships, volunteering, or simply becoming part of
            our growing community, we'd love to hear from you.
          </p>

          <p className="mt-8 max-w-3xl text-lg italic font-medium text-violet-700">
            “We look forward to building meaningful collaborations and creating
            opportunities together.”
          </p>
        </div>
      </section>
    </section>
  );
}

export default Contact;