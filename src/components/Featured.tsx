"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const featuredItems = [
  {
    tag: "Featured",
    title: "AURA Pro X1",
    subtitle: "Sound, Perfected.",
    price: "From $249",
    image: "https://d2h7xmz5gqybh9.cloudfront.net/output/753c21ae-8893-4129-8fa6-83ab574c93da.png",
    large: true,
    link: "/product/aura-pro-x1",
  },
  {
    tag: "New Arrivals",
    title: "Premium Timepieces",
    price: "From $299",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=340&fit=crop&crop=center&auto=format",
  },
  {
    tag: "Best Seller",
    title: "Luxury Fragrances",
    price: "From $89",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=340&fit=crop&crop=center&auto=format",
  },
  {
    tag: "Audio",
    title: "Hi-Fi Sound Systems",
    price: "From $199",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=340&fit=crop&crop=center&auto=format",
  },
];

export default function Featured() {
  return (
    <section className="px-[22px] max-w-[1100px] mx-auto mb-[120px]" id="featured">
      <div className="section-header text-center mb-[52px]">
        <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.8px] mb-2">Curated Collections</h2>
        <p className="text-[18px] text-nav-text-secondary max-w-[540px] mx-auto">
          Hand-picked premium selections for the discerning shopper.
        </p>
      </div>
      <div className="featured-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredItems.map((item, i) => {
          const CardContent = () => (
            <>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-600 hover:scale-[1.04]"
              />
              <div className="overlay absolute bottom-0 left-0 right-0 px-6 pt-7 pb-6 bg-gradient-to-t from-black/50 to-transparent text-white">
                <div className="tag text-[11px] font-semibold uppercase tracking-[1px] mb-1 opacity-80">{item.tag}</div>
                <h3 className="text-[22px] font-bold">{item.title}</h3>
                {item.subtitle && <div className="text-[14px] opacity-80 mb-1">{item.subtitle}</div>}
                <div className="text-[16px] font-medium opacity-90">{item.price}</div>
              </div>
            </>
          );
          return (
            <ScrollReveal
              key={i}
              className={`featured-card relative overflow-hidden rounded-[18px] bg-nav-bg-secondary transition-all duration-400 ${
                item.link ? "cursor-pointer" : ""
              } ${item.large ? "sm:col-span-2 lg:row-span-2" : ""}`}
              style={{ minHeight: item.large ? "520px" : "340px" }}
            >
              {item.link ? (
                <Link href={item.link} className="absolute inset-0 z-10" aria-label={item.title}>
                  <span className="sr-only">{item.title}</span>
                </Link>
              ) : null}
              <CardContent />
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
