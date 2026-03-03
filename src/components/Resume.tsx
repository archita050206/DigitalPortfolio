import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => (
  <section id="resume" className="section-padding bg-muted/30">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Get My Resume
      </h2>
      <p className="text-muted-foreground mb-8">
        Interested in working together? Download my resume to learn more about my experience and skills.
      </p>
      <Button
        size="lg"
        className="rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        asChild
      >
        <a href="#" download>
          <FileDown className="mr-2 w-5 h-5" />
          Download Resume
        </a>
      </Button>
    </div>
  </section>
);

export default Resume;
