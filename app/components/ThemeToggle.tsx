'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle Theme"
            className="fixed top-4 right-4 z-50 p-3 rounded-full 
                 bg-white/70 dark:bg-gray-800/70 
                 backdrop-blur-md shadow-lg 
                 hover:scale-110 transition-all duration-300"
        >
            {isDark ? (
                <Sun size={20} className="text-yellow-500" />
            ) : (
                <Moon size={20} className="text-indigo-400" />
            )}
        </button>
    );
}
