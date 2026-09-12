'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Hammer 
} from "lucide-react";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  status: {
    label: string;
    type: "live" | "building";
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "quickcom",
    number: "01",
    title: "QuickCom",
    category: "Full-Stack E-Commerce Platform",
    description: "A production-ready e-commerce platform featuring product catalog management, shopping cart workflows, secure OTP and JWT authentication, centralized admin dashboard, and automated Razorpay payment integration.",
    keyFeatures: [
      "JWT & OTP-based user authentication and role verification",
      "Dynamic cart, checkout flow & Razorpay payment gateway integration",
      "Cloudinary media management & comprehensive admin dashboard",
      "Cloud deployment on Vercel (Frontend) and Render (Backend) with Aiven MySQL",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MySQL",
      "Aiven Cloud",
      "Cloudinary",
      "Razorpay",
      "Material UI",
      "Vercel",
      "Render",
    ],
    image: "/e-commer.png",
    github: "https://github.com/prat1854/Frontend",
    liveDemo: "https://frontend-jade-five-39.vercel.app/",
    status: {
      label: "Production / Live",
      type: "live",
    },
    featured: true,
  },
  {
    id: "global-journal",
    number: "02",
    title: "Global Journal",
    category: "Research Publishing Platform",
    description: "A professional academic journal and research publishing platform engineered for managing editorial workflows, publication archives, journal volumes, and author submissions across multiple scientific disciplines.",
    keyFeatures: [
      "Article browsing with fast category & multidisciplinary discipline indexing",
      "Clean publication layout with reusable page architecture & editorial guidelines",
      "Responsive reading experience optimized for international researchers",
      "RESTful API integration for dynamic publication rendering",
    ],
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "PHP",
      "CSS3",
      "REST APIs",
      "Responsive Design",
    ],
    image: "/global_journal.png",
    github: "https://github.com/prat1854/globaljournal-frontend",
    liveDemo: "https://www.globaljournal.co.in/",
    status: {
      label: "Production / Live",
      type: "live",
    },
    featured: true,
  },
  {
    id: "happy-journey",
    number: "03",
    title: "Happy Journey",
    category: "Railway E-Catering Platform",
    description: "A railway food ordering and travel e-catering web application designed around passenger train journeys, enabling travelers to discover en-route station restaurants, browse verified menus, and schedule meal deliveries.",
    keyFeatures: [
      "Station & train restaurant discovery workflow for passenger journeys",
      "Meal customization, digital menu browsing & cart management",
      "Passenger-first responsive mobile & desktop ordering interface",
      "RESTful backend architecture for station and menu data management",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    image: "/restaurant-buddy.png",
    status: {
      label: "In Development",
      type: "building",
    },
    featured: false,
  },
  {
    id: "ai-code-review",
    number: "04",
    title: "AI Code Review & Interview Platform",
    category: "AI-Powered Developer Platform",
    description: "An intelligent developer workspace designed for in-browser code execution, syntax analysis, time and space complexity evaluation, bug and security vulnerability detection, and automated technical interview coaching.",
    keyFeatures: [
      "In-browser code editor with multi-language execution support",
      "Automated test-case evaluation & algorithmic complexity analysis",
      "AI-driven code review, bug detection & security insights",
      "Structured technical interview question feedback & progress tracking",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Monaco Editor",
      "Node.js",
      "Express.js",
      "Gemini API",
    ],
    image: "/AI_code_review.png",
    status: {
      label: "Currently Building",
      type: "building",
    },
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="content-wrap relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-kicker">
            <Layers size={14} />
            <span>Selected Work</span>
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Selected projects demonstrating full-stack development, product engineering, and problem-solving.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-10">
          {projects.map((project, index) => {
            const isLive = project.status.type === "live";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-80px" }}
                className={`glass-card glass-card-hover overflow-hidden ${
                  project.featured
                    ? "border-[var(--accent)]/35 ring-1 ring-[var(--accent)]/15 shadow-xl shadow-indigo-500/5"
                    : ""
                }`}
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                    {/* Project Image Preview */}
                    <div className="relative h-64 sm:h-72 lg:h-84 overflow-hidden rounded-xl border border-[var(--border)] lg:w-5/12 bg-[var(--surface-raised)] group/img shrink-0">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        loading="lazy"
                      />
                      
                      {project.liveDemo && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-md backdrop-blur transition hover:bg-white"
                          >
                            <span>Open Live Site</span>
                            <ExternalLink size={13} />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 lg:w-7/12 flex flex-col justify-between">
                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent)]">
                              {project.number}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                              {project.category}
                            </span>
                          </div>

                          {/* Status Badge */}
                          <div className="flex items-center gap-2">
                            {isLive ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                {project.status.label}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                                <Hammer size={11} />
                                {project.status.label}
                              </span>
                            )}

                            {project.featured && (
                              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 px-2.5 py-0.5 text-[11px] font-bold text-[var(--accent)]">
                                <Sparkles size={11} />
                                Featured
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-color)] mb-3">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-5 space-y-1.5">
                          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-color)] mb-2">
                            Key Architectural Highlights:
                          </p>
                          <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                            {project.keyFeatures.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-2">
                                <CheckCircle2 size={13} className="text-[var(--accent)] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.map((techItem) => (
                            <span key={techItem} className="badge">
                              {techItem}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-[var(--border)]">
                        {project.liveDemo && (
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-[var(--accent-strong)] hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight size={14} />
                          </Link>
                        )}

                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2 text-xs font-semibold text-[var(--text-color)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <Github size={14} />
                            <span>GitHub Code</span>
                          </Link>
                        )}

                        {!isLive && !project.liveDemo && (
                          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                            <Clock size={13} className="text-amber-500" />
                            <span>Architecture planned & active repository under development</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


