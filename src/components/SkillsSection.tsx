/**
 * SkillsSection — Obsidian Engineering Design
 * Animated skill bars with scroll-triggered fill animation
 */
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Back-End Development", level: 90, color: "#38BDF8" },
  { name: "Segurança de Aplicações", level: 85, color: "#818CF8" },
  { name: "SQL & Performance", level: 92, color: "#34D399" },
  { name: "Automação & Scripts", level: 88, color: "#FBBF24" },
  { name: "APIs & Integrações", level: 85, color: "#38BDF8" },
  { name: "Performance Optimization", level: 87, color: "#F472B6" },
  { name: "Clean Code", level: 83, color: "#818CF8" },
  { name: "Problem Solving", level: 95, color: "#34D399" },
];

const softSkills = [
  "Pensamento analítico",
  "Documentação técnica",
  "Trabalho em equipe",
  "Comunicação clara",
  "Aprendizado contínuo",
  "Atenção a detalhes",
  "Gestão de tempo",
  "Proatividade",
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFilled(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-medium"
          style={{ color: "#F9FAFB", fontFamily: "Inter, sans-serif" }}
        >
          {name}
        </span>
        <span
          className="text-xs"
          style={{
            color: color,
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: filled ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            transition: "width 800ms cubic-bezier(0.23, 1, 0.32, 1)",
            boxShadow: filled ? `0 0 8px ${color}40` : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32"
      style={{ background: "#0B0F19" }}
      aria-label="Habilidades"
    >
      <span className="section-number" aria-hidden="true">
        05
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
            Competências
          </div>
          <h2
            className="reveal text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#F9FAFB",
              transitionDelay: "80ms",
            }}
          >
            Skills &
            <br />
            <span style={{ color: "#38BDF8" }}>Competências</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical skills */}
          <div className="reveal space-y-5">
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{
                color: "#4B5563",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Habilidades Técnicas
            </h3>
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                delay={i * 80}
              />
            ))}
          </div>

          {/* Soft skills + extra info */}
          <div>
            <div className="reveal mb-8">
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-6"
                style={{
                  color: "#4B5563",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm transition-all duration-200 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#9CA3AF",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(56, 189, 248, 0.3)";
                      e.currentTarget.style.color = "#F9FAFB";
                      e.currentTarget.style.background =
                        "rgba(56, 189, 248, 0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#9CA3AF";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats cards */}
            <div
              className="reveal grid grid-cols-2 gap-4"
              style={{ transitionDelay: "160ms" }}
            >
              {[
                { value: "2+", label: "Anos de experiência" },
                { value: "90%", label: "Redução em queries SQL" },
                { value: "Gov", label: "Setor de atuação" },
                { value: "5+", label: "Tecnologias dominadas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-hover p-5 rounded-xl text-center"
                  style={{
                    background: "#111827",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    className="text-2xl font-extrabold mb-1"
                    style={{
                      color: "#38BDF8",
                      fontFamily: "Sora, sans-serif",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
