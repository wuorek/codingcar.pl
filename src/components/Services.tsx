"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="12" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 24l-6 4 6 4M32 24l6 4-6 4M22 32l4-16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 11v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Kodowanie Samochodu",
    description:
      "Aktywacja ukrytych funkcji fabrycznych i personalizacja ustawień pojazdu. Dostosowuję oświetlenie, czujniki, wyświetlacze i setki parametrów do Twoich preferencji.",
    tags: ["Aktywacja funkcji", "Personalizacja", "BMW · VW · Audi"],
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <path d="M24 16v4M24 28v4M16 24h4M28 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Programowanie Samochodu",
    description:
      "Aktualizacje oprogramowania, kalibracja modułów i poprawa funkcjonalności sterowania. Eliminuję błędy systemowe i zwiększam wydajność komputera pokładowego.",
    tags: ["Aktualizacje SW", "Kalibracja ECU", "Diagnostyka"],
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 16a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M19 24l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Adaptacja Europejska",
    description:
      "Dostosowanie pojazdów importowanych spoza Europy do polskich i unijnych norm. Zmiana jednostek, aktywacja funkcji regionalnych, zgodność z homologacją.",
    tags: ["Import USA/UK", "Normy EU", "Homologacja"],
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M12 36V20l12-12 12 12v16H12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 36v-8h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="36" cy="16" r="7" fill="oklch(10% 0.015 45)" stroke="currentColor" strokeWidth="1.5" />
        <path d="M33 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Doposażenie Pojazdu",
    description:
      "Instalacja oryginalnego wyposażenia fabrycznego: kamer cofania, systemów parkowania, adaptacyjnych świateł, podgrzewania siedzeń i wielu innych opcji OEM.",
    tags: ["Oryginalne OEM", "Montaż i integracja", "Wszystkie marki"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: -x * 8 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        ref={cardRef}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
        onMouseEnter={() => setHovered(true)}
        className="service-card p-7 h-full flex flex-col cursor-default"
        style={{
          background: hovered
            ? "oklch(18% 0.025 45)"
            : "oklch(15% 0.02 45)",
          border: `1px solid ${hovered ? "oklch(65% 0.185 50 / 0.4)" : "oklch(22% 0.022 45)"}`,
          transformStyle: "preserve-3d",
          perspective: "800px",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Card number */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            animate={{ color: hovered ? "oklch(65% 0.185 50)" : "oklch(30% 0.028 45)" }}
            transition={{ duration: 0.3 }}
            className="font-display font-bold text-5xl leading-none select-none"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {service.number}
          </motion.div>
          <motion.div
            animate={{ color: hovered ? "oklch(65% 0.185 50)" : "oklch(58% 0.04 65)" }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-xl mb-3 leading-tight"
          style={{
            fontFamily: "var(--font-syne)",
            color: "var(--text)",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
        >
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 font-medium tracking-wide"
              style={{
                background: "oklch(22% 0.022 45)",
                color: hovered ? "oklch(65% 0.185 50)" : "var(--text-muted)",
                fontFamily: "var(--font-outfit)",
                transition: "color 0.3s ease",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover bottom accent line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
          style={{ background: "var(--accent)" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section
      id="uslugi"
      className="py-28 relative"
      style={{ background: "var(--bg)" }}
    >
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-label">002 — NASZE USŁUGI</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-tight max-w-lg"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontFamily: "var(--font-syne)",
                color: "var(--text)",
              }}
            >
              Kompleksowa obsługa
              <br />
              <span style={{ color: "var(--accent)" }}>każdego pojazdu</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-sm text-base"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
            >
              Obsługuję wszystkie popularne marki europejskie i azjatyckie.
              Sprzęt diagnostyczny najwyższej klasy.
            </motion.p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border)" }}
        >
          {services.map((service, i) => (
            <div key={service.number} style={{ background: "var(--bg)" }}>
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Nie widzisz swojej marki? Skontaktuj się
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
