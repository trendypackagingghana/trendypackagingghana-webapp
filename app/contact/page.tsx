import Header from "../components/layout/Header";
import FooterNew from "../components/layout/FooterNew";
import MobileBottomNav from "../components/layout/MobileBottomNav";
import MapSection from "../components/contact/MapSection";
import { company } from "@/app/config/company";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
      <Header />

      <main className="flex-1 py-16 px-4 md:px-10 max-w-7xl mx-auto w-full pb-24 xl:pb-16">
        {/* Page Heading */}
        <div className="flex flex-col gap-3 mb-12 text-center items-center">
          <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Contact and Support
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We&apos;re here to support your packaging needs with professional solutions for pharmaceutical, cosmetics, and home care containers.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <a
            href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 rounded-xl h-14 px-6 bg-primary text-white font-bold shadow-md hover:opacity-90 transition-all group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Us</span>
          </a>
          <a
            href={`mailto:${company.contact.email}`}
            className="flex items-center gap-3 rounded-xl h-14 px-6 bg-white border border-border text-foreground font-bold shadow-sm hover:border-primary hover:text-primary transition-all group"
          >
            <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email Us</span>
          </a>
          <a
            href={company.map.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl h-14 px-6 bg-white border border-border text-foreground font-bold shadow-sm hover:border-primary hover:text-primary transition-all group"
          >
            <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Directions</span>
          </a>
        </div>

        {/* Two-column layout: Info cards + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-foreground font-bold mb-2">Our Office</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {company.contact.address.street},<br />
                {company.contact.address.city},<br />
                {company.contact.address.country}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-foreground font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {company.contact.phone}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-foreground font-bold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-all">
                {company.contact.email}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-foreground font-bold mb-2">Operating Hours</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {company.operatingHours.weekdays}<br />
                {company.operatingHours.saturday}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[350px] lg:min-h-0">
            <MapSection />
          </div>
        </div>
      </main>

      <FooterNew />
      <MobileBottomNav />
    </div>
  );
}
