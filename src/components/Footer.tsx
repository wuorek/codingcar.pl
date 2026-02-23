"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    heading: "Usługi",
    links: [
      { label: "Kodowanie samochodu", href: "#uslugi" },
      { label: "Programowanie", href: "#uslugi" },
      { label: "Adaptacja europejska", href: "#uslugi" },
      { label: "Doposażenie pojazdu", href: "#uslugi" },
    ],
  },
  {
    heading: "Firma",
    links: [
      { label: "O nas", href: "#o-nas" },
      { label: "Jak działamy", href: "#jak-dzialamy" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    heading: "Obszar",
    links: [
      { label: "Warmińsko-mazurskie", href: "#kontakt" },
      { label: "Podlaskie", href: "#kontakt" },
      { label: "Mazowieckie", href: "#kontakt" },
      { label: "Pomorskie", href: "#kontakt" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: "oklch(8% 0.012 45)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Amber glow top edge */}
      <div className="absolute top-0 left-0 right-0 h-px hr-accent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center text-sm font-display font-bold"
                style={{
                  background: "var(--accent)",
                  color: "oklch(10% 0.015 45)",
                }}
              >
                CC
              </div>
              <span
                className="font-display font-bold text-lg tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span style={{ color: "var(--text)" }}>CODING</span>
                <span style={{ color: "var(--accent)" }}>CAR</span>
              </span>
            </a>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Profesjonalne kodowanie i programowanie samochodów.
              Kamil Pstrągowski — ekspert z Ełku.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+48505850779"
                className="flex items-center gap-2 text-sm transition-colors duration-200"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                +48 505 850 779
              </a>
              <a
                href="mailto:kontakt@codingcar.pl"
                className="flex items-center gap-2 text-sm transition-colors duration-200"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                kontakt@codingcar.pl
              </a>
              <span
                className="flex items-center gap-2 text-sm"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ełk, woj. warmińsko-mazurskie
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: "oklch(48% 0.04 65)",
                        fontFamily: "var(--font-outfit)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "oklch(48% 0.04 65)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="text-xs"
            style={{
              color: "oklch(40% 0.03 65)",
              fontFamily: "var(--font-outfit)",
            }}
          >
            © {new Date().getFullYear()} CodingCar — Kamil Pstrągowski.
            Wszelkie prawa zastrzeżone.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs transition-colors duration-200"
              style={{
                color: "oklch(40% 0.03 65)",
                fontFamily: "var(--font-outfit)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "oklch(40% 0.03 65)")
              }
            >
              Polityka prywatności
            </a>
            <a
              href="#"
              className="text-xs transition-colors duration-200"
              style={{
                color: "oklch(40% 0.03 65)",
                fontFamily: "var(--font-outfit)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "oklch(40% 0.03 65)")
              }
            >
              Cookies
            </a>

            {/* Social icons */}
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center transition-all duration-200"
                style={{ color: "oklch(40% 0.03 65)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "oklch(40% 0.03 65)")
                }
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@codingbmw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center transition-all duration-200"
                style={{ color: "oklch(40% 0.03 65)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "oklch(40% 0.03 65)")
                }
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
