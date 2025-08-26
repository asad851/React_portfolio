"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Founding Engineer (SDE-1)",
      company: "Unsuit Legal Technologies",
      location: "Remote",
      period: "Nov 2023 - Nov 2024",
      achievements: [
        "Architected a full-scale frontend SaaS platform using React.js, resulting in a 35% increase in onboarding efficiency for over 1,200+ legal professionals",
        "Implemented secure, multi-role authentication (admin, user, super admin), reducing unauthorized access attempts by 90% and improving compliance",
        "Integrated third-party cloud storage services (Google Drive, OneDrive, Dropbox), enabling users to upload and manage 10,000+ files monthly with 40% faster retrieval speeds",
        "Developed an advanced document management system supporting CRUD, split, and merge operations, cutting legal document handling time by 30%",
        "Optimized frontend API handling through custom React hooks, reducing redundant code by 50% and decreasing request-related bugs by 60%"
      ],
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
      title: "Founding Engineer (SDE-1)",
      company: "Caresync",
      location: "Remote",
      period: "Nov 2022 - Nov 2023",
      achievements: [
        "Led the complete frontend development lifecycle using React.js and Redux Toolkit, contributing to a product launch that served over 15 enterprise clients within 6 months",
        "Engineered role-based UI authentication workflows, improving registration flow accuracy and reducing login issues by 70%",
        "Designed and implemented 20+ responsive UI components using HTML5, SCSS, and React Router, enhancing page load times by 25% across devices",
        "Automated build and deployment pipelines with AWS CI/CD, slashing deployment time by 90% and enabling weekly release cycles"
      ],
       technologies: [
        "React.js",
        "Redux Toolkit",
        "Bootstrap",
        "SCSS",
        "React Router",
        "AWS CI/CD",
        "HTML5",
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Work Experience</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Building innovative solutions and driving impact at fast-growing startups
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700">
              <CardHeader className="pb-4 p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium text-violet-600 dark:text-violet-400">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Founding Engineer
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm sm:text-base">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm sm:text-base">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;