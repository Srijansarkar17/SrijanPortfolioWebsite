import { Card } from "@/components/ui/card";
import { Briefcase, FlaskConical } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Software Engineer Intern",
    company: "SRM Technologies",
    period: "Jan 2025 – Present",
    points: [
      "Built backend for Smart Inventory Maintenance System",
      "Created data ingestion pipeline for automated SKU analysis",
      "Computed weekly stock availability metrics for decision-making",
    ],
  },
  {
    icon: FlaskConical,
    title: "Member",
    company: "Next Tech Lab, McCarthy Lab (International QS Awarded)",
    period: "July 2024 – Present",
    location: "Chennai, India",
    points: [
      "Developing a semantic retrieval framework for intelligent query interpretation",
      "Improving accuracy & operational efficiency in customer workflows",
      "Working with sophisticated algorithms to extract relevant information",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 card-hover">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <exp.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    {exp.location && (
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex gap-2 items-start"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
