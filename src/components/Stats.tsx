"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration = 1800, startDelay = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const delay = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [started, target, duration, startDelay]);

  return { count, start: () => setStarted(true) };
}

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { count, start } = useCountUp(value, 1600, index * 120);

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center px-8 py-10"
    >
      <div
        className="font-display font-extrabold leading-none mb-2"
        style={{
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontFamily: "var(--font-syne)",
          color: "var(--accent)",
        }}
      >
        {count}
        <span style={{ color: "var(--accent-bright)" }}>{suffix}</span>
      </div>
      <div
        className="text-sm font-medium tracking-widest uppercase"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Zrealizowanych zleceń" },
  { value: 10, suffix: "+", label: "Lat doświadczenia" },
  { value: 50, suffix: "+", label: "Obsługiwanych marek" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "oklch(13% 0.018 45)" }}
    >
      {/* Top and bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(65% 0.185 50 / 0.3) 40%, transparent 100%)",
        }}
      />

      {/* Background technical grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="stat-grid"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="oklch(65% 0.185 50)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stat-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"
          style={{ borderColor: "var(--border)" }}
        >
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
            />
          ))}
        </div>

        {/* Region strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-6 py-6 flex-wrap"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
          >
            Zasięg mobilny:
          </span>
          {["Warmińsko-mazurskie", "Podlaskie", "Mazowieckie", "Pomorskie"].map(
            (region, i) => (
              <span key={region} className="flex items-center gap-2">
                {i > 0 && (
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  {region}
                </span>
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
