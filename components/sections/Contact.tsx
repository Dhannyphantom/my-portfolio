'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? Let's build something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Card className="border-2 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.02] resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                  <CardDescription>
                    Find me on these platforms or send me an email directly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="mailto:daniel@example.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:translate-x-2 group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">daniel@example.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/dhannyphantom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:translate-x-2 group"
                  >
                    <div className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg group-hover:scale-110 transition-transform">
                      <Github className="h-6 w-6 text-slate-900 dark:text-slate-100" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">GitHub</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">@dhannyphantom</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:translate-x-2 group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                      <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Daniel Olojo</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all hover:translate-x-2 group"
                  >
                    <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg group-hover:scale-110 transition-transform">
                      <Twitter className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Twitter/X</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">@dhannyphantom</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
                <CardContent className="p-8 text-center">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Open to Opportunities
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Currently available for freelance projects and full-time positions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
