"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*";

function rnd() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function scrambleLine(line: string): string {
  return line.split("").map((c) => (c === " " ? " " : rnd())).join("");
}

function useDecodeText(lines: string[], startDelay = 500) {
  // Init with full-length random chars — layout established on frame 1, no shift
  const [decoded, setDecoded] = useState<string[]>(() =>
    lines.map((l) => scrambleLine(l))
  );
  const [done, setDone] = useState(false);
  const [activeLine, setActiveLine] = useState(-1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let lineIdx = 0;

      function decodeLine(idx: number, onComplete: () => void) {
        const line = lines[idx];
        let pos = 0;
        setActiveLine(idx);

        const tick = () => {
          // Keep locked chars, scramble the rest
          setDecoded((prev) => {
            const next = [...prev];
            next[idx] = line
              .split("")
              .map((char, i) => {
                if (char === " ") return " ";
                if (i < pos) return char; // locked in
                return rnd();             // still scrambling
              })
              .join("");
            return next;
          });

          pos++;

          if (pos > line.length) {
            // Finalise the line
            setDecoded((prev) => {
              const next = [...prev];
              next[idx] = line;
              return next;
            });
            onComplete();
            return;
          }

          setTimeout(tick, 38);
        };

        tick();
      }

      function processNext() {
        if (lineIdx >= lines.length) {
          setDone(true);
          setActiveLine(-1);
          return;
        }
        const cur = lineIdx;
        decodeLine(cur, () => {
          lineIdx++;
          setTimeout(processNext, 90);
        });
      }

      processNext();
    }, startDelay);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { decoded, done, activeLine };
}

function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full animate-circuit-drift"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.06 }}
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="1" fill="oklch(65% 0.185 50)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />

        {/* Circuit paths */}
        <g stroke="oklch(65% 0.185 50)" strokeWidth="0.8" fill="none" opacity="0.7">
          <path d="M0 300 H240 V200 H480 V350 H720 V280 H960 V400 H1200 V320 H1440" />
          <path d="M0 600 H160 V520 H360 V650 H560 V580 H780 V700 H980 V610 H1200 V680 H1440" />
          <path d="M200 0 V180 H320 V80 H500 V200 H680 V120 H820 V250 H1000 V150 H1150 V300" />
          <path d="M600 900 V720 H720 V820 H880 V700 H1040 V780 H1200 V650" />
          <path d="M100 900 V780 H220 V850 H380 V740 H500 V820 H640 V700" />
        </g>

        {/* Node circles */}
        <g fill="oklch(65% 0.185 50)" opacity="0.5">
          <circle cx="240" cy="300" r="3" />
          <circle cx="480" cy="200" r="3" />
          <circle cx="720" cy="350" r="3" />
          <circle cx="960" cy="280" r="3" />
          <circle cx="1200" cy="400" r="3" />
          <circle cx="160" cy="600" r="3" />
          <circle cx="360" cy="520" r="3" />
          <circle cx="560" cy="650" r="3" />
          <circle cx="780" cy="580" r="3" />
          <circle cx="200" cy="180" r="3" />
          <circle cx="500" cy="200" r="3" />
          <circle cx="820" cy="250" r="3" />
        </g>

        {/* Larger accent nodes */}
        <g fill="none" stroke="oklch(65% 0.185 50)" opacity="0.4">
          <circle cx="720" cy="350" r="8" strokeWidth="0.8" />
          <circle cx="500" cy="200" r="6" strokeWidth="0.8" />
          <circle cx="960" cy="280" r="6" strokeWidth="0.8" />
        </g>
      </svg>

      {/* Amber glow blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(65% 0.185 50 / 0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(65% 0.185 50 / 0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--accent-bright)";
          e.currentTarget.style.boxShadow =
            "0 0 40px oklch(65% 0.185 50 / 0.35), 0 0 80px oklch(65% 0.185 50 / 0.15)";
        } else {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent)";
        }
      }}
      onMouseLeave={(e) => {
        setPos({ x: 0, y: 0 });
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--accent)";
          e.currentTarget.style.boxShadow = "none";
        } else {
          e.currentTarget.style.borderColor = "var(--border-light)";
          e.currentTarget.style.color = "var(--text-muted)";
        }
      }}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
      style={
        variant === "primary"
          ? {
              background: "var(--accent)",
              color: "oklch(10% 0.015 45)",
              fontFamily: "var(--font-outfit)",
            }
          : {
              border: "1px solid var(--border-light)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-outfit)",
            }
      }
    >
      {children}
    </motion.a>
  );
}

const HEADLINE_LINES = ["EKSPERT W", "KODOWANIU", "SAMOCHODÓW"];

export default function Hero() {
  const { decoded, done, activeLine } = useDecodeText(HEADLINE_LINES, 600);
  const [showSub, setShowSub] = useState(false);
  const [showCtas, setShowCtas] = useState(false);

  useEffect(() => {
    if (done) {
      const t1 = setTimeout(() => setShowSub(true), 200);
      const t2 = setTimeout(() => setShowCtas(true), 500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [done]);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <CircuitBackground />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />

      {/* ── Main content — fills space, centres vertically ── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 w-full">
          <div className="max-w-3xl">

            {/* Location tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <span className="section-label">EŁK · WARMIŃSKO-MAZURSKIE · POLSKA</span>
            </motion.div>

            {/* Headline — decode effect */}
            <div className="mb-8">
              {HEADLINE_LINES.map((line, i) => (
                <div key={i}>
                  <h1
                    className="font-display font-extrabold tracking-tight block"
                    style={{
                      fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      fontFamily: "var(--font-syne)",
                      color:
                        i === HEADLINE_LINES.length - 1
                          ? "var(--accent)"
                          : "var(--text)",
                      opacity: done || activeLine > i ? 1 : activeLine === i ? 1 : 0.4,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    {decoded[i]}
                  </h1>
                </div>
              ))}
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showSub ? 1 : 0, y: showSub ? 0 : 20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 max-w-lg"
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
              >
                Kodowanie, programowanie i doposażenie pojazdów wszystkich marek.
                Dostosowuję Twoje auto do indywidualnych potrzeb —
                szybko, profesjonalnie, z gwarancją satysfakcji.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showCtas ? 1 : 0, y: showCtas ? 0 : 20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#uslugi" variant="primary">
                Zamów Usługę
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </MagneticButton>
              <MagneticButton href="tel:+48505850779" variant="ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                +48 505 850 779
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Bottom metrics strip — in-flow, never overlaps ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showCtas ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 w-full"
      >
        <div
          className="max-w-7xl mx-auto px-6 pb-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5">
            {[
              { value: "500+", label: "zleceń" },
              { value: "10+", label: "lat doświadczenia" },
              { value: "50+", label: "marek" },
              { value: "4 woj.", label: "zasięg mobilny" },
            ].map((item, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-syne)" }}
                >
                  {item.value}
                </span>
                <span
                  className="text-xs tracking-wide"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}

            {/* Scroll indicator */}
            <div className="ml-auto hidden sm:flex items-center gap-3">
              <span
                className="text-xs tracking-widest"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
              >
                SCROLL
              </span>
              <div
                className="h-10 w-px"
                style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
