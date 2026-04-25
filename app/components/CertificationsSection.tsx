'use client';

import { motion } from "framer-motion";
import { Award, Cloud, Code, Users, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "ICNGCES 2025 Participant",
    organization: "International Conference",
    year: "2025",
    description: "International conference on Next-Generation Computing and Electronic Systems.",
    icon: Users,
    featured: true,
    link: "icngces.webp", // Placeholder link
  },
  {
    id: 2,
    title: "Cloud Computing",
    organization: "NPTEL - IIT Kharagpur",
    year: "2024",
    description: "Comprehensive course covering cloud infrastructure, virtualization, and deployment.",
    icon: Cloud,
    featured: false,
    link: "NPTEL24CS.pdf",
  },
  {
    id: 3,
    title: "C Programming",
    organization: "PS Softech",
    year: "2022",
    description: "Foundation in programming logic and memory management principles.",
    icon: Code,
    featured: false,
    link: "C_programming.pdf",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-12 md:px-20 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative inline-block text-4xl font-light mb-4 tracking-tight text-[var(--text-color)]"
          >
            Certifications & <span className="font-semibold text-indigo-600 dark:text-indigo-400">Recognition</span>
            <span className="absolute left-0 -bottom-2 h-[2px] w-1/2 bg-indigo-500"></span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 flex flex-col h-full
                ${cert.featured
                  ? 'border-indigo-500/50 bg-indigo-50/30 dark:bg-indigo-500/10 shadow-xl shadow-indigo-500/10 scale-105 z-20 ring-1 ring-indigo-500/20'
                  : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5'
                }`}
            >
              {cert.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  Featured Certification
                </div>
              )}

              {/* Icon & Year */}
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

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {cert.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Footer / Button */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <a
                  href={cert.link}
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
