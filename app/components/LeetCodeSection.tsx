'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code2, 
  ExternalLink, 
  Flame, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  Calendar,
  Layers
} from "lucide-react";

export const leetcodeProfile = {
  username: "Prateek_exe",
  profileUrl: "https://leetcode.com/u/ggZclYw4IT/",
  stats: {
    totalSolved: 51,
    easy: 10,
    medium: 31,
    hard: 10,
    acceptanceRate: "96.49%",
    activeDays: 29,
    maxStreak: 21,
    annualSubmissions: 57,
  },
  topics: [
    { name: "Array", count: 25 },
    { name: "String", count: 18 },
    { name: "Two Pointers", count: 11 },
    { name: "Hash Table", count: 10 },
    { name: "Math", count: 9 },
    { name: "Dynamic Programming", count: 8 },
    { name: "Backtracking", count: 7 },
    { name: "Recursion", count: 7 },
    { name: "Divide & Conquer", count: 3 },
  ],
  recentProblems: [
    { name: "Trapping Rain Water", difficulty: "Hard" },
    { name: "Sudoku Solver", difficulty: "Hard" },
    { name: "Wildcard Matching", difficulty: "Hard" },
    { name: "First Missing Positive", difficulty: "Hard" },
    { name: "Rotate Image", difficulty: "Medium" },
    { name: "Group Anagrams", difficulty: "Medium" },
    { name: "Jump Game II", difficulty: "Medium" },
    { name: "Combination Sum II", difficulty: "Medium" },
    { name: "Permutations II", difficulty: "Medium" },
    { name: "Maximum Subarray", difficulty: "Medium" },
    { name: "Pow(x, n)", difficulty: "Medium" },
    { name: "Multiply Strings", difficulty: "Medium" },
  ],
};

export default function LeetCodeSection() {
  const { stats, topics, recentProblems, profileUrl, username } = leetcodeProfile;

  // Percentage distribution for the visual bar
  const easyPercent = (stats.easy / stats.totalSolved) * 100;
  const mediumPercent = (stats.medium / stats.totalSolved) * 100;
  const hardPercent = (stats.hard / stats.totalSolved) * 100;

  return (
    <section id="dsa" className="section-shell">
      <div className="content-wrap relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">
              <Code2 size={14} />
              <span>Algorithmic Problem Solving</span>
            </p>
            <h2 className="section-title">LeetCode & DSA</h2>
            <p className="section-description">
              Consistently strengthening problem-solving and algorithmic thinking through competitive programming.
            </p>
          </motion.div>

          {/* Profile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-[var(--accent-strong)] hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98]"
              aria-label="View LeetCode Profile"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Card 1: Total Solved */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass-card glass-card-hover p-6 sm:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Total Solved
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 px-2.5 py-0.5 text-xs font-bold text-[var(--accent)]">
                  <Sparkles size={12} />
                  @{username}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text-color)]">
                  {stats.totalSolved}
                </span>
                <span className="text-sm text-[var(--text-muted)] font-medium">Problems Solved</span>
              </div>

              {/* Multi-segment difficulty bar */}
              <div className="h-2.5 w-full rounded-full bg-[var(--surface-raised)] border border-[var(--border)] overflow-hidden flex gap-1 p-0.5 mb-4">
                <div
                  style={{ width: `${easyPercent}%` }}
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  title={`Easy: ${stats.easy}`}
                />
                <div
                  style={{ width: `${mediumPercent}%` }}
                  className="h-full rounded-full bg-amber-400 transition-all duration-500"
                  title={`Medium: ${stats.medium}`}
                />
                <div
                  style={{ width: `${hardPercent}%` }}
                  className="h-full rounded-full bg-rose-500 transition-all duration-500"
                  title={`Hard: ${stats.hard}`}
                />
              </div>
            </div>

            {/* Breakdown Pills */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[var(--border)] text-center">
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 py-1.5 px-2">
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Easy</p>
                <p className="text-sm font-bold text-[var(--text-color)]">{stats.easy}</p>
              </div>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 py-1.5 px-2">
                <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">Medium</p>
                <p className="text-sm font-bold text-[var(--text-color)]">{stats.medium}</p>
              </div>
              <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 py-1.5 px-2">
                <p className="text-xs font-semibold text-rose-600 dark:text-rose-400">Hard</p>
                <p className="text-sm font-bold text-[var(--text-color)]">{stats.hard}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Acceptance Rate */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass-card glass-card-hover p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Accuracy
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Target size={16} />
                </div>
              </div>

              <div className="mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  {stats.acceptanceRate}
                </span>
              </div>
              <p className="text-xs font-medium text-[var(--text-muted)]">Acceptance Rate</p>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
              <span>{stats.annualSubmissions} submissions recorded</span>
            </div>
          </motion.div>

          {/* Card 3: Consistency & Streak */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="glass-card glass-card-hover p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Consistency
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 border border-orange-500/20">
                  <Flame size={16} />
                </div>
              </div>

              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-orange-500">
                  {stats.maxStreak}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-semibold">Days Max Streak</span>
              </div>
              <p className="text-xs font-medium text-[var(--text-muted)]">
                {stats.activeDays} Active practice days
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs text-[var(--text-muted)] flex items-center gap-1.5">
              <Calendar size={13} className="text-[var(--accent)]" />
              <span>Active problem solving</span>
            </div>
          </motion.div>
        </div>

        {/* DSA Topic Strengths & Notable Solved Problems */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Topic Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Layers size={18} className="text-[var(--accent)]" />
              <h3 className="text-lg font-bold text-[var(--text-color)]">
                DSA Topic Distribution
              </h3>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-5">
              Strong problem-solving foundation across core data structures & algorithms:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {topics.map((topic) => (
                <div
                  key={topic.name}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] hover:border-[var(--accent)]/40 transition-colors"
                >
                  <span className="text-xs font-medium text-[var(--text-color)] truncate pr-1">
                    {topic.name}
                  </span>
                  <span className="rounded-md bg-[var(--accent-light)] border border-[var(--accent)]/20 px-1.5 py-0.5 text-[11px] font-bold text-[var(--accent)] shrink-0">
                    {topic.count}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Notable Solved Problems */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-amber-500" />
                <h3 className="text-lg font-bold text-[var(--text-color)]">
                  Notable Problems Mastered
                </h3>
              </div>
              <span className="text-xs text-[var(--text-muted)] font-medium">
                Hard & Medium Solves
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-5">
              Key algorithms including dynamic programming, recursion, backtracking, and two pointers:
            </p>

            <div className="flex flex-wrap gap-2">
              {recentProblems.map((prob) => {
                const isHard = prob.difficulty === "Hard";
                return (
                  <span
                    key={prob.name}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all hover:scale-[1.02] ${
                      isHard
                        ? "border-rose-500/25 bg-rose-500/5 text-rose-600 dark:text-rose-400"
                        : "border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-color)] hover:border-[var(--accent)]/40"
                    }`}
                  >
                    <CheckCircle2 size={12} className={isHard ? "text-rose-500" : "text-[var(--accent)]"} />
                    <span>{prob.name}</span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ml-0.5 px-1 py-0.2 rounded ${
                        isHard
                          ? "bg-rose-500/15 text-rose-600 dark:text-rose-300"
                          : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      {prob.difficulty}
                    </span>
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
