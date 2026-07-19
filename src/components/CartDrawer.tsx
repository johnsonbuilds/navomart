"use client";

import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

const CART_KEY = "navo_cart";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cartCount: number;
  setCartCount: (n: number) => void;
}

export default function CartDrawer({ open, onClose, cartCount, setCartCount }: CartDrawerProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  // Listen for add-to-cart events from product cards
  useEffect(() => {
    const handler = (e: Event) => {
      const product = (e as CustomEvent).detail;
      const existing = cart.find((c) => c.id === product.id);
      if (existing) {
        setCart((prev) => prev.map((c) => c.id === product.id ? { ...c, qty: c.qty + 1 } : c));
      } else {
        setCart((prev) => [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 }]);
      }
      const total = cart.reduce((s, c) => s + c.qty, 0) + 1;
      setCartCount(total);
      localStorage.setItem(CART_KEY, JSON.stringify(cart.reduce((acc, c) => {
        const ex = acc.find((x) => x.id === product.id);
        if (ex) return acc.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
        return [...acc, { id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 }];
      }, cart)));
    };
    window.addEventListener("navo-add-to-cart", handler);
    return () => window.removeEventListener("navo-add-to-cart", handler);
  }, [cart, setCartCount]);

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const next = prev.filter((c) => c.id !== id);
      localStorage.setItem(CART_KEY, JSON.stringify(next));
      setCartCount(next.reduce((s, c) => s + c.qty, 0));
      return next;
    });
  };

  const changeQty = (id: number, delta: number) => {
    setCart((prev) => {
      const next = prev
        .map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0);
      localStorage.setItem(CART_KEY, JSON.stringify(next));
      setCartCount(next.reduce((s, c) => s + c.qty, 0));
      return next;
    });
  };

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[200] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-[380px] max-w-[85vw] bg-white z-[201] flex flex-col p-7 transition-transform duration-400 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[20px] font-bold">Shopping Bag</h3>
          <button onClick={onClose} className="bg-transparent border-none text-[24px] cursor-pointer text-nav-text-secondary">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-nav-text-tertiary text-[15px]">Your bag is empty.</div>
          ) : (
            cart.map((c) => (
              <div key={c.id} className="flex gap-3.5 py-4 border-b border-nav-border">
                <img src={c.image} alt={c.name} className="w-[60px] h-[60px] rounded-md object-cover bg-nav-bg-secondary" />
                <div className="flex-1">
                  <h5 className="text-[14px] font-semibold mb-0.5">{c.name}</h5>
                  <div className="text-[14px] text-nav-text-secondary">${c.price}</div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button onClick={() => changeQty(c.id, -1)} className="w-6 h-6 rounded-full border border-nav-border bg-white cursor-pointer text-[14px] font-medium flex items-center justify-center">−</button>
                    <span className="text-[14px] font-medium text-center min-w-[20px]">{c.qty}</span>
                    <button onClick={() => changeQty(c.id, 1)} className="w-6 h-6 rounded-full border border-nav-border bg-white cursor-pointer text-[14px] font-medium flex items-center justify-center">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(c.id)} className="ci-remove bg-transparent border-none cursor-pointer text-nav-text-tertiary text-[16px] self-start">✕</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer border-t border-nav-border pt-4 mt-4">
            <div className="cart-total flex justify-between text-[16px] font-semibold mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn w-full py-3.5 rounded-[980px] border-none bg-nav-accent text-white text-[16px] font-semibold cursor-pointer font-sans hover:bg-nav-accent-hover transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
