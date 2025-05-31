'use client';

import { Project } from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl overflow-hidden">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">🤖</div>
              <p className="text-sm opacity-80">{project.category}</p>
            </div>
          </div>
        )}
        
        {project.featured && (
          <div className="absolute top-3 right-3 bg-white text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Star size={12} fill="currentColor" />
            <span>Featured</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full font-medium border border-gray-700">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-black border border-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              className="flex-1 bg-white text-black hover:bg-gray-200 text-center py-2 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
            >
              <ExternalLink size={14} />
              <span>Try Demo</span>
            </Link>
          )}
          
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white text-center py-2 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Github size={14} />
              <span>Code</span>
            </Link>
          )}
          
          {!project.demoUrl && !project.githubUrl && (
            <div className="flex-1 bg-gray-800 text-gray-500 text-center py-2 px-4 rounded-lg font-medium border border-gray-700">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
