import Image from 'next/image';
import Header from '@/components/page/header';
import ActionButtons from '@/components/page/action-buttons';
import Services from '@/components/page/services';
import PortfolioAnalyzer from '@/components/page/portfolio-analyzer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroBg.imageHint}
          />
        )}
        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center bg-black/40 p-4 md:p-8">
          <div className="container mx-auto flex flex-col items-center justify-center text-center text-white">
            <Header />
            <ActionButtons />
          </div>
        </div>
      </div>
      
      <div id="services" className="w-full bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <Services />
        </div>
      </div>
      
      <div id="analyzer" className="w-full bg-secondary/50 border-t border-border">
         <div className="container mx-auto px-4 py-16 md:py-24">
          <PortfolioAnalyzer />
        </div>
      </div>

      <footer className="w-full bg-card text-card-foreground py-6">
        <div className="container mx-auto text-center text-sm text-card-foreground/70">
          <p>&copy; {new Date().getFullYear()} SonitaSV. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
