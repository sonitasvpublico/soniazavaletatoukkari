import { Download, Eye, Palette, Youtube, Smartphone, Mail, Linkedin, Instagram, TestTubeDiagonal, WandSparkles } from 'lucide-react';
import type { ElementType } from 'react';

export interface Service {
  title: string;
  description: string[];
  ctaText: string;
  ctaLink: string;
  icon: ElementType;
}

export const servicesData: Service[] = [
  {
    title: 'MEDIA KIT',
    description: [
      'Interested in a collaboration? Access my official Media Kit for all the details.',
      'It includes my bio, brand assets, statistics, and collaboration options for your convenience.',
    ],
    ctaText: 'Download Kit',
    ctaLink: 'https://sonitasv.com/wp-content/uploads/2025/08/SonitaSV-Media-kit.pdf',
    icon: Download,
  },
  {
    title: 'MANUAL TEST',
    description: [
      'Does your iOS or Android product need some testing?',
      'I will provide detailed bug reports, usability feedback, and ensure your product meets quality standards.',
    ],
    ctaText: 'Free Testing Guide',
    ctaLink: 'https://sonitasv.com/wp-content/uploads/2025/05/Manual-Tester-–-Free-Summary-Learning-Outline-.pdf',
    icon: TestTubeDiagonal,
  },
  {
    title: 'UX/UI DESIGN',
    description: [
      'Looking for a friendly and intuitive design?',
      'I create designs that transform your digital experience with interfaces that are both beautiful and functional.',
    ],
    ctaText: 'See Prototype',
    ctaLink: 'https://www.figma.com/proto/folW3ayAZYFTQuO5kJ2GgT/Prototipo-Tienda-de-Bicicletas-SV?node-id=2-69&p=f&t=oYaBKlD7Jrupxr60-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A69',
    icon: Palette,
  },
  {
    title: 'CUSTOMISED ANIMATIONS',
    description: [
      'Turn your favourite photo into a fun and unique cartoon portrait.',
      'Give me your idea and I can create it for you ✨✨✨',
    ],
    ctaText: 'Check Samples',
    ctaLink: 'https://www.canva.com/design/DAGouoqKjGE/q9jYgsxLHMSGLWzstfAlyg/watch?utm_content=DAGouoqKjGE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6d75b51bdc',
    icon: Smartphone,
  },
  {
    title: 'AI TOOLS REVIEW',
    description: [
        'Curious about an AI tool? I can test it for you and provide a complete review.',
        'I will analyze its functionality, usability, and give you a detailed report on its performance.'
    ],
    ctaText: 'Request a Review',
    ctaLink: 'mailto:contact@sonitasv.com',
    icon: WandSparkles,
  },
];

export const portfolioData = {
  about: {
    name: 'Sonia',
    title: 'UX/UI Designer & QA Specialist',
    description: [
      "Hello! I'm Sonia, a passionate creator at the intersection of design and technology. With a keen eye for detail and a love for seamless user experiences, I specialize in UX/UI design and rigorous Quality Assurance testing.",
      "My goal is to craft digital products that are not only beautiful and intuitive but also function flawlessly. Whether I'm designing a user-friendly interface, testing an application to perfection, or creating engaging content, I bring a blend of creativity and analytical precision to every project."
    ],
    youtubeChannel: 'https://www.youtube.com/@sonitasv',
    profileImage: 'https://sonitasv.com/wp-content/uploads/2025/08/SonitaSV-Media-kit.pdf' 
  },
  contact: {
    email: 'contact@sonitasv.com',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/soniamztouk',
        icon: Linkedin,
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sonitasv',
        icon: Instagram,
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/@sonitasv',
        icon: Youtube,
      },
    ]
  }
};
