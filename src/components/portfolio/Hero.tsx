import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Srijan Sarkar</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Passionate Machine Learning & Generative AI Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            variant="default"
            size="lg"
            className="gap-2 glow-effect"
            asChild
          >
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <a
            href="https://github.com/Srijansarkar17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/srijan-sarkar-90177b288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:srijanb463@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="tel:+918336894338"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
