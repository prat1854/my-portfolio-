'use client';

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10">
      <div className="container mx-auto px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-4 border-[var(--accent)] pl-6 max-w-3xl"
        >
          <p className="text-lg leading-relaxed text-[var(--text-color)]">
            <span className="font-medium bg-gradient-to-r from-[var(--accent)] to-blue-500 bg-clip-text text-transparent">
              As a passionate and creative frontend developer,
            </span> I specialize in crafting visually stunning and
            impactful interfaces that communicate powerful messages. With a keen eye for detail and a deep
            understanding of web technologies, I aim to deliver exceptional digital experiences that elevate
            brands and engage users. I'm particularly interested in React, responsive design, and
            animation, and I'm constantly exploring new techniques and trends to enhance my development toolkit.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 