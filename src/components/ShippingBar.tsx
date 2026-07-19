export default function ShippingBar() {
  return (
    <div className="bg-nav-bg-secondary py-[14px] px-[22px] text-center text-[13px] text-nav-text-tertiary border-t border-nav-border border-b border-nav-border">
      🚚{" "}
      <strong className="text-nav-text font-semibold">Free express shipping</strong>{" "}
      on orders over{" "}
      <span className="text-nav-accent font-semibold">$99</span>
      {" "}· 🇺🇸 🇬🇧 🇪🇺 🇯🇵 🇦🇺 Worldwide delivery ·{" "}
      📦 <strong className="text-nav-text font-semibold">2-5 business days</strong> to major destinations
    </div>
  );
}
