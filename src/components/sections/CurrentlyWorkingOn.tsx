"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function CurrentlyWorkingOn() {
  return (
    <section className="py-32 bg-neutral-950/30">
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
              Building real-world applications & refining skills.
            </h3>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Currently improving deployment workflows and preparing for technical interviews. Also focusing on building more real-world applications and diving deeper into modern frontend performance patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
