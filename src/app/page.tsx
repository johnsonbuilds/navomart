"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ShippingBar from "@/components/ShippingBar";
import Featured from "@/components/Featured";
import ProductsSection from "@/components/ProductsSection";
import ValuesSection from "@/components/ValuesSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <ShippingBar />
      <Featured />
      <ProductsSection />
      <ValuesSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
