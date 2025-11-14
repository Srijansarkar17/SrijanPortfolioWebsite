"use client";

import { Tabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import MagicBento from '@/components/ui/MagicBento';

const skillCategories = [
  {
    title: "Languages",
    value: "languages",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 text-white bg-gradient-to-br from-slate-500/40 to-slate-600/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-400/20 rounded-lg">
              <img src="/skills/python.svg" alt="Python" className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Programming Languages</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Python", image: "/skills/python.svg", bg: "bg-blue-400/10" },
              { name: "JavaScript", image: "/skills/javascript.svg", bg: "bg-yellow-400/10" },
              { name: "TypeScript", image: "/skills/typescript.svg", bg: "bg-blue-500/10" },
              { name: "C++", image: "/skills/cpp.svg", bg: "bg-blue-400/10" },
              { name: "Java", image: "/skills/java.svg", bg: "bg-red-400/10" },
              { name: "HTML5", image: "/skills/html5.svg", bg: "bg-orange-400/10" },
              { name: "CSS3", image: "/skills/css3.svg", bg: "bg-blue-400/10" },
              { name: "Go", image: "/skills/go.svg", bg: "bg-cyan-400/10" },
            ].map((skill) => (
              <Card key={skill.name} className="p-4 text-center bg-white/5 backdrop-blur-sm border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className={`p-3 rounded-lg ${skill.bg} w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="text-sm font-semibold text-white">{skill.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI/ML",
    value: "ai-ml",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 text-white bg-gradient-to-br from-purple-500/40 to-pink-600/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-400/20 rounded-lg">
              <img src="/skills/ai.svg" alt="AI" className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">AI & Machine Learning</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "TensorFlow", image: "/skills/tensorflow.svg", bg: "bg-orange-400/10" },
              { name: "PyTorch", image: "/skills/pytorch.svg", bg: "bg-red-400/10" },
              { name: "OpenCV", image: "/skills/opencv.svg", bg: "bg-green-400/10" },
              { name: "Hugging Face", image: "/skills/huggingface.svg", bg: "bg-yellow-400/10" },
              { name: "LangChain", image: "/skills/langchain.svg", bg: "bg-blue-400/10" },
              { name: "YOLO", image: "/skills/yolo.svg", bg: "bg-blue-300/10" },
              { name: "Pandas", image: "/skills/pandas.svg", bg: "bg-purple-400/10" },
              { name: "Scikit-Learn", image: "/skills/scikit.svg", bg: "bg-orange-400/10" },
            ].map((skill) => (
              <Card key={skill.name} className="p-4 text-center bg-white/5 backdrop-blur-sm border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className={`p-3 rounded-lg ${skill.bg} w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="text-sm font-semibold text-white">{skill.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Frameworks",
    value: "frameworks",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 text-white bg-gradient-to-br from-emerald-500/40 to-teal-600/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-400/20 rounded-lg">
              <img src="/skills/react.svg" alt="React" className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Frameworks & Libraries</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "React", image: "/skills/react.svg", bg: "bg-cyan-400/10" },
              { name: "Next.js", image: "/skills/nextjs.svg", bg: "bg-white/10" },
              { name: "Node.js", image: "/skills/nodejs.svg", bg: "bg-green-400/10" },
              { name: "FastAPI", image: "/skills/fastapi.svg", bg: "bg-green-400/10" },
              { name: "Flask", image: "/skills/flask.svg", bg: "bg-gray-400/10" },
              { name: "Express", image: "/skills/express.svg", bg: "bg-gray-300/10" },
              { name: "Tailwind", image: "/skills/tailwind.svg", bg: "bg-cyan-300/10" },
              { name: "shadcn/ui", image: "/skills/shadcn.svg", bg: "bg-purple-400/10" },
            ].map((skill) => (
              <Card key={skill.name} className="p-4 text-center bg-white/5 backdrop-blur-sm border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className={`p-3 rounded-lg ${skill.bg} w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="text-sm font-semibold text-white">{skill.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Cloud & DB",
    value: "cloud-db",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 text-white bg-gradient-to-br from-amber-500/40 to-orange-600/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-400/20 rounded-lg">
              <img src="/skills/aws.svg" alt="AWS" className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Cloud & Databases</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "AWS", image: "/skills/aws.svg", bg: "bg-orange-400/10" },
              { name: "MongoDB", image: "/skills/mongodb.svg", bg: "bg-green-400/10" },
              { name: "PostgreSQL", image: "/skills/postgresql.svg", bg: "bg-blue-400/10" },
              { name: "Redis", image: "/skills/redis.svg", bg: "bg-red-400/10" },
              { name: "Docker", image: "/skills/docker.svg", bg: "bg-blue-400/10" },
              { name: "Kubernetes", image: "/skills/kubernetes.svg", bg: "bg-blue-500/10" },
              { name: "Git", image: "/skills/git.svg", bg: "bg-orange-400/10" },
              { name: "Supabase", image: "/skills/supabase.svg", bg: "bg-green-400/10" },
            ].map((skill) => (
              <Card key={skill.name} className="p-4 text-center bg-white/5 backdrop-blur-sm border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className={`p-3 rounded-lg ${skill.bg} w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="text-sm font-semibold text-white">{skill.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Tools",
    value: "tools",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 text-white bg-gradient-to-br from-violet-500/40 to-purple-600/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-400/20 rounded-lg">
              <img src="/skills/vscode.svg" alt="VS Code" className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Development Tools</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "VS Code", image: "/skills/vscode.svg", bg: "bg-blue-400/10" },
              { name: "Jupyter", image: "/skills/jupyter.svg", bg: "bg-orange-400/10" },
              { name: "Figma", image: "/skills/figma.svg", bg: "bg-purple-400/10" },
              { name: "Postman", image: "/skills/postman.svg", bg: "bg-orange-400/10" },
              { name: "Vercel", image: "/skills/vercel.svg", bg: "bg-white/10" },
              { name: "Apache Spark", image: "/skills/spark.svg", bg: "bg-red-400/10" },
              { name: "Google Cloud", image: "/skills/gcp.svg", bg: "bg-blue-400/10" },
              { name: "Apache", image: "/skills/apache.svg", bg: "bg-red-400/10" },
            ].map((skill) => (
              <Card key={skill.name} className="p-4 text-center bg-white/5 backdrop-blur-sm border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className={`p-3 rounded-lg ${skill.bg} w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="text-sm font-semibold text-white">{skill.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background relative">
      {/* MagicBento Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={8}
          glowColor="132, 0, 255"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="h-[500px] md:h-[600px] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start">
          <Tabs 
            tabs={skillCategories}
            containerClassName="bg-background/80 backdrop-blur-sm rounded-full border border-white/10 p-1"
            activeTabClassName="bg-primary/80 text-white"
            tabClassName="px-6 py-3 text-sm font-medium text-white/80 hover:text-white transition-all duration-300"
            contentClassName="mt-8"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { number: "8+", label: "Languages", image: "/skills/python.svg", bg: "bg-blue-400/10" },
            { number: "15+", label: "Frameworks", image: "/skills/react.svg", bg: "bg-cyan-400/10" },
            { number: "12+", label: "AI/ML Tools", image: "/skills/ai.svg", bg: "bg-purple-400/10" },
            { number: "10+", label: "Cloud & DB", image: "/skills/aws.svg", bg: "bg-orange-400/10" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white/5 backdrop-blur-sm border-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className={`p-3 rounded-lg ${stat.bg} w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                <img 
                  src={stat.image} 
                  alt={stat.label}
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/80 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};