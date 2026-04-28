'use client';

import { motion } from "framer-motion";
import { Cloud, Code, Users, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "ICNGCES 2025 Participant",
    organization: "International Conference",
    year: "2025",
    description: "International conference on Next-Generation Computing and Electronic Systems.",
    icon: Users,
    featured: true,
    link: "/icngces.webp",
  },
  {
    id: 2,
    title: "Cloud Computing",
    organization: "NPTEL - IIT Kharagpur",
    year: "2024",
    description: "Comprehensive course covering cloud infrastructure, virtualization, and deployment.",
    icon: Cloud,
    featured: false,
    link: "/NPTEL24CS.pdf",
  },
  {
    id: 3,
    title: "C Programming",
    organization: "PS Softech",
    year: "2022",
    description: "Foundation in programming logic and memory management principles.",
    icon: Code,
    featured: false,
    link: "/C_programming.pdf",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="content-wrap relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">Credentials</p>
            <h2 className="section-title">Certifications & recognition</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 flex h-full flex-col
                ${cert.featured
                  ? 'border-indigo-500/40 bg-indigo-500/10 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/20'
                  : 'glass-card hover:border-indigo-500/30'
                }`}
            >
              {cert.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  Featured Certification
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${cert.featured
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-white/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white'
                  }`}>
                  <cert.icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="mb-1 text-xl font-semibold text-[var(--text-color)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {cert.organization}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/btn"
                >
                  View Certificate
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
