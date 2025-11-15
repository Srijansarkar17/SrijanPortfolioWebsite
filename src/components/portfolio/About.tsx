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
            I'm a <Cover>Software Engineer</Cover> with over 3 years of experience building scalable, user-focused applications across the full stack. I specialize in designing efficient system architectures, writing clean and reliable code, and developing high-performance web platforms that deliver seamless user experiences.

            I enjoy working across the entire lifecycle — from planning and building core features to optimizing performance, improving UI/UX flow, and deploying production-ready systems. I thrive in fast-paced environments and absolutely love hackathons — they push me to think creatively, collaborate deeply, and turn ambitious ideas into polished, working products.

            Driven by curiosity and a passion for problem-solving, I'm constantly exploring new technologies and finding better ways to engineer robust, elegant, and impactful software.
          </p>
        </div>
      </div>
    </section>
  );
};