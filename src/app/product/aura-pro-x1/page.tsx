"use client";

import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

// All images generated via wavespeed (nano-banana-2 + seedream-v4.5 edit)
const heroImg = "https://d2h7xmz5gqybh9.cloudfront.net/output/753c21ae-8893-4129-8fa6-83ab574c93da.png";
const featureImages = [
  { src: "https://d2h7xmz5gqybh9.cloudfront.net/output/b96e090a-f641-406a-b7c2-c083349abb6e.png", icon: "sun", title: "Adaptive ANC", desc: "Blocks the world when you want to. Adjusts in real-time to your environment." },
  { src: "https://d2h7xmz5gqybh9.cloudfront.net/output/275673c0-37fb-443e-a8b1-1ac07617c043.png", icon: "music", title: "Studio-Grade Sound", desc: "40mm custom drivers with LDAC support. Hear every detail." },
  { src: "https://d2h7xmz5gqybh9.cloudfront.net/output/53cd6e39-382a-4d81-a7b3-855202eb00e1.png", icon: "battery", title: "Power That Lasts", desc: "40 hours with ANC on. 10 min charge = 5 hrs playback." },
  { src: "https://d2h7xmz5gqybh9.cloudfront.net/output/fd57c60d-f3fc-488f-8234-d75b5b5edb1f.png", icon: "bluetooth", title: "Seamless Connection", desc: "Bluetooth 5.4 with multipoint pairing across two devices." },
  { src: "https://d2h7xmz5gqybh9.cloudfront.net/output/ad3efbd9-5240-4a6b-92f6-a700d2635205.png", icon: "zap", title: "Play Without Delay", desc: "40ms gaming mode. Synced audio for videos and competitive play." },
  { src: "https://d2h7xmz5gqybh9.cloudfront.net/output/7c7ac555-2e44-4b0a-8a88-d7bb1c2f26c9.jpeg", icon: "droplet", title: "Built for Everything", desc: "IPX7 waterproof. Rain, sweat, spills — no problem." },
];
const lifestyleScenes = [
  { tag: "Deep Work", title: "Deep Work, Anywhere.", desc: "Noise cancellation that adapts to your office, your café, your commute.", img: "https://d2h7xmz5gqybh9.cloudfront.net/output/e506c0d2-5844-4204-9421-51faca2f82b5.jpeg" },
  { tag: "Travel", title: "Your Flight, Upgraded.", desc: "60 hours of battery. Zero distractions. The journey becomes the destination.", img: "https://d2h7xmz5gqybh9.cloudfront.net/output/13acd706-16bc-4d03-b56f-c5439688e7fd.png" },
  { tag: "Fitness", title: "Move Without Limits.", desc: "IPX7 waterproof. Secure fit. Bass that pushes you harder.", img: "https://d2h7xmz5gqybh9.cloudfront.net/output/17bd8ebf-3907-4b2b-b75f-fd345feeaa43.png" },
  { tag: "Unwind", title: "For the Moments Between.", desc: "Hi-res audio isn't just for studios. It's for Sunday mornings and late-night playlists.", img: "https://d2h7xmz5gqybh9.cloudfront.net/output/2ef7c1af-416e-4989-bedb-04fa225aa742.jpeg" },
];
const specs = [
  ["Driver Size", "40mm custom dynamic"],
  ["Frequency Response", "4Hz – 40kHz"],
  ["Impedance", "32Ω"],
  ["Bluetooth Version", "5.4"],
  ["Codec Support", "LDAC, AAC, SBC"],
  ["Active Noise Cancellation", "Hybrid ANC (up to 45dB reduction)"],
  ["Transparency Mode", "Yes, adjustable"],
  ["Battery Life", "40h (ANC on) / 60h (ANC off)"],
  ["Charging", "USB-C, 10 min = 5 hrs playback"],
  ["Waterproof Rating", "IPX7"],
  ["Weight", "254g"],
  ["Microphones", "6-mic array with beamforming"],
  ["Multipoint", "Yes (2 devices simultaneously)"],
  ["Latency", "40ms (Gaming Mode)"],
  ["Foldable", "Yes, flat-fold design"],
];
const boxItems = [
  "AURA Pro X1 Headphones",
  "USB-C Charging Cable (1.2m)",
  "3.5mm Audio Cable",
  "Premium Hardshell Case",
  "Quick Start Guide",
  "Warranty Card",
];
const faqs = [
  ["Can I use AURA Pro X1 for phone calls?", "Yes. The 6-mic array with beamforming technology ensures crystal-clear voice pickup, even in noisy environments."],
  ["Do they work with iPhone?", "Absolutely. Full compatibility with iOS, including seamless pairing and in-app EQ customization."],
  ["How long does a full charge take?", "Approximately 1.5 hours via USB-C. A 10-minute quick charge gives you 5 hours of playback."],
  ["Can I connect to two devices at once?", "Yes. Bluetooth 5.4 multipoint lets you switch between your phone and laptop instantly."],
  ["Are replacement ear cushions available?", "Yes. Replacement pads are sold separately and ship within 2 business days."],
  ["Is there a companion app?", "Yes. The AURA app (iOS & Android) offers EQ customization, ANC levels, firmware updates, and Find My Headphones."],
  ["What's your return policy?", "30-day risk-free trial. If you're not satisfied, return them for a full refund — no questions asked."],
  ["Do they support spatial audio?", "Yes. Head-tracked spatial audio is available for compatible content on iOS and Android."],
  ["Are they good for gaming?", "Gaming Mode reduces latency to 40ms, making them suitable for competitive mobile and PC gaming."],
];

