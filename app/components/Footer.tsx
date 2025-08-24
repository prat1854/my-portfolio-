'use client';

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--background)] dark:bg-[var(--dark-bg)] text-gray-700 dark:text-white relative z-10">
      <div className="container mx-auto px-12 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h2 className="text-2xl font-light mb-6 text-gray-800 dark:text-white [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]">Contact</h2>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="mailto:prateekvajpai1854@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:[text-shadow:0_0_10px_rgba(99,102,241,0.3)] dark:hover:[text-shadow:0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-2"
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
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:[text-shadow:0_0_10px_rgba(99,102,241,0.3)] dark:hover:[text-shadow:0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-2"
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
          
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-light mb-6 text-gray-800 dark:text-white [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]">Connect</h2>
            <div className="flex space-x-4">
              <Link 
                href="https://www.linkedin.com/in/prateek-bajpayee-313454253" 
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:[text-shadow:0_0_10px_rgba(99,102,241,0.3)] dark:hover:[text-shadow:0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-2"
                aria-label="View my LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} aria-hidden="true" /> LinkedIn
              </Link>
              <Link 
                href="https://github.com/prat1854" 
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:[text-shadow:0_0_10px_rgba(99,102,241,0.3)] dark:hover:[text-shadow:0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-2"
                aria-label="View my GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} aria-hidden="true" /> GitHub
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 [text-shadow:0_0_5px_rgba(99,102,241,0.1)] dark:[text-shadow:0_0_5px_rgba(99,102,241,0.2)]">
            © {new Date().getFullYear()} Prateek Bajpai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 