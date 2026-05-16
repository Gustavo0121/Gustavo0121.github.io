/**
 * Navbar — Obsidian Engineering Design
 * Fixed top nav with blur backdrop, smooth scroll links, mobile hamburger
 */
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(11, 15, 25, 0.92)"
          : "rgba(11, 15, 25, 0)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="Ir para o topo"
          >
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center"
              style={{
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
              }}
            >
              <Code2 size={16} style={{ color: "#38BDF8" }} />
            </div>
            <span
              className="font-bold text-sm tracking-wide"
              style={{ fontFamily: "Sora, sans-serif", color: "#F9FAFB" }}
            >
              GR
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm rounded-md transition-all duration-200 link-underline"
                  style={{ color: "#9CA3AF" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F9FAFB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#9CA3AF")
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contato")}
              className="px-4 py-2 text-sm font-medium rounded-md btn-glow transition-all duration-200"
              style={{
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38BDF8",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
              }}
            >
              Contato
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "#9CA3AF" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(11, 15, 25, 0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <ul className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3 py-3 text-sm rounded-md transition-colors duration-200"
                  style={{ color: "#9CA3AF" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F9FAFB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#9CA3AF")
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNavClick("#contato")}
                className="w-full px-4 py-2.5 text-sm font-medium rounded-md"
                style={{
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#38BDF8",
                }}
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
