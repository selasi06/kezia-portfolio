"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type RevealImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function RevealImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: RevealImageProps) {
  return (
    <motion.div
      className="relative overflow-hidden border border-black/80 bg-white"
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    >
      <Image
        alt={alt}
        className="h-full w-full object-cover grayscale transition duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:grayscale-0"
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        src={src}
        width={width}
      />
    </motion.div>
  );
}
