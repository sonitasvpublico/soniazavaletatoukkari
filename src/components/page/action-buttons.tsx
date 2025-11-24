import { Button } from "@/components/ui/button";
import { Github, FileText, Briefcase } from "lucide-react";

const actions = [
  {
    href: "https://github.com/sonitasvpublico",
    label: "Github",
    icon: <Github />,
  },
  {
    href: "https://sonitasv.com/wp-content/uploads/2025/11/Sonia-Toukkari.pdf",
    label: "Resume",
    icon: <FileText />,
  },
  {
    href: "https://www.canva.com/design/DAG1rPR0ugg/5-N5ebMQbCu7bLYCGoCsCw/view?utm_content=DAG1rPR0ugg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0321e0c5d9",
    label: "Portfolio",
    icon: <Briefcase />,
  },
];

export default function ActionButtons() {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none">
      {actions.map((action) => (
        <Button
          key={action.label}
          asChild
          size="lg"
          className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/55 text-white hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
        >
          <a href={action.href} target="_blank" rel="noopener noreferrer">
            {action.icon}
            <span>{action.label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
