import { servicesData } from '@/lib/data';
import ServiceCard from '@/components/page/service-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const serviceCategories = [
  {
    title: 'QUALITY & TESTING',
    services: ['MANUAL TEST', 'AI TOOLS REVIEW']
  },
  {
    title: 'DESIGN & USER EXPERIENCE',
    services: ['UX/UI DESIGN']
  },
  {
    title: 'FULL PRODUCT DEVELOPMENT',
    services: ['FROM CONCEPT TO MVP']
  },
  {
    title: 'BRAND & CONTENT',
    services: ['MEDIA KIT']
  }
];

export default function Services() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-card-foreground">
          WHAT SHOULD WE BUILD TOGETHER?
        </h2>
        <p className="text-lg text-card-foreground/80 mt-4 max-w-3xl mx-auto">
          From concept to launch, I offer a range of services to bring your digital vision to life.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {serviceCategories.map((category, index) => (
          <AccordionItem value={`item-${index}`} key={category.title}>
            <AccordionTrigger className="font-headline text-3xl font-semibold text-card-foreground hover:no-underline py-6">
              {category.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center pt-8">
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
