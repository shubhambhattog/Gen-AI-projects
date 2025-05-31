'use client';

import ChatInterface from '@/components/ui/chat-interface';
import { hiteshPersona } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HiteshPersonaPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <Link
                href="/"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Chat with Hitesh Sir! ☕
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 max-w-3xl mx-auto text-gray-300">
              Experience the authentic teaching style of Hitesh Choudhary - complete with Hinglish, 
              chai references, and no-spoon-feeding philosophy!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                🇮🇳 Hinglish Speaker
              </span>
              <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                ☕ Chai Enthusiast
              </span>
              <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                💻 Tech Educator
              </span>
              <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 No Spoon-feeding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <ChatInterface
                personaName={hiteshPersona.name}
                personaDescription={hiteshPersona.description}
                personaId={hiteshPersona.id}
              />
            </div>            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* About Hitesh */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">About Hitesh Sir</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong className="text-white">Profession:</strong> Tech Educator, Entrepreneur, YouTuber</p>
                  <p><strong className="text-white">Specialties:</strong> JavaScript, Python, Web Development, DSA, AI</p>
                  <p><strong className="text-white">Experience:</strong> Ex-CTO @ iNeuron, Founder @ LearnCodeOnline</p>
                  <p><strong className="text-white">Teaching Style:</strong> Hinglish, Motivational, No Spoon-feeding</p>
                </div>
              </div>

              {/* Example Questions */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Try These Questions</h3>
                <div className="space-y-3">
                  {hiteshPersona.examples.map((example, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-3">                      <p className="text-sm font-medium text-white mb-2">
                        &quot;{example.user}&quot;
                      </p>
                      <p className="text-xs text-gray-400 italic">
                        Expected style: {example.assistant.substring(0, 60)}...
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-800/50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-yellow-300">💡 Chat Tips</h3>
                <ul className="space-y-2 text-sm text-yellow-200">
                  <li>• Ask about coding concepts, tech trends, or career advice</li>
                  <li>• Expect Hinglish responses with chai references ☕</li>
                  <li>• Don&apos;t expect complete code solutions - learn by doing!</li>
                  <li>• Ask follow-up questions for detailed explanations</li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-white">🛠️ Built With</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-800/50">Next.js</span>
                  <span className="bg-green-900/30 text-green-300 text-xs px-3 py-1 rounded-full border border-green-800/50">OpenAI API</span>
                  <span className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-800/50">TypeScript</span>
                  <span className="bg-pink-900/30 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-800/50">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why This AI Persona?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience authentic tech education with Hitesh&apos;s unique teaching philosophy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-900/30 border border-orange-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Authentic Hinglish</h3>
              <p className="text-gray-400 text-sm">Natural mix of Hindi and English, just like the real Hitesh!</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-900/30 border border-orange-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Chai References</h3>
              <p className="text-gray-400 text-sm">Every conversation seasoned with chai analogies and humor</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-900/30 border border-orange-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">No Spoon-feeding</h3>
              <p className="text-gray-400 text-sm">Learn by doing - get guidance, not complete solutions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-900/30 border border-orange-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Real Analogies</h3>
              <p className="text-gray-400 text-sm">Complex concepts explained with real-world examples</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
