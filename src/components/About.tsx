import SectionHeading from "./SectionHeading";
import { User } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="About Me"
        subtitle="A glimpse into who I am and what drives me."
      />
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image placeholder */}
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-lavender-light flex items-center justify-center shadow-lg border border-border overflow-hidden">
            <User className="w-24 h-24 text-primary/40" />
          </div>
        </div>

        {/* Text */}
        <div className="glass rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Hello! I'm <span className="text-primary">Archita Das</span>
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            I'm a <strong className="text-foreground">B.Tech Computer Science & Engineering</strong> student
            with a deep passion for software development and problem-solving. I love turning ideas into
            functional, beautiful web applications.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            With <strong className="text-foreground">300+ LeetCode</strong> and{" "}
            <strong className="text-foreground">200+ GeeksforGeeks</strong> problems solved, I've built a
            strong foundation in Data Structures & Algorithms. I'm equally passionate about{" "}
            <strong className="text-foreground">full-stack web development</strong> and creating meaningful
            digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm always eager to learn new technologies and collaborate on exciting projects that make a
            difference.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
