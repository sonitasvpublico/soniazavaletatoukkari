import { servicesData } from '@/lib/data';
import ServiceCard from '@/components/page/service-card';
import { Palette, TestTubeDiagonal, WandSparkles } from 'lucide-react';

const serviceCategories = [
  {
    title: 'DESIGN & USER EXPERIENCE',
    services: ['UX/UI DESIGN', 'APP STORE CREATIVES']
  },
  {
    title: 'QUALITY & TESTING',
    services: ['MANUAL TEST', 'AI TOOLS REVIEW']
  },
  {
    title: 'BRAND & CONTENT',
    services: ['MEDIA KIT']
  }
];

export default function Services() {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-card-foreground">
          WHAT SHOULD WE BUILD TOGETHER?
        </h2>
        <p className="text-lg text-card-foreground/80 mt-4 max-w-3xl mx-auto">
          From concept to launch, I offer a range of services to bring your digital vision to life.
        </p>
      </div>
      <div className="space-y-16">
        {serviceCategories.map((category) => (
          <div key={category.title}>
            <h3 className="font-headline text-3xl font-semibold text-card-foreground mb-8 text-center tracking-wider">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {servicesData
                .filter(service => category.services.includes(service.title))
                .map((service) => (
                  <div key={service.title} className="flex justify-center">
                     <div className="max-w-sm">
                        <ServiceCard service={service} />
                     </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
