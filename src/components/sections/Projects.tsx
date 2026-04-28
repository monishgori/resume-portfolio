"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );
}

const projects = [
  {
    title: "Shri Sodevpir Dada",
    description: "Built a devotional platform to make daily prayers simple and accessible. Organized scattered spiritual material into a single, cohesive PWA.",
    impact: "Used by real users with fast load times and seamless bilingual navigation.",
    credibility: "Deployed and live on Vercel",
    stack: ["React", "Tailwind", "PWA"],
    liveUrl: "https://shrisodevpirdada.vercel.app",
    githubUrl: "https://github.com/monishgori/ShriSodevpirDada",
    state: "Live on Vercel"
  },
  {
    title: "Shri Aashapura Maa",
    description: "Developed a clean, mobile-first devotional web application designed specifically for daily spiritual reading and offline capability.",
    impact: "Provides a structured navigation flow that vastly improves the reading experience for users on mobile devices.",
    credibility: "Optimized for fast loading and performance",
    stack: ["React", "Service Worker", "CSS"],
    liveUrl: "https://shriaashapuramaa.vercel.app",
    githubUrl: "https://github.com/monishgori/ShriAashapuraMaa",
    state: "Live on Vercel"
  },
  {
    title: "CARECONNECT",
    description: "Built a hospital appointment management system to solve booking inefficiencies and streamline scheduling for staff and patients.",
    impact: "Successfully presented as a final year academic project, demonstrating proficiency in database integration and full-stack architecture.",
    credibility: "Accessible across devices",
    stack: ["Java", "SQL", "Web Dev"],
    githubUrl: "https://github.com/monishgori/DoctorApp.git",
    state: "Final Year Project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-4 block">Featured Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-50 heading-font mb-6">
            Live work that speaks for itself.
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Deploying products to actual users teaches things academic projects can&apos;t. Here is what I&apos;ve built and shipped.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ y: -5 }}
              className="card-glass rounded-3xl p-8 md:p-10 group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/0 to-neutral-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full">
                      {project.state}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-50 mb-4 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-400 mb-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-blue-400/80 text-sm font-medium mb-1">
                    → {project.impact}
                  </p>

                  <p className="text-neutral-500 text-sm mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    {project.credibility}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-sm text-neutral-500 bg-neutral-900/50 px-3 py-1 rounded-md border border-neutral-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-neutral-50 text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-neutral-50 font-medium rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors"
                    >
                      <GithubIcon size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
