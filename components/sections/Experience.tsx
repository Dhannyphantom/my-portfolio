"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Code,
    title: "Freelance & Personal Projects",
    organization: "Independent Developer",
    duration: "2021 - Present",
    type: "Development",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    responsibilities: [
      "Developed and deployed cross-platform mobile and web applications",
      "Integrated third-party APIs (Paystack, Cloudinary)",
      "Optimized apps for performance and user experience",
      "Built e-commerce, educational, and community platforms",
    ],
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Pharmacy (B.Pharm)",
    organization: "Ahmadu Bello University, Zaria",
    duration: "2018 - 2025",
    type: "Education",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    responsibilities: [
      "Comprehensive pharmaceutical sciences education",
      "Clinical pharmacy and patient care",
      "Drug development and pharmacology",
      "Healthcare management and ethics",
    ],
  },
  {
    icon: Briefcase,
    title: "Pharmacy Internship",
    organization: "Community General Hospital",
    duration: "12 weeks (Mon–Thurs)",
    type: "Healthcare",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    responsibilities: [
      "Patient counseling and drug dispensing",
      "Collaboration with healthcare professionals",
      "Building discipline and structured problem-solving",
      "Quality assurance and medication safety",
    ],
  },
];

export function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A unique blend of healthcare expertise and technical proficiency
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card
                  key={exp.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-x-2 border-2 hover:border-blue-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-4 ${exp.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`h-8 w-8 ${exp.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">
                            {exp.title}
                          </CardTitle>
                          <p className="text-lg text-slate-600 dark:text-slate-400">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                            {exp.duration}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-3 text-slate-600 dark:text-slate-400 transition-all duration-500 ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          }`}
                          style={{
                            transitionDelay: `${index * 200 + idx * 100}ms`,
                          }}
                        >
                          <div
                            className={`mt-1.5 h-2 w-2 rounded-full ${exp.bgColor}`}
                          />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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
