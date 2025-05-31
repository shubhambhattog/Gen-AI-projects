import { SOCIAL_LINKS, NAV_LINKS, PROJECT_LINKS } from '@/constants/links';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                AI
              </div>
              <span className="text-xl font-bold">Gen AI Projects</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A collection of innovative AI projects showcasing the power of generative artificial intelligence. 
              From chatbots to creative tools, explore the future of AI.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.github.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={SOCIAL_LINKS.github.label}
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.twitter.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={SOCIAL_LINKS.twitter.label}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={SOCIAL_LINKS.linkedin.label}
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href={NAV_LINKS.home} className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href={NAV_LINKS.projects} className="text-gray-400 hover:text-white transition-colors">All Projects</a></li>
              <li><a href={NAV_LINKS.about} className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href={PROJECT_LINKS.repository.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Source Code</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Projects</h3>
            <ul className="space-y-2">
              <li><a href={NAV_LINKS.hiteshPersona} className="text-gray-400 hover:text-white transition-colors">Hitesh AI Persona</a></li>
              <li><span className="text-gray-500">Smart Code Reviewer</span></li>
              <li><span className="text-gray-500">Content Generator</span></li>
              <li><span className="text-gray-500">More Coming Soon...</span></li>            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Gen AI Projects. Built with ❤️ using Next.js and OpenAI.
          </p>
        </div>
      </div>
    </footer>
  );
}
