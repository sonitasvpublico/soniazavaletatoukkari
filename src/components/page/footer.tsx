import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-card text-card-foreground py-6">
      <div className="container mx-auto text-center text-sm text-card-foreground/70">
        <p>
          <Link 
            href="/privacy-policy" 
            className="text-card-foreground/70 hover:text-card-foreground/70 cursor-default no-underline"
          >
            &copy; {new Date().getFullYear()} SonitaSV. All rights reserved.
          </Link>
        </p>
      </div>
    </footer>
  );
}
