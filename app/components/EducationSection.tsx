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
    <section
      id="education"
      className="py-20 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10"
    >
      <div className="container mx-auto px-12 md:px-20 relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative inline-block text-4xl font-light mb-12 text-[var(--text-color)]"
        >
          Education
          <span className="absolute left-0 -bottom-2 h-[2px] w-1/2 bg-[var(--accent)]"></span>
        </motion.h2>

        {/* Timeline */}
        <div className="max-w-3xl relative">
          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-white/10"></div>

          <div className="space-y-10">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <span className="absolute left-[5px] top-2 w-3 h-3 rounded-full bg-[var(--accent)]"></span>

                {/* Card */}
                <div className="rounded-xl p-5 bg-white/5 dark:bg-white/5 
                border border-white/10 hover:border-[var(--accent)]/60 
                hover:bg-white/10 transition-all duration-300">

                  <h3 className="text-lg font-medium mb-1 text-[var(--text-color)]">
                    {edu.degree}
                  </h3>

                  <p className="text-sm text-[var(--text-color)] opacity-80">
                    {edu.school}
                  </p>

                  <p className="text-xs mt-2 tracking-wide uppercase text-[var(--accent)]">
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
