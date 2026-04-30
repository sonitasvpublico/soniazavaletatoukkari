import Footer from '@/components/page/footer';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <MoveLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="font-headline text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="font-body space-y-6 text-foreground/80 leading-relaxed text-left">
          <p className="font-semibold text-foreground">Last Updated: 31.10.2024</p>
          
          <p>At SonitaSV we prioritize the privacy of our visitors. This Privacy Policy outlines the types of information we collect and how we use it.</p>
          
          <div>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p>The only personal information we collect from you is your email address when you voluntarily provide it.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your email address solely to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Send you updates or information related to SonitaSV.</li>
              <li>Respond to inquiries or requests you make through our site.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Data Security</h2>
            <p>We take reasonable steps to protect your email from unauthorized access, alteration, disclosure, or destruction. However, please note that no internet transmission is ever completely secure.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Sharing Your Information</h2>
            <p>We do not share, sell, or disclose your email address to third parties unless required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Your Rights</h2>
            <p>You have the right to request access to, update, or delete your email address from our records. To do so, please contact us at contact@sonitasv.com.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Updates to this Privacy Policy</h2>
            <p>We may update this policy periodically to reflect changes in our practices. Any changes will be posted on this page with an updated date.</p>
          </div>

          <p className="mt-8 pt-8 border-t border-border/30 italic">
            If you have any questions or concerns about this Privacy Policy, please reach out to us at <a href="mailto:contact@sonitasv.com" className="text-primary hover:underline not-italic font-medium">contact@sonitasv.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
