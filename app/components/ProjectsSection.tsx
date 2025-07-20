'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Project type definition
type Project = {
  name: string;
  link: string;
  image: string;
  description: string;
  tech: string;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    { 
      name: "E-Commerce Web Application",
      link: "https://github.com/prat1854/Frontend", 
      image: "/e-commer.png",
      description: "Full-stack e-commerce platform with user authentication, product browsing, and payment gateway integration.",
      tech: "React, Redux, Node.js, Express, MongoDB, Razorpay"
    },
    { 
      name: "To-Do List Application",
      link: "https://github.com/prat1854/todo-app", 
      image: "/todo_list.png",
      description: "Task management system with CRUD operations and persistent storage.",
      tech: "React, MySQL, Express, Node.js"
    },
    {
      name: "Global Journal",
      link: "https://www.globaljournal.co.in",
      image: "/global_journal.png", // replace with your actual image path or URL
      description: "Multidisciplinary peer-reviewed journal featuring global research contributions.",
      tech: "Academic Publishing, Web Platform ,ReactJS + PHP + MySQL "
    },

  ];

  return (
    <section id="projects" className="py-20 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10">
      <div className="container mx-auto px-12 md:px-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-light mb-12 text-[var(--text-color)]"
        >
          Projects
        </motion.h2>
        
        <div className="max-w-3xl space-y-12">
          {projects.map((project, index) => (
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
              <Link 
                href={project.link}
                className="group block"
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`View ${project.name} project`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="md:w-1/3 relative h-48 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700"
                  >
                    <Image 
                      src={project.image}
                      alt={`Screenshot of ${project.name}`}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // This will be handled client-side
                        console.error('Image failed to load:', project.image);
                      }}
                    />
                  </motion.div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium mb-2 group-hover:text-[var(--accent)] transition-colors text-[var(--text-color)]">
                      {project.name}
                    </h3>
                    <p className="text-[var(--text-color)] opacity-80 mb-3">{project.description}</p>
                    <p className="text-sm text-[var(--text-color)] opacity-60">Tech: {project.tech}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 