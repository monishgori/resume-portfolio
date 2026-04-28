"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neutral-900/30 blur-[120px] rounded-t-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-6 block">What&apos;s Next</span>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-50 heading-font mb-8">
            Available right now.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Whether you are hiring for internships, junior developer roles, or fresher positions, my inbox is open. Let&apos;s discuss how I can contribute to your team immediately.
          </p>

          <a
            href="mailto:mohnishgori@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-50 text-neutral-950 font-bold rounded-full hover:bg-neutral-200 transition-colors md:text-lg"
          >
            mohnishgori@gmail.com
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
