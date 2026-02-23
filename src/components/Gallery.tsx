"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "https://codingcar.pl/images/design/slide-j.webp",
    alt: "Czerwony Mercedes — kodowanie CodingCar",
    label: "Mercedes",
    tag: "Kodowanie",
  },
  {
    src: "https://codingcar.pl/images/design/slide-j-1.webp",
    alt: "Srebrne BMW — programowanie CodingCar",
    label: "BMW",
    tag: "Programowanie",
  },
  {
    src: "https://codingcar.pl/images/design/slide-j-2.webp",
    alt: "Mercedes — adaptacja europejska CodingCar",
    label: "Mercedes",
    tag: "Adaptacja",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section
      id="realizacje"
      className="py-28 relative"
      style={{ background: "oklch(12% 0.016 45)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="section-label">004 — REALIZACJE</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontFamily: "var(--font-syne)",
                color: "var(--text)",
              }}
            >
              Wybrane realizacje
            </motion.h2>
          </div>

          {/* Dot nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-2 items-center"
          >
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{
                  width: i === active ? "2rem" : "0.5rem",
                  height: "0.5rem",
                  background: i === active ? "var(--accent)" : "oklch(30% 0.028 45)",
                }}
                aria-label={`Zdjęcie ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Main featured image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden mb-4"
          style={{
            border: "1px solid oklch(22% 0.022 45)",
            aspectRatio: "16/7",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority={active === 0}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(10% 0.015 45 / 0.7) 0%, transparent 50%)",
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Label */}
          <div className="absolute bottom-6 left-6 flex items-end gap-4 z-10">
            <div>
              <div
                className="text-xs tracking-widest uppercase mb-1"
                style={{ color: "var(--accent)", fontFamily: "var(--font-outfit)" }}
              >
                {photos[active].tag}
              </div>
              <div
                className="font-display font-bold text-3xl"
                style={{ fontFamily: "var(--font-syne)", color: "var(--text)" }}
              >
                {photos[active].label}
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            <button
              onClick={() => setActive((a) => (a - 1 + photos.length) % photos.length)}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                background: "oklch(15% 0.02 45 / 0.8)",
                border: "1px solid oklch(30% 0.028 45)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "oklch(30% 0.028 45)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              aria-label="Poprzednie"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActive((a) => (a + 1) % photos.length)}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                background: "var(--accent)",
                color: "oklch(10% 0.015 45)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-bright)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
              }}
              aria-label="Następne"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-3 gap-2">
          {photos.map((photo, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(i)}
              className="relative overflow-hidden"
              style={{
                aspectRatio: "16/9",
                border: `1px solid ${i === active ? "var(--accent)" : "oklch(22% 0.022 45)"}`,
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (i !== active) e.currentTarget.style.borderColor = "oklch(65% 0.185 50 / 0.5)";
              }}
              onMouseLeave={(e) => {
                if (i !== active) e.currentTarget.style.borderColor = "oklch(22% 0.022 45)";
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500"
                style={{ transform: i === active ? "scale(1.05)" : "scale(1)" }}
                sizes="(max-width: 768px) 33vw, 420px"
              />
              {/* Dim overlay for inactive */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "oklch(10% 0.015 45 / 0.4)",
                  opacity: i === active ? 0 : 0.6,
                }}
              />
              {/* Active indicator */}
              {i === active && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
