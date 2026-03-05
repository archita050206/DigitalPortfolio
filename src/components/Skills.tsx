import { useRef, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

const Bulb = ({ name, index, total }: { name: string; index: number; total: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate positions for a natural hanging look
  // Distribute across the width and vary the heights
  const leftPos = useMemo(() => `${(index + 1) * (100 / (total + 1))}%`, [index, total]);
  const wireHeight = useMemo(() => 100 + Math.random() * 250, []);
  const swingDuration = useMemo(() => 3 + Math.random() * 2, []);
  const swingDelay = useMemo(() => Math.random() * -5, []);

  return (
    <motion.div
      className="absolute top-0 flex flex-col items-center"
      style={{ left: leftPos }}
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 10,
        delay: index * 0.1
      }}
    >
      {/* The Wire */}
      <motion.div
        className="w-[2px] bg-slate-900/40 dark:bg-white/20 origin-top"
        style={{ height: wireHeight }}
        animate={{ rotate: [-2, 2, -2] }}
        transition={{
          duration: swingDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: swingDelay
        }}
      />

      {/* The Bulb Hook/Base */}
      <div className="w-6 h-3 bg-slate-800 dark:bg-slate-400 rounded-t-sm -mt-[1px]" />

      {/* The Bulb */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group cursor-pointer"
        animate={{
          rotate: [-2, 2, -2],
          scale: isHovered ? 1.1 : 1
        }}
        transition={{
          rotate: {
            duration: swingDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: swingDelay
          },
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        {/* Glass Bulb Body */}
        <div className={`
          relative flex items-center justify-center
          w-24 h-24 md:w-28 md:h-28 rounded-full 
          border-2 transition-all duration-500
          ${isHovered
            ? "bg-amber-100/40 border-amber-300 shadow-[0_0_50px_rgba(251,191,122,0.8)]"
            : "bg-white/10 border-white/30 backdrop-blur-sm"}
        `}>
          {/* Internal Glowing Element */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute inset-2 bg-amber-200 rounded-full blur-xl mix-blend-overlay"
              />
            )}
          </AnimatePresence>

          {/* Skill Text */}
          <span className={`
            relative z-10 text-center px-2
            text-xs md:text-sm font-black uppercase tracking-widest leading-tight
            ${isHovered ? "text-amber-900" : "text-slate-800 dark:text-white/80"}
            transition-colors duration-300
          `}>
            {name}
          </span>
        </div>

        {/* Vertical Glow Strip */}
        <div className={`
          absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full
          bg-white/20 blur-[1px] rounded-full transition-opacity duration-500
          ${isHovered ? "opacity-100" : "opacity-0"}
        `} />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-[120vh] bg-[#FBBF7A] dark:bg-[#3d2b1a] overflow-hidden py-32"
    >
      {/* Decorative Warm Ambient Light */}
      <div className="absolute inset-0 bg-radial-at-t from-amber-200/20 to-transparent pointer-events-none" />

      {/* Background Micro-details */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`, backgroundSize: '60px 60px' }}>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-40"
        >
          <div className="bg-slate-900/10 dark:bg-white/10 w-fit px-6 py-1.5 rounded-full backdrop-blur-md border border-slate-900/10 dark:border-white/10 mx-auto mb-8">
            <p className="text-slate-800 dark:text-white/80 text-xs font-black uppercase tracking-[0.4em]">Curated Intelligence</p>
          </div>

          <h1 className="text-slate-900 dark:text-white text-7xl md:text-9xl font-black leading-none tracking-tighter uppercase mb-6">
            MY <br className="md:hidden" />
            <span className="relative inline-block">
              SKILLS
              <motion.div
                className="absolute -bottom-2 left-0 h-2 bg-slate-900 dark:bg-white/30"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h1>

          <p className="text-slate-800/80 dark:text-white/60 font-medium max-w-2xl mx-auto leading-relaxed text-xl uppercase tracking-wider">
            Turning on the light of innovation through a balanced spectrum of technical expertise.
          </p>
        </motion.div>

        {/* The Bulbs Playground */}
        <div className="relative w-full h-[600px] mt-20">
          {skills.map((skill, index) => (
            <Bulb
              key={skill.name}
              name={skill.name}
              index={index}
              total={skills.length}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="mt-40 text-center"
        >
          <p className="text-slate-900/40 dark:text-white/20 text-xs font-bold uppercase tracking-[0.4em] mb-4">
            Interactive Showcase
          </p>
          <div className="flex gap-4 items-center justify-center">
            <div className="size-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-slate-800 dark:text-white/60 text-sm font-medium">Hover over the bulbs to illuminate their core</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;