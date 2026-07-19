"use client";

import ScrollReveal from "./ScrollReveal";

const heroImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&crop=center&auto=format",
];

export default function Hero() {
  return (
    <section className="hero mt-12 min-h-[85vh] flex items-center bg-gradient-to-b from-nav-bg-secondary to-white relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-[-40%] right-[-10%] w-[70%] h-[140%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,113,227,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-[1100px] mx-auto px-[22px] grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center relative z-1 py-[80px]">
        <div className="hero-text">
          <h1 className="text-[clamp(40px,5vw,64px)] font-bold tracking-[-1.5px] leading-[1.05] mb-4">
            Global Shopping.<br />
            <span className="text-nav-accent">Local Trust.</span>
          </h1>
          <p className="text-[20px] text-nav-text-secondary leading-[1.5] mb-8 max-w-[480px]">
            Discover premium products curated from around the world. Duty-free pricing, express international shipping, and 30-day free returns.
          </p>
          <div className="flex gap-7 mb-9 flex-wrap">
            <span className="hero-badge flex items-center gap-2 text-[13px] text-nav-text-tertiary font-medium">
              <svg className="w-[18px] h-[18px] text-nav-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Free Shipping Over $99
            </span>
            <span className="hero-badge flex items-center gap-2 text-[13px] text-nav-text-tertiary font-medium">
              <svg className="w-[18px] h-[18px] text-nav-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              100% Secure Checkout
            </span>
            <span className="hero-badge flex items-center gap-2 text-[13px] text-nav-text-tertiary font-medium">
              <svg className="w-[18px] h-[18px] text-nav-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-9-9" />
                <path d="M12 6v6l4 2" />
              </svg>
              30-Day Free Returns
            </span>
          </div>
          <a
            href="#products"
            className="hero-cta inline-flex items-center gap-2 bg-nav-accent text-white px-[34px] py-[14px] rounded-[980px] text-[16px] font-semibold no-underline transition-all duration-300 hover:bg-nav-accent-hover hover:-translate-y-0.5 border-none cursor-pointer"
          >
            Shop Now
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="hero-image flex justify-center items-center">
          <img
            src={heroImages[0]}
            alt="Premium Wireless Headphones"
            loading="lazy"
            className="w-full max-w-[520px] rounded-[18px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] object-cover aspect-square transition-transform duration-600 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
