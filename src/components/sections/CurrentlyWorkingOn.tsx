"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function CurrentlyWorkingOn() {
  return (
    <section className="py-24 border-y border-neutral-900 bg-neutral-950/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 items-start card-glass p-8 md:p-12 rounded-3xl"
        >
          <div className="p-4 bg-blue-500/10 text-blue-400 rounded-2xl">
            <Terminal size={32} />
          </div>
          
          <div>
            <span className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-2 block">What I&apos;m Currently Working On</span>
            <h3 className="text-2xl font-bold text-neutral-50 heading-font mb-4">
              Polishing deployment pipelines & preparing for roles.
            </h3>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Right now, I&apos;m focused on expanding my final year project into a production-ready application and diving deeper into modern React patterns. Simultaneously, I am preparing for software engineering and frontend developer interviews.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
