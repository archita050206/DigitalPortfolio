import { ArrowDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialIcons from "./SocialIcons";
import Grainient from "./Grainient";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Hero = () => {
  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* 🌸 Grainient Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#f3b4f1"
          color2="#B6D0E2"
          color3="#CEC5F2"
          timeSpeed={0.40}
          grainAmount={0.04}
          zoom={0.9}
        />
      </div>

      {/* 🌟 Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <BlurText
          text="Welcome to my Portfolio!"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-sm md:text-base font-medium text-purple-600 mb-4 tracking-widest uppercase justify-center"
        />
        <SplitText
          text="Archita Das"
          //className="text-2xl font-semibold text-center"
          delay={50}
          duration={1.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground mb-1 leading-tight"
        />
        <p>
        <SplitText
          text="Aspiring Software Developer | Full Stack Enthusiast"
          //className="text-2xl font-semibold text-center"
          delay={50}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          className="text-lg md:text-xl text-muted-foreground mb-2 font-medium"
        />
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