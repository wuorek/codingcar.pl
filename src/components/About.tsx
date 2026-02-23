"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const advantages = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certyfikowane narzędzia",
    text: "Profesjonalny sprzęt diagnostyczny klasy warsztatowej — te same narzędzia co w autoryzowanych serwisach.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dojazd do klienta",
    text: "Świadczę usługi mobilne na terenie województwa warmińsko-mazurskiego, podlaskiego, mazowieckiego i pomorskiego.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Terminowość",
    text: "Szanuję Twój czas. Ustalamy dokładne terminy i dotrzymuję zobowiązań — bez czekania i odkładania.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Pasja do motoryzacji",
    text: "Kodowanie samochodów to nie tylko praca — to pasja. Każde zlecenie realizuję z pełnym zaangażowaniem i dbałością o szczegóły.",
  },
];

function PhotoCard() {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Offset amber border decoration */}
      <div
        className="absolute -bottom-3 -right-3 inset-0 pointer-events-none"
        style={{ border: "1px solid oklch(65% 0.185 50 / 0.35)" }}
      />

      {/* Main image */}
      <div
        className="relative overflow-hidden"
        style={{ border: "1px solid oklch(22% 0.022 45)" }}
      >
        <Image
          src="https://codingcar.pl/images/design/article-main-b.webp"
          alt="Wnętrze samochodu — profesjonalne kodowanie CodingCar"
          width={600}
          height={450}
          className="w-full h-auto object-cover"
          style={{ display: "block" }}
        />
        {/* Dark overlay gradient at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(10% 0.015 45 / 0.8) 0%, transparent 100%)",
          }}
        />
        {/* Label badge */}
        <div
          className="absolute bottom-4 left-4 px-3 py-1.5 flex items-center gap-2"
          style={{ background: "var(--accent)" }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "oklch(10% 0.015 45)", fontFamily: "var(--font-outfit)" }}
          >
            Certyfikowany sprzęt
          </span>
        </div>
      </div>

      {/* Corner accent marks */}
      {[
        "top-0 left-0",
        "top-0 right-0 rotate-90",
      ].map((cls, i) => (
        <div key={i} className={`absolute ${cls} pointer-events-none`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M0 18V3a3 3 0 013-3h15" stroke="oklch(65% 0.185 50)" strokeWidth="1.5" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section
      id="o-nas"
      className="py-28 relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div ref={titleRef}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="section-label">003 — O NAS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontFamily: "var(--font-syne)",
                color: "var(--text)",
              }}
            >
              Pasja do motoryzacji
              <br />
              <span style={{ color: "var(--accent)" }}>od ponad 10 lat</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
              >
                Jestem Kamil Pstrągowski — specjalista w dziedzinie kodowania
                i programowania pojazdów z siedzibą w Ełku. Od lat pomagam
                kierowcom odkryć pełny potencjał ich samochodów.
              </p>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
              >
                Wykorzystuję certyfikowany sprzęt diagnostyczny najwyższej klasy
                i stale podnoszę kwalifikacje, aby oferować usługi na poziomie
                europejskich standardów. Każde auto traktuję indywidualnie.
              </p>
            </motion.div>

            {/* Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex gap-3 p-4 group"
                  style={{
                    background: "oklch(15% 0.02 45)",
                    border: "1px solid oklch(22% 0.022 45)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(65% 0.185 50 / 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "oklch(22% 0.022 45)";
                  }}
                >
                  <div
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    {adv.icon}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{
                        fontFamily: "var(--font-outfit)",
                        color: "var(--text)",
                      }}
                    >
                      {adv.title}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{
                        fontFamily: "var(--font-outfit)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {adv.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — tech card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <PhotoCard />

            {/* Social links below */}
            <div className="flex gap-4 mt-6 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://tiktok.com/@codingbmw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                @codingbmw
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
