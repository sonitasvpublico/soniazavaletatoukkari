import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutMe() {
  const { name, title, description, youtubeChannel } = portfolioData.about;
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me-image');

  return (
    <section className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 w-full">
        {aboutImage && (
           <Image
            src={aboutImage.imageUrl}
            alt={aboutImage.description}
            width={600}
            height={600}
            className="rounded-lg shadow-2xl object-cover"
            data-ai-hint={aboutImage.imageHint}
          />
        )}
      </div>
      <div className="md:w-1/2 w-full">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
          About
        </h2>
        <h3 className="text-2xl text-primary font-semibold mb-6">{title}</h3>
        {description.map((paragraph, index) => (
          <p key={index} className="mb-4 text-foreground/80 leading-relaxed">
            {paragraph}
          </p>
        ))}
        <Button asChild size="lg" className="mt-4">
          <a href={youtubeChannel} target="_blank" rel="noopener noreferrer">
            <Youtube className="mr-2" />
            My YouTube Channel
          </a>
        </Button>
      </div>
    </section>
  );
}
