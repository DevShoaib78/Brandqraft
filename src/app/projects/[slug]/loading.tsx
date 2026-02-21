export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-nile-blue animate-pulse">
      {/* Hero Banner skeleton */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back button */}
          <div className="h-5 w-32 bg-white/10 rounded mb-12" />
          {/* Category */}
          <div className="h-4 w-40 bg-white/10 rounded mb-4" />
          {/* Title */}
          <div className="h-12 w-3/4 bg-white/10 rounded mb-3" />
          <div className="h-12 w-1/2 bg-white/10 rounded mb-6" />
          {/* Description */}
          <div className="h-5 w-full max-w-xl bg-white/10 rounded mb-2" />
          <div className="h-5 w-2/3 max-w-xl bg-white/10 rounded mb-8" />
          {/* Tags */}
          <div className="flex gap-3">
            <div className="h-8 w-24 bg-white/10 rounded" />
            <div className="h-8 w-20 bg-white/10 rounded" />
            <div className="h-8 w-28 bg-white/10 rounded" />
          </div>
        </div>
      </section>

      {/* Image placeholders skeleton */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-[4/3] bg-white/[0.05] rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution skeleton */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {[0, 1].map((i) => (
              <div key={i}>
                <div className="h-3 w-24 bg-white/10 rounded mb-4" />
                <div className="h-8 w-48 bg-white/10 rounded mb-6" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-5/6 bg-white/10 rounded" />
                  <div className="h-4 w-4/5 bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
