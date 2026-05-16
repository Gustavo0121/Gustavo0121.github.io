/**
 * AboutSection — Obsidian Engineering Design
 * Two-column layout: text left, abstract visual right
 */
import { Shield, Zap, Code2, Database } from "lucide-react";

const ABOUT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663654036227/SioH9CfgzqLRavGjJxXhoY/about-visual-5AY5cLC4wd25FawvbXzM2J.webp";

const highlights = [
  {
    icon: Code2,
    label: "Back-End",
    desc: "Python, Java, APIs REST e integração de sistemas",
  },
  {
    icon: Shield,
    label: "Segurança",
    desc: "Vault, rate limiting, mitigação de DDoS",
  },
  {
    icon: Database,
    label: "Performance",
    desc: "Otimização SQL com redução de 90% em queries",
  },
  {
    icon: Zap,
    label: "Automação",
    desc: "Scripts, ferramentas internas e IA aplicada",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 grid-bg"
      style={{ background: "#0B0F19" }}
      aria-label="Sobre Gustavo Ribeiro"
    >
      {/* Section number watermark */}
      <span className="section-number" aria-hidden="true">
        01
      </span>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="reveal inline-flex items-center gap-2 mb-4 text-xs font-medium uppercase tracking-widest"
              style={{
                color: "#38BDF8",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              <span
                className="w-6 h-px"
                style={{ background: "#38BDF8" }}
              />
              Sobre mim
            </div>

            <h2
              className="reveal text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "Sora, sans-serif",
                color: "#F9FAFB",
                transitionDelay: "80ms",
              }}
            >
              Engenharia de software
              <br />
              <span style={{ color: "#38BDF8" }}>com propósito real</span>
            </h2>

            <div
              className="reveal space-y-4"
              style={{ transitionDelay: "160ms" }}
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Sou desenvolvedor back-end com experiência em ambientes de alta
                criticidade — incluindo órgãos governamentais como a{" "}
                <strong style={{ color: "#F9FAFB" }}>
                  Presidência da República
                </strong>{" "}
                e o setor financeiro na{" "}
                <strong style={{ color: "#F9FAFB" }}>
                  Caixa Econômica Federal
                </strong>
                .
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Meu foco está em construir sistemas robustos, seguros e
                performáticos. Trabalho com automação inteligente, otimização de
                banco de dados, segurança de aplicações e integração de sistemas
                — sempre com atenção à qualidade do código e ao impacto real das
                soluções.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                Acredito que boa engenharia é invisível: quando funciona
                perfeitamente, ninguém percebe. Quando falha, todos percebem.
              </p>
            </div>

            {/* Highlights grid */}
            <div
              className="reveal grid grid-cols-2 gap-3 mt-8"
              style={{ transitionDelay: "240ms" }}
            >
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="card-hover p-4 rounded-lg"
                  style={{
                    background: "#111827",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center mb-3"
                    style={{
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                    }}
                  >
                    <Icon size={15} style={{ color: "#38BDF8" }} />
                  </div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      color: "#F9FAFB",
                      fontFamily: "Sora, sans-serif",
                    }}
                  >
                    {label}
                  </p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="reveal relative flex justify-center"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="relative w-full max-w-md">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(56,189,248,0.12) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
                aria-hidden="true"
              />
              <img
                src={ABOUT_IMG}
                alt="Representação visual de desenvolvimento back-end"
                className="relative rounded-2xl w-full"
                style={{
                  border: "1px solid rgba(56, 189, 248, 0.15)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                }}
                loading="lazy"
              />

              {/* Stats overlay */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <p
                  className="text-2xl font-bold"
                  style={{ color: "#38BDF8", fontFamily: "Sora, sans-serif" }}
                >
                  90%
                </p>
                <p className="text-xs" style={{ color: "#9CA3AF" }}>
                  redução em queries SQL
                </p>
              </div>

              <div
                className="absolute -top-4 -right-4 px-4 py-3 rounded-xl"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <p
                  className="text-2xl font-bold"
                  style={{ color: "#F9FAFB", fontFamily: "Sora, sans-serif" }}
                >
                  2+
                </p>
                <p className="text-xs" style={{ color: "#9CA3AF" }}>
                  anos de experiência
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
