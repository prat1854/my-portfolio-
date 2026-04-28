'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";

const impactStats = [
  { label: "Production Projects", value: "4+" },
  { label: "Core Stack", value: "React • Next.js" },
  { label: "Focus", value: "Performance + UX" },
];

const keyboardRows = [11, 12, 11, 10];

export default function HeroSection() {
  const scrollToNextSection = () => {
    if (typeof window === "undefined") return;
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="top"
      className="section-shell flex min-h-screen items-center overflow-hidden pt-8"
    >
      <div className="content-wrap relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="section-kicker">
              Full Stack Developer | React + Next.js
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            >
              I build fast, polished web products that users actually enjoy using.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mx-auto mt-6 max-w-2xl text-base text-[var(--text-muted)] md:mx-0 md:text-lg"
            >
              I&apos;m Prateek Bajpai, a frontend engineer focused on scalable interfaces,
              clean architecture, and measurable UX outcomes for product teams.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 space-y-2 text-sm text-[var(--text-muted)]"
            >
              <li>Built responsive platforms for publishing and e-commerce workflows.</li>
              <li>Optimized UI with reusable components and performance-first thinking.</li>
              <li>Comfortable collaborating with designers, PMs, and backend teams.</li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              >
                View Projects <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/Prateek_Bajpai26.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Download Resume <FileText size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/prateek-vajpayee-313454253"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn <Linkedin size={16} />
              </Link>
              <Link
                href="https://github.com/prat1854"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub <Github size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {impactStats.map((item) => (
                <div key={item.label} className="glass-card p-4 text-left">
                  <p className="text-xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto w-full max-w-sm"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card relative aspect-[4/5] overflow-hidden bg-[#020617] p-5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(99,102,241,0.14),transparent_45%),radial-gradient(circle_at_24%_76%,rgba(59,130,246,0.1),transparent_42%)]" />

              <div className="relative h-full w-full">
                <div className="absolute bottom-[8%] left-1/2 h-6 w-[66%] -translate-x-1/2 rounded-full bg-black/45" />

                <div className="absolute left-1/2 top-[15%] h-44 w-72 -translate-x-1/2 rotate-[-7deg]">
                  <motion.div
                    animate={{ y: [0, -1, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl border border-slate-500/45 bg-slate-900 p-2 shadow-[0_18px_38px_rgba(2,6,23,0.72)]"
                  >
                    <div className="absolute -right-[3px] top-2 h-[92%] w-[4px] rounded-r bg-slate-600/70" />
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-700/80 bg-[#0b1120] p-3">
                      <div className="absolute right-4 top-2 h-7 w-12 rounded-md bg-white/10" />
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                          <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                        </div>
                        <span className="text-[9px] text-slate-400">src/app/page.tsx</span>
                      </div>
                      <div className="font-mono text-[9px] leading-4 text-slate-300">
                        <p><span className="text-violet-300">const</span> <span className="text-sky-300">stats</span> = [<span className="text-emerald-300">&quot;LCP -42%&quot;</span>, <span className="text-emerald-300">&quot;+28% CTR&quot;</span>];</p>
                        <p><span className="text-violet-300">export default function</span> <span className="text-cyan-300">Hero</span>() {"{"}</p>
                        <p className="pl-3"><span className="text-violet-300">return</span> (</p>
                        <p className="pl-5"><span className="text-sky-300">&lt;section</span> <span className="text-amber-300">className</span>=<span className="text-emerald-300">&quot;grid lg:grid-cols-2&quot;</span><span className="text-sky-300">&gt;</span></p>
                        <p className="pl-7"><span className="text-sky-300">&lt;CaseStudyCard</span> <span className="text-amber-300">impact</span>=<span className="text-emerald-300">{`{stats[0]}`}</span> <span className="text-sky-300">/&gt;</span></p>
                        <p className="pl-7"><span className="text-sky-300">&lt;CTAButton</span> <span className="text-amber-300">href</span>=<span className="text-emerald-300">&quot;/contact&quot;</span> <span className="text-sky-300">/&gt;</span></p>
                        <p className="pl-5"><span className="text-sky-300">&lt;/section&gt;</span></p>
                        <p className="pl-3">);</p>
                        <div className="pl-3 flex items-center gap-1">
                          <span>{"}"}</span>
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1.1, repeat: Infinity }}
                            className="h-3 w-0.5 rounded bg-slate-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 h-10 w-24 rounded-tl-2xl bg-white/5" />
                  </motion.div>
                </div>

                <div className="absolute left-1/2 top-[56%] h-[2.2%] w-[12%] -translate-x-1/2 rotate-[-7deg] rounded-full bg-slate-500/70 shadow-[0_2px_8px_rgba(2,6,23,0.6)]" />

                <div className="absolute left-1/2 top-[58%] h-[23%] w-[82%] -translate-x-1/2 rotate-[-7deg] rounded-[1.35rem] border border-slate-500/45 bg-gradient-to-b from-slate-300/50 to-slate-700/22 p-2 shadow-[0_10px_22px_rgba(2,6,23,0.58)]">
                  <div className="rounded-xl border border-slate-600/40 bg-slate-800/25 px-2 py-1.5">
                    <div className="space-y-1">
                      {keyboardRows.map((keyCount, rowIndex) => (
                        <div key={`row-${keyCount}`} className={`grid gap-1 ${rowIndex === keyboardRows.length - 1 ? "grid-cols-10" : "grid-cols-12"}`}>
                          {Array.from({ length: keyCount }).map((_, keyIndex) => (
                            <span
                              key={`${rowIndex}-${keyIndex}`}
                              className="h-2 rounded-[3px] border border-slate-200/25 bg-gradient-to-b from-slate-100/48 to-slate-300/25 shadow-[inset_0_-1px_0_rgba(15,23,42,0.45)]"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 h-5 w-24 -translate-x-1/2 rounded-md border border-slate-300/40 bg-slate-800/45" />
                </div>

              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/45 px-4 py-3 text-sm text-white backdrop-blur">
                Open to Full Stack Developer and SDE roles
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex cursor-pointer flex-col items-center text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] transition hover:text-[var(--accent)]"
            onClick={scrollToNextSection}
            role="button"
            aria-label="Scroll to About section"
          >
            <span className="mb-2">Scroll for more</span>
            <ArrowDown size={18} />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
