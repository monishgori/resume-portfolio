"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            B.Sc. Computer Science Graduate • Open to Work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-50 mb-6 heading-font leading-tight">
            I build <span className="text-gradient">fast, clean & meaningful</span> web applications.
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
            Focused on solving real problems — not just building projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-neutral-50 text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              See My Work
              <ArrowRight size={18} />
            </Link>
            <a
              href="/resume.html"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-neutral-50 font-medium rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              Open Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
