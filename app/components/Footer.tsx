'use client';

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[var(--background)] text-[var(--text-color)] relative z-10 border-t border-[var(--border)]">
      <div className="container mx-auto px-12 md:px-20">

        {/* Top: intro + contact + social */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Left: Short personal note + contact */}
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
              Let&apos;s collaborate
            </p>
            <h2 className="text-2xl font-medium mb-3 text-[var(--text-color)] [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]">
              Contact
            </h2>
            <p className="text-sm text-[var(--text-color)] opacity-80 mb-5">
              Open to software development roles, internships and freelance projects.
              Feel free to reach out for opportunities or collaboration.
            </p>

            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:prateekvajpai1854@gmail.com"
                  className="inline-flex items-center gap-2 text-[var(--text-color)] hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                  aria-label="Send me an email"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <Mail size={14} aria-hidden="true" />
                  </span>
                  <span className="text-sm">prateekvajpai1854@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+917772887731"
                  className="inline-flex items-center gap-2 text-[var(--text-color)] hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                  aria-label="Call me"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <Phone size={14} aria-hidden="true" />
                  </span>
                  <span className="text-sm">+91 77728 87731</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Connect / Social */}
          <div className="md:text-right">
            <h2 className="text-2xl font-medium mb-4 text-[var(--text-color)] [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]">
              Connect
            </h2>
            <p className="text-sm text-[var(--text-color)] opacity-80 mb-4">
              You can also find my work and professional profile here:
            </p>

            <div className="flex md:justify-end gap-3">
              <Link
                href="https://www.linkedin.com/in/prateek-bajpayee-313454253"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--accent)]/70 text-[var(--text-color)] text-sm transition-all duration-300"
                aria-label="View my LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} aria-hidden="true" />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>

              <Link
                href="https://github.com/prat1854"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--accent)]/70 text-[var(--text-color)] text-sm transition-all duration-300"
                aria-label="View my GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} aria-hidden="true" />
                <span>GitHub</span>
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: copyright + back to top */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-color)] opacity-70">
            © {year} Prateek Bajpai. All rights reserved.
          </p>

          <Link
            href="#top"
            className="text-xs uppercase tracking-[0.18em] text-[var(--text-color)]/80 hover:text-[var(--accent)] transition-colors duration-300"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
