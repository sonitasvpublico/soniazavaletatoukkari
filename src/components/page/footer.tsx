import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { socials } = portfolioData.contact;
  return (
    <footer className="w-full bg-card text-card-foreground py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className="bg-card-foreground/5 hover:bg-card-foreground/10 border-card-foreground/20"
              asChild
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 text-card-foreground/80" />
              </a>
            </Button>
          ))}
        </div>
        <div className="text-center text-sm text-card-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} SonitaSV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
