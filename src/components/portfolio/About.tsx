import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science (Cybersecurity)
                  <br />
                  SRM IST, KTR
                  <br />
                  CGPA: 9.72/10 | Expected 2027
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Chairperson</h3>
                <p className="text-muted-foreground">
                  SRM ACM SIGKDD Student Chapter
                  <br />
                  Leading data science initiatives
                  <br />
                  4x Hackathon Winner 🏆
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am Srijan Sarkar, a Machine Learning and Generative AI developer pursuing B.Tech in 
            Computer Science (Cybersecurity specialization) at SRM IST with a CGPA of 9.72. I focus 
            on NLP, LLMs, multimodal AI, Computer Vision, and building real-world applications with 
            Python, Groq, Phidata, and JavaScript frameworks. I've built high-impact AI systems in 
            domains like inventory optimization, solar analysis, meeting automation, and warehouse 
            intelligence.
          </p>
        </Card>
      </div>
    </section>
  );
};
