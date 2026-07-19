"use client";

import ScrollReveal from "./ScrollReveal";

export interface Product {
  id: number;
  brand: string;
  name: string;
  desc: string;
  price: number;
  original: number;
  image: string;
  badge: string;
  sale: boolean;
}

export const products: Product[] = [
  {
    id: 1, brand: "SONY", name: "WH-1000XM5 Wireless Headphones",
    desc: "Industry-leading noise cancellation with crystal-clear hands-free calling.",
    price: 349, original: 399,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "BEST SELLER", sale: false,
  },
  {
    id: 2, brand: "APPLE", name: "AirPods Max — Silver",
    desc: "Over-ear headphones with adaptive EQ, active noise cancellation, and spatial audio.",
    price: 549, original: 549,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "NEW", sale: false,
  },
  {
    id: 3, brand: "BOSE", name: "QuietComfort Ultra Earbuds",
    desc: "Immersive spatial audio and world-class noise cancellation in a compact design.",
    price: 299, original: 329,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "SALE", sale: true,
  },
  {
    id: 4, brand: "NORDIC", name: "Minimalist Chronograph Watch",
    desc: "Swiss movement, sapphire crystal, 100m water resistance. Italian leather strap.",
    price: 399, original: 499,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "SALE", sale: true,
  },
  {
    id: 5, brand: "DIPTYQUE", name: "Eau Rose Eau de Parfum 75ml",
    desc: "A delicate floral fragrance with damask rose, bergamot, and honey notes.",
    price: 165, original: 165,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "LUXURY", sale: false,
  },
  {
    id: 6, brand: "LEICA", name: "D-LUX 7 Compact Camera",
    desc: "17.3MP Four Thirds sensor, Leica DC Vario-Summilux lens, 4K video.",
    price: 1195, original: 1295,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "PREMIUM", sale: false,
  },
  {
    id: 7, brand: "HERMÈS", name: "Terre d'Hermès Eau Givrée 100ml",
    desc: "An icy, vibrant interpretation of the iconic Terre d'Hermès fragrance.",
    price: 175, original: 175,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "LIMITED", sale: false,
  },
  {
    id: 8, brand: "MARSHALL", name: "Stanmore III Bluetooth Speaker",
    desc: "Iconic rock-and-roll design meets modern streaming. Dynamic Loudness adjusts tonal balance.",
    price: 379, original: 379,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "", sale: false,
  },
  {
    id: 9, brand: "RAY-BAN", name: "Aviator Classic Sunglasses",
    desc: "Gold frame, green G-15 lenses. 100% UV protection. Made in Italy since 1937.",
    price: 163, original: 163,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "ICONIC", sale: false,
  },
  {
    id: 10, brand: "NIKE", name: "Air Jordan 1 Retro High OG",
    desc: "Legendary silhouette in the classic Chicago colorway. Full-grain leather upper.",
    price: 189, original: 220,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "SALE", sale: true,
  },
  {
    id: 11, brand: "APPLE", name: "iPhone 15 Pro Max — Natural Titanium",
    desc: "A17 Pro chip, 48MP camera system, titanium design. 256GB storage.",
    price: 1199, original: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "HOT", sale: false,
  },
  {
    id: 12, brand: "HERSHEL", name: "Little America Backpack",
    desc: "Classy roll-top backpack with fleece-lined laptop sleeve. Waxed canvas exterior.",
    price: 119, original: 119,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center&auto=format",
    badge: "", sale: false,
  },
];

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, index, onAddToCart }: ProductCardProps) {
  return (
    <ScrollReveal
      className="product-card bg-nav-bg-secondary rounded-[18px] overflow-hidden cursor-pointer relative transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {product.badge && (
        <div className={`badge absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.5px] px-[10px] py-1 rounded-[980px] text-white ${product.sale ? "bg-[#ff453a]" : "bg-nav-accent"}`}>
          {product.badge}
        </div>
      )}
      <div className="img-wrap w-full aspect-square overflow-hidden bg-[#e8e8ed]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-600 hover:scale-[1.05]"
        />
      </div>
      <div className="info px-[18px] pb-[20px] pt-[16px]">
        <div className="brand text-[11px] font-semibold uppercase tracking-[0.8px] text-nav-accent mb-[2px]">{product.brand}</div>
        <h4 className="text-[15px] font-semibold mb-1 leading-[1.3]">{product.name}</h4>
        <div className="desc text-[13px] text-nav-text-tertiary mb-[10px] line-clamp-2">{product.desc}</div>
        <div className="price-row flex items-center justify-between">
          <div className="price text-[17px] font-bold">
            ${product.price}
            {product.original > product.price && (
              <span className="text-[13px] font-normal text-nav-text-tertiary line-through ml-1.5">
                ${product.original}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="add-btn w-[34px] h-[34px] rounded-full border-[1.5px] border-nav-border bg-white cursor-pointer transition-all duration-200 flex items-center justify-center text-[18px] text-nav-text font-light hover:bg-nav-accent hover:border-nav-accent hover:text-white"
            title="Add to bag"
          >
            +
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}
