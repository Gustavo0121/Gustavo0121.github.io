/**
 * ProjectsSection — Obsidian Engineering Design
 * Project cards with tags, hover animations, and CTA links
 */
import { ExternalLink, Github, Terminal, Smartphone, Cpu, Database } from "lucide-react";

const projects = [
  {
    id: 1,
    icon: Terminal,
    title: "Sistema GUI em Python",
    description:
      "Ferramenta interna para coleta, consolidação e visualização de atos normativos publicados no Diário Oficial da União. Interface gráfica intuitiva com automação de busca e exportação de dados.",
    tags: ["Python", "Tkinter", "Automação", "DOU", "Data Mining"],
    color: "#38BDF8",
    featured: true,
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Aplicativo Mobile",
    description:
      "Aplicativo para consulta e acompanhamento de atos normativos publicados no DOU. Permite busca por palavras-chave, filtros por data e categoria, com notificações de novas publicações.",
    tags: ["Mobile", "Python", "REST API", "Plone", "UX"],
    color: "#818CF8",
    featured: false,
  },
  {
    id: 3,
    icon: Cpu,
    title: "Automação de Processos",
    description:
      "Suite de scripts e ferramentas para otimização de tarefas administrativas repetitivas. Inclui automação de relatórios, integração com sistemas legados e IA aplicada para classificação de documentos.",
    tags: ["Python", "IA", "Scripts", "Integração", "Docker"],
    color: "#34D399",
    featured: false,
  },
  {
    id: 4,
    icon: Database,
    title: "Otimização SQL",
    description:
      "Projeto de melhoria de performance em banco de dados SQL Server. Análise de execution plans, reescrita de queries complexas, criação de índices estratégicos e redução de 90% no tempo de resposta.",
    tags: ["SQL Server", "Performance", "Java", "Vault", "Segurança"],
    color: "#FBBF24",
    featured: true,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative py-24 md:py-32"
      style={{ background: "#0D1120" }}
      aria-label="Projetos"
    >
      <span className="section-number" aria-hidden="true">
        04
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
            Portfólio
          </div>
          <h2
            className="reveal text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#F9FAFB",
              transitionDelay: "80ms",
            }}
          >
            Projetos
            <br />
            <span style={{ color: "#38BDF8" }}>Desenvolvidos</span>
          </h2>
          <p
            className="reveal mt-4 text-base max-w-lg"
            style={{ color: "#9CA3AF", transitionDelay: "160ms" }}
          >
            Soluções construídas para resolver problemas reais em ambientes
            governamentais e financeiros.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="reveal card-hover group relative flex flex-col rounded-xl p-6 overflow-hidden"
                style={{
                  background: "#111827",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded text-xs font-medium"
                    style={{
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      color: "#38BDF8",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    destaque
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  <Icon size={18} style={{ color: project.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    color: "#F9FAFB",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "#9CA3AF" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: "#6B7280",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <a
                    href="https://github.com/gustavoribeirodev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                    style={{ color: "#6B7280" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#F9FAFB")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6B7280")
                    }
                    aria-label={`Ver código de ${project.title} no GitHub`}
                  >
                    <Github size={13} />
                    Código
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                    style={{ color: "#6B7280" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = project.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6B7280")
                    }
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <ExternalLink size={13} />
                    Demo
                  </a>
                </div>

                {/* Hover glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
