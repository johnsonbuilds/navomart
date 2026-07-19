"use client";

import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-nav-accent">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    title: "Express Global Shipping",
    desc: "Delivered to 60+ countries in 2-5 business days. Tracked & insured.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-nav-accent">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure Payments",
    desc: "256-bit SSL encrypted checkout. PayPal, Visa, Mastercard, Alipay.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-nav-accent">
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "30-Day Free Returns",
    desc: "Not satisfied? We'll pick it up and refund you. No questions asked.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-nav-accent">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Duties Included",
    desc: "What you see is what you pay. No hidden customs fees or surprises.",
  },
];

export default function ValuesSection() {
  return (
    <section className="max-w-[1100px] mx-auto mb-[120px] px-[22px]" id="values">
      <div className="section-header text-center mb-[52px]">
        <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.8px] mb-2">Why NAVO?</h2>
        <p className="text-[18px] text-nav-text-secondary max-w-[540px] mx-auto">
          Designed for the global shopper, built on trust.
        </p>
      </div>
      <ScrollReveal className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-nav-border rounded-[18px] overflow-hidden">
        {values.map((v, i) => (
          <div
            key={i}
            className="value-card bg-white py-10 px-7 text-center transition-colors hover:bg-[#fafafa]"
          >
            <div className="icon w-[44px] h-[44px] mx-auto mb-4 bg-nav-bg-secondary rounded-full flex items-center justify-center">
              {v.icon}
            </div>
            <h4 className="text-[14px] font-semibold mb-1">{v.title}</h4>
            <p className="text-[13px] text-nav-text-tertiary leading-[1.4]">{v.desc}</p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
