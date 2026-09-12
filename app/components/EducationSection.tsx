'use client';

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
  isLatest?: boolean;
};

const educationList: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Madhav Institute of Technology and Science",
    location: "Gwalior (M.P.)",
    period: "2023 - 2025",
    description: "Advanced studies in software engineering, database management systems, full-stack web architectures, and algorithms.",
    isLatest: true,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Jain College",
    location: "Gwalior (M.P.)",
    period: "2019 - 2022",
    description: "Core computer science fundamentals, data structures, object-oriented programming, and web development principles.",
    isLatest: false,
  },
  {
    degree: "Higher Secondary (12th) | PCM",
    school: "Siddharth Public School",
    location: "Gwalior (M.P.) | MP Board",
    period: "2020",
    isLatest: false,
  },
  {
    degree: "High School (10th)",
    school: "ECS Bagless School",
    location: "Gwalior (M.P.) | CBSE",
    period: "2018",
    isLatest: false,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-kicker">
            <GraduationCap size={15} />
            <span>Academic Background</span>
          </p>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-description">
            Strong academic grounding in computer science principles and software engineering practices.
          </p>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

          <div className="space-y-8">
            {educationList.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-2 sm:left-4 top-5 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-[var(--surface)] ${
                    edu.isLatest
                      ? "border-[var(--accent)] ring-4 ring-[var(--accent-light)]"
                      : "border-[var(--text-subtle)]"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      edu.isLatest ? "bg-[var(--accent)]" : "bg-[var(--text-subtle)]"
                    }`}
                  />
                </div>

                <div
                  className={`glass-card glass-card-hover p-5 sm:p-6 ${
                    edu.isLatest ? "border-[var(--accent)]/40 ring-1 ring-[var(--accent)]/20" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-color)]">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-[var(--surface-raised)] border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[var(--text-color)]">
                    {edu.school}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <MapPin size={12} className="text-[var(--text-subtle)]" />
                    <span>{edu.location}</span>
                  </p>

                  {edu.description && (
                    <p className="mt-3 pt-3 border-t border-[var(--border)] text-sm text-[var(--text-muted)] leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

