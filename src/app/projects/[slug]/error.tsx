"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-nile-blue flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-sunset text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Something went wrong
        </p>
        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-6 leading-tight">
          Couldn&apos;t load this project
        </h1>
        <p className="text-white/50 text-base mb-10 leading-relaxed">
          There was a problem loading this project page. Try again or go back to our work.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center bg-sunset px-8 py-4 text-base font-semibold text-white hover:bg-[#c85a32] transition-colors duration-300"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
            }}
          >
            Try Again
          </button>
          <Link
            href="/#work"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
