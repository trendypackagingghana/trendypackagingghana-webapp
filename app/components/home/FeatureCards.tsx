import Link from "next/link";
import { company } from "@/app/config/company";

const FeatureCards = () => {
  return (
    <section className="px-4 md:px-10 mb-16 grid grid-cols-1 md:grid-cols-2 gap-6" id="services" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">Our Services</h2>

      {/* Custom Molds Card */}
      <a
        href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
        className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-white border border-border hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer group"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2 text-foreground">Custom Molds</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Unique identity for your brand. From 3D conceptual design to rapid tooling and final production.
          </p>
          <span className="text-primary font-bold text-sm flex items-center gap-1 justify-center md:justify-start">
            Contact us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </a>

      {/* Quality Assurance Card */}
      <Link
        href="/products"
        className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/20 transition-all cursor-pointer group"
      >
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2 text-white">Quality Assurance</h3>
          <p className="text-white/80 text-sm mb-4">
            Rigorous testing and quality control at every stage, ensuring consistent, durable packaging you can trust.
          </p>
          <span className="font-bold text-white text-sm flex items-center gap-1 justify-center md:justify-start">
            View Our Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </section>
  );
};

export default FeatureCards;
