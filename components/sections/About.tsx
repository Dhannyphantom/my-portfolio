"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code as Code2, Pill, Heart } from "lucide-react";
import Image from "next/image";

export function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative mb-8 lg:mb-0">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />

                  <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                            <Image
                              src="/images/blues.jpg"
                              alt="My profile picture"
                              fill
                              className="object-scale-down rounded-full"
                              priority
                            />
                          </div>

                          <p className="text-white text-xl font-semibold">
                            Daniel Olojo
                          </p>
                          <p className="text-white/80 text-sm mt-1">
                            Full Stack Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl border-4 border-white dark:border-slate-950 transform rotate-12 hover:rotate-0 transition-transform">
                    <span className="text-sm font-bold">
                      Available for Work
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-xl">
                    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                      <p>
                        I am a{" "}
                        <span className="font-semibold text-slate-900 dark:text-white">
                          Pharmacist Intern
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-slate-900 dark:text-white">
                          Full Stack Developer
                        </span>{" "}
                        with a passion for building meaningful digital
                        solutions. My background in pharmacy has trained me to
                        be detail-oriented, analytical, and
                        people-focused—qualities that I bring into every project
                        I develop.
                      </p>

                      <p>
                        I specialize in{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          mobile app development with React Native
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          web development with Next.js and Node.js
                        </span>
                        . Over the years, I've built intuitive applications
                        ranging from e-commerce platforms to educational and
                        spiritual growth tools.
                      </p>

                      <p>
                        Beyond coding, I am also a passionate anime lover (
                        <span className="font-semibold text-slate-900 dark:text-white">
                          dhannyphantom
                        </span>
                        ), which influences my creativity and design approach.
                        My goal is to keep bridging the gap between healthcare,
                        technology, and communities through innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="grid gap-6">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-cyan-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg group-hover:scale-110 transition-transform">
                        <Code2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                          Technical Expertise
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Proficient in React Native, Next.js, Node.js, and
                          modern web technologies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                        <Pill className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                          Healthcare Background
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Detail-oriented, analytical, and people-focused
                          approach from pharmaceutical training.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-pink-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg group-hover:scale-110 transition-transform">
                        <Heart className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                          Creative Vision
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Anime-inspired creativity driving innovative and
                          engaging user experiences.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
