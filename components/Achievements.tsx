"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Users, Clock, Zap } from 'lucide-react';

const Achievements = () => {
  const [counters, setCounters] = useState({
    professionals: 0,
    files: 0,
    clients: 0,
    timeSaved: 0
  });

  const finalValues = {
    professionals: 1200,
    files: 10000,
    clients: 15,
    timeSaved: 20
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervals = 50; // Update every 40ms
    const steps = duration / intervals;

    const incrementValues = {
      professionals: finalValues.professionals / steps,
      files: finalValues.files / steps,
      clients: finalValues.clients / steps,
      timeSaved: finalValues.timeSaved / steps
    };

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = {
          professionals: Math.min(prev.professionals + incrementValues.professionals, finalValues.professionals),
          files: Math.min(prev.files + incrementValues.files, finalValues.files),
          clients: Math.min(prev.clients + incrementValues.clients, finalValues.clients),
          timeSaved: Math.min(prev.timeSaved + incrementValues.timeSaved, finalValues.timeSaved)
        };

        // Check if all counters have reached their final values
        if (Object.values(newCounters).every((value, index) => 
          value >= Object.values(finalValues)[index]
        )) {
          clearInterval(interval);
          return finalValues;
        }

        return newCounters;
      });
    }, intervals);

    return () => clearInterval(interval);
  }, []);

  const achievements = [
    {
      icon: <Users className="h-8 w-8" />,
      value: Math.floor(counters.professionals),
      suffix: "+",
      label: "Legal Professionals Served",
      description: "Improved onboarding efficiency by 35%",
      color: "text-violet-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: Math.floor(counters.files),
      suffix: "+",
      label: "Files Managed Monthly",
      description: "40% faster retrieval speeds",
      color: "text-indigo-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: Math.floor(counters.clients),
      suffix: "+",
      label: "Enterprise Clients",
      description: "Served within 6 months of launch",
      color: "text-purple-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: Math.floor(counters.timeSaved),
      suffix: "hrs/week",
      label: "Time Saved",
      description: "Reduced document review time",
      color: "text-pink-600"
    }
  ];

  const impactHighlights = [
    {
      title: "Security Enhancement",
      metric: "90%",
      description: "Reduction in unauthorized access attempts through secure multi-role authentication"
    },
    {
      title: "Code Optimization", 
      metric: "50%",
      description: "Reduction in redundant code through custom React hooks implementation"
    },
    {
      title: "Performance Boost",
      metric: "25%",
      description: "Improvement in page load times across all devices"
    },
    {
      title: "Deployment Speed",
      metric: "90%",
      description: "Faster deployment times with automated CI/CD pipelines"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Achievements & Impact</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Measurable Results
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Driving real business impact through innovative frontend solutions and performance optimizations
          </p>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-slate-200 dark:border-slate-700">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${achievement.color} bg-opacity-10 mb-4`}>
                  <div className={achievement.color}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {achievement.value.toLocaleString()}{achievement.suffix}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {achievement.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {impactHighlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent ml-4">
                    {highlight.metric}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 sm:mt-16">
          <Card className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/10 dark:to-indigo-900/10 border-violet-200 dark:border-violet-800">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Delivering Excellence at Scale
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Through innovative frontend solutions and meticulous attention to detail, I've helped multiple startups 
                scale their platforms, improve user experiences, and achieve significant business outcomes. My focus on 
                performance optimization and clean architecture ensures sustainable growth and maintainability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;