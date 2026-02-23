"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M28 14.67v1.34A12 12 0 1114.67 4h1.33" strokeLinecap="round" />
        <path d="M28 6L16 18.01l-3.6-3.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Kontakt",
    description:
      "Opisujesz swoje oczekiwania telefonicznie lub przez formularz. Omawiam możliwości dla Twojego modelu auta.",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v6l4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6l-4-4M22 6l4-4" strokeLinecap="round" />
      </svg>
    ),
    title: "Diagnoza",
    description:
      "Podłączam sprzęt diagnostyczny i sprawdzam aktualne oprogramowanie oraz możliwości Twojego pojazdu.",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M6 16s2-6 10-6 10 6 10 6-2 6-10 6-10-6-10-6z" />
        <circle cx="16" cy="16" r="3" />
        <path d="M16 4v2M16 26v2M4 16H2M30 16h-2" strokeLinecap="round" />
      </svg>
    ),
    title: "Realizacja",
    description:
      "Wykonuję kodowanie lub programowanie zgodnie z ustaleniami. Testuję każdą zmianę na żywo.",
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M4 14l8 8L28 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="13" />
      </svg>
    ),
    title: "Odbiór",
    description:
      "Weryfikujemy wszystkie zmiany razem, omawiam wyniki. Otrzymujesz auto z aktywowanymi funkcjami.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="jak-dzialamy"
      className="py-28 relative"
      style={{ background: "oklch(12% 0.016 45)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="section-label">004 — JAK DZIAŁAMY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "var(--font-syne)",
              color: "var(--text)",
            }}
          >
            Prosta droga do{" "}
            <span style={{ color: "var(--accent)" }}>wymarzonego auta</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-14 left-0 right-0 hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-px origin-left"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent) 0%, oklch(65% 0.185 50 / 0.4) 50%, transparent 100%)",
                marginLeft: "12.5%",
                marginRight: "12.5%",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.15,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center p-8 group"
              >
                {/* Number + icon circle */}
                <div className="relative mb-6">
                  <div
                    className="w-28 h-28 flex flex-col items-center justify-center"
                    style={{
                      background: "oklch(18% 0.024 45)",
                      border: "1px solid oklch(25% 0.028 45)",
                    }}
                  >
                    <motion.div
                      whileInView={{ color: "oklch(65% 0.185 50)" }}
                      initial={{ color: "oklch(58% 0.04 65)" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>
                    <span
                      className="text-xs font-display font-bold mt-1 tracking-widest"
                      style={{
                        fontFamily: "var(--font-syne)",
                        color: "var(--accent)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3"
                    style={{
                      borderTop: "2px solid var(--accent)",
                      borderRight: "2px solid var(--accent)",
                    }}
                  />
                </div>

                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{
                    fontFamily: "var(--font-syne)",
                    color: "var(--text)",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-sm leading-relaxed max-w-[200px]"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "oklch(15% 0.02 45)",
            border: "1px solid oklch(22% 0.022 45)",
          }}
        >
          <div>
            <p
              className="font-display font-bold text-xl mb-1"
              style={{ fontFamily: "var(--font-syne)", color: "var(--text)" }}
            >
              Gotowy, żeby zacząć?
            </p>
            <p
              className="text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Zadzwoń lub napisz — odpowiem na wszystkie pytania.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "oklch(10% 0.015 45)",
              fontFamily: "var(--font-outfit)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-bright)";
              e.currentTarget.style.boxShadow =
                "0 0 40px oklch(65% 0.185 50 / 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Skontaktuj się
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
