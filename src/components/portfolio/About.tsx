import { Cover } from "@/components/ui/cover";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="text-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-5xl mx-auto">
            I'm a <Cover>Full Stack AI Engineer</Cover> with over 3 years of hands-on experience building end-to-end AI systems—from training machine learning models and deploying LLM-powered applications to engineering scalable full-stack platforms that bring these models to life. My work spans NLP, deep learning, agentic AI, and modern web development, allowing me to bridge the gap between powerful AI capabilities and real-world user experiences. I thrive in high-energy environments and truly love hackathons—they challenge me to innovate quickly, collaborate deeply, and transform bold ideas into polished working solutions. I'm driven by curiosity, creativity, and a constant desire to push the boundaries of what AI can do.
          </p>
        </div>
      </div>
    </section>
  );
};