'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      name: "Restrobuddy - Restaurant Management",
      link: "https://restrobuddy.in",
      image: "/restaurant-buddy.png",
      description:
        "A comprehensive restaurant management system with online ordering, table reservations, and kitchen management features.",
      tech: "React, Node.js, MySQL, Express"
    },
    {
      name: "E-Commerce Web Application",
      link: "https://github.com/prat1854/Frontend",
      image: "/e-commer.png",
      description:
        "Full-stack e-commerce platform with user authentication, product browsing, and payment gateway integration.",
      tech: "React, Redux, Node.js, Express, MySQL, Razorpay"
    },
    {
      name: "To-Do List Application",
      link: "https://github.com/prat1854/todo_app",
      image: "/todo_list.png",
      description:
        "Task management system with CRUD operations and persistent storage.",
      tech: "React, MySQL, Express, Node.js"
    },
    {
      name: "Global Journal",
      link: "https://www.globaljournal.co.in",
      image: "/global_journal.png",
      description:
        "Multidisciplinary peer-reviewed journal featuring global research contributions.",
      tech: "Academic Publishing, Web Platform, ReactJS + PHP"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10"
    >
      <div className="container mx-auto px-12 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
            My Work
          </p>
          <h2 className="text-4xl font-light text-[var(--text-color)]">
            Projects
          </h2>
        </motion.div>

        <div className="max-w-4xl space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.1, 0.25, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-xl border 
              border-white/10 bg-white/5 dark:bg-white/5 
              hover:bg-white/10 hover:border-[var(--accent)]/60 
              transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--accent)]/80 to-transparent" />

              <Link
                href={project.link}
                className="block p-5 md:p-6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} project`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="md:w-1/3 relative h-48 overflow-hidden rounded-lg bg-gray-100/60 dark:bg-gray-800/60">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Text content */}
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <p className="text-xs tracking-wide uppercase text-[var(--accent)] mb-1">
                      Featured Project
                    </p>
                    <h3 className="text-xl font-medium mb-2 text-[var(--text-color)] group-hover:text-[var(--accent)] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--text-color)] opacity-80 mb-3">
                      {project.description}
                    </p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.split(",").map((techItem, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/10 
                          text-[var(--text-color)]/80 border border-white/10"
                        >
                          {techItem.trim()}
                        </span>
                      ))}
                    </div>

                    {/* View link */}
                    <span className="inline-flex items-center gap-1 text-sm text-[var(--accent)] group-hover:underline">
                      View project
                      <span aria-hidden>↗</span>
                    </span>
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
