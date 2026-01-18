"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, efficient code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating interfaces that are beautiful and intuitive to use.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and seamless user experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with teams to deliver exceptional results.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
     <section id="about" className="py-16 sm:py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium mb-3 sm:mb-4 block text-sm sm:text-base"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            >
              Passionate about crafting{' '}
              <span className="text-gradient-primary">exceptional</span> digital experiences
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base"
            >
              <p>
                I'm an innovative Fullstack Developer with 3+ years of experience specializing in 
                React.js, Next.js, and modern JavaScript frameworks. I have a strong track record 
                of building scalable, responsive web applications that users love.
              </p>
              <p>
                My expertise spans developing reusable UI components, optimizing development workflows, 
                and elevating user experience across B2B SaaS platforms. I'm also skilled in backend 
                development using Express.js, contributing to robust API design and seamless 
                frontend-backend integration.
              </p>
              <p>
                I'm committed to writing clean, maintainable code and driving performance improvements 
                through modern, efficient architecture.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card-elevated p-4 sm:p-6 rounded-xl sm:rounded-2xl hover-lift group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
