'use client';

import { motion } from 'framer-motion';

export default function BackgroundDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/10"
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10"
        animate={{ x: [0, -80, 0], y: [0, 90, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-8 left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b808_1px,transparent_1px),linear-gradient(to_bottom,#94a3b808_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(to_right,#cbd5e106_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e106_1px,transparent_1px)]" />
    </div>
  );
}
