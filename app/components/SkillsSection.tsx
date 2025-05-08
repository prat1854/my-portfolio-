'use client';

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: string[];
};

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
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
      skills: [
        "Node.js, Express.js",
        "RESTful APIs",
        "SQL, MySQL",
        "Authentication & Security",
        "Server-side Rendering"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Git, GitHub",
        "VS Code",
        "Figma, Adobe XD",
        "Postman",
        "Webpack, Vite",
        "CI/CD Pipelines"
      ]
    },
    {
      title: "Soft Skills",
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
    <section id="skills" className="py-20 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10">
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
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-lg p-6 hover:bg-white/10 dark:hover:bg-gray-800/50 transition-colors duration-300 border border-transparent hover:border-gray-200/30 dark:hover:border-gray-700/50"
              >
                <h3 className="text-xl font-medium mb-5 text-[var(--text-color)]">{category.title}</h3>
                <ul className="space-y-2 text-[var(--text-color)] opacity-90">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 