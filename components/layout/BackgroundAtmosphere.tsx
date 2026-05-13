"use client";

import { motion } from "framer-motion";

export function BackgroundAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft off-white wash so the page feels like Stripe / Wise */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8fafc 60%, #f4f7fb 100%)",
        }}
      />

      {/* Faint grid mask, masked to upper part of viewport */}
      <div
        className="absolute inset-0 bg-grid-faint opacity-[0.5]"
        style={{
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 10%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 10%, #000 30%, transparent 80%)",
        }}
      />

      {/* Mesh gradient blobs — pastel, slow drift */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 760,
          height: 760,
          top: "-18%",
          left: "-12%",
          filter: "blur(90px)",
          background:
            "radial-gradient(circle, rgba(167, 243, 208, 0.7), rgba(167, 243, 208, 0) 60%)",
        }}
        animate={{ x: [0, 80, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 620,
          height: 620,
          top: "8%",
          right: "-14%",
          filter: "blur(96px)",
          background:
            "radial-gradient(circle, rgba(186, 230, 253, 0.7), rgba(186, 230, 253, 0) 60%)",
        }}
        animate={{ x: [0, -70, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 540,
          height: 540,
          top: "40%",
          left: "30%",
          filter: "blur(100px)",
          background:
            "radial-gradient(circle, rgba(196, 181, 253, 0.45), rgba(196, 181, 253, 0) 60%)",
        }}
        animate={{ x: [0, 50, -40, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          right: "10%",
          filter: "blur(90px)",
          background:
            "radial-gradient(circle, rgba(254, 215, 170, 0.45), rgba(254, 215, 170, 0) 60%)",
        }}
        animate={{ x: [0, -40, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
