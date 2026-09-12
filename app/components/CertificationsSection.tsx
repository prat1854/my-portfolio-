'use client';

import { motion } from "framer-motion";
import { Cloud, Code, Award, ExternalLink, FileCheck, Sparkles } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "ICNGCES 2025 Participant",
    organization: "International Conference",
    year: "2025",
    description: "International conference on Next-Generation Computing and Electronic Systems.",
    icon: Award,
    featured: true,
    link: "/icngces.webp",
  },
  {
    id: 2,
    title: "Full Stack React.js Certification",
    organization: "React.js Certification Program",
    year: "2025",
    description: "Certified in Full Stack Development with expertise in React.js, Node.js, and React Native, demonstrating practical skills in modern web and mobile application development.",
    icon: FileCheck,
    featured: true,
    link: "/Reactjs_certificate.pdf",
  },
  {
    id: 3,
    title: "Cloud Computing",
    organization: "NPTEL — IIT Kharagpur",
    year: "2024",
    description: "Comprehensive course covering cloud infrastructure, virtualization, distributed systems, and deployment architectures.",
    icon: Cloud,
    featured: false,
    link: "/NPTEL24CS.pdf",
  },
  {
    id: 4,
    title: "C Programming",
    organization: "PS Softech",
    year: "2022",
    description: "Strong foundation in programming logic, data structures, and memory management principles.",
    icon: Code,
    featured: false,
    link: "/C_programming.pdf",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-kicker">
            <Sparkles size={14} />
            <span>Credentials & Recognition</span>
          </p>
          <h2 className="section-title">Certifications & Conferences</h2>
          <p className="section-description">
            Continuous learning across cloud systems, full-stack frameworks, and research conferences.
          </p>
        </motion.div>

        {/* Balanced 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between ${
                  cert.featured
                    ? "border-[var(--accent)]/40 ring-1 ring-[var(--accent)]/20 shadow-md shadow-indigo-500/5"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/20">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full bg-[var(--surface-raised)] border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent)] mb-3">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--border)]">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--accent-strong)] transition-colors group/btn"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

