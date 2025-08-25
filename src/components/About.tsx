import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Architecture",
      description: "Building scalable applications with modern React patterns and best practices"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Focus",
      description: "Creating intuitive interfaces that enhance user experience and engagement"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Implementing efficient solutions that improve load times and user satisfaction"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Leading cross-functional teams to deliver projects on time and within scope"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Profile
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Innovative Frontend Developer with expertise in React.js, Next.js, and modern JavaScript frameworks, 
            skilled in building scalable, responsive web applications. Proficient in developing reusable UI components, 
            optimizing development workflows, and enhancing user experience in B2B SaaS platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-slate-200 dark:border-slate-700"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mb-4 text-white group-hover:scale-110 transition-transform">
                  {highlight.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/10 dark:to-teal-900/10 rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Committed to Excellence
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm committed to writing clean, maintainable code and driving performance improvements through 
              modern frontend architecture and design systems. My goal is to create exceptional digital experiences 
              that make a real impact on users and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;