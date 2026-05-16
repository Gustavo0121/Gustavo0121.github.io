/**
 * StackSection — Obsidian Engineering Design
 * Tech stack grid organized by category with hover glow effects
 */

const stackCategories = [
  {
    label: "Backend",
    color: "#38BDF8",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "SQL", icon: "🗄️" },
      { name: "APIs REST", icon: "🔌" },
    ],
  },
  {
    label: "Frontend",
    color: "#818CF8",
    items: [
      { name: "Angular", icon: "🅰️" },
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
    ],
  },
  {
    label: "DevOps",
    color: "#34D399",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🌿" },
      { name: "Vault", icon: "🔐" },
    ],
  },
  {
    label: "Database",
    color: "#FBBF24",
    items: [
      { name: "SQL Server", icon: "💾" },
    ],
  },
  {
    label: "Especialidades",
    color: "#F472B6",
    items: [
      { name: "Automação", icon: "🤖" },
      { name: "Segurança", icon: "🛡️" },
      { name: "Data Mining", icon: "⛏️" },
      { name: "Mobile Dev", icon: "📱" },
    ],
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="relative py-24 md:py-32"
      style={{ background: "#0B0F19" }}
      aria-label="Stack tecnológica"
    >
      <span className="section-number" aria-hidden="true">
        03
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
            Tecnologias
          </div>
          <h2
            className="reveal text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#F9FAFB",
              transitionDelay: "80ms",
            }}
          >
            Stack
            <br />
            <span style={{ color: "#38BDF8" }}>Tecnológica</span>
          </h2>
          <p
            className="reveal mt-4 text-base max-w-lg"
            style={{ color: "#9CA3AF", transitionDelay: "160ms" }}
          >
            Ferramentas e tecnologias que utilizo no dia a dia para construir
            sistemas robustos e escaláveis.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {stackCategories.map((cat, ci) => (
            <div
              key={cat.label}
              className="reveal"
              style={{ transitionDelay: `${ci * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color }}
                  aria-hidden="true"
                />
                <h3
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{
                    color: cat.color,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {cat.label}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  aria-hidden="true"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {cat.items.map((item, ii) => (
                  <div
                    key={item.name}
                    className="card-hover group flex flex-col items-center gap-2 p-4 rounded-xl cursor-default"
                    style={{
                      background: "#111827",
                      transitionDelay: `${ii * 40}ms`,
                    }}
                    role="listitem"
                  >
                    <span
                      className="text-2xl transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span
                      className="text-xs font-medium text-center"
                      style={{
                        color: "#9CA3AF",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
