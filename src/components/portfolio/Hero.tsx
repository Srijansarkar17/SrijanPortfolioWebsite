import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import LightRays from "@/components/ui/LightRays";

export const Hero = () => {
  const typewriterWords = [
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "AI",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* LightRays Background Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={1.2}
          lightSpread={0.7}
          rayLength={2.0}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.1}
          saturation={1.5}
          fadeDistance={1.5}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-1" />

      {/* Main Content */}
      <div className="container mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Hi, I'm <span className="text-gradient">Srijan Sarkar</span>
          </h1>

          {/* Typewriter Effect */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-white/80 text-xs sm:text-base mb-4">
              Building intelligent solutions with cutting-edge AI
            </p>
            <TypewriterEffectSmooth words={typewriterWords} />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            variant="default"
            size="lg"
            className="gap-2 glow-effect bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            asChild
          >
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-white/30 text-white hover:bg-white/10"
            asChild
          >
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
            className="text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 p-3 rounded-full"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/srijan-sarkar-90177b288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 p-3 rounded-full"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:srijanb463@gmail.com"
            className="text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 p-3 rounded-full"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="tel:+918336894338"
            className="text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 p-3 rounded-full"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Arrow at the bottom of the screen */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/80" />
      </div>
    </section>
  );
};