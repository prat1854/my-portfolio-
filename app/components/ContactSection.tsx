'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, FileText, ArrowUpRight, Copy, Check, Sparkles, Send } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "prateekvajpai1854@gmail.com";
  const phone = "+91 77728 87731";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-kicker">
            <Send size={14} />
            <span>Get in Touch</span>
          </p>
          <h2 className="section-title">Let&apos;s build something exceptional</h2>
          <p className="section-description">
            I am actively looking for Full Stack Developer, React/Next.js Engineer, and SDE roles. Let&apos;s discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Primary Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Immediate Hire / Opportunities</span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-color)] mb-3">
                Have an opening or project in mind?
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Whether you have questions about my full-stack projects, want to review my code architecture, or are hiring for software engineering roles, my inbox is always open.
              </p>

              {/* Direct Communication Channels */}
              <div className="space-y-3">
                {/* Email with Copy Action */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Email Address</p>
                      <Link
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-[var(--text-color)] hover:text-[var(--accent)] transition-colors"
                      >
                        {email}
                      </Link>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Phone</p>
                      <Link
                        href="tel:+917772887731"
                        className="text-sm font-semibold text-[var(--text-color)] hover:text-[var(--accent)] transition-colors"
                      >
                        {phone}
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="tel:+917772887731"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span>Call</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
              <span>📍 Based in Gwalior, India</span>
              <span>⚡ Open to Remote, Hybrid, & Relocation</span>
            </div>
          </motion.div>

          {/* Social & Resume Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {/* LinkedIn Card */}
            <Link
              href="https://www.linkedin.com/in/prateek-vajpayee-313454253"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 group-hover:scale-105 transition-transform">
                  <Linkedin size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--text-color)] group-hover:text-[var(--accent)] transition-colors">
                    LinkedIn
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">Connect professionally & view network</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[var(--text-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>

            {/* GitHub Card */}
            <Link
              href="https://github.com/prat1854"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-500/10 text-[var(--text-color)] border border-[var(--border)] group-hover:scale-105 transition-transform">
                  <Github size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--text-color)] group-hover:text-[var(--accent)] transition-colors">
                    GitHub
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">Inspect repositories & commit activity</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[var(--text-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>

            {/* Resume Download Card */}
            <Link
              href="/Prateek_Bajpai26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 flex items-center justify-between group border-[var(--accent)]/30 bg-[var(--accent-light)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <FileText size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--text-color)] group-hover:text-[var(--accent)] transition-colors">
                    Download Resume (PDF)
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">Verified technical credentials & experience</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
