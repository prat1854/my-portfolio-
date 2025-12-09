'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail, Phone, ArrowDown, FileText } from "lucide-react";

export default function HeroSection() {

  const scrollToNextSection = () => {
    if (typeof window !== "undefined") {
      const viewportHeight = window.innerHeight;
      window.scrollTo({
        top: viewportHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="top"
      className="relative bg-[var(--background)] dark:bg-[var(--dark-bg)] text-[var(--text-color)] 
      py-12 md:py-20 min-h-screen flex items-center overflow-hidden z-10 
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-indigo-50/15 before:via-transparent before:to-pink-50/15 
      dark:before:from-indigo-950/30 dark:before:via-transparent dark:before:to-pink-950/30"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl md:pr-8 mt-10 md:mt-0 text-center md:text-left"
          >

            {/* Career Hook */}
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Frontend Engineer • React Specialist • UI/UX Focused
            </p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-light mb-8 tracking-tight
              [text-shadow:0_0_12px_rgba(99,102,241,0.25)]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r 
              from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
                Welcome
              </span>
              <span className="animate-bounce inline-block ml-1 text-indigo-500 dark:text-indigo-400">
                .
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed space-y-5"
            >
              <p>
                Hi, I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Prateek Bajpai</span> —{" "}
                <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                  <Typewriter
                    words={[
                      'a Frontend Developer',
                      'a React.js Specialist',
                      'a UI-Focused Web Engineer',
                      'a Next.js Developer',
                      'a JavaScript Enthusiast',
                      'a Clean Code Advocate',
                      'a Performance-Driven Dev',
                      'a Problem-Solving Engineer'
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>

              <p>
                I build clean, scalable, and high-performance web interfaces with modern
                technologies. Passionate about turning designs into smooth, interactive user experiences.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-10"
            >
              <Link
                href="https://www.linkedin.com/in/prateek-vajpayee-313454253"
                className="flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-900 
                px-6 py-3 rounded-sm font-semibold shadow-md 
                hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300"
                target="_blank"
              >
                <Linkedin size={18} /> LinkedIn
              </Link>

              <Link
                href="https://github.com/prat1854"
                className="flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-700 
                px-6 py-3 rounded-sm font-semibold shadow-md 
                hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300"
                target="_blank"
              >
                <Github size={18} /> GitHub
              </Link>

              <Link
                href="/resume0_update.pdf"
                download
                target="_blank"
                className="flex items-center gap-2 bg-white border-2 border-purple-600 text-purple-700 
                px-6 py-3 rounded-sm font-semibold shadow-md 
                hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <FileText size={18} /> Resume
              </Link>
            </motion.div>

            {/* Trust Line */}
            <p className="text-xs mt-5 text-[var(--text-color)]/70">
              Actively seeking frontend developer roles • Open to freelance & remote work
            </p>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative block"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden
            shadow-2xl border border-white/10 bg-white/5 group">

              <Image
                src="/hero_setup.avif"
                alt="Prateek Bajpai frontend developer workspace"
                fill
                className="object-cover transition-all duration-500 
                group-hover:scale-100 scale-105"
                priority
              />

              {/* Floating Contact Icons */}
              <div className="absolute bottom-3 right-3 flex gap-2 z-30">
                <Link
                  href="mailto:prateekvajpai1854@gmail.com"
                  className="p-2 rounded-full bg-white/80 dark:bg-gray-800/60 
                  hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <Mail size={18} />
                </Link>

                <Link
                  href="https://github.com/prat1854"
                  target="_blank"
                  className="p-2 rounded-full bg-white/80 dark:bg-gray-800/60 
                  hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <Github size={18} />
                </Link>

                <Link
                  href="tel:+917772887731"
                  className="p-2 rounded-full bg-white/80 dark:bg-gray-800/60 
                  hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <Phone size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer text-sm flex flex-col items-center 
            hover:text-indigo-600 transition-all duration-300"
            onClick={scrollToNextSection}
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown size={18} />
          </motion.div>
        </div>

      </div>
    </header>
  );
}