const iconPaths: Record<string, string> = {
  sun: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
  music: "M9 18V5l12-2v13M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  battery: "M1 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H1M23 13v-2",
  bluetooth: "M6.5 6.5l11 11M17.5 6.5l-11 11M12 2v8l5 5",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  droplet: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
};

export default function ProductPage() {
  const [added, setAdded] = React.useState(false);
  function handleAdd() {
    setAdded(true);
    showToast("AURA Pro X1 added to bag");
    setTimeout(() => setAdded(false), 2000);
  }
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* HERO */}
      <section className="pt-[100px] pb-[80px] px-[22px] bg-gradient-to-b from-nav-bg-secondary to-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <ScrollReveal className="reveal">
            <div>
              <h1 className="text-[clamp(36px,4vw,56px)] font-bold tracking-[-1.2px] leading-[1.05] mb-2">AURA Pro X1</h1>
              <p className="text-[clamp(18px,2vw,24px)] font-normal text-nav-text-secondary mb-5">Sound, Perfected.</p>
              <p className="text-[28px] font-bold mb-6">$249</p>
              <div className="flex gap-3 flex-wrap">
                <button onClick={handleAdd} className={`inline-flex items-center gap-2 px-8 py-[14px] rounded-[980px] text-[16px] font-semibold text-white transition-all ${added ? "bg-[#30d158]" : "bg-nav-accent hover:bg-nav-accent-hover"}`}>
                  {added ? "✓ Added" : "Add to Bag"}
                </button>
                <a href="#specs" className="inline-flex items-center gap-1 bg-transparent text-nav-accent border-[1.5px] border-nav-accent px-6 py-[14px] rounded-[980px] text-[16px] font-semibold hover:bg-nav-accent/5 transition-all">
                  See Specs
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="reveal">
            <div className="flex justify-center">
              <img src={heroImg} alt="AURA Pro X1" className="w-full max-w-[520px] rounded-[18px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] object-cover aspect-[16/9] hover:scale-[1.02] transition-transform duration-600" loading="eager" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-[1100px] mx-auto px-[22px] py-[80px]">
        <ScrollReveal className="reveal">
          <div className="text-center mb-[52px]">
            <h2 className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.8px] mb-2">Engineered for Exceptional Sound</h2>
            <p className="text-[17px] text-nav-text-secondary max-w-[540px] mx-auto">Every detail designed to deliver an experience that&apos;s as effortless as it is extraordinary.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureImages.map((f, i) => (
            <ScrollReveal key={i} className={`reveal ${i === 0 ? "sm:col-span-2 lg:row-span-1" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative overflow-hidden rounded-[18px] bg-nav-bg-secondary min-h-[300px] group">
                <img src={f.src} alt={f.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={iconPaths[f.icon]} /></svg>
                  </div>
                  <h3 className="text-[18px] font-bold mb-1">{f.title}</h3>
                  <p className="text-[13px] opacity-85 leading-[1.4]">{f.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="lifestyle-section">
        {lifestyleScenes.map((scene, i) => (
          <ScrollReveal key={i} className="reveal">
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:nth-child(1)]:order-2" : ""}`}>
              <div className="min-h-[500px]">
                <img src={scene.img} alt={scene.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-[60px] lg:p-[80px] flex flex-col justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-nav-accent mb-3">{scene.tag}</span>
                <h2 className="text-[clamp(28px,3vw,44px)] font-bold tracking-[-0.8px] leading-[1.1] mb-3">{scene.title}</h2>
                <p className="text-[17px] text-nav-text-secondary leading-[1.6] max-w-[400px]">{scene.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* STORY */}
      <section className="max-w-[800px] mx-auto px-[22px] py-[100px] text-center">
        <ScrollReveal className="reveal">
          <h2 className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.8px] mb-6">The Last Pair You&apos;ll Need</h2>
          {[
            "AURA Pro X1 redefines what wireless headphones should be. Engineered for listeners who refuse to compromise — whether you're in a busy office, crossing continents, or losing yourself in your favorite album.",
            "Every detail, from the custom 40mm drivers to the adaptive noise cancellation, is designed to deliver an experience that's as effortless as it is extraordinary.",
            "The memory-foam ear cushions conform to your ears for all-day comfort. The lightweight titanium headband distributes pressure evenly. You'll forget you're wearing them — until the music starts.",
            "Unlike mass-produced headphones that sound the same, AURA Pro X1 was tuned by Grammy-winning audio engineers. The result: a sound signature that's balanced, detailed, and emotionally resonant.",
          ].map((p, i) => (
            <p key={i} className="text-[17px] text-nav-text-secondary leading-[1.7] mb-5">{i === 0 ? <><strong>AURA Pro X1</strong> {p.slice(19)}</> : p}</p>
          ))}
        </ScrollReveal>
      </section>

      {/* SPECS */}
      <section id="specs" className="max-w-[800px] mx-auto px-[22px] pb-[80px]">
        <ScrollReveal className="reveal">
          <div className="text-center mb-[52px]">
            <h2 className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.8px]">Specifications</h2>
          </div>
          <div className="border border-nav-border rounded-[12px] overflow-hidden">
            {specs.map(([label, value], i) => (
              <div key={i} className={`flex flex-col sm:flex-row ${i !== specs.length - 1 ? "border-b border-nav-border" : ""}`}>
                <div className="sm:w-[200px] px-5 py-[14px] font-semibold text-nav-text bg-nav-bg-secondary text-[14px]">{label}</div>
                <div className="flex-1 px-5 py-[14px] text-nav-text-secondary text-[14px]">{value}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* WHAT'S IN THE BOX */}
      <section className="max-w-[600px] mx-auto px-[22px] pb-[80px]">
        <ScrollReveal className="reveal">
          <h2 className="text-[28px] font-bold mb-6 text-center">What's in the Box</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {boxItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-4 py-[14px] bg-nav-bg-secondary rounded-[12px] text-[14px] font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--nav-accent)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="max-w-[720px] mx-auto px-[22px] pb-[100px]">
        <ScrollReveal className="reveal">
          <h2 className="text-[28px] font-bold mb-8 text-center">Frequently Asked Questions</h2>
        </ScrollReveal>
        <div className="divide-y divide-nav-border">
          {faqs.map(([q, a], i) => (
            <FaqItem key={i} question={q} answer={a} />
          ))}
        </div>
      </section>

      {/* STICKY CART BAR */}
      <StickyCart />
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`py-[20px] ${open ? "open" : ""}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center text-left text-[16px] font-semibold text-nav-text hover:text-nav-accent transition-colors bg-none border-none cursor-pointer font-sans p-0">
        <span>{question}</span>
        <span className={`text-[20px] text-nav-text-secondary transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-350 ${open ? "max-h-[200px] pb-[20px]" : "max-h-0"}`}>
        <p className="text-[15px] text-nav-text-secondary leading-[1.6]">{answer}</p>
      </div>
    </div>
  );
}

function StickyCart() {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white/85 backdrop-blur-xl border-t border-black/8 px-5 py-3.5 z-[90]">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-5">
        <div className="flex items-baseline gap-2 text-[15px]">
          <span className="font-semibold">AURA Pro X1</span>
          <span className="font-bold text-[18px]">$249</span>
        </div>
        <p className="text-[14px] text-nav-text-secondary">Scroll to top to add to bag</p>
      </div>
    </div>
  );
}

function showToast(msg: string) {
  const existing = document.getElementById("product-toast");
  if (existing) existing.remove();
  const el = document.createElement("div");
  el.id = "product-toast";
  el.className = "fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#1d1d1f] text-white px-6 py-3 rounded-[980px] text-[14px] font-medium z-[300] opacity-0 translate-y-4 transition-all duration-400";
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.opacity = "1"; el.style.transform = "translateX(-50%) translateY(0)"; });
  setTimeout(() => { el.style.opacity = "0"; setTimeout(() => el.remove(), 400); }, 2400);
}

// Needed for FaqItem + StickyCart useState
import React from "react";
