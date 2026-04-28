'use client';

import { motion } from "framer-motion";

type Education = {
  degree: string;
  school: string;
  period: string;
};

export default function EducationSection() {
  const educationList: Education[] = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Madhav Institute of Technology and Science, Gwalior (M.P.)",
      period: "2023 - 2025"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Jain College, Gwalior (M.P.)",
      period: "2019 - 2022"
    },
    {
      degree: "Intermediate / +2 | PCM | MP Board",
      school: "Siddharth Public School, Gwalior (M.P.)",
      period: "2020"
    },
    {
      degree: "Matriculation | CBSE",
      school: "ECS Bagless School, Gwalior (M.P.)",
      period: "2018"
    }
  ];

  return (
    <section id="education" className="section-shell">
      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic foundation</h2>
        </motion.div>

        <div className="relative max-w-3xl">
          <div className="absolute left-3 top-0 h-full w-px bg-[var(--border)]"></div>
          <div className="space-y-10">
            {educationList.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <span className="absolute left-[6px] top-2 h-3 w-3 rounded-full bg-[var(--accent)]"></span>
                <div className="glass-card p-5 transition hover:border-[var(--accent)]">
                  <h3 className="mb-1 text-lg font-semibold text-[var(--text-color)]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {edu.school}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                    {edu.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
