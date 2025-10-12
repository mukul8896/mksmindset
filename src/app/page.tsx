"use client";
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Award } from 'lucide-react';

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const projects = [
    {
      title: 'Generative AI Trading Agent',
      description: 'AI-powered trading bot with autonomous market signal generation and order execution. Built with LangChain, OpenAI, Python, and Angel One SmartAPI for real-time market analysis.',
      tags: ['Python', 'LangChain', 'OpenAI', 'Trading APIs', 'Generative AI'],
      github: 'https://github.com/mukul8896',
      impact: 'Demonstrates RAG agents and real-time API integration'
    },
    {
      title: 'BDD Automation Framework',
      description: 'Scalable Java-based Cucumber-Selenium framework with Jenkins CI/CD integration, reusable components, and detailed HTML reporting for enterprise-grade test automation.',
      tags: ['Java', 'Selenium', 'Cucumber', 'Jenkins', 'CI/CD'],
      github: 'https://github.com/mukul8896',
      impact: 'Used in production environments for regression testing'
    },
    {
      title: 'Medi Hollow Instruments',
      description: 'Full-stack e-commerce platform with Node.js backend, React frontend, and Vercel deployment. Features dynamic product listings, responsive design, and inventory management.',
      tags: ['Node.js', 'React', 'Vercel', 'MongoDB', 'Responsive UI'],
      github: 'https://github.com/mukul8896',
      live: 'https://vercel.com',
      impact: '10K+ monthly visitors with 98% uptime'
    }
  ];

  const skills = {
    'Frontend': ['React', 'JavaScript', 'Responsive Design', 'TailwindCSS'],
    'Backend & APIs': ['Node.js', 'Python', 'Java', 'REST APIs', 'Microservices'],
    'AI/ML': ['LangChain', 'OpenAI', 'Generative AI', 'RAG Agents', 'Prompt Engineering'],
    'DevOps & Cloud': ['Jenkins', 'Docker', 'AWS', 'OCI', 'GCP', 'CI/CD Pipelines'],
    'Testing': ['Selenium', 'WebdriverIO', 'Cucumber/BDD', 'Jest', 'TestNG'],
    'Databases': ['MongoDB', 'MySQL', 'SQLite']
  };

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Oracle',
      period: '05/2023 - Current',
      highlights: [
        'Built Node.js WebdriverIO automation framework improving test stability by 40%',
        'Developed AI-powered test case generation tools reducing manual effort by 60%',
        'Led CI/CD optimization increasing deployment speed by 3x'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'TELUS International',
      period: '06/2021 - 05/2023',
      highlights: [
        'Developed Node.js microservices and REST APIs for CI/CD automation',
        'Implemented Jenkins pipelines for regression and integration test suites',
        'Created automation APIs serving 5+ internal developer teams'
      ]
    }
  ];

  const certifications = [
    'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    'Oracle Cloud Infrastructure 2024 Certified OCI Foundations Associate',
    'Google Cloud Associate Cloud Engineer',
    'AWS Certified Cloud Practitioner (CLF-C02)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mukul Kumar
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu */}
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {mobileOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-semibold mb-6">
              🚀 Senior Software Engineer at Oracle
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Full-Stack Developer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI Engineer</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            7+ years building scalable automation tools, backend systems, and AI-integrated applications. Expertise in Node.js, Python, React, and Generative AI. Certified in Oracle Cloud and AWS.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105">
              View My Work
            </a>
            <a href="mailto:mukul.sharma8896@gmail.com" className="px-8 py-3 border border-slate-500 rounded-lg font-semibold hover:bg-slate-800 transition">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/mukul8896" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/mukul-kumar-6408ab13b" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition">
              <Linkedin size={28} />
            </a>
            <a href="mailto:mukul.sharma8896@gmail.com" className="text-slate-400 hover:text-blue-400 transition">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-slate-800/50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years Experience', value: '7+' },
            { label: 'Projects Built', value: '30+' },
            { label: 'Tech Stack', value: '20+' },
            { label: 'Cloud Certified', value: '4' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience & Track Record</h2>
          
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-slate-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-3 text-slate-300">
                      <span className="text-blue-400 mt-1">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition group">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4 p-3 bg-slate-700/50 rounded border border-slate-600">
                    <p className="text-xs text-slate-400"><span className="text-cyan-400 font-semibold">Impact:</span> {project.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-slate-700 hover:bg-blue-600 rounded transition text-center text-sm font-semibold flex items-center justify-center gap-2">
                      <Github size={16} /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition text-center text-sm font-semibold flex items-center justify-center gap-2">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition">
                <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <Code size={20} /> {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-200 hover:bg-blue-600 transition cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="text-yellow-400" size={32} />
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 hover:border-yellow-400/50 transition flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <p className="text-slate-200">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Amazing</h2>
          <p className="text-xl text-slate-300 mb-8">Open to exciting opportunities, collaborations, and technical discussions.</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:mukul.sharma8896@gmail.com" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition flex items-center gap-2">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://linkedin.com/in/mukul-kumar-6408ab13b" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/mukul8896" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-500 hover:border-slate-300 rounded-lg font-semibold transition flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Mukul Kumar. Crafted with expertise in full-stack development & AI.</p>
        </div>
      </footer>
    </div>
  );
}