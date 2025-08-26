"use client";

import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            © 2024 Asad Ahmed Siddiqui. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;