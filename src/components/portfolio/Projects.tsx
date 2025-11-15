import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "InvenX — Smart Warehouse System",
    description:
      "Designed a smart warehouse system using LSTM neural networks to forecast demand with over 85% accuracy. Built custom algorithms to detect surplus and shortages, automating supply chain decisions. Developed a route optimization platform using TomTom API.",
    tech: ["Python", "Groq", "Phidata", "Flask", "Next.js", "LSTM"],
    github: "https://github.com/Srijansarkar17/InvenX",
  },
  {
    title: "MeetFriendAI — Smart Meeting Assistant",
    description:
      "A smart meeting assistant that records and transcribes meetings in real-time, detects action items using Groq AI, and sends personalized task notifications via email with Google Calendar integration.",
    tech: ["Flask", "Groq", "GCP", "VexaMeetAPI", "OAuth2", "Slack SDK"],
    github: "https://github.com/Srijansarkar17/MeetingAgent",
  },
  {
    title: "SunScope — Solar Panel Assessment AI",
    description:
      "Built an AI-powered solar assessment tool using YOLO v11 to analyze rooftop suitability for solar panel installation, achieving 0.94 mAP score in rooftop segmentation. Integrated a solar savings calculator that estimates ROI based on monthly electricity bills.",
    tech: ["Python", "YOLOv11", "Flask", "Vanilla JS", "OpenCV"],
    github: "https://github.com/Srijansarkar17/Sunscope",
  },
  {
    title: "AI Powered Network Intrusion Detection System",
    description:
      "Built an AI-powered Network Intrusion Detection System (IDS) using the NSL-KDD dataset and AWS services to classify 38 attack types in real time, deployed through a SageMaker Canvas endpoint. Designed a scalable cloud pipeline with S3, Glue ETL, SageMaker, Bedrock (Mistral 7B), and Flask to automate data processing, deliver instant threat predictions, and generate intelligent attack analysis with remediation plans. Developed a full-stack monitoring dashboard with REST APIs, confidence scoring, and AI-driven security insights for enterprise-grade threat detection and reporting.",
    tech: ["Python", "AWS SageMaker", "AWS Glue", "Flask", "JavaScript"],
    github: "https://github.com/Srijansarkar17/Network-Intrusion-Detection-System-using-AWS",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 md:p-8 card-hover">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 w-fit"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
