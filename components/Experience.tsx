"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const experiences = [
    {
      type: "work",
      title: "Frontend Developer",
      company: "Self-Employed",
      period: "Nov 2024 - Feb 2026",
      technologies: [
        "React.js",
        "Redux",
        "Material-UI",
        "JavaScript",
        "REST APIs",
        "Scss",
        "HTML5",
        "Git",
        "Tailwind CSS",
      ],
      description:
        "Providing frontend development services, building scalable web applications for diverse clients.",
      achievements: [
        "Developed and maintained responsive web applications and client websites using React.js, Next.js, and modern JavaScript frameworks.",

        "Delivered frontend solutions for multiple client projects across industries, ensuring high performance, scalability, and clean UI/UX.",

        "Collaborated with designers, backend developers, and clients to translate business requirements into functional, user-friendly interfaces.",

        "Built reusable and scalable UI components, reducing development time and improving consistency across projects.",

        "Integrated REST APIs and optimized frontend performance, improving load times and user engagement.",
      ],
    },
    {
      type: "work",
      title: "Founding Engineer (SDE-1)",
      company: "Unsuit Legal Technologies",
      location: "Remote",
      period: "Nov 2023 - Nov 2024",
      achievements: [
        "Architected a full-scale frontend SaaS platform using React.js, resulting in a 35% increase in onboarding efficiency for over 1,200+ legal professionals",
        "Implemented secure, multi-role authentication (admin, user, super admin), reducing unauthorized access attempts by 90% and improving compliance",
        "Integrated third-party cloud storage services (Google Drive, OneDrive, Dropbox), enabling users to upload and manage 10,000+ files monthly with 40% faster retrieval speeds",
        "Developed an advanced document management system supporting CRUD, split, and merge operations, cutting legal document handling time by 30%",
        "Optimized frontend API handling through custom React hooks, reducing redundant code by 50% and decreasing request-related bugs by 60%",
      ],

      description:
        "Led frontend architecture for a legal SaaS platform serving 1200+ professionals.",
      technologies: [
        "React.js",
        "Redux",
        "Material-UI",
        "JavaScript",
        "REST APIs",
        "Scss",
        "HTML5",
        "Git",
        "Tailwind CSS",
      ],
    },
    {
      type: "work",
      title: "Founding Engineer (SDE-1)",
      company: "Caresync",
      location: "Remote",
      period: "Nov 2022 - Nov 2023",
      achievements: [
        "Led the complete frontend development lifecycle using React.js and Redux Toolkit, contributing to a product launch that served over 15 enterprise clients within 6 months",
        "Engineered role-based UI authentication workflows, improving registration flow accuracy and reducing login issues by 70%",
        "Designed and implemented 20+ responsive UI components using HTML5, SCSS, and React Router, enhancing page load times by 25% across devices",
        "Automated build and deployment pipelines with AWS CI/CD, slashing deployment time by 90% and enabling weekly release cycles",
      ],
      description:
        "Complete frontend development for a healthcare product serving 15+ enterprise clients.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Bootstrap",
        "SCSS",
        "React Router",
        "AWS CI/CD",
        "HTML5",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Technology",
      company: "JNTUH, Hyderabad",
      period: "July 2013 - June 2017",
      description: "Graduated with a strong foundation in  engineering.",
      achievements: [],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 md:py-32 relative bg-card/50"
    >
      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-3 sm:mb-4 block text-sm sm:text-base"
          >
            My Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Experience &{" "}
            <span className="text-gradient-primary">Education</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative pl-8 sm:pl-10 md:pl-0 pb-8 sm:pb-12 last:pb-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary glow-primary md:-translate-x-1/2 mt-1.5`}
              />

              {/* Card */}
              <div className="card-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift">
                <div
                  className={`flex flex-wrap items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                >
                  {exp.type === "work" ? (
                    <Briefcase
                      size={16}
                      className="text-primary sm:w-[18px] sm:h-[18px]"
                    />
                  ) : (
                    <GraduationCap
                      size={16}
                      className="text-primary sm:w-[18px] sm:h-[18px]"
                    />
                  )}
                  <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl mb-1">
                  {exp.title}
                </h3>
                <p className="text-primary font-medium text-sm sm:text-base mb-2 sm:mb-3">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  {exp.description}
                </p>

                {exp.achievements.length > 0 && (
                  <ul
                    className={`space-y-1.5 sm:space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}
                  >
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-xs sm:text-sm"
                      >
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
