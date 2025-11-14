import { FloatingNav } from "@/components/ui/floating-navbar";
import { 
  IconHome, 
  IconUser, 
  IconMessage, 
  IconBriefcase, 
  IconAward, 
  IconCode,
  IconPhoto
} from "@tabler/icons-react";

const floatingNavItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconCode className="h-4 w-4 text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconBriefcase className="h-4 w-4 text-white" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <IconBriefcase className="h-4 w-4 text-white" />,
  },
  {
    name: "Achievements",
    link: "#achievements",
    icon: <IconAward className="h-4 w-4 text-white" />,
  },
  {
    name: "Gallery",
    link: "#gallery",
    icon: <IconPhoto className="h-4 w-4 text-white" />, // Changed to photo icon
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
];

export const Navigation = () => {
  return <FloatingNav navItems={floatingNavItems} />;
};