"use client";

import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ResumePage() {
  // Simple print handler
  const handlePrint = () => {
    window.print();
  };

  // Optional: Set title for printed PDF name
  useEffect(() => {
    document.title = "Monish_Gori_Resume";
    return () => {
      document.title = "Monish Mahesh Gori | Developer Portfolio";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans absolute inset-0 z-50">
      {/* Top Action Bar (hidden when printing) */}
      <div className="no-print bg-neutral-100 border-b border-neutral-200 py-4 px-6 sticky top-0 z-10 flex justify-between items-center shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-medium text-sm"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors shadow-sm"
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>

      {/* Resume Content Container (A4 Proportions) */}
      <div className="max-w-[800px] mx-auto bg-white p-8 md:p-16 print:p-0">
        
        {/* Header */}
        <header className="mb-6 border-b border-neutral-200 pb-6">
          <h1 className="text-4xl font-bold text-neutral-900 tracking-tight mb-1">
            Monish Mahesh Gori
          </h1>
          <p className="text-xl text-neutral-600 font-medium mb-4">
            Full Stack Developer | Open to Internships
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
            <span><span className="font-bold text-neutral-900">Email:</span> <a href="mailto:mohnishgori@gmail.com" className="hover:text-blue-600 transition-colors">mohnishgori@gmail.com</a></span>
            <span><span className="font-bold text-neutral-900">Phone:</span> +91 96533 15622</span>
            <span><span className="font-bold text-neutral-900">Location:</span> Mumbai, India</span>
            <span><span className="font-bold text-neutral-900">GitHub:</span> <a href="https://github.com/monishgori" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">github.com/monishgori</a></span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6 pb-6 border-b border-neutral-100">
          <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-900 pb-1 mb-4 inline-block">
            Summary
          </h2>
          <p className="text-neutral-700 leading-relaxed text-sm">
            Full stack developer focused on building clean, fast, and user-friendly web applications. Experienced in developing and deploying real-world projects with attention to performance, usability, and responsive design. Actively seeking internship and entry-level opportunities to contribute and grow in a professional environment.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-6 pb-6 border-b border-neutral-100">
          <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-900 pb-1 mb-4 inline-block">
            Projects
          </h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-neutral-900">Shri Sodevpir Dada</h3>
                <span className="text-xs text-neutral-500 font-medium">React, Tailwind, PWA</span>
              </div>
              <p className="text-sm text-neutral-700 mb-2">
                Built and deployed a devotional web application providing daily prayers and spiritual content.
              </p>
              <ul className="list-disc list-outside ml-4 text-sm text-neutral-600 space-y-1">
                <li>Designed for simple navigation and mobile-friendly usage</li>
                <li>Optimized for fast loading and accessibility</li>
                <li>Deployed and live on Vercel</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-neutral-900">Shri Aashapura Maa</h3>
                <span className="text-xs text-neutral-500 font-medium">React, CSS, Service Worker</span>
              </div>
              <p className="text-sm text-neutral-700 mb-2">
                Developed a devotional platform focused on structured content and user-friendly design.
              </p>
              <ul className="list-disc list-outside ml-4 text-sm text-neutral-600 space-y-1">
                <li>Improved readability and navigation</li>
                <li>Accessible across devices</li>
                <li>Live deployed application</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-neutral-900">CARECONNECT</h3>
                <span className="text-xs text-neutral-500 font-medium">Java, SQL, Web Dev</span>
              </div>
              <p className="text-sm text-neutral-700 mb-2">
                Developed a hospital appointment management system to improve booking and scheduling workflows.
              </p>
              <ul className="list-disc list-outside ml-4 text-sm text-neutral-600 space-y-1">
                <li>Focused on structured data handling</li>
                <li>Designed to streamline patient-service flow</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2">
          {/* Skills */}
          <section>
            <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-900 pb-1 mb-4 inline-block">
              Skills
            </h2>
            <div className="space-y-2 text-sm text-neutral-700">
              <p><span className="font-bold text-neutral-900">Languages:</span> JavaScript, Python, Java</p>
              <p><span className="font-bold text-neutral-900">Frontend:</span> React, HTML, CSS</p>
              <p><span className="font-bold text-neutral-900">Backend:</span> Node.js (basic)</p>
              <p><span className="font-bold text-neutral-900">Database:</span> SQL</p>
              <p><span className="font-bold text-neutral-900">Tools:</span> Git, GitHub, Vercel</p>
            </div>
          </section>

          <div>
            {/* Education */}
            <section className="mb-6 pb-6 border-b border-neutral-100">
              <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-900 pb-1 mb-4 inline-block">
                Education
              </h2>
              <div className="text-sm text-neutral-700">
                <h3 className="font-bold text-neutral-900">B.Sc. Computer Science</h3>
                <p>GKS College of Commerce and Science</p>
                <p className="text-neutral-500 mt-1">Graduation Year: 2026</p>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-900 pb-1 mb-4 inline-block">
                Achievements
              </h2>
              <ul className="list-disc list-outside ml-4 text-sm text-neutral-600 space-y-1">
                <li>Built and deployed multiple live web applications</li>
                <li>Created a professional portfolio website</li>
                <li>Maintained a public GitHub profile</li>
              </ul>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
