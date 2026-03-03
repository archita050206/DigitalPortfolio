import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Social Networks",
    issuer: "NPTEL",
    color: "border-l-primary",
  },
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    color: "border-l-secondary",
  },
  {
    title: "Computer Communications Specialization",
    issuer: "Coursera",
    color: "border-l-accent",
  },
];

const Certifications = () => (
  <section id="certifications" className="section-padding bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title="Certifications"
        subtitle="Professional certifications and courses I've completed."
      />
      <div className="space-y-4">
        {certs.map(({ title, issuer, color }) => (
          <div
            key={title}
            className={`glass rounded-xl p-6 border-l-4 ${color} hover:shadow-lg hover:translate-x-1 transition-all duration-300 flex items-center gap-4`}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
