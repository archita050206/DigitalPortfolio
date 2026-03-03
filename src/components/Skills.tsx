import SectionHeading from "./SectionHeading";
import { Code2, Globe, Cpu, GitBranch } from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code2,
    color: "bg-lavender-light text-primary",
    skills: ["C++", "Java"],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "bg-pink-light text-secondary-foreground",
    skills: ["HTML", "Tailwind CSS", "JavaScript", "React"],
  },
  {
    title: "CS Fundamentals",
    icon: Cpu,
    color: "bg-blue-light text-accent-foreground",
    skills: ["Data Structures & Algorithms", "Networking", "Operating Systems"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    color: "bg-peach text-peach-foreground",
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-muted/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ title, icon: Icon, color, skills }) => (
          <div
            key={title}
            className="glass rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div
              className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-3">{title}</h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
