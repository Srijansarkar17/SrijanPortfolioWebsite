import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "srijanb463@gmail.com",
    href: "mailto:srijanb463@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8336894338",
    href: "tel:+918336894338",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/srijan-sarkar-90177b288/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com/Srijansarkar17",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 card-hover">
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground mb-6">
            Interested in collaborating? Feel free to reach out!
          </p>
          <Button size="lg" className="gap-2 glow-effect" asChild>
            <a href="mailto:srijanb463@gmail.com">
              <Mail className="h-4 w-4" />
              Send Email
            </a>
          </Button>
        </Card>

        <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Srijan Sarkar. Built with passion and code.
          </p>
        </footer>
      </div>
    </section>
  );
};
