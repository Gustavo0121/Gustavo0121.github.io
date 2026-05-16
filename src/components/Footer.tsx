/**
 * Footer — Obsidian Engineering Design
 * Minimal footer with copyright, social links, and tagline
 */
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10"
      style={{
        background: "#0B0F19",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label="Rodapé"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                }}
              >
                <Code2 size={12} style={{ color: "#38BDF8" }} />
              </div>
              <span
                className="text-sm font-bold"
                style={{ fontFamily: "Sora, sans-serif", color: "#F9FAFB" }}
              >
                Gustavo Ribeiro
              </span>
            </div>
            <p
              className="text-xs"
              style={{
                color: "#4B5563",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Back-End Developer · Automação · Segurança
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com/gustavoribeirodev",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/gustavoribeirodev",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:gustavo@email.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#6B7280",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#38BDF8";
                  e.currentTarget.style.borderColor =
                    "rgba(56, 189, 248, 0.25)";
                  e.currentTarget.style.background =
                    "rgba(56, 189, 248, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#6B7280";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.04)";
                }}
                aria-label={label}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-xs text-center md:text-right"
            style={{
              color: "#4B5563",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            © {year} Gustavo Ribeiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
