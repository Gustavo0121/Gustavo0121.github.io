/**
 * ExperienceSection — Obsidian Engineering Design
 * Vertical timeline with company cards, tech badges, and staggered reveal
 */

const experiences = [
  {
    company: "Caixa Econômica Federal",
    role: "Desenvolvedor Full Stack / Segurança e Performance (Estágio)",
    period: "Out/2025 — Atual",
    current: true,
    description:
      "Atuação em projetos críticos de segurança e performance no maior banco público do Brasil. Responsável pela configuração de infraestrutura de secrets, proteção contra ataques e otimização de banco de dados.",
    activities: [
      "Configuração e gestão de Vault para secrets",
      "Implementação de rate limiting e mitigação de DDoS",
      "Segurança de aplicações e hardening",
      "Otimização SQL com redução de 90% no tempo de queries",
      "Garantia de integridade de dados",
      "Padronização de UI e componentes",
    ],
    stack: ["Java", "Angular", "SQL Server", "Python", "Vault"],
  },
  {
    company: "Presidência da República",
    role: "Desenvolvedor de sistemas e automação (Estágio)",
    period: "Set/2023 — Set/2025",
    current: false,
    description:
      "Desenvolvimento de ferramentas internas, automações e aplicativos para modernização de processos administrativos no governo federal. Trabalho com dados públicos, CMS e integração de sistemas.",
    activities: [
      "Automação de processos com Python",
      "Sistema GUI para coleta de atos normativos",
      "Desenvolvimento de aplicativo mobile",
      "Mineração e estruturação de dados",
      "Gestão de CMS Plone",
      "Testes unitários e documentação técnica",
      "IA aplicada em automações",
    ],
    stack: ["Python", "SQL", "Docker", "Git", "Plone", "HTML", "CSS"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experiencias"
      className="relative py-24 md:py-32"
      style={{ background: "#0D1120" }}
      aria-label="Experiências profissionais"
    >
      <span className="section-number" aria-hidden="true">
        02
      </span>

      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div
            className="reveal inline-flex items-center gap-2 mb-4 text-xs font-medium uppercase tracking-widest"
            style={{
              color: "#38BDF8",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span className="w-6 h-px" style={{ background: "#38BDF8" }} />
            Trajetória
          </div>
          <h2
            className="reveal text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#F9FAFB",
              transitionDelay: "80ms",
            }}
          >
            Experiências
            <br />
            <span style={{ color: "#38BDF8" }}>Profissionais</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, rgba(56,189,248,0.4), rgba(56,189,248,0.1), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="reveal relative md:pl-24"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-6 top-6 w-4 h-4 rounded-full hidden md:flex items-center justify-center"
                  style={{
                    background: exp.current ? "#38BDF8" : "#1F2937",
                    border: `2px solid ${exp.current ? "#38BDF8" : "rgba(255,255,255,0.15)"}`,
                    boxShadow: exp.current
                      ? "0 0 12px rgba(56,189,248,0.5)"
                      : "none",
                  }}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className="card-hover rounded-xl p-6 md:p-8"
                  style={{ background: "#111827" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className="text-lg font-bold"
                          style={{
                            fontFamily: "Sora, sans-serif",
                            color: "#F9FAFB",
                          }}
                        >
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              background: "rgba(56, 189, 248, 0.1)",
                              border: "1px solid rgba(56, 189, 248, 0.25)",
                              color: "#38BDF8",
                              fontFamily: "JetBrains Mono, monospace",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                background: "#38BDF8",
                                animation: "pulseGlow 2s ease-in-out infinite",
                              }}
                            />
                            Atual
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#38BDF8" }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="text-xs shrink-0 px-3 py-1 rounded-md"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: "#6B7280",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "#9CA3AF" }}
                  >
                    {exp.description}
                  </p>

                  {/* Activities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                    {exp.activities.map((act) => (
                      <div
                        key={act}
                        className="flex items-start gap-2 text-xs"
                        style={{ color: "#6B7280" }}
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ background: "#38BDF8", opacity: 0.6 }}
                          aria-hidden="true"
                        />
                        {act}
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div
                    className="pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p
                      className="text-xs mb-2"
                      style={{
                        color: "#4B5563",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      tech stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
