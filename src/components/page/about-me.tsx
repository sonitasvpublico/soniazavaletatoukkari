import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Youtube, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutMe() {
  const { youtubeChannel } = portfolioData.about;
  const { email } = portfolioData.contact;
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me-image');
  const newDescription = [
    "Hi! I'm Sonia \"SonitaSV\" — a product designer passionate about creating digital experiences that look great and work seamlessly.",
    "I’ve designed and developed mobile apps from start to finish, combining UX/UI design and manual testing to deliver reliable, high-quality results.",
    "If you're looking for a creative partner to bring your digital product to life, let’s connect and build something great together."
  ]

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
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
          About
        </h2>
        {newDescription.map((paragraph, index) => (
          <p key={index} className="mb-4 text-foreground/80 leading-relaxed">
            {paragraph}
          </p>
        ))}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg">
            <a href={`mailto:contact@sonitasv.com`}>
              <Mail className="mr-2" />
              contact@sonitasv.com
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={youtubeChannel} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2" />
              My YouTube Channel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
