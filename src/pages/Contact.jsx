import { FiArrowUpRight } from "react-icons/fi";
import { SectionHeading, Surface } from "../components/layout/Ui.jsx";
import { socialLinks } from "../data/socialLinks";

function Contact() {
  const contactCards = socialLinks.flatMap((item) => {
    // Handle LinkedIn separately (only one account)
    if (!Array.isArray(item.href)) {
      return [
        {
          id: item.title.toLowerCase().replace(/\s+/g, "-"),
          icon: item.icon,
          title: "DAEHWA Cafe",
          label: item.title,
          value: item.username,
          href: item.href,
          accent: "from-sky-600 to-blue-500",
        },
      ];
    }

    return item.href.map((href, index) => {
      const isCommunity = index === 0;

      let accent = "from-violet-600 to-fuchsia-500";

      switch (item.title) {
        case "Mail Us":
          accent = isCommunity
            ? "from-violet-600 to-fuchsia-500"
            : "from-indigo-600 to-sky-500";
          break;

        case "Instagram":
          accent = "from-rose-500 to-orange-500";
          break;

        case "Phone Number":
          accent = "from-emerald-500 to-teal-500";
          break;

        default:
          break;
      }

      return {
        id: `${item.title.toLowerCase().replace(/\s+/g, "-")}-${index}`,
        icon: item.icon,
        title: isCommunity
          ? "DAEHWA Cafe Community"
          : "DAEHWA Cafe TalkRoom",
        label: item.title,
        value: item.username[index],
        href,
        accent,
      };
    });
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

        <Surface className="w-full md:w-[75%] mx-auto overflow-hidden p-0 backdrop-blur-sm">
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
                  className="grid gap-8 p-8 lg:grid-cols-[220px_1fr]"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <Icon className="text-2xl text-stone-700" />

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-violet-700">
                        Contact
                      </p>

                      <h3 className="mt-1 text-xl md:text-2xl font-bold text-stone-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="space-y-5">
                    {rows.map((row) => (
                      <a
                        key={row.href}
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                        className="group flex items-center justify-between border-b border-violet-100 pb-4 last:border-none last:pb-0"
                      >
                        <div>
                          <p className="text-xs md:text-sm font-medium text-stone-500">
                            {row.title}
                          </p>

                          <p className="mt-1 text-sm md:text-lg font-semibold text-stone-900 transition-colors group-hover:text-violet-700">
                            {row.value}
                          </p>
                        </div>

                        <FiArrowUpRight className="text-xl text-stone-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-700" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Surface>
      </section>
    </section>
  );
}

export default Contact;