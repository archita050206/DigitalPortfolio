import { Github, ExternalLink } from "lucide-react";

// A stylized 4-point sparkle SVG to match the reference design
const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const projects = [
  {
    title: "FilmHunt",
    description:
      "A movie search application that lets users discover and explore films with an intuitive, responsive interface. Features real-time search and detailed movie information.",
    tech: ["React", "JavaScript", "API Integration", "CSS"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Medilink",
    description:
      "A healthcare platform connecting patients with medical professionals. Streamlines appointment booking and medical record management for better healthcare access.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "HealthSync",
    description:
      "A comprehensive health monitoring website that helps users track and synchronize their wellness data. Features dashboards and health insights.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 bg-[#BED4BB]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 inline-block relative">
          <Sparkle className="absolute -left-8 -top-4 w-6 h-6 text-slate-900 fill-amber-200" />
          Projects
          <Sparkle className="absolute -right-8 -bottom-4 w-5 h-5 text-slate-900 fill-amber-200" />
        </h2>
        <p className="text-base md:text-lg text-slate-700 font-medium max-w-2xl mx-auto mt-6">
          Some of the things I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map(({ title, description, tech, github, demo }) => (
          <div
            key={title}
            className="group relative flex flex-col rounded-xl border-[3px] border-slate-900 bg-[#aebc95]/90 backdrop-blur-sm shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0_0_#0f172a] transition-all duration-300 overflow-hidden"
          >
            {/* Top Browser Window Bar */}
            <div className="flex h-[42px] items-center justify-between border-b-[3px] border-slate-900 bg-[#d8e0cc] px-4 relative">
              <Sparkle className="w-5 h-5 text-slate-900 fill-amber-100/80" />
              <div className="flex gap-2">
                <div className="h-3.5 w-3.5 rounded-full border-[2.5px] border-slate-900 bg-[#137b67]" />
                <div className="h-3.5 w-3.5 rounded-full border-[2.5px] border-slate-900 bg-[#137b67]" />
                <div className="h-3.5 w-3.5 rounded-full border-[2.5px] border-slate-900 bg-[#137b67]" />
              </div>
            </div>

            {/* Main Content Body */}
            <div className="flex flex-col flex-1 p-6 md:p-8 relative">
              <Sparkle className="absolute right-4 bottom-16 w-7 h-7 text-slate-900 fill-amber-100/50 opacity-70" />

              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                {title}
              </h3>

              <p className="text-slate-800 font-medium text-sm md:text-base leading-relaxed mb-6 flex-1">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border-2 border-slate-900 bg-amber-50 shadow-[2px_2px_0_0_#0f172a] text-xs font-bold text-slate-900 transition-transform group-hover:-translate-y-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto relative z-10">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 rounded-lg border-2 border-slate-900 bg-white px-4 py-2.5 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs md:text-sm">Code</span>
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 rounded-lg border-2 border-slate-900 bg-amber-300 px-4 py-2.5 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-xs md:text-sm">Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
