export default function Footer() {
  return (
    <footer className="w-full bg-card text-card-foreground py-6">
      <div className="container mx-auto text-center text-sm text-card-foreground/70">
        <p>
          &copy; {new Date().getFullYear()} SonitaSV. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
