"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  const subscribe = () => {
    if (!email.trim() || !email.includes("@")) {
      setToast("Please enter a valid email address");
      setTimeout(() => setToast(""), 2400);
      return;
    }
    setToast("🎉 Subscribed! Welcome to NAVO.");
    setEmail("");
    setTimeout(() => setToast(""), 2400);
  };

  return (
    <section className="max-w-[1100px] mx-auto mb-[120px] px-[22px]" id="contact">
      <ScrollReveal className="newsletter-box bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] rounded-[18px] py-16 px-10 text-center">
        <h3 className="text-[28px] font-bold mb-2">Stay in the Loop</h3>
        <p className="text-[16px] text-nav-text-secondary mb-7">
          Be the first to know about exclusive deals, new collections, and limited drops.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); subscribe(); }}
          className="newsletter-form flex gap-2 max-w-[440px] mx-auto justify-center flex-wrap"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-[200px] px-[18px] py-3 rounded-[980px] border border-nav-border text-[15px] font-sans outline-none focus:border-nav-accent transition-colors"
          />
          <button
            type="submit"
            className="px-[28px] py-3 rounded-[980px] border-none bg-nav-accent text-white text-[14px] font-semibold cursor-pointer font-sans hover:bg-nav-accent-hover transition-colors"
          >
            Subscribe
          </button>
        </form>
        {toast && (
          <div className="toast fixed bottom-7 left-1/2 -translate-x-1/2 bg-[#1d1d1f] text-white px-6 py-3 rounded-[980px] text-[14px] font-medium z-[300] animate-fade-in">
            {toast}
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
