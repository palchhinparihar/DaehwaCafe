import { footerSections } from "../../data/footerData";
import { socialLinks } from "../../data/socialLinks";
import { FiArrowUpRight } from "react-icons/fi";

function Footer() {
	return (
		<footer className="relative text-stone-300 overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.28),_transparent_40%),linear-gradient(180deg,_#120e22_0%,_#090611_100%)]">
			{/* Background Blur */}
			<div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

			<div className="relative mx-auto flex max-w-7xl flex-col px-6 py-20 sm:px-8 lg:px-12">
				{/* ================= HERO ================= */}
				<div className="grid gap-16 lg:grid-cols-[1.4fr_0.9fr]">
					{/* Left */}
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.45em] text-violet-200">
							DAEHWA CAFE
						</p>

						<h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
							Grow Yourself.
							<span className="mt-2 block text-violet-200">
								Help Others Grow.
							</span>
						</h2>

						<p className="mt-8 max-w-2xl text-base leading-8 text-stone-300">
							DAEHWA Cafe brings together passionate people through culture,
							conversations, learning, collaboration and youth-driven
							opportunities. Whether you're here to connect, contribute or
							simply grow, you're always welcome.
						</p>

						<a
							href="#contact"
							className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(124,58,237,0.35)]"
						>
							Partner With DAEHWA
							<FiArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
						</a>
					</div>

					{/* Right Quote */}
					<div className="flex items-end lg:justify-end">
						<div className="max-w-sm border-l border-violet-500/40 pl-8">
							<span className="text-5xl leading-none text-violet-300">
								“
							</span>
							<p className="mt-4 text-lg leading-9 text-stone-300">
								We believe communities are built through meaningful
								conversations, shared experiences and people willing to help
								each other grow.
							</p>
							<div className="mt-8 h-px w-16 bg-violet-400" />
							<p className="mt-4 text-xs uppercase tracking-[0.35em] text-violet-200">
								DAEHWA CAFE
							</p>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

				{/* ================= LINKS ================= */}
				<div className="grid gap-16 lg:grid-cols-[1fr_1fr_1fr]">
					{/* Brand */}
					<div>
						<h3 className="text-2xl font-bold text-white">
							Building a community that inspires learning, culture &
							opportunities.
						</h3>
						<p className="mt-6 max-w-sm leading-8 text-stone-400">
							Join a growing network where people share ideas, collaborate on
							projects and create opportunities together.
						</p>
					</div>
					{/* Explore */}
					<div>
						<h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">
							Explore
						</h3>
						<ul className="space-y-5">
							{footerSections.map((section) =>
								section.links.map((link, index) => (
									<li key={link}>
										<a
											href={section.hrefs[index]}
											className="group inline-flex items-center gap-3 text-stone-300 text-sm transition-all duration-300 hover:text-purple-200!"
										>
											<span className="h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-8" />
											<span>{link}</span>
											<FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
										</a>
									</li>
								))
							)}
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">
							Connect
						</h3>

						<ul className="space-y-6">
							{socialLinks.map((link) => {
								const Icon = link.icon;
								return (
									<li key={link.title}>
										<div className="flex items-start gap-4">
											<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:border-violet-500 hover:bg-violet-500/10">
												<Icon className="text-base text-violet-200" />
											</div>

											<div>
												<p className="mb-2 text-xs uppercase tracking-[0.25em] text-stone-200">
													{link.title}
												</p>
												{Array.isArray(link.href) ? (
													<div className="space-y-2">
														{link.href.map((href, index) => (
															<a
																key={href}
																href={href}
																aria-label={link.ariaLabel}
																className="group flex w-fit items-center gap-2 text-stone-300 text-sm transition hover:text-purple-200!"
															>
																<span>{link.username[index]}</span>
																<FiArrowUpRight className="text-xs opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
															</a>
														))}
													</div>
												) : (
													<a
														href={link.href}
														aria-label={link.ariaLabel}
														className="group flex w-fit items-center gap-2 text-stone-300 text-sm transition hover:text-purple-200!"
													>
														<span>{link.username}</span>
														<FiArrowUpRight className="text-xs opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
													</a>
												)}
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="my-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
				{/* ================= BOTTOM ================= */}
				<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
					{/* Left */}
					<div>
						<p className="max-w-xl text-2xl font-semibold leading-relaxed text-white">
							Growing together, one conversation at a time.
						</p>
						<p className="mt-5 max-w-lg leading-8 text-stone-400">
							Whether you're a student, creator, professional or simply
							someone who loves meaningful conversations, DAEHWA Cafe is a
							place where ideas become opportunities.
						</p>
					</div>

					{/* Right */}
					<div className="text-left lg:text-right">
						<p className="text-sm uppercase tracking-[0.3em] text-violet-200">
							Let's Build Together
						</p>
						<a
							href="#contact"
							className="group mt-4 inline-flex items-center gap-3 text-lg font-semibold text-white transition hover:text-purple-200!"
						>
							Contact Us
							<FiArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
						</a>
					</div>
				</div>

				{/* ================= COPYRIGHT ================= */}
				<div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
					<p>
						© 2026 <span className="font-semibold text-stone-300">DAEHWA Cafe</span>. All rights reserved.
					</p>
					<p className="text-stone-400">
						Built for community growth, cultural exchange & lifelong learning.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;