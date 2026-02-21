import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | BrandQraft",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-nile-blue flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-sunset text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Looks like this page got folded away
        </h1>
        <p className="text-white/50 text-base mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-sunset px-8 py-4 text-base font-semibold text-white hover:bg-[#c85a32] transition-colors duration-300 overflow-hidden"
          style={{
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
