/**
 * ResumeSection — Obsidian Engineering Design
 * Resume download CTA with elegant preview card
 */
import { Download, FileText, Eye } from "lucide-react";

export default function ResumeSection() {
  return (
    <section
      id="curriculo"
      className="relative py-24 md:py-32"
      style={{ background: "#0D1120" }}
      aria-label="Currículo"
    >
      <span className="section-number" aria-hidden="true">
        06
      </span>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div
            className="reveal inline-flex items-center gap-2 mb-4 text-xs font-medium uppercase tracking-widest"
            style={{
              color: "#38BDF8",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span className="w-6 h-px" style={{ background: "#38BDF8" }} />
            Documentação
            <span className="w-6 h-px" style={{ background: "#38BDF8" }} />
          </div>

          <h2
            className="reveal text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#F9FAFB",
              transitionDelay: "80ms",
            }}
          >
            Currículo
            <br />
            <span style={{ color: "#38BDF8" }}>Profissional</span>
          </h2>

          <p
            className="reveal text-base mb-10"
            style={{ color: "#9CA3AF", transitionDelay: "160ms" }}
          >
            Histórico completo de experiências, formação e habilidades técnicas.
          </p>

          {/* Resume card preview */}
          <div
            className="reveal card-hover rounded-2xl p-8 mb-8 text-left relative overflow-hidden"
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,0.08)",
              transitionDelay: "240ms",
            }}
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
              aria-hidden="true"
            />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* File icon */}
              <div
                className="w-16 h-20 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                }}
              >
                <FileText size={28} style={{ color: "#38BDF8" }} />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3
                  className="text-lg font-bold mb-1"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    color: "#F9FAFB",
                  }}
                >
                  Gustavo Ribeiro — CV
                </h3>
                <p className="text-sm mb-3" style={{ color: "#9CA3AF" }}>
                  Back-End Developer | Automação | Segurança | Performance
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Caixa Econômica Federal",
                    "Presidência da República",
                    "Python • Java • SQL",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: "#6B7280",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 shrink-0">
                <a
                  href="/curriculo-gustavo-ribeiro.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold btn-glow transition-all duration-200"
                  style={{
                    background: "#38BDF8",
                    color: "#0B0F19",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#7DD3FC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#38BDF8";
                  }}
                  aria-label="Baixar currículo em PDF"
                >
                  <Download size={15} />
                  Download PDF
                </a>
                <a
                  href="/curriculo-gustavo-ribeiro.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#9CA3AF",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F9FAFB";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#9CA3AF";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                  aria-label="Visualizar currículo online"
                >
                  <Eye size={15} />
                  Visualizar
                </a>
              </div>
            </div>
          </div>

          <p
            className="reveal text-xs"
            style={{
              color: "#4B5563",
              fontFamily: "JetBrains Mono, monospace",
              transitionDelay: "320ms",
            }}
          >
            Última atualização: Mai/2026 · Formato PDF
          </p>
        </div>
      </div>
    </section>
  );
}
