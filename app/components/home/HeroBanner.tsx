import { company } from "@/app/config/company";

const HeroBanner = () => {
  return (
    <section className="px-4 md:px-10 mb-12" aria-labelledby="hero-heading">
      <div
        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center rounded-2xl items-start justify-end px-6 pb-12 md:px-16 md:pb-16 relative overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/images/banner/banner-one.webp')" }}>
        {/* Translucent overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="flex flex-col gap-4 max-w-2xl relative z-10">
          <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
            Manufacturing Excellence
          </span>
          <h1 id="hero-heading" className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Precision Packaging for West Africa
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-lg">
            Serving the {company.industries.join(", ")} industries with medical-grade containers and sustainable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
