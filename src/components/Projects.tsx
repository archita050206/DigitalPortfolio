import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
  <section id="projects" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="Projects"
        subtitle="Some of the things I've built."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, tech, github, demo }) => (
          <div
            key={title}
            className="glass rounded-2xl p-6 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-border"
          >
            {/* Color accent bar */}
            <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-5" />
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {tech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="rounded-full text-xs font-medium"
                >
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full flex-1 hover:scale-105 transition-transform"
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
              </Button>
              <Button
                size="sm"
                className="rounded-full flex-1 hover:scale-105 transition-transform"
                asChild
              >
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
