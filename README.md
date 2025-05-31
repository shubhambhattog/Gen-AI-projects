# Gen AI Projects Portfolio

A comprehensive collection of innovative AI projects showcasing the power of generative artificial intelligence. Built with Next.js, TypeScript, and modern web technologies.

## 🚀 Features

- **Modern Web Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **AI Integration**: OpenAI GPT-4 API for intelligent conversations
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Extensible Architecture**: Easy to add new AI projects and personas
- **Production Ready**: Optimized for performance and scalability

## 🤖 Current Projects

### 1. Hitesh Choudhary AI Persona
An authentic AI chatbot that emulates Hitesh Choudhary's unique teaching style:
- **Hinglish Communication**: Natural mix of Hindi and English
- **No Spoon-feeding Philosophy**: Encourages learning by doing
- **Chai References**: Cultural context with humor and analogies
- **Technical Expertise**: JavaScript, Python, Web Development, AI

### 2. Smart Code Reviewer (Coming Soon)
AI-powered code analysis and improvement suggestions

### 3. Content Generator (Coming Soon)  
Generate high-quality blog posts, social media content, and documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4 API
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gen-ai-projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your OpenAI API key to `.env.local`:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Adding New Personas

1. Define your persona in `src/data/projects.ts`
2. Add the persona configuration following the existing pattern
3. The chat interface will automatically support the new persona

### Adding New Projects

1. Create a new project entry in the `projects` array
2. Add project images to `public/projects/`
3. Create a dedicated page in `src/app/projects/[project-name]/`

## 🌟 Key Features

### Intelligent Chat Interface
- Real-time conversation with AI personas
- Message history and context preservation
- Typing indicators and smooth animations
- Mobile-responsive design

### Project Showcase
- Beautiful project cards with filtering
- Category-based organization
- Featured projects highlighting
- Responsive grid layout

### Modern UI/UX
- Gradient backgrounds and modern design
- Smooth animations and transitions
- Accessibility-first approach
- Dark mode ready (coming soon)

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)  
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔐 Environment Variables

Required environment variables:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# App Configuration  
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hitesh Choudhary** for the inspiration and teaching style
- **OpenAI** for the powerful GPT-4 API
- **Vercel** for the excellent Next.js framework
- **Tailwind CSS** for the utility-first styling approach

## 📞 Contact

For questions, suggestions, or collaboration opportunities, feel free to reach out!

---

**Built with ❤️ using Next.js and OpenAI**
