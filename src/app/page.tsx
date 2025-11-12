import Image from 'next/image';
import Header from '@/components/page/header';
import ActionButtons from '@/components/page/action-buttons';
import AboutMe from '@/components/page/about-me';
import Services from '@/components/page/services';
import Footer from '@/components/page/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PortfolioAnalyzer from '@/components/page/portfolio-analyzer';

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
        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center bg-black bg-opacity-60 p-4 md:p-8">
          <div className="container mx-auto flex flex-col items-center justify-center text-center text-white">
            <Header />
            <ActionButtons />
          </div>
        </div>
      </div>
      
      <div id="services" className="w-full bg-card text-card-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <Services />
        </div>
      </div>

      <div id="about" className="w-full bg-white text-black">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <AboutMe />
        </div>
      </div>
      
      <div id="analyzer" className="w-full bg-gray-50 text-black">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <PortfolioAnalyzer />
        </div>
      </div>

      <Footer />
    </main>
  );
}
