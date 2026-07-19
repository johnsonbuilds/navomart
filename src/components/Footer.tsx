export default function Footer() {
  return (
    <footer className="bg-nav-bg-secondary border-t border-nav-border py-10 px-[22px] pb-7">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <span className="logo text-[18px] font-bold block mb-2">
            NAVO<span className="text-nav-accent">.</span>
          </span>
          <p className="text-[13px] text-nav-text-tertiary leading-[1.5] mb-4">
            Premium cross-border e-commerce. Curated global products delivered to your doorstep with duties included.
          </p>
          <div className="social flex gap-3">
            {[
              {
                label: "Instagram",
                path: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></>,
              },
              {
                label: "Twitter",
                path: <><path d="M22 4s-2 1-3 2c-4-2-10 0-10 6 0 2-4 3-7 3 2 0 4-1 5-2-1 1-2 3-2 4 2 0 4-1 5-2v5c4 0 8-2 10-6 1 0 2-1 2-2z" /></>,
              },
              {
                label: "YouTube",
                path: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="currentColor" /></>,
              },
              {
                label: "Facebook",
                path: <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></>,
              },
            ].map((s, i) => (
              <a key={i} href="#" aria-label={s.label} className="w-8 h-8 rounded-full bg-[#e8e8ed] flex items-center justify-center transition-colors hover:bg-[#d2d2d7]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-nav-text-tertiary">
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>
        {/* Shop */}
        <div className="footer-col">
          <h5 className="text-[11px] font-semibold uppercase tracking-[0.8px] text-nav-text mb-3">Shop</h5>
          <ul className="list-none">
            {["Electronics", "Fashion", "Accessories", "Home & Living", "Beauty"].map((item) => (
              <li key={item} className="mb-1.5"><a href="#" className="text-[13px] text-nav-text-tertiary no-underline hover:text-nav-text transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        {/* Support */}
        <div className="footer-col">
          <h5 className="text-[11px] font-semibold uppercase tracking-[0.8px] text-nav-text mb-3">Support</h5>
          <ul className="list-none">
            {["Help Center", "Shipping Info", "Returns", "Track Order", "Contact Us"].map((item) => (
              <li key={item} className="mb-1.5"><a href="#" className="text-[13px] text-nav-text-tertiary no-underline hover:text-nav-text transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div className="footer-col">
          <h5 className="text-[11px] font-semibold uppercase tracking-[0.8px] text-nav-text mb-3">Company</h5>
          <ul className="list-none">
            {["About Us", "Careers", "Press", "Privacy", "Terms"].map((item) => (
              <li key={item} className="mb-1.5"><a href="#" className="text-[13px] text-nav-text-tertiary no-underline hover:text-nav-text transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        {/* Currency */}
        <div className="footer-col">
          <h5 className="text-[11px] font-semibold uppercase tracking-[0.8px] text-nav-text mb-3">Currency</h5>
          <ul className="list-none">
            {[
              "🇺🇸 USD · US Dollar",
              "🇬🇧 GBP · British Pound",
              "🇪🇺 EUR · Euro",
              "🇯🇵 JPY · Japanese Yen",
              "🇦🇺 AUD · Australian Dollar",
            ].map((item) => (
              <li key={item} className="mb-1.5"><a href="#" className="text-[13px] text-nav-text-tertiary no-underline hover:text-nav-text transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto mt-8 pt-5 border-t border-nav-border flex flex-col sm:flex-row justify-between text-[12px] text-nav-text-tertiary gap-2 text-center sm:text-left">
        <span>© 2026 NAVO. All rights reserved. Cross-Border E-Commerce Platform.</span>
        <span>🌐 Available in 60+ countries</span>
      </div>
    </footer>
  );
}
