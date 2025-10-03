"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Code as Code2,
  Pill,
} from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/res/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div
          className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "700ms" }}
      />

      <div className="absolute top-32 right-20 animate-float">
        <Code2 className="h-12 w-12 text-blue-400/30 dark:text-blue-600/30" />
      </div>
      <div
        className="absolute bottom-40 left-32 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Pill className="h-10 w-10 text-cyan-400/30 dark:text-cyan-600/30" />
      </div>
      <div
        className="absolute top-1/2 right-40 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles className="h-8 w-8 text-blue-400/30 dark:text-blue-600/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Available for freelance opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block text-slate-900 dark:text-white mb-2">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Daniel Olojo
              </span>
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent">
              Full Stack Developer & Pharmacist Intern
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              impactful digital solutions
            </span>{" "}
            that bridge healthcare, technology, and communities through
            innovation and creativity.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="group text-base px-8 py-6 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownload}
              className="group text-base px-8 py-6 border-2 
             hover:border-blue-500 
             hover:bg-blue-50 
             hover:text-blue-600 
             dark:hover:bg-blue-950 
             dark:hover:text-blue-400 
             transition-colors"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="group text-base px-8 py-6 transition-all hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Contact Me
            </Button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { number: "4+", label: "Major Projects", icon: Code2 },
              { number: "5+", label: "Technologies", icon: Sparkles },
              { number: "100%", label: "Dedication", icon: Pill },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${800 + index * 150}ms` }}
                >
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  <span className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-950 hover:scale-110 transition-all animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </button>
    </section>
  );
}
