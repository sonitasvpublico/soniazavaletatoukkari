import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Sonia Zavaleta Toukkari',
  description: 'QA Specialist & UX/UI Expert. Crafting flawless digital experiences.',
};

const faviconDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEU0Ok5TTl9fYGhlaW5tdn9/gYKEhIeMj5GSlaCjpquwsrS5u73AwsjJzc/T1Njz9ff///+0IOzVAAAAAXRSTlMAQObYZgAAAFNJREFUCNdjYGD4/x8EQAoKjIYWQEASKgwGDAwQDNwY2BgZgDICjAwMPMIsrAwYGBhCcbIyMDCysbCxsDBwADFobGBgZWVj4Wdn4eFhYWFhYdABACCyA/3L04b2AAAAAElFTkSuQmCC";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconDataUri} type="image/png" />
        <link rel="apple-touch-icon" href={faviconDataUri} />
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
