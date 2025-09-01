'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail, Phone, ArrowDown, FileText } from "lucide-react";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };
  return (
    <header className="relative bg-[var(--background)] dark:bg-[var(--dark-bg)] text-[var(--text-color)] dark:text-white py-12 md:py-20 min-h-screen flex items-center overflow-hidden z-10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-50/30 before:via-transparent before:to-pink-50/30 dark:before:from-indigo-950/30 dark:before:via-transparent dark:before:to-pink-950/30 before:animate-gradient-shift">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl md:pr-8 mt-10 md:mt-0 text-center md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-light mb-8 md:mb-12 tracking-tight text-[var(--text-color)] dark:text-white [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 animate-gradient-flow">Welcome</span><span className="animate-bounce inline-block ml-1 text-indigo-500 dark:text-indigo-400">.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 md:space-y-6 text-[var(--text-color)]"
            >
              <p>
                My name is Prateek Bajpai, I'm {" "}
                <span className="font-medium text-indigo-500 dark:text-indigo-300 [text-shadow:0_0_10px_rgba(99,102,241,0.2)] dark:[text-shadow:0_0_15px_rgba(99,102,241,0.3)]">
                  <Typewriter
                    words={['a Frontend Developer', 'a Creative Coder', 'a React Enthusiast']}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                {" "}based in Gwalior, India. I have developed 
                many types of interfaces from web applications to e-commerce platforms.
              </p>
              <p>
                I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 md:mt-12"
            >
              <Link 
                href="https://www.linkedin.com/in/prateek-vajpayee-313454253" 
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 dark:from-white/5 dark:to-white/10 border border-indigo-200 dark:border-white/20 text-indigo-700 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-sm font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105 transition-all duration-300"
                aria-label="View my LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </Link>
              <Link 
                href="https://github.com/prat1854" 
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 dark:from-white/5 dark:to-white/10 border border-indigo-200 dark:border-white/20 text-indigo-700 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-sm font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105 transition-all duration-300"
                aria-label="View my GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} aria-hidden="true" /> GitHub
              </Link>
              <Link 
                href="/resume0.pdf" 
                className="flex items-center gap-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 dark:from-white/5 dark:to-white/10 border border-purple-200 dark:border-white/20 text-purple-700 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-sm font-medium hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] dark:hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:scale-105 transition-all duration-300"
                aria-label="Download my resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} aria-hidden="true" /> Resume
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative block"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-gray-800/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-500 group before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/20 before:to-pink-500/10 dark:before:from-indigo-500/30 dark:before:to-pink-500/20 before:blur-xl before:opacity-50 before:z-[5]">
              <Image 
                src="/hero_setup.avif" 
                alt="Developer workspace setup" 
                fill
                className="object-cover mix-blend-luminosity opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 scale-105 group-hover:scale-100 relative z-10"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/50 dark:from-gray-900/50 to-transparent z-20"></div>
              
              {/* Contact icons positioned over the image */}
              <div className="absolute bottom-3 right-3 flex gap-2 z-30">
                <Link href="mailto:prateekvajpai1854@gmail.com" className="text-indigo-600 dark:text-white/90 hover:text-white dark:hover:text-indigo-300 transition-all duration-300 bg-white/80 dark:bg-gray-800/50 hover:bg-indigo-500 dark:hover:bg-indigo-600/30 p-2 rounded-full hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:scale-110" aria-label="Email me">
                  <Mail size={18} aria-hidden="true" />
                </Link>
                <Link href="https://github.com/prat1854" className="text-indigo-600 dark:text-white/90 hover:text-white dark:hover:text-indigo-300 transition-all duration-300 bg-white/80 dark:bg-gray-800/50 hover:bg-indigo-500 dark:hover:bg-indigo-600/30 p-2 rounded-full hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:scale-110" aria-label="View my GitHub profile" target="_blank" rel="noopener noreferrer">
                  <Github size={18} aria-hidden="true" />
                </Link>
                <Link href="tel:+917772887731" className="text-indigo-600 dark:text-white/90 hover:text-white dark:hover:text-indigo-300 transition-all duration-300 bg-white/80 dark:bg-gray-800/50 hover:bg-indigo-500 dark:hover:bg-indigo-600/30 p-2 rounded-full hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:scale-110" aria-label="Call me">
                  <Phone size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-10 flex justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-600 dark:text-gray-400 flex flex-col items-center hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer group"
            onClick={scrollToNextSection}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToNextSection()}
          >
            <span className="text-sm mb-2 group-hover:animate-bounce">Scroll Down</span>
            <ArrowDown size={18} className="animate-bounce" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </header>
  );
} 