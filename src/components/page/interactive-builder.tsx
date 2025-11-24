"use client";

import { TestTubeDiagonal, Smartphone, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const buildOptions = [
  {
    id: "qa",
    title: "QA & Testing",
    icon: TestTubeDiagonal,
    toast: "Great choice! Let's ensure your app is bug-free.",
    targetId: "services", // Scrolls to the main services section
  },
  {
    id: "dev",
    title: "App Development",
    icon: Smartphone,
    toast: "Excellent! Let's build your Minimum Viable Product.",
    targetId: "services",
  },
  {
    id: "design",
    title: "UX/UI Design",
    icon: Palette,
    toast: "Perfect! Let's create an experience users will love.",
    targetId: "services",
  },
];

export default function InteractiveBuilder() {
  const { toast } = useToast();

  const handleScroll = (targetId: string, toastMessage: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    toast({
      description: toastMessage,
    });
  };

  return (
    <div className="my-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-headline text-center text-white/90 mb-6 drop-shadow">
        What should we build together?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {buildOptions.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className="h-auto py-6 flex flex-col gap-3 bg-white/5 border-white/30 text-white hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105"
            onClick={() => handleScroll(option.targetId, option.toast)}
          >
            <option.icon className="w-8 h-8 text-primary" />
            <span className="font-headline text-xl">{option.title}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
