import { useRef } from "react";
import { useInView } from "framer-motion";

const skills = [
  { name: "C++", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "HTML", category: "Web Dev" },
  { name: "JavaScript", category: "Web Dev" },
  { name: "React", category: "Web Dev" },
  { name: "Tailwind CSS", category: "Web Dev" },
  { name: "Data Structures", category: "CS" },
  { name: "Networking", category: "CS" },
  { name: "Operating Systems", category: "CS" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Group skills by category for a structured yet non-grid layout
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-[#FBBF7A] dark:bg-[#1C1A17] py-20  overflow-hidden selection:bg-slate-900 selection:text-white"
    >
      {/* Brutalist Typographic Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] flex items-center justify-center overflow-hidden">
        <h2 className="text-[30vw] font-black tracking-tighter leading-none text-slate-900 dark:text-white uppercase whitespace-nowrap blur-[2px]">
          CAPABILITY
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 flex flex-col md:flex-row gap-16 md:gap-8 items-start justify-between">

        {/* Left: Stark Context Header */}
        <div className="w-full md:w-5/12 sticky top-32 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-slate-900 dark:text-amber-500 text-xs font-bold font-mono tracking-[0.3em] uppercase">
              [ 03 / Architecture ]
            </span>
            <h1 className="text-[#351005] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] mt-4">
              TECHNICAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#170703] to-[#eba38d] dark:from-white dark:to-white/20">
                SKILLS
              </span>
            </h1>
          </div>

          <p className="text-[#672714] dark:text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-sm mt-8 border-l-2 border-[#351005] dark:border-amber-500 pl-6 py-2">
            A curated index of programming languages, tools, and theoretical foundations utilized in modern system design.
          </p>
        </div>

        {/* Right: Asymmetric, Brutalist Continuous List */}
        <div className="w-full md:w-7/12 flex flex-col gap-16 pt-12 md:pt-0">
          {categories.map((category, catIndex) => (
            <div key={category} className="flex flex-col relative w-full group">

              {/* Category Header */}
              <div className="flex items-end justify-between border-b-2 border-[#351005] dark:border-white/20 pb-4 mb-5">
                <h3 className="text-xl md:text-[25px] font-black text-[#351005] dark:text-white tracking-tight uppercase">
                  {category}
                </h3>

              </div>

              {/* Skills Layout: Staggered flowing text instead of boxes */}
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center gap-4 cursor-default"
                    >
                      <span className="text-lg md:text-xl font-bold text-[#672714] dark:text-white tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;