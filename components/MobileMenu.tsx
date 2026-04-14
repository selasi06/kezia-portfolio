"use client";

import { navItems, site } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-black/80 bg-white px-4 py-3">
        <a className="text-[11px] uppercase tracking-[0.08em]" href="#index">
          {site.name}
        </a>
        <button
          aria-expanded={open}
          aria-label="open menu"
          className="border border-black/80 bg-white px-3 py-2 text-[11px] uppercase tracking-[0.08em]"
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="mobile"
            className="fixed inset-0 z-40 flex flex-col justify-end border border-black/80 bg-white px-4 pb-8 pt-20"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                className="border-t border-black/80 py-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em]"
                href={item.href}
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
