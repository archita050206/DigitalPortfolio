import SectionHeading from "./SectionHeading";
import { Star, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Star,
    title: "5★ HackerRank",
    subtitle: "Java Programming",
    bg: "bg-peach",
  },
  {
    icon: Trophy,
    title: "160+ LeetCode Problems",
    subtitle: "Data Structures & Algorithms",
    bg: "bg-lavender-light",
  },
];

const Achievements = () => (
  <section id="achievements" className="section-padding bg-background">
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title="Achievements"
        subtitle="Milestones I'm proud of."
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map(({ icon: Icon, title, subtitle, bg }) => (
          <div
            key={title}
            className={`${bg} rounded-2xl p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300`}
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
