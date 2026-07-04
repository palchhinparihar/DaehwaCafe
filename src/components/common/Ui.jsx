function SectionBadge({ children, className = '' }) {
	return (
		<div className={`inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 shadow-sm backdrop-blur ${className}`}>
			<span className="h-2 w-2 rounded-full bg-violet-500" />
			{children}
		</div>
	);
}

function SectionHeading({ badge, title, accent, description, align = 'left', className = '' }) {
	return (
		<div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-4xl ${className}`}>
			{badge ? <SectionBadge className={align === 'center' ? 'mx-auto' : ''}>{badge}</SectionBadge> : null}
			<h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-5xl">
				{title}
				{accent ? <span className="block bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-500 bg-clip-text text-transparent">{accent}</span> : null}
			</h2>
			{description ? <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">{description}</p> : null}
		</div>
	);
}

function Surface({ children, className = '', ...props }) {
	return (
		<div
			className={`rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_24px_70px_rgba(91,33,182,0.08)] backdrop-blur ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}

function Metric({ value, label }) {
	return (
		<div className="rounded-[1.5rem] border border-violet-100 bg-white/75 px-5 py-5 shadow-[0_16px_40px_rgba(91,33,182,0.08)] backdrop-blur">
			<div className="text-3xl font-black tracking-tight text-violet-700">{value}</div>
			<p className="mt-2 text-sm font-medium leading-6 text-stone-700">{label}</p>
		</div>
	);
}

function Chip({ children, tone = 'violet' }) {
	const toneClass = tone === 'indigo'
		? 'border-indigo-200 bg-indigo-50 text-indigo-700'
		: 'border-violet-200 bg-violet-50 text-violet-700';

	return (
		<span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${toneClass}`}>
			{children}
		</span>
	);
}

function CardList({ items, className = '', tone = 'violet' }) {
	return (
		<div className={`grid gap-3 ${className}`}>
			{items.map((item) => (
				<div key={item} className={`rounded-[1.25rem] border px-4 py-4 text-sm leading-6 text-stone-700 ${tone === 'indigo' ? 'border-indigo-100 bg-indigo-50/70' : 'border-violet-100 bg-violet-50/70'}`}>
					{item}
				</div>
			))}
		</div>
	);
}

export { CardList, Chip, Metric, SectionBadge, SectionHeading, Surface };