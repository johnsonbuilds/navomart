"use client";

import Link from "next/link";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { href: "#featured", label: "Featured" },
  { href: "#products", label: "Products" },
  { href: "#values", label: "Why NAVO" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] h-12 bg-white/80 backdrop-blur-[40px] saturate-[180%] border-b border-black/8">
        <div className="max-w-[1100px] mx-auto px-[22px] h-full flex items-center justify-between">
          <Link href="/" className="text-[20px] font-bold tracking-[-0.5px] text-nav-text no-underline">
            NAVO<span className="text-nav-accent">.</span>
          </Link>
          <ul className="flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[12px] font-medium tracking-[0.5px] text-nav-text-secondary uppercase no-underline hover:text-nav-text transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            {/* Search icon */}
            <svg
              className="w-[18px] h-[18px] text-nav-text cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            {/* Cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative bg-transparent border-none cursor-pointer"
              aria-label="Shopping bag"
            >
              <svg
                className="w-[18px] h-[18px] text-nav-text"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6.5 17.5h11l1.5-9h-14l1.5 9z" />
                <circle cx="9" cy="19.5" r="1.5" fill="currentColor" />
                <circle cx="15" cy="19.5" r="1.5" fill="currentColor" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-nav-accent text-white text-[10px] font-semibold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cartCount={cartCount} setCartCount={setCartCount} />
    </>
  );
}
