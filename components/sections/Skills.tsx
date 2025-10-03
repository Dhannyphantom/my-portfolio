'use client';

import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Globe, Server, Wrench, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    skills: ['React Native', 'Expo', 'Redux', 'React Navigation', 'EAS Build', 'Mobile UI/UX']
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
    skills: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Framer Motion']
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'NextAuth.js']
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    skills: ['Git & GitHub', 'Yarn', 'Cloudinary', 'Render', 'Paystack API', 'Vercel']
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    skills: ['Adobe XD', 'Figma', 'Intuitive Design', 'User-Friendly Interfaces', 'Modern Aesthetics']
  }
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              <span className="font-semibold text-blue-600 dark:text-blue-400">Mobile App Developer</span> and{' '}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Web Developer</span> with expertise across the full development stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 ${category.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`text-sm py-2 px-4 hover:scale-105 transition-all duration-300 cursor-default ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ transitionDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
