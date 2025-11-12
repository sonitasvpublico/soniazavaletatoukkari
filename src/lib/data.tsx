import { Download, GalleryThumbnails, Palette, Smartphone, TestTubeDiagonal, WandSparkles, Link, Coffee } from 'lucide-react';
import type { ElementType, SVGProps } from 'react';

// SVG Icon Components for Social Media
const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <defs>
      <radialGradient id="insta-gradient" cx="0.3" cy="1.2" r="1.2">
        <stop offset="0" stopColor="#F58529" />
        <stop offset="0.4" stopColor="#DD2A7B" />
        <stop offset="0.9" stopColor="#8134AF" />
      </radialGradient>
    </defs>
    <path fill="url(#insta-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.667 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.667-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path fill="#FF0000" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5V7.5L16,12L10,16.5Z" />
  </svg>
);

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);


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
    ctaLink: 'https://sonitasv.com/wp-content/uploads/2025/11/Sonia-Toukkari-.pdf',
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
      'I create designs that transform your digital experience, from beautiful interfaces to the stunning mockups and graphics needed for app stores.',
    ],
    ctaText: 'See Prototype',
    ctaLink: 'https://blurry-label-12230468.figma.site',
    icon: Palette,
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
  {
    title: 'FROM CONCEPT TO MVP',
    description: [
      'I turn your idea into a functional app, ready for user testing.',
      'Covering UX/UI design, initial development, and app store preparation to deliver a market-ready product.'
    ],
    ctaText: 'Discuss a Project',
    ctaLink: 'mailto:contact@sonitasv.com',
    icon: Smartphone,
  }
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
    profileImage: 'https://sonitasv.com/wp-content/uploads/2024/02/photo_5807905737341515367_y.jpg' 
  },
  contact: {
    email: 'contact@sonitasv.com',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/soniazavaleta/',
        icon: LinkedInIcon,
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sonitasvpro',
        icon: InstagramIcon,
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/@sonitasv',
        icon: YouTubeIcon,
      },
      {
        name: 'GitHub',
        url: 'https://github.com/sonitasvpublico',
        icon: GitHubIcon,
      },
      {
        name: 'Beacons',
        url: 'https://beacons.ai/sonitasv',
        icon: Link,
      },
      {
        name: 'Buy Me a Coffee',
        url: 'https://buymeacoffee.com/sonitasv',
        icon: Coffee,
      }
    ]
  }
};
