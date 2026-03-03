import { ArrowDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-sm md:text-base font-medium text-primary mb-4 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground mb-4 leading-tight">
          Archita Das
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
          Aspiring Software Developer | Full Stack Enthusiast
        </p>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Passionate about building elegant web applications and solving complex problems with clean, efficient code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View Projects
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#resume">
              <FileDown className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <SocialIcons className="justify-center" />
      </div>
    </section>
  );
};

export default Hero;
