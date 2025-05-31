'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/project-card';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 mb-8">
              <Sparkles size={16} className="text-white" />
              <span className="text-sm text-gray-300">Powered by OpenAI GPT-4</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Gen AI Projects
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A curated collection of AI-powered applications showcasing the future of human-computer interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured"
                className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects/hitesh-persona"
                className="inline-flex items-center space-x-2 border border-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:border-gray-600 hover:bg-gray-900 transition-colors"
              >
                <Zap size={16} />
                <span>Try Live Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cutting-edge AI applications designed to demonstrate the power of generative artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Building the Future of AI
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                This platform showcases practical applications of generative AI technology, 
                featuring interactive experiences and real-world solutions that demonstrate 
                the transformative potential of artificial intelligence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">Next.js 15 with TypeScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">OpenAI GPT-4 Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">Real-time Chat Interface</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">Privacy-focused Design</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Start Building</h3>
              <p className="text-gray-400 mb-6">
                Ready to create your own AI applications? Get started with our tech stack.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm text-gray-300">Next.js</div>
                </div>
                <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm text-gray-300">OpenAI</div>
                </div>
                <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📘</div>
                  <div className="text-sm text-gray-300">TypeScript</div>
                </div>
                <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm text-gray-300">Tailwind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
