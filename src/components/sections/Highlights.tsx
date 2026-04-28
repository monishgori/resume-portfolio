"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      title: "Shipped Live Products",
      description: "Built and deployed multiple live applications used by real people."
    },
    {
      title: "Quality First",
      description: "Strong focus on fast load times, clean UI, and overall usability."
    },
    {
      title: "Continuous Growth",
      description: "Constantly expanding my knowledge in full stack development."
    }
  ];

  return (
    <section className="py-16 border-y border-neutral-900 bg-neutral-950/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-400" />
                <h3 className="text-lg font-bold text-neutral-50 heading-font">{highlight.title}</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed pl-8">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
