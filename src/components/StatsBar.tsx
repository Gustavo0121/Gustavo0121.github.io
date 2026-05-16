/**
 * StatsBar — Obsidian Engineering Design
 * Horizontal stats bar between sections
 */

const stats = [
  { value: "2+", label: "Anos de experiência" },
  { value: "90%", label: "Redução em queries SQL" },
  { value: "2", label: "Órgãos governamentais" },
  { value: "10+", label: "Tecnologias dominadas" },
  { value: "∞", label: "Linhas de código" },
];

export default function StatsBar() {
  return (
    <div
      className="py-8"
      style={{
        background: "#111827",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label="Estatísticas"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center flex-1 min-w-[100px]"
            >
              <span
                className="text-2xl md:text-3xl font-extrabold"
                style={{
                  fontFamily: "Sora, sans-serif",
                  color: "#38BDF8",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs mt-1"
                style={{
                  color: "#6B7280",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <div
                  className="hidden md:block absolute"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
