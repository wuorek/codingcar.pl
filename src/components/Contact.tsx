"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const serviceAreas = [
  "Warmińsko-mazurskie",
  "Podlaskie",
  "Mazowieckie",
  "Pomorskie",
];

function FormField({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-xs font-medium tracking-widest uppercase mb-2"
        style={{
          fontFamily: "var(--font-outfit)",
          color: focused || hasValue ? "var(--accent)" : "var(--text-muted)",
          transition: "color 0.2s ease",
        }}
      >
        {label}
        {required && <span style={{ color: "var(--accent)" }}> *</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
        style={{
          background: "oklch(15% 0.02 45)",
          border: `1px solid ${focused ? "oklch(65% 0.185 50 / 0.6)" : "oklch(22% 0.022 45)"}`,
          color: "var(--text)",
          fontFamily: "var(--font-outfit)",
          boxShadow: focused
            ? "0 0 0 3px oklch(65% 0.185 50 / 0.08)"
            : "none",
        }}
        aria-required={required}
      />
    </div>
  );
}

function TextAreaField({
  label,
  id,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-xs font-medium tracking-widest uppercase mb-2"
        style={{
          fontFamily: "var(--font-outfit)",
          color: focused || hasValue ? "var(--accent)" : "var(--text-muted)",
          transition: "color 0.2s ease",
        }}
      >
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
        style={{
          background: "oklch(15% 0.02 45)",
          border: `1px solid ${focused ? "oklch(65% 0.185 50 / 0.6)" : "oklch(22% 0.022 45)"}`,
          color: "var(--text)",
          fontFamily: "var(--font-outfit)",
          boxShadow: focused
            ? "0 0 0 3px oklch(65% 0.185 50 / 0.08)"
            : "none",
        }}
      />
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    car: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="py-28 relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-label">005 — KONTAKT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontFamily: "var(--font-syne)",
              color: "var(--text)",
            }}
          >
            Gotowy na{" "}
            <span style={{ color: "var(--accent)" }}>zmiany?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Phone */}
            <div className="mb-10">
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Zadzwoń bezpośrednio
              </p>
              <a
                href="tel:+48505850779"
                className="font-display font-bold block transition-all duration-300 leading-none"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontFamily: "var(--font-syne)",
                  color: "var(--text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.textShadow =
                    "0 0 40px oklch(65% 0.185 50 / 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                +48 505 850 779
              </a>
              <p
                className="text-sm mt-2"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Pon–Pt 8:00–18:00, Sob 9:00–14:00
              </p>
            </div>

            {/* Email */}
            <div
              className="pb-8 mb-8"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-2"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Email
              </p>
              <a
                href="mailto:kontakt@codingcar.pl"
                className="text-lg font-medium transition-colors duration-200"
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-outfit)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
              >
                kontakt@codingcar.pl
              </a>
            </div>

            {/* Service areas */}
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Obszar działania (mobilny)
              </p>
              <div className="flex flex-col gap-2">
                {serviceAreas.map((area, i) => (
                  <div key={area} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--text)",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      woj. {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-all duration-200"
                style={{
                  border: "1px solid var(--border-light)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@codingbmw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-all duration-200"
                style={{
                  border: "1px solid var(--border-light)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8"
                style={{
                  background: "oklch(15% 0.02 45)",
                  border: "1px solid oklch(65% 0.185 50 / 0.3)",
                }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{
                    background: "oklch(65% 0.185 50 / 0.1)",
                    border: "1px solid var(--accent)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8"
                    style={{ color: "var(--accent)" }}
                  >
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3
                  className="font-display font-bold text-2xl mb-3"
                  style={{ fontFamily: "var(--font-syne)", color: "var(--text)" }}
                >
                  Wiadomość wysłana!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-outfit)" }}
                >
                  Skontaktuję się z Tobą najszybciej jak to możliwe.
                  Zazwyczaj odpowiadam w ciągu kilku godzin.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8"
                style={{
                  background: "oklch(13% 0.018 45)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Imię i nazwisko"
                    id="name"
                    placeholder="Jan Kowalski"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <FormField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="jan@example.com"
                    required
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                </div>

                <FormField
                  label="Marka i model pojazdu"
                  id="car"
                  placeholder="np. BMW 3 E90, Audi A4 B8..."
                  value={form.car}
                  onChange={(v) => setForm({ ...form, car: v })}
                />

                <TextAreaField
                  label="Czego potrzebujesz?"
                  id="message"
                  placeholder="Opisz czego szukasz — kodowanie, programowanie, doposażenie..."
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                />

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 mt-2"
                  style={{
                    background: "var(--accent)",
                    color: "oklch(10% 0.015 45)",
                    fontFamily: "var(--font-outfit)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent-bright)";
                    e.currentTarget.style.boxShadow =
                      "0 0 40px oklch(65% 0.185 50 / 0.3), 0 0 80px oklch(65% 0.185 50 / 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Wyślij zapytanie
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
