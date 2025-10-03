import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Daniel Olojo
            </h3>
            <p className="text-slate-400">
              Pharmacist Intern & Full Stack Developer crafting impactful digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/dhannyphantom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Daniel Olojo
          </p>
          <p className="text-slate-500 text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
