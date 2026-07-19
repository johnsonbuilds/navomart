import ScrollReveal from "./ScrollReveal";
import ProductCard, { products } from "./Products";

export default function ProductsSection() {
  const handleAddToCart = (product: (typeof products)[0]) => {
    // Placeholder — actual cart logic lives in the page
    window.dispatchEvent(new CustomEvent("navo-add-to-cart", { detail: product }));
  };

  return (
    <section className="px-[22px] max-w-[1100px] mx-auto mb-[120px]" id="products">
      <div className="section-header text-center mb-[52px]">
        <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.8px] mb-2">Bestsellers</h2>
        <p className="text-[18px] text-nav-text-secondary max-w-[540px] mx-auto">
          Top-rated products shipped globally, duties included.
        </p>
      </div>
      <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
}
