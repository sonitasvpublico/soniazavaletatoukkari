import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/data';
import { Mail } from 'lucide-react';

export default function Contact() {
  const { email, socials } = portfolioData.contact;

  return (
    <section className="w-full max-w-3xl mx-auto text-center">
      <Card className="shadow-lg">
        <CardHeader>
          <Mail className="h-10 w-10 text-primary mb-2 mx-auto" />
          <CardTitle className="font-headline text-3xl md:text-4xl">
            Let's Get in Touch
          </CardTitle>
          <CardDescription className="max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <Button asChild size="lg">
            <a href={`mailto:${email}`}>
              {email}
            </a>
          </Button>
          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <Button key={social.name} variant="outline" size="icon" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon />
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
