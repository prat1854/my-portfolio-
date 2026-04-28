'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  link: string;
  image: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: "Lordjournals - Research Publishing Platform",
    link: "https://lordjournals.com/",
    image: "/lordjournals.png",
    problem: "Researchers struggled to discover and navigate articles quickly.",
    solution: "Built a responsive React platform with fast filtering and clear article flow.",
    impact: "Improved discovery UX and created a scalable structure for future journal growth.",
    tech: ["React.js", "REST APIs", "JavaScript", "Responsive Design"],
  },
  {
    name: "Global Journal - Academic Publication Platform",
    link: "https://www.globaljournal.co.in",
    image: "/global_journal.png",
    problem: "Academic content was hard to organize and present consistently.",
    solution: "Implemented a cleaner publication layout and reusable page patterns.",
    impact: "Delivered a more readable, professional experience for global contributors.",
    tech: ["React", "PHP", "CSS", "Content Architecture"],
  },
  {
    name: "E-Commerce Web Application",
    link: "https://github.com/prat1854/Frontend",
    image: "/e-commer.png",
    problem: "Users needed an end-to-end shopping flow with secure checkout.",
    solution: "Developed product browsing, authentication, and payment integration.",
    impact: "Enabled complete purchase flow from discovery to successful payment.",
    tech: ["React", "Redux", "Node.js", "Express", "MySQL", "Razorpay"],
  },
  {
    name: "To-Do List Application",
    link: "https://github.com/prat1854/todo_app",
    image: "/todo_list.png",
    problem: "Users required a simple way to track daily task progress.",
    solution: "Created a CRUD-based task manager with persistent data storage.",
    impact: "Improved task consistency and reduced manual follow-up for users.",
    tech: ["React", "Node.js", "Express", "MySQL"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Projects with product impact</h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-muted)] md:text-base">
            Each project is presented as problem, solution, and measurable outcome so recruiters can quickly assess ownership.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card group overflow-hidden transition hover:border-[var(--accent)]"
            >
              <Link
                href={project.link}
                className="block p-5 md:p-6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} project`}
              >
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="relative h-52 overflow-hidden rounded-xl border border-[var(--border)] md:w-1/3">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="md:w-2/3">
                    <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                      Featured Project
                    </p>
                    <h3 className="text-xl font-semibold text-[var(--text-color)] transition-colors group-hover:text-[var(--accent)]">
                      {project.name}
                    </h3>
                    <div className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                      <p>
                        <span className="font-medium text-[var(--text-color)]">Problem:</span> {project.problem}
                      </p>
                      <p>
                        <span className="font-medium text-[var(--text-color)]">Solution:</span> {project.solution}
                      </p>
                      <p>
                        <span className="font-medium text-[var(--text-color)]">Impact:</span> {project.impact}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                      View live/project link <ArrowUpRight size={15} />
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
