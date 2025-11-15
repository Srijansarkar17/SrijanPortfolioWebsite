"use client";

import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", image: "/skills/python.svg", bg: "bg-blue-400/10" },
      { name: "JavaScript", image: "/skills/javascript.svg", bg: "bg-yellow-400/10" },
      { name: "TypeScript", image: "/skills/typescript.svg", bg: "bg-blue-500/10" },
      { name: "C++", image: "/skills/cpp.svg", bg: "bg-blue-400/10" },
      { name: "Java", image: "/skills/java.svg", bg: "bg-red-400/10" },
      { name: "HTML5", image: "/skills/html5.svg", bg: "bg-orange-400/10" },
      { name: "CSS3", image: "/skills/css3.svg", bg: "bg-blue-400/10" },
      { name: "Go", image: "/skills/go.svg", bg: "bg-cyan-400/10" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "TensorFlow", image: "/skills/tensorflow.svg", bg: "bg-orange-400/10" },
      { name: "PyTorch", image: "/skills/pytorch.svg", bg: "bg-red-400/10" },
      { name: "OpenCV", image: "/skills/opencv.svg", bg: "bg-green-400/10" },
      { name: "Hugging Face", image: "/skills/huggingface.svg", bg: "bg-yellow-400/10" },
      { name: "LangChain", image: "/skills/langchain.svg", bg: "bg-blue-400/10" },
      { name: "YOLO", image: "/skills/yolo.svg", bg: "bg-blue-300/10" },
      { name: "Pandas", image: "/skills/pandas.svg", bg: "bg-purple-400/10" },
      { name: "Scikit-Learn", image: "/skills/scikit.svg", bg: "bg-orange-400/10" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", image: "/skills/react.svg", bg: "bg-cyan-400/10" },
      { name: "Next.js", image: "/skills/nextjs.svg", bg: "bg-white/10" },
      { name: "Node.js", image: "/skills/nodejs.svg", bg: "bg-green-400/10" },
      { name: "FastAPI", image: "/skills/fastapi.svg", bg: "bg-green-400/10" },
      { name: "Flask", image: "/skills/flask.svg", bg: "bg-gray-400/10" },
      { name: "Express", image: "/skills/express.svg", bg: "bg-gray-300/10" },
      { name: "Tailwind", image: "/skills/tailwind.svg", bg: "bg-cyan-300/10" },
      { name: "shadcn/ui", image: "/skills/shadcn.svg", bg: "bg-purple-400/10" },
    ],
  },
  {
    title: "Cloud & DB",
    skills: [
      { name: "AWS", image: "/skills/aws.svg", bg: "bg-orange-400/10" },
      { name: "MongoDB", image: "/skills/mongodb.svg", bg: "bg-green-400/10" },
      { name: "PostgreSQL", image: "/skills/postgresql.svg", bg: "bg-blue-400/10" },
      { name: "Redis", image: "/skills/redis.svg", bg: "bg-red-400/10" },
      { name: "Docker", image: "/skills/docker.svg", bg: "bg-blue-400/10" },
      { name: "Kubernetes", image: "/skills/kubernetes.svg", bg: "bg-blue-500/10" },
      { name: "Git", image: "/skills/git.svg", bg: "bg-orange-400/10" },
      { name: "Supabase", image: "/skills/supabase.svg", bg: "bg-green-400/10" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", image: "/skills/vscode.svg", bg: "bg-blue-400/10" },
      { name: "Jupyter", image: "/skills/jupyter.svg", bg: "bg-orange-400/10" },
      { name: "Figma", image: "/skills/figma.svg", bg: "bg-purple-400/10" },
      { name: "Postman", image: "/skills/postman.svg", bg: "bg-orange-400/10" },
      { name: "Vercel", image: "/skills/vercel.svg", bg: "bg-white/10" },
      { name: "Apache Spark", image: "/skills/spark.svg", bg: "bg-red-400/10" },
      { name: "Google Cloud", image: "/skills/gcp.svg", bg: "bg-blue-400/10" },
      { name: "Apache", image: "/skills/apache.svg", bg: "bg-red-400/10" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        {/* Simple Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 bg-card border-border hover:bg-card/80 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                    <div className={`p-2 rounded-md ${skill.bg} flex items-center justify-center`}>
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { number: "8+", label: "Languages" },
            { number: "15+", label: "Frameworks" },
            { number: "12+", label: "AI/ML Tools" },
            { number: "10+", label: "Cloud & DB" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card border-border">
              <div className="text-2xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};