"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-2 h-2 bg-neutral-50 rounded-full group-hover:scale-150 transition-transform duration-300" />
          <span className="font-bold tracking-wider text-sm uppercase heading-font text-neutral-50">
            Monish Gori
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-neutral-50 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu could be added here later */}
      </div>
    </motion.header>
  );
}
