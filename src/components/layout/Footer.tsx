import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 mt-24">
      <div className="container mx-auto px-6 max-w-5xl py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold tracking-wider text-sm uppercase heading-font text-neutral-50 flex items-center gap-2">
            <div className="w-2 h-2 bg-neutral-50 rounded-full" />
            Monish Gori
          </span>
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-neutral-400">
          <a
            href="https://github.com/monishgori"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="mailto:mohnishgori@gmail.com"
            className="hover:text-neutral-50 transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="tel:+919653315622"
            className="hover:text-neutral-50 transition-colors"
          >
            <Phone size={20} />
            <span className="sr-only">Phone</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
