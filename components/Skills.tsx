"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Redux/Redux Toolkit", level: 88 },
        { name: "JavaScript/ES6+", level: 92 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "UI/UX & Styling",
      skills: [
        { name: "Material-UI (MUI)", level: 88 },
        { name: "SCSS/Sass", level: 85 },
        { name: "Bootstrap", level: 82 },
        { name: "Responsive Design", level: 92 },
        { name: "CSS-in-JS", level: 80 },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "MongoDB", level: 72 },
        { name: "REST APIs", level: 85 },
        { name: "Git/GitHub", level: 88 },
        { name: "AWS CI/CD", level: 78 },
      ],
    },
    {
      category: "Development Practices",
      skills: [
        { name: "Component Architecture", level: 90 },
        { name: "State Management", level: 88 },
        { name: "Performance Optimization", level: 85 },
        { name: "Testing", level: 75 },
        { name: "Code Review", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Technology Stack
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise in modern frontend technologies and
            development practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700"
            >
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <Card className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/10 dark:to-indigo-900/10 border-violet-200 dark:border-violet-800">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6">
                I'm constantly exploring new technologies and frameworks to stay
                ahead of the curve. Currently diving deeper into
                TypeScript,Python, GraphQL, and advanced React patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "TypeScript",
                  "Python",
                  "GraphQL",
                  "Docker",
                  "Microservices",
                ].map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-white dark:bg-slate-800"
                  >
                    {tech} <span className="ml-1 text-xs">📚</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
