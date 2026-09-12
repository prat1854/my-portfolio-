'use client';

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-12">
      <div className="content-wrap">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand & Tagline */}
          <div className="space-y-1.5">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 font-bold text-lg text-[var(--text-color)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-white text-xs font-bold">
                PB
              </span>
              <span>Prateek Bajpai</span>
            </Link>
            <p className="text-xs text-[var(--text-muted)]">
              Full Stack Developer • React.js • Next.js • Node.js • Cloud Architecture
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--text-muted)]">
            <Link href="#about" className="hover:text-[var(--accent)] transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-[var(--accent)] transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-[var(--accent)] transition-colors">
              Skills
            </Link>
            <Link href="#dsa" className="hover:text-[var(--accent)] transition-colors">
              DSA
            </Link>
            <Link href="#education" className="hover:text-[var(--accent)] transition-colors">
              Education
            </Link>
            <Link href="#certifications" className="hover:text-[var(--accent)] transition-colors">
              Certifications
            </Link>
            <Link href="#contact" className="hover:text-[var(--accent)] transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/prat1854"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Github size={16} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/prateek-vajpayee-313454253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="mailto:prateekvajpai1854@gmail.com"
              aria-label="Send Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail size={16} />
            </Link>
            <Link
              href="#top"
              aria-label="Back to top"
              className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] px-3 text-xs font-semibold text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <p>© {year} Prateek Bajpai. All rights reserved.</p>
          <p>Designed & Built with Next.js, React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

