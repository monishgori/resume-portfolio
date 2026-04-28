"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const techStack = [
    "C", "C++", "Java", "Python", 
    "HTML5", "CSS3", "JavaScript", "React", 
    "Node.js", "SQL", "Git", "GitHub", 
    "Tailwind CSS", "Next.js", "PWA"
  ];

  return (
    <section id="skills" className="py-24 bg-neutral-900/20 border-y border-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
        >
          <div className="max-w-xl">
            <span className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-4 block">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 heading-font mb-4">
              Technologies I can step in with.
            </h2>
            <p className="text-neutral-400">
              A solid foundation in programming principles paired with modern web development tools. Ready to contribute from day one.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {techStack.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="px-5 py-3 rounded-xl card-glass border border-neutral-800 text-neutral-300 font-medium hover:text-neutral-50 hover:border-neutral-700 transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
