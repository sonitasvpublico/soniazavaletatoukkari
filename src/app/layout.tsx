import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Sonia Zavaleta Toukkari',
  description: 'QA Specialist & UX/UI Expert. Crafting flawless digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.stack.imgur.com/3o83k.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="https://i.stack.imgur.com/3o83k.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="https://i.stack.imgur.com/3o83k.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poiret+One&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
