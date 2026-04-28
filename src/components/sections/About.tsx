"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <span className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 heading-font mb-6 leading-tight">
              Strong base. <br/>Live deployments. <br/><span className="text-neutral-500">Serious intent.</span>
            </h2>
          </div>

          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              I am Monish Mahesh Gori, a recent Computer Science graduate (2026) from GKS College of Commerce and Science. While many wait for their first job to start building, I have already been developing and deploying real applications to production.
            </p>
            <p>
              My approach to software engineering is grounded in fundamentals. Through formal training at Raj Computers, I built a strong command of C, C++, and Java before expanding into modern web ecosystems like React and Node.js.
            </p>
            <p className="text-neutral-300">
              I am actively looking for teams where I can contribute quickly, improve fast, and turn academic knowledge into professional execution. Whether it&apos;s frontend development or full-stack software roles, I am ready to step in.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
