"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Globe,
  Zap,
  ShoppingCart,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { filezone, ecom } from "../lib/images";
import Image from "next/image";
const Projects = () => {
  const projects = [
    {
      title: "FileZone - Cloud Storage Platform",
      description:
        "A comprehensive cloud storage solution with advanced file management capabilities, secure sharing, and real-time collaboration highlights. Built with modern React architecture and optimized for performance.",
      image: filezone,
      liveUrl: "https://filezone-rho.vercel.app/",
      githubUrl: "https://github.com/asad851/filezone",
      tech: [
        "React.js",
        "Expresss.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux Toolkit",
        "RTK query",
        "REST APIs",
        "Node.js",
        "Neon DB",
        "Firebase",
      ],
      highlights: [
        "Secure file upload and management",
        "Real-time collaboration tools",
        "Advanced search and filtering",
        "Multi-format file preview",
      ],
      icon: <FileText className="h-6 w-6" />,
      category: "SaaS Platform",
      status: "Live",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce solution with modern UI/UX, secure payment integration, inventory management, and comprehensive admin dashboard. Optimized for conversion and user experience.",
      image: ecom,
      liveUrl: "https://e-com-repo.vercel.app/",
      githubUrl: "https://github.com/asad851/e-commerce_frontend",
      tech: ["React.js", "Redux Toolkit", "tailwind css"],
      highlights: [
        "Product catalog with advanced filtering",
        "Secure payment processing",
        "Order tracking and management",
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
      category: "E-Commerce",
      status: "Live",
    },
  ];
 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-3 sm:mb-4 block text-sm sm:text-base"
          >
            Featured Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Things I've <span className="text-gradient-primary">Built</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden card-elevated">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:transform sm:translate-y-4 sm:group-hover:translate-y-0">
                    <Button variant="glass" size="sm" className="text-xs sm:text-sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Featured Badge */}
                {/* {project.featured && (
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-primary text-[10px] sm:text-xs font-semibold text-primary-foreground">
                    Featured
                  </div>
                )} */}
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 group">
                  <a href={project.liveUrl} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight size={20} className="sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Highlights */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
