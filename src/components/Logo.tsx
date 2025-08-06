// src/components/Logo.tsx
import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label="Green Energy - Inicio"
    >
      <Image
        src="/logos/greenEnergyLogo.png"
        alt="Green Energy Logo"
        width={40}
        height={40}
        className="h-10 w-10 md:h-12 md:w-12 object-contain"
        priority
      />
      <span className="ml-2 text-xl md:text-2xl font-bold tracking-tight text-green-700">
        Green Energy
      </span>
    </Link>
  );
}
