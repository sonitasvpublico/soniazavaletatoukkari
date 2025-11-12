import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const profilePic = PlaceHolderImages.find(img => img.id === 'profile-picture');
  return (
    <header className="mb-12 flex flex-col md:flex-row items-center justify-center gap-8">
      {profilePic && (
        <Image
          src={profilePic.imageUrl}
          alt={profilePic.description}
          width={150}
          height={150}
          className="rounded-full border-4 border-white/50 shadow-lg"
          data-ai-hint={profilePic.imageHint}
        />
      )}
      <div className="text-center md:text-left">
        <h1 className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl drop-shadow-lg">
          QA Specialist • UX/UI Expert
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl drop-shadow">
          Crafting flawless digital experiences through rigorous testing and intuitive, beautiful design.
        </p>
      </div>
    </header>
  );
}
