"use client";

import React from "react";
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
} from "lucide-react";
import { filezone, ecom } from "../lib/images";
import Image from "next/image";
const Projects = () => {
  const projects = [
    {
      title: "FileZone - Cloud Storage Platform",
      description:
        "A comprehensive cloud storage solution with advanced file management capabilities, secure sharing, and real-time collaboration features. Built with modern React architecture and optimized for performance.",
      image: filezone,
      liveUrl: "https://filezone-rho.vercel.app/",
      githubUrl: "https://github.com/asad851/filezone",
      technologies: [
        "React.js",
        "Expresss.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux Toolkit",
        "RTK query",
        "REST APIs",
        "Node.js",
        "MongoDB",
        "Firebase",
      ],
      features: [
        "Secure file upload and management",
        "Real-time collaboration tools",
        "Advanced search and filtering",
        "Multi-format file preview",
        "Responsive design across devices",
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
      technologies: ["React.js", "Redux Toolkit", "tailwind css"],
      features: [
        "Product catalog with advanced filtering",
        "Secure payment processing",
        "Order tracking and management",
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
      category: "E-Commerce",
      status: "Live",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Projects
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Live Projects & Applications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
            and best practices
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl hover:shadow-violet-500/10 dark:hover:shadow-violet-500/20 transition-all duration-500 border-slate-200 dark:border-slate-700 overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:flex lg:items-center">
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 relative group-hover:scale-105 transition-transform duration-500">
                    <Image
                      className="absolute w-full h-full"
                      src={project.image}
                      alt={project.title}
                    />
                    {/* Decorative gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/10 to-indigo-600/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500"></div>
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          {project.title.split(" ")[0]}
                        </div>
                      </div>
                    </div>

                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-purple-900/80 to-indigo-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        size="sm"
                        className="bg-white/90 text-slate-900 hover:bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/50 dark:text-white/90 text-slate-900    hover:bg-slate-900  dark:hover:bg-white/90 hover:text-white dark:hover:text-slate-900 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-6 sm:p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800"
                      >
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 animate-pulse"
                      >
                        <Zap className="h-3 w-3 mr-1" />
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-slate-900 dark:text-white mb-3">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm sm:text-base">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm sm:text-base">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 hover:scale-105 transition-transform"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-2xl transition-all flex-1 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Project
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-violet-300 dark:border-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:border-violet-400 dark:hover:border-violet-500 flex-1 hover:scale-105 hover:-translate-y-1 transition-all hover:shadow-lg"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 border-violet-200 dark:border-violet-800 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with
                innovative teams. Let's discuss how we can bring your ideas to
                life with modern web technologies.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <ExternalLink className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
