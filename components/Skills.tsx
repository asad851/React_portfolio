"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Redux / Redux Toolkit', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'SCSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'AWS (CI/CD)', level: 70 },
      { name: 'Webpack', level: 75 },
      { name: 'Agile / Scrum', level: 85 },
    ],
  },
];

const technologies = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 
  'Tailwind CSS', 'SCSS', 'HTML5', 'CSS3', 'Node.js', 
  'Express.js', 'MongoDB', 'Git', 'AWS', 'REST APIs',
  'MUI', 'Bootstrap', 'Webpack', 'VS Code', 'Agile',
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative bg-card/50">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-3 sm:mb-4 block text-sm sm:text-base"
          >
            My Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Technologies I <span className="text-gradient-primary">Master</span>
          </motion.h2>
        </div>

        {/* Skill Bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              className="card-elevated p-4 sm:p-6 rounded-xl sm:rounded-2xl"
            >
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-4 sm:mb-6">{category.title}</h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect border border-border text-xs sm:text-sm font-medium cursor-default hover:border-primary hover:text-primary transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
