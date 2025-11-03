import React from "react";

const icons = [
	{ name: "HTML", src: "/html.svg" },
	{ name: "CSS", src: "/css.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "Python", src: "/Python.svg" },
	{ name: "django", src: "/django.svg" },
	{ name: "React", src: "/reactjs.svg" },
	{ name: "MySQL", src: "/MySQL.svg" },
	{ name: "MongoDB", src: "/MongoDB.svg" },
	{ name: "API", src: "/api.png" },
	{ name: "Tailwind CSS", src: "/tailwind.svg" },
	{ name: "BootStrap", src: "/bootstrap.png" },
	{ name: "Figma", src: "/Figma.svg" },
	{ name: "Vite", src: "/vite.svg" },
	{ name: "Git", src: "/Git.svg" },

];

export default function Stack() {
	function InlineIcon({ name }) {
		// create initials: take first letters of up to two words, handle C# and Next.js
		const clean = name.replace(/[^A-Za-z0-9 ]/g, " ").trim();
		const parts = clean.split(/\s+/).filter(Boolean);
		let initials = parts.length === 1 ? parts[0].slice(0, 2) : parts[0][0] + parts[1][0];
		initials = initials.toUpperCase();

		const colors = ["#06b6d4", "#7c3aed", "#f97316", "#06b6d4", "#ef4444"];
		const bg = colors[name.length % colors.length];

		return (
			<svg
				width="56"
				height="56"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="mb-3"
			>
				<rect width="56" height="56" rx="10" fill={bg} opacity="0.12" />
				<rect width="56" height="56" rx="10" fill={bg} />
				<text
					x="50%"
					y="50%"
					dominantBaseline="middle"
					textAnchor="middle"
					fontSize="18"
					fontWeight="600"
					fill="white"
				>
					{initials}
				</text>
			</svg>
		);
	}
	return (
		<section id="stack" className="w-full px-6 md:px-20 py-5 md:py-32 text-white">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-20 md:mb-44">
					<h2
						data-aos="fade-down"
						data-aos-duration="1000"
						className="inline-block text-4xl md:text-6xl font-bold text-center mx-auto text-transparent bg-clip-text"
					>
                    <span
						style={{
							color: "#6366f1",
							backgroundImage:
								"linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
							WebkitBackgroundClip: "text",
							backgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
                        My Tech Stack & Expertise
                    </span>
					</h2>

					<p
						data-aos="fade-up"
						data-aos-duration="1200"
						className="font-exo text-slate-400 max-w-3xl mx-auto text-l md:text-base mt-2"
					>
						I'm always on the lookout for opportunities that challenge me and help expand 
						my skill set. I enjoy working on complex projects and love collaborating with 
						others to turn ideas into impactful digital experiences. I have hands-on experience 
						with technologies including HTML, CSS, JavaScript, React, Tailwind CSS, Python, Django,
						 and MySQL, and i am constantly exploring new tools and frameworks to stay ahead in the
						  ever-evolving tech landscape.
					</p>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
					{icons.map((ic) => (
						<div
							key={ic.name}
							className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-lg bg-white/2"
						>
							<img src={ic.src} alt={ic.name} className="w-14 h-14 mb-3" />
							<div className="text-sm font-medium">{ic.name}</div>
						</div>
					))}

					{/* Text chips for items without icons in public/ */}
								{[
								].map((name) => (
									<div
										key={name}
										className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-lg bg-white/2"
									>
										{/* Inline icon for missing public images */}
										<InlineIcon name={name} />
										<div className="text-sm font-semibold">{name}</div>
									</div>
								))}
				</div>
			</div>
		</section>
	);
}
