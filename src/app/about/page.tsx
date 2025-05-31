export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Gen AI Projects
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 max-w-3xl mx-auto text-gray-300">
              Exploring the frontiers of artificial intelligence through innovative projects and experiments
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                This project portfolio represents a comprehensive exploration of generative artificial intelligence 
                capabilities. As part of a Gen AI cohort, we're building innovative solutions that demonstrate 
                the practical applications of modern AI technologies.
              </p>
              <p className="text-gray-300">
                Each project showcases different aspects of AI - from conversational interfaces and persona 
                creation to creative tools and developer utilities. Our goal is to push the boundaries of 
                what's possible with AI while maintaining a focus on user experience and practical utility.
              </p>
            </div>            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Next.js 15 with App Router</li>
                    <li>• React 19 with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Responsive design principles</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">AI & Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• OpenAI GPT-4 API integration</li>
                    <li>• Custom persona development</li>
                    <li>• RESTful API design</li>
                    <li>• Environment-based configuration</li>
                  </ul>
                </div>
              </div>
            </div>            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Featured Project: Hitesh Persona</h2>
              <p className="text-gray-300 mb-4">
                Our flagship project is an AI persona that accurately emulates Hitesh Choudhary's unique 
                teaching style. This includes:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>• <strong className="text-white">Authentic Hinglish Communication:</strong> Natural blend of Hindi and English</li>
                <li>• <strong className="text-white">Teaching Philosophy:</strong> No spoon-feeding approach that encourages learning</li>
                <li>• <strong className="text-white">Cultural Context:</strong> Chai references and relatable analogies</li>
                <li>• <strong className="text-white">Technical Expertise:</strong> JavaScript, Python, Web Development, and AI</li>
              </ul>
              <p className="text-gray-300">
                This persona demonstrates advanced prompt engineering and the ability to capture 
                nuanced communication styles in AI systems.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Future Roadmap</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>                  <div>
                    <h4 className="font-semibold text-white">Smart Code Reviewer</h4>
                    <p className="text-gray-400 text-sm">AI-powered code analysis and improvement suggestions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Content Generator Suite</h4>
                    <p className="text-gray-400 text-sm">Blog posts, social media content, and technical documentation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Multi-Persona Chat System</h4>
                    <p className="text-gray-400 text-sm">Expandable system supporting multiple AI personalities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">AI Learning Assistant</h4>
                    <p className="text-gray-400 text-sm">Personalized tutoring and skill development platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
