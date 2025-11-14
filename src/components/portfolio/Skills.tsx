import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Boxes, Database } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Boxes,
    title: "Frameworks & Tools",
    skills: [
      "ReactJS",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "LangChain",
      "SpaCy",
      "YOLO",
      "OpenCV",
      "Pandas",
      "Numpy",
      "Flask",
      "FastAPI",
    ],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    skills: [
      "MongoDB",
      "MySQL",
      "Git",
      "Supabase",
      "ChromaDB",
      "AWS (SageMaker, Glue)",
      "Apache Hadoop",
      "Apache Spark",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
