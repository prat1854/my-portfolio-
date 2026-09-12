'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] opacity-50" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 active:scale-95 focus-visible:outline-none"
    >
      {isDark ? (
        <Sun size={17} className="text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon size={17} className="text-indigo-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}

