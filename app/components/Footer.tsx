'use client';

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    // changed bg to use your CSS variable and text to use your CSS variable
    <footer className="py-12 bg-[var(--background)] text-[var(--text-color)] relative z-10 border-t border-[var(--border)]">
      <div className="container mx-auto px-12 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          {/* Section 1: Contact */}
          <div>
            {/* Title: Uses var(--text-color) directly */}
            <h2 className="text-2xl font-medium mb-6 text-[var(--text-color)] [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]">
              Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:prateekvajpai1854@gmail.com"
                  // Removed !text-black, added text-[var(--text-color)]
                  className="flex items-center gap-2 text-[var(--text-color)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  aria-label="Send me an email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  prateekvajpai1854@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+917772887731"
                  className="flex items-center gap-2 text-[var(--text-color)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  aria-label="Call me"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 77728 87731
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Connect */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-medium mb-6 text-[var(--text-color)] [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]">
              Connect
            </h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/prateek-bajpayee-313454253"
                className="flex items-center gap-2 text-[var(--text-color)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="View my LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} aria-hidden="true" /> LinkedIn
              </Link>
              <Link
                href="https://github.com/prat1854"
                className="flex items-center gap-2 text-[var(--text-color)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="View my GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} aria-hidden="true" /> GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-color)] opacity-80">
            © {new Date().getFullYear()} Prateek Bajpai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}