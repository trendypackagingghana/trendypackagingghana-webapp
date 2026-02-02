import Link from "next/link";
import { company } from "@/app/config/company";

const ServicesCTA = () => {
  return (
    <section className="bg-primary/5 rounded-2xl p-10 md:p-16 text-center border border-primary/10">
      <h3 className="text-3xl font-bold mb-4 text-foreground">
        Have a custom packaging requirement?
      </h3>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Whether you&apos;re a startup or an established enterprise, our engineering team is ready to help you develop the perfect container for your product.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
          className="bg-primary hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-md"
        >
          Request a Consultation
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <Link
          href="/products"
          className="bg-card border border-border px-10 py-4 rounded-xl font-bold transition-all text-foreground hover:border-primary hover:text-primary"
        >
          View Catalog
        </Link>
      </div>
    </section>
  );
};

export default ServicesCTA;
