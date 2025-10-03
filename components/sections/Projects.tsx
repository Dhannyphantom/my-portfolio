'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ShoppingCart, GraduationCap, Users, BookHeart } from 'lucide-react';

const projects = [
  {
    title: 'Nigson',
    description: 'An intuitive e-commerce app designed to enhance the online shopping experience for users in Nigeria.',
    tech: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Paystack'],
    features: ['Product catalog', 'Shopping cart', 'Checkout flow', 'Payment integration'],
    gradient: 'from-blue-600 to-cyan-600',
    icon: ShoppingCart,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    github: '#',
    demo: '#'
  },
  {
    title: 'Scholax',
    description: 'A gamified quiz platform that empowers Nigerian students to learn, excel academically, and earn rewards.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Gamification'],
    features: ['Quiz challenges', 'Rewards system', 'Leaderboard', 'Academic subjects'],
    gradient: 'from-green-600 to-emerald-600',
    icon: GraduationCap,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    github: '#',
    demo: '#'
  },
  {
    title: 'Weebo',
    description: 'A social media app for anime lovers (weebs/otakus) to connect, share anime news, and engage with the community.',
    tech: ['React Native', 'Redux', 'Node.js', 'Real-time'],
    features: ['Community feed', 'User profiles', 'Anime updates', 'Social engagement'],
    gradient: 'from-pink-600 to-rose-600',
    icon: Users,
    iconColor: 'text-pink-600',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    github: '#',
    demo: '#'
  },
  {
    title: 'Gospel Network',
    description: 'A spiritual growth tracker app that helps users build habits, access Christian podcasts, documentaries, books, and quizzes.',
    tech: ['React Native', 'Expo', 'MongoDB', 'Node.js'],
    features: ['Habit tracker', 'Spiritual challenges', 'Podcasts', 'Books & quizzes'],
    gradient: 'from-purple-600 to-violet-600',
    icon: BookHeart,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    github: '#',
    demo: '#'
  }
];

export function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Innovative applications that make a difference in people's lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-500 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`relative ${project.bgColor} p-8 rounded-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`h-16 w-16 ${project.iconColor}`} />

                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button variant="default" size="sm" className="flex-1 group/btn">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 group/btn">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Want to see more of my work?
            </p>
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
