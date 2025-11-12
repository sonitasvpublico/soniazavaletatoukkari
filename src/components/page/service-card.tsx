import type { Service } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Card className="flex h-full flex-col justify-between bg-card text-card-foreground border-border/10 shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
      <div className="flex-grow">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-center text-card-foreground tracking-wider">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {service.description.map((p, i) => (
            <p key={i} className="mb-3 text-center text-card-foreground/80 leading-relaxed">
              {p}
            </p>
          ))}
        </CardContent>
      </div>
      <CardFooter className="justify-center pt-4">
        <Button 
          asChild 
          className="bg-white/10 text-white/90 border border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <a href={service.ctaLink} target="_blank" rel="noopener noreferrer">
            <Icon className="mr-2 h-4 w-4" />
            {service.ctaText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
