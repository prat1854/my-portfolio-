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
      degree: "Master of Computer Applications (MCA) ",
      school: "Madhav Institute of Technology and Science, Gwalior (M.P.)",
      period: "2023 - 2025"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Jain College, Gwalior (M.P.)",
      period: "2019 - 2022"
    },
    {
      degree: "Intermediate/+2 | PCM | MPBOARD",
      school: "Siddharth public school, Gwalior (M.P.)",
      period: "2020"
    },
    {
      degree: "Matriculation | CBSE",
      school: "ECS Bagless School, Gwalior (M.P.)",
      period: "2018"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10">
      <div className="container mx-auto px-12 md:px-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-light mb-12 text-[var(--text-color)]"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl space-y-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.1, 0.25, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="border-t border-gray-200 dark:border-gray-700 pt-5 hover:border-[var(--accent)] dark:hover:border-[var(--accent)] transition-colors duration-300"
            >
              <h3 className="text-xl font-medium mb-1 text-[var(--text-color)]">{edu.degree}</h3>
              {edu.school && <p className="text-[var(--text-color)] opacity-80">{edu.school}</p>}
              <p className="text-[var(--text-color)] opacity-60">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 