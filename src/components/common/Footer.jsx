import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import { navLinks } from "../../data/navLinks";
import { socialLinks } from "../../data/socialLinks";

function Footer() {
	return (
		<footer className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_transparent_45%),linear-gradient(180deg,_#120e22_0%,_#090611_100%)] text-stone-300">
			{/* Background Glow */}
			<div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

			<div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8 lg:px-12">
				{/* ================= MAIN GRID ================= */}
				<div className="grid gap-14 lg:grid-cols-[1.15fr_0.9fr_1fr]">
					{/* ================= BRAND ================= */}
					<div>
						<NavLink
							to="/"
							className="flex gap-2 shrink-0 items-center"
						>
							<img
								src={Logo}
								alt="DAEHWA Cafe Community and TalkRoom"
								className="h-12 w-auto md:h-20"
							/>

							<p className="text-sm font-semibold uppercase tracking-[0.4em] text-violet-200">
								DAEHWA CAFE
							</p>
						</NavLink>

						<h2 className="mt-5 text-3xl font-bold leading-tight text-white">
							A community built around conversations, culture and growth.
						</h2>

						<p className="mt-6 max-w-md leading-8 text-stone-400">
							Join a welcoming space where students, creators,
							professionals and enthusiasts connect through meaningful
							conversations, collaborative projects and shared learning
							experiences.
						</p>
					</div>

					{/* ================= EXPLORE ================= */}
					<div>
						<h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">
							Explore
						</h3>

						<ul className="space-y-4">
							{navLinks.map((link) => (
								<li key={link.path}>
									<NavLink
										to={link.path}
										className="group inline-flex items-center gap-3 text-sm text-stone-300 transition-all duration-300 hover:text-violet-200"
										>
											<span className="h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-7" />

											<span>{link.label}</span>

											<FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
										</NavLink>
									</li>
								))}
						</ul>
					</div>

					{/* ================= CONNECT ================= */}
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
											<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10">
												<Icon className="text-base text-violet-200" />
											</div>

											<div>
												<p className="mb-2 text-xs uppercase tracking-[0.25em] text-stone-200">
													{link.title}
												</p>

												<div className="space-y-2">
													{Array.isArray(link.href) ? (
														link.href.map((href, index) => (
															<a
																key={href}
																href={href}
																target="_blank"
																rel="noopener noreferrer"
																aria-label={link.ariaLabel}
																className="group flex w-fit items-center gap-2 text-sm text-stone-300 transition duration-300 hover:text-violet-200"
															>
																<span>
																	{link.username[index]}
																</span>

																<FiArrowUpRight className="text-xs opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
															</a>
														))
													) : (
														<a
															href={link.href}
															target="_blank"
															rel="noopener noreferrer"
															aria-label={link.ariaLabel}
															className="group flex w-fit items-center gap-2 text-sm text-stone-300 transition duration-300 hover:text-violet-200"
														>
															<span>
																{link.username}
															</span>

															<FiArrowUpRight className="text-xs opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
														</a>
													)}
												</div>
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

				{/* ================= COPYRIGHT ================= */}
				<div className="flex flex-col gap-4 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">

					<p>
						© 2026{" "}
						<span className="font-medium text-stone-300">
							DAEHWA Cafe
						</span>
						. All rights reserved.
					</p>

					<p className="text-stone-400">
						Built for community, collaboration & lifelong learning.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;