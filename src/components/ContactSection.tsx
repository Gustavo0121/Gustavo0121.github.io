/**
 * ContactSection — Obsidian Engineering Design
 * Minimal contact layout with email, LinkedIn, GitHub
 */
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "gus0512san@gmail.com",
    href: "mailto:gus0512san@gmail.com",
    color: "#38BDF8",
    desc: "Resposta em até 24h",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gustavoribeirodev",
    href: "https://linkedin.com/in/gustavoribeirodev",
    color: "#818CF8",
    desc: "Conecte-se profissionalmente",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Gustavo0121",
    href: "https://github.com/Gustavo0121",
    color: "#34D399",
    desc: "Veja meus repositórios",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32"
      style={{ background: "#0B0F19" }}
      aria-label="Contato"
    >
      <span className="section-number" aria-hidden="true">
        07
      </span>

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div
            className="reveal inline-flex items-center gap-2 mb-4 text-xs font-medium uppercase tracking-widest"
            style={{
              color: "#38BDF8",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span className="w-6 h-px" style={{ background: "#38BDF8" }} />
            Vamos conversar
            <span className="w-6 h-px" style={{ background: "#38BDF8" }} />
          </div>

          <h2
            className="reveal text-3xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#F9FAFB",
              transitionDelay: "80ms",
            }}
          >
            Pronto para
            <br />
            <span style={{ color: "#38BDF8" }}>colaborar?</span>
          </h2>

          <p
            className="reveal text-base leading-relaxed"
            style={{ color: "#9CA3AF", transitionDelay: "160ms" }}
          >
            Estou disponível para projetos, consultorias e oportunidades
            profissionais. Entre em contato pelo canal de sua preferência.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  contact.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="reveal card-hover group flex flex-col p-6 rounded-xl"
                style={{
                  background: "#111827",
                  transitionDelay: `${i * 80}ms`,
                  textDecoration: "none",
                }}
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${contact.color}15`,
                      border: `1px solid ${contact.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: contact.color }} />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: contact.color }}
                  />
                </div>

                <p
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "#F9FAFB",
                    fontFamily: "Sora, sans-serif",
                  }}
                >
                  {contact.label}
                </p>
                <p
                  className="text-xs mb-3 truncate"
                  style={{
                    color: contact.color,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {contact.value}
                </p>
                <p className="text-xs mt-auto" style={{ color: "#4B5563" }}>
                  {contact.desc}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
