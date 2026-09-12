'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'DSA', href: '#dsa' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--surface)]/85 backdrop-blur-md border-b border-[var(--border)] shadow-sm'
          : 'bg-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="content-wrap">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#top"
            className="group flex items-center gap-2 font-bold text-lg text-[var(--text-color)] transition-colors focus-visible:rounded-lg"
            aria-label="Prateek Bajpai - Home"
            onClick={closeMenu}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent)] text-white text-sm font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              PB
            </span>
            <span className="hidden sm:inline-block">
              Prateek <span className="text-[var(--accent)]">Bajpai</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent-light)] font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--surface-raised)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/Prateek_Bajpai26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm"
              aria-label="Download Resume"
            >
              <FileText size={14} />
              <span>Resume</span>
              <ArrowUpRight size={12} className="opacity-70" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] hover:text-[var(--accent)] focus-visible:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl px-5 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent-light)] font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--surface-raised)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[var(--border)]">
              <Link
                href="/Prateek_Bajpai26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20"
              >
                <FileText size={16} />
                <span>Download Resume</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
