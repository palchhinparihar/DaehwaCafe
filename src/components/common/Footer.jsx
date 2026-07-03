const footerSections = [
	{
		title: 'Explore',
		links: ['Home', 'About', 'Leadership', 'Services', 'Activities', 'Future Projects'],
	},
	{
		title: 'Connect',
		links: ['Official Email', 'Instagram', 'Facebook', 'Website', 'Contact Number'],
	},
];

function Footer() {
	return (
		<footer className="border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.28),_transparent_34%),linear-gradient(180deg,_#160f2e_0%,_#0c0818_100%)] px-6 py-12 text-stone-100 sm:px-8 lg:px-12">
			<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
				<section>
					<p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">DAEHWA Cafe</p>
					<h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
						Grow Yourself
						<span className="block text-purple-300">and Help Others Grow.</span>
					</h2>
					<p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
						DAEHWA Cafe Community and DAEHWA Cafe TalkRoom build opportunities for cultural exchange, learning, youth development, and meaningful collaboration.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						{['Community', 'TalkRoom', 'Culture', 'Learning'].map((item) => (
							<span
								key={item}
								className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-200"
							>
								{item}
							</span>
						))}
					</div>
				</section>

				<section className="grid gap-6 sm:grid-cols-2">
					{footerSections.map((section) => (
						<article key={section.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
							<h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">{section.title}</h3>
							<ul className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
								{section.links.map((link) => (
									<li key={link} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
										{link}
									</li>
								))}
							</ul>
						</article>
					))}
				</section>
			</div>

			<div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
				<p>© 2026 DAEHWA Cafe. All rights reserved.</p>
				<p>Built for community growth, cultural exchange, and shared learning.</p>
			</div>
		</footer>
	);
}

export default Footer;
