import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["C++", "Java"]
  },
  {
    title: "WEB DEV",
    skills: ["HTML", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "CS FUNDAMENTALS",
    skills: ["Data Structures", "Networking", "Operating Systems"]
  },
  {
    title: "TOOLS",
    skills: ["Git", "GitHub"]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-[#FBBF7A] dark:bg-[#5c3a1e] text-slate-900 dark:text-slate-100 transition-colors duration-500 py-28 px-6 md:px-20 lg:px-40 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute rounded-full bg-slate-900/5 dark:bg-white/5 w-[400px] h-[400px] -top-20 -left-20 z-0"></div>
      <div className="absolute rounded-full bg-slate-900/5 dark:bg-white/5 w-[200px] h-[200px] top-1/2 -right-10 z-0"></div>
      <div className="absolute bg-slate-900/10 dark:bg-white/10 h-[1px] w-full top-[20%] left-0 z-0"></div>
      <div className="absolute bg-slate-900/10 dark:bg-white/10 w-[1px] h-full left-[15%] top-0 z-0"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div
          className={`flex flex-col gap-6 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="bg-slate-900/10 dark:bg-white/10 w-fit px-4 py-1 rounded-full backdrop-blur-sm border border-slate-900/10 dark:border-white/10">
            <p className="text-slate-800 dark:text-white/80 text-xs font-black uppercase tracking-[0.3em]">Portfolio 2026</p>
          </div>
          <h1 className="text-slate-800 dark:text-white text-6xl md:text-6xl font-black leading-none tracking-tighter uppercase drop-shadow-sm">
            SKILLS &amp; <br />EXPERTISE
          </h1>
          <p className="text-gray-700 dark:text-white/80  font-medium max-w-xl leading-relaxed text-lg">
            Building strong foundations in software engineering through problem-solving, full-stack development, and core computer science principles.
          </p>
        </div>

        {/* Skill Categories */}
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`mb-16 transition-all duration-1000`}
            style={{
              transitionDelay: `${200 + index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)"
            }}
          >
            <div className="flex items-center gap-4 mb-7">
              <h2 className="text-slate-800 dark:text-white text-4xl md:text-3xl font-black tracking-tighter uppercase">
                {category.title}
              </h2>
              <div className="h-1 flex-1 bg-slate-800/10 dark:bg-white/20"></div>
            </div>
            <div className="flex gap-4 flex-wrap">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex h-10 items-center justify-center rounded-full bg-[#14B8A6] dark:bg-[#0f4c5c] px-9 shadow-lg hover:bg-[#134d5c] dark:hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-default"
                >
                  <p className="text-white dark:text-slate-100 group-hover:text-white dark:group-hover:text-slate-900 text-small font-black uppercase tracking-wider transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div
          className={`mt-10 mx-auto transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900/10 dark:bg-white/10 border border-slate-900/20 dark:border-white/20 backdrop-blur-md hover:bg-slate-900 hover:text-white dark:hover:bg-white/20 transition-all duration-500 text-slate-900 dark:text-white font-bold tracking-widest uppercase text-xs"
          >
            View My Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;