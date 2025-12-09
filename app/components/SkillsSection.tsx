'use client';

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: string[];
  icon?: IconType;
};

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: FaReact,
      skills: [
        "HTML, CSS, JavaScript",
        "React.js, Next.js",
        "Tailwind CSS, Material UI",
        "Responsive Design",
        "Frontend Testing"
      ]
    },
    {
      title: "Backend",
      icon: FaNodeJs,
      skills: [
        "Node.js, Express.js",
        "PHP",
        "RESTful APIs",
        "SQL, MySQL, MongoDB",
        "Authentication & Security",
        "Server-side Rendering"
      ]
    },
    {
      title: "Tools",
      icon: FaGitAlt,
      skills: [
        "Git, GitHub",
        "VS Code",
        "Postman",
        "Webpack, Vite",
        "Stack Overflow",
      ]
    },
    {
      title: "Soft Skills",
      // Soft skills ke liye icon optional chhod diya
      skills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Attention to Detail",
        "Time Management",
        "Adaptability"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10"
    >
      <div className="container mx-auto px-12 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-light mb-12 text-[var(--text-color)]"
        >
          Skills
        </motion.h2>

        <div className="max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="rounded-lg p-6 transition-all duration-300
                  bg-white/5 dark:bg-white/5
                  hover:bg-white/10 dark:hover:bg-white/10
                  border border-transparent hover:border-white/20"
                >
                  <h3 className="text-xl font-medium mb-5 text-[var(--text-color)] flex items-center gap-2">
                    {Icon && <Icon className="text-lg" />}
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-[var(--text-color)] opacity-90">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
