'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github, Home, FolderOpen, Info } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants/links';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">          {/* Logo */}
          <Link href={NAV_LINKS.home} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center text-black font-bold">
              AI
            </div>
            <span className="text-lg font-semibold text-white">Gen AI Projects</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href={NAV_LINKS.home} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm">
              <Home size={16} />
              <span>Home</span>
            </Link>
            <Link href={NAV_LINKS.projects} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm">
              <FolderOpen size={16} />
              <span>Projects</span>
            </Link>
            <Link href={NAV_LINKS.about} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm">
              <Info size={16} />
              <span>About</span>
            </Link>
            <Link 
              href={SOCIAL_LINKS.github.url} 
              target="_blank"
              className="flex items-center space-x-2 bg-white text-black px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <Github size={16} />
              <span>GitHub</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              <Link
                href={NAV_LINKS.home}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={16} />
                <span>Home</span>
              </Link>
              <Link
                href={NAV_LINKS.projects}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FolderOpen size={16} />
                <span>Projects</span>
              </Link>
              <Link
                href={NAV_LINKS.about}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={16} />
                <span>About</span>
              </Link>
              <Link
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github size={16} />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
