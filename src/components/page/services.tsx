import { servicesData } from '@/lib/data';
import ServiceCard from '@/components/page/service-card';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
