/**
 * HeroSection — Obsidian Engineering Design
 * Full-screen hero with particle background, animated text, CTA buttons
 */
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Download, Mail, ChevronDown } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663654036227/SioH9CfgzqLRavGjJxXhoY/hero-bg-YNpHRJwYYa56GXTYP28iZH.webp";

const roles = [
  "Back-End Developer",
  "Automação & Scripts",
  "Segurança de Aplicações",
  "Performance & SQL",
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0B0F19" }}
      aria-label="Apresentação"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      {/* Particle overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <ParticleCanvas />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 grid-bg"
        aria-hidden="true"
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,15,25,0.3) 0%, rgba(11,15,25,0.1) 40%, rgba(11,15,25,0.8) 80%, #0B0F19 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div
          className="max-w-3xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 700ms cubic-bezier(0.23,1,0.32,1), transform 700ms cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(56, 189, 248, 0.08)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              color: "#38BDF8",
              fontFamily: "JetBrains Mono, monospace",
              animationDelay: "200ms",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#38BDF8",
                animation: "pulseGlow 2s ease-in-out infinite",
              }}
            />
            Disponível para novos projetos
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-3"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#F9FAFB",
              letterSpacing: "-0.03em",
              transitionDelay: "100ms",
            }}
          >
            Gustavo
            <br />
            <span style={{ color: "#38BDF8" }}>Ribeiro</span>
          </h1>

          {/* Animated role */}
          <div
            className="flex items-center gap-2 mb-6 h-8"
            style={{ transitionDelay: "200ms" }}
          >
            <span
              className="text-lg md:text-xl font-medium"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: "#9CA3AF",
              }}
            >
              {displayed}
              <span
                className="inline-block w-0.5 h-5 ml-0.5 align-middle"
                style={{
                  background: "#38BDF8",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{
              color: "#9CA3AF",
              transitionDelay: "300ms",
            }}
          >
            Desenvolvedor focado em backend, automação inteligente, segurança de
            aplicações e otimização de sistemas. Experiência em órgãos
            governamentais e setor financeiro.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3"
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href="https://github.com/gustavoribeirodev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium btn-glow transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#F9FAFB",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
              aria-label="GitHub de Gustavo Ribeiro"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/gustavoribeirodev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium btn-glow transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#F9FAFB",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
              aria-label="LinkedIn de Gustavo Ribeiro"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="/curriculo-gustavo-ribeiro.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium btn-glow transition-all duration-200"
              style={{
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38BDF8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
              }}
              aria-label="Download do currículo"
            >
              <Download size={16} />
              Download CV
            </a>

            <button
              onClick={() =>
                document
                  .querySelector("#contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200"
              style={{
                background: "#38BDF8",
                color: "#0B0F19",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#7DD3FC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#38BDF8";
              }}
            >
              <Mail size={16} />
              Contato
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-300 hover:opacity-80"
        style={{ color: "#9CA3AF", opacity: visible ? 0.6 : 0 }}
        aria-label="Rolar para baixo"
      >
        <span className="text-xs" style={{ fontFamily: "JetBrains Mono" }}>
          scroll
        </span>
        <ChevronDown
          size={16}
          style={{ animation: "fadeInUp 1.5s ease-in-out infinite" }}
        />
      </button>
    </section>
  );
}
