'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Sparkles, CheckCircle2, Terminal } from "lucide-react";

const impactStats = [
  { label: "Production Projects", value: "4+" },
  { label: "Core Stack", value: "React • Next.js • Node" },
  { label: "Focus", value: "Full Stack & UX" },
];

export default function HeroSection() {
  const scrollToNextSection = () => {
    if (typeof window === "undefined") return;
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="top"
      className="section-shell flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <div className="content-wrap relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack & SDE Roles</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-[var(--text-color)]"
            >
              Building fast, reliable web products with{" "}
              <span className="text-[var(--accent)]">clean architecture</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-base text-[var(--text-muted)] md:mx-0 md:text-lg"
            >
              I&apos;m <strong className="font-semibold text-[var(--text-color)]">Prateek Bajpai</strong>, a Full Stack Developer specializing in React.js, Next.js, Node.js, Express, and cloud deployments (Aiven MySQL, Vercel, Render). Passionate about scalable interfaces, robust APIs, and measurable UX outcomes.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 space-y-2.5 text-sm text-[var(--text-muted)] text-left max-w-xl mx-auto lg:mx-0"
            >
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <span>Production experience shipping full-stack e-commerce and research publication platforms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <span>End-to-end expertise across React, Redux, REST APIs, MySQL, and cloud services.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <span>Performance-first mindset with responsive design and accessibility standards.</span>
              </li>
            </motion.ul>

            {/* CTA Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-[var(--accent-strong)] hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/Prateek_Bajpai26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] px-5 py-3 text-sm font-semibold text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/prateek-vajpayee-313454253"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 active:scale-95"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="https://github.com/prat1854"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 active:scale-95"
                >
                  <Github size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Quick Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-3"
            >
              {impactStats.map((item) => (
                <div key={item.label} className="glass-card p-3.5 text-left">
                  <p className="text-lg sm:text-xl font-bold text-[var(--text-color)]">{item.value}</p>
                  <p className="mt-0.5 text-xs text-[var(--text-muted)]">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right-hand Visual: Modern Code / Architecture Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-lg mx-auto"
          >
            <div className="glass-card overflow-hidden border border-[var(--border)] shadow-2xl bg-[#090d16] text-slate-200">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#0f172a] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <Terminal size={13} className="text-[var(--accent)]" />
                    QuickCom.config.ts
                  </span>
                </div>
                <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                  Ready
                </span>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                <div className="space-y-1">
                  <p className="text-slate-500">// Full-Stack Architecture & Cloud Services</p>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">engineer</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-400">&quot;Prateek Bajpai&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-400">&quot;Full Stack Developer&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">frontend:</span> [
                    <span className="text-amber-300">&quot;React.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Redux&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">backend:</span> [
                    <span className="text-sky-300">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-sky-300">&quot;Express.js&quot;</span>,{" "}
                    <span className="text-sky-300">&quot;REST APIs&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">database:</span> [
                    <span className="text-teal-300">&quot;MySQL (Aiven)&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;MongoDB&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">cloud:</span> [
                    <span className="text-indigo-300">&quot;Vercel&quot;</span>,{" "}
                    <span className="text-indigo-300">&quot;Render&quot;</span>,{" "}
                    <span className="text-indigo-300">&quot;Cloudinary&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">payments:</span>{" "}
                    <span className="text-emerald-400">&quot;Razorpay Integrated&quot;</span>,
                  </p>
                  <p>{"};"}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Sparkles size={13} />
                    <span>Clean Code • Tested • Deployed</span>
                  </span>
                  <span className="text-slate-500">UTF-8</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center md:mt-18">
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex cursor-pointer flex-col items-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] focus-visible:outline-none"
            onClick={scrollToNextSection}
            aria-label="Scroll to About section"
          >
            <span className="mb-2">Explore Portfolio</span>
            <ArrowDown size={16} />
          </motion.button>
        </div>
      </div>
    </header>
  );
}

