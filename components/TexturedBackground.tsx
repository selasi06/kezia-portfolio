"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function TexturedBackground() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 22]);
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "5%"]);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[22%] transform-gpu will-change-transform"
        style={{
          rotate,
          x,
          y,
          background:
            "radial-gradient(circle at 10% 12%, #ff7a59 0 18%, transparent 36%), radial-gradient(circle at 62% 18%, #e0007a 0 16%, transparent 34%), radial-gradient(circle at 78% 42%, #005a63 0 20%, transparent 40%), radial-gradient(circle at 42% 80%, #ff9f1c 0 24%, transparent 46%), linear-gradient(135deg, #f6eee5 0%, #e6447c 38%, #062f35 64%, #ff8b1a 100%)",
          filter: "saturate(1.2) contrast(1.08)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.15] mix-blend-color-burn">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.78"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
