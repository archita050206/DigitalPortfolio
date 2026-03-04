import { Code2, Globe, Cpu, GitBranch } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["C++", "Java"],
    color: "#FDE047",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    color: "#A78BFA",
  },
  {
    title: "CS Fundamentals",
    icon: Cpu,
    skills: ["Data Structures & Algorithms", "Networking", "Operating Systems"],
    color: "#34D399",
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
    color: "#F472B6",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-[#38BDF8] via-[#0EA5E9] to-[#0284C7] dark:from-[#0c4a6e] dark:via-[#0a3d5c] dark:to-[#082f49] transition-colors duration-300 py-32 px-4 flex flex-col justify-center items-center overflow-hidden"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .skill-col {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .skill-item {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #FDE047 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[60%] right-[5%] w-96 h-96 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
            animation: "float-reverse 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[30%] w-64 h-64 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #34D399 0%, transparent 70%)",
            animation: "float 12s ease-in-out infinite 2s",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* Header */}
        <div
          className={`mb-16 flex flex-col md:flex-row items-end justify-between pb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[3px] w-12 bg-[#FDE047] rounded-full" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#FDE047] font-semibold">
                What I bring to the table
              </span>
            </div>
            <h1
              className="text-6xl md:text-7xl font-black tracking-tighter leading-none"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #FDE047 50%, #ffffff 100%)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 6s ease-in-out infinite",
              }}
            >
              SKILLS
              <br />& TOOLS
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-xs tracking-[0.3em] uppercase opacity-50 mt-2 text-white/70">
              Expertise & Proficiency
            </p>
          </div>
        </div>

        {/* 4-Column Grid — one column per category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <div
                key={category.title}
                className="skill-col group relative"
                style={{
                  animationDelay: isVisible ? `${index * 0.15}s` : "0s",
                  animationPlayState: isVisible ? "running" : "paused",
                }}
              >
                <div
                  className="relative h-full rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-lg p-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.14] hover:border-white/25 hover:shadow-xl"
                  style={{ boxShadow: `0 4px 30px rgba(0,0,0,0.08)` }}
                >
                  {/* Corner accent glow */}
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-3xl"
                    style={{ backgroundColor: category.color }}
                  />

                  {/* Category icon */}
                  <div className="flex flex-col items-center text-center mb-6 relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}35, ${category.color}15)`,
                        border: `1px solid ${category.color}50`,
                        boxShadow: `0 0 20px ${category.color}15`,
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: category.color }}
                      />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/35 mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-[1px] mb-5 mx-auto w-3/4"
                    style={{
                      background: `linear-gradient(to right, transparent, ${category.color}40, transparent)`,
                    }}
                  />

                  {/* Skills list */}
                  <div className="relative z-10 flex flex-col gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="skill-item group/skill cursor-default"
                        style={{
                          animationDelay: isVisible
                            ? `${index * 0.15 + skillIndex * 0.08 + 0.3}s`
                            : "0s",
                          animationPlayState: isVisible ? "running" : "paused",
                        }}
                      >
                        <div
                          className="relative flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 hover:translate-y-[-2px]"
                          style={{
                            background: `linear-gradient(135deg, ${category.color}20, transparent)`,
                            borderColor: `${category.color}30`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, ${category.color}40, ${category.color}15)`;
                            e.currentTarget.style.borderColor = `${category.color}70`;
                            e.currentTarget.style.boxShadow = `0 4px 20px ${category.color}30`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, ${category.color}20, transparent)`;
                            e.currentTarget.style.borderColor = `${category.color}30`;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div
                            className="w-2 h-2 rounded-full shrink-0 transition-all duration-300 group-hover/skill:scale-125"
                            style={{
                              backgroundColor: category.color,
                              boxShadow: `0 0 8px ${category.color}60`,
                            }}
                          />
                          <span
                            className="text-sm font-bold text-white tracking-wide"
                            style={{ textShadow: `0 0 20px ${category.color}30` }}
                          >
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom decorative bar */}
                  <div className="mt-5 relative z-10">
                    <div
                      className="h-[2px] rounded-full mx-auto transition-all duration-500 group-hover:w-full"
                      style={{
                        width: "40%",
                        background: `linear-gradient(to right, transparent, ${category.color}60, transparent)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-20 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-sm text-white/50 tracking-wide max-w-md text-center md:text-left">
            Always learning, always building — passionate about turning ideas into elegant digital experiences.
          </p>
          <a
            href="#projects"
            className="relative group/cta cursor-pointer inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-sm hover:bg-white/[0.15] hover:border-white/30 transition-all duration-500 no-underline"
          >
            <div className="absolute -inset-1 bg-[#FDE047]/10 rounded-full scale-0 group-hover/cta:scale-100 transition-transform duration-500 blur-xl" />
            <span className="text-sm font-bold tracking-[0.15em] uppercase relative z-10 text-white">
              View Projects
            </span>
            <svg
              className="w-4 h-4 text-[#FDE047] relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
