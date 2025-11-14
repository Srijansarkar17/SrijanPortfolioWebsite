import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "1st Prize — Hackademia",
    description: "Generative AI hackathon at NIT Andhra Pradesh",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    title: "2nd Prize — CodeFest",
    description: "SRM Technologies leading to an internship opportunity",
    color: "text-gray-400",
  },
  {
    icon: Medal,
    title: "3rd Prize — CAD 3.0 Hackathon",
    description: "Hosted by Coding Ninjas, SRM",
    color: "text-amber-600",
  },
  {
    icon: Star,
    title: "Chairperson",
    description: "SRM ACM SIGKDD Student Chapter",
    color: "text-primary",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Achievements & <span className="text-gradient">Awards</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 card-hover text-center">
              <div
                className={`inline-flex p-4 bg-primary/10 rounded-full mb-4 ${achievement.color}`}
              >
                <achievement.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
