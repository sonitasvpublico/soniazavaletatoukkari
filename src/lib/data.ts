import { Download, Eye, Palette, Youtube, Star, Sparkles, Smartphone } from 'lucide-react';
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
    icon: Eye,
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
    title: 'IA TOOLS\' REVIEW',
    description: [
      'I test and review the latest AI tools on my YouTube channel.',
      'Discover insights and practical tips to leverage artificial intelligence effectively.',
    ],
    ctaText: 'Watch on YouTube',
    ctaLink: 'https://www.youtube.com/@sonitasv',
    icon: Youtube,
  },
  {
    title: 'MOCKUPS',
    description: [
      'I create beautiful designs that showcase your app\'s functionality and appeal.',
      'Enhance your presentations and attract more users with stunning visuals. Contact me for professional, tailored mockups!',
    ],
    ctaText: 'Check Samples',
    ctaLink: 'https://www.canva.com/design/DAGouoqKjGE/q9jYgsxLHMSGLWzstfAlyg/watch?utm_content=DAGouoqKjGE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6d75b51bdc',
    icon: Star,
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    description: [
      'I turn ideas into fully functional Android and iOS apps — from concept to launch.',
    ],
    ctaText: 'Check Sample',
    ctaLink: 'https://sonitasv.com/wp-content/uploads/2025/05/SonitaSV-waving.mp4',
    icon: Smartphone,
  },
];
