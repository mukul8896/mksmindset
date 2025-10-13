"use client";
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Award, ArrowRight, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const projects = [
    {
      title: 'AI Trading Agent',
      description: 'AI-powered trading bot with autonomous market signal generation and order execution. Built with LangChain, OpenAI, Python, and Angel One SmartAPI for real-time market analysis.',
      tags: ['Python', 'LangChain', 'OpenAI', 'Trading APIs', 'Generative AI'],
      github: 'https://github.com/mukul8896/TradingAgent.git',
      impact: 'Demonstrates AI agents and workflows for portfoliao management and trading with realtime broker API integration'
    },
    {
      title: 'BDD Automation Framework',
      description: 'Scalable Java-based Cucumber-Selenium framework with Jenkins CI/CD integration, reusable components, and detailed HTML reporting for enterprise-grade test automation.',
      tags: ['Java', 'Selenium', 'Cucumber', 'Jenkins', 'CI/CD'],
      github: 'https://github.com/mukul8896/BDD_Cucumber.git',
      impact: 'Used in test environments for regression testing'
    },
    {
      title: 'Medi Hollow Instruments',
      description: 'Full-stack e-commerce platform with Node.js backend, React frontend, and Vercel deployment. Features dynamic product listings, responsive design, and inventory management.',
      tags: ['Node.js', 'React', 'Vercel', 'MongoDB', 'Responsive UI'],
      github: 'https://github.com/mukul8896/medi-hollow-instruments.git',
      live: 'https://medi-hollow-instruments.vercel.app/',
      impact: 'Deliverd a complete product details site for online presence with email query feature and modern UI UX which increased sales'
    }
  ];

  const skills = {
    'Languages': ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash'],
    'Frontend Development': ['React', 'TailwindCSS', 'Responsive Design', 'Modern UI/UX'],
    'Backend & APIs': ['Node.js', 'Python', 'Java', 'REST APIs', 'Microservices'],
    'AI & Machine Learning': ['LangChain', 'OpenAI', 'Generative AI', 'RAG Agents', 'Prompt Engineering'],
    'Cloud & DevOps': ['Jenkins', 'Docker', 'AWS', 'OCI', 'GCP', 'CI/CD Pipelines', 'Linux'],
    'Quality Assurance': ['Selenium', 'JUnit', 'WebdriverIO', 'Cucumber/BDD', 'TestNG'],
    'Databases': ['MongoDB', 'MySQL', 'SQLite'],
    'Tools & Platforms': ['Git', 'GitHub', 'Jira', 'Confluence', 'VS Code']
  };

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Oracle',
      period: '05/2023 - Present',
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
    },
    {
      role: 'Software Engineer',
      company: 'Frontdoor Inc.',
      period: '05/2020 - 05/2021',
      highlights: [
        'Built and enhanced UI automation (Selenium, JUnit, Maven) and API automation (Karate, REST Assured)',
        'Standardized regression planning and automated manual workflows across teams',
        'Maintained stable test suites with enforced PR reviews pre-merge to QA'
      ]
    },
    {
      role: 'Operations Executive',
      company: 'Infosys',
      period: '04/2018 - 04/2020',
      highlights: [
        'Developed Selenium, TestNG, and Maven framework with custom reporting and cross-browser execution'
      ]
    }
  ];

  const certifications = [
    {
      certName: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      certLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=952E717540E2E03D2043CE323AB32618C351983FD5B678E81883600D5CCD6F89'
    },
    {
      certName: 'Oracle Cloud Infrastructure 2024 Certified OCI Foundations Associate',
      certLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F6B46C0EFBE1BEFBFC6D4609E419E2D355D99D614A4A2E6CD0B1732371CEBEB9'
    },
    {
      certName: 'Google Cloud Associate Cloud Engineer',
      certLink: 'https://www.udemy.com/certificate/UC-b1451c42-9ec2-4657-acdd-37fa9b13dd20/'
    },
    {
      certName: 'AWS Certified Cloud Practitioner (CLF-C02)',
      certLink: 'https://www.udemy.com/certificate/UC-e7d75715-3ec4-4a8a-adb7-883920945af4/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-x-hidden">
      {/* Top Bar with Social Links */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950/98 to-slate-900/98 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition">
              Mukul Kumar
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">
                About
              </a>
              <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">
                Experience
              </a>
              <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">
                Projects
              </a>
              <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">
                Skills
              </a>
              <div className="w-px h-6 bg-slate-700"></div>
              <a href="https://github.com/mukul8896" target="_blank" rel="noopener noreferrer" 
                className="p-2.5 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/mukul-kumar-6408ab13b" target="_blank" rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mukul.sharma8896@gmail.com"
                className="p-2.5 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition duration-300">
                <Mail size={20} />
              </a>
              <a href="#contact" className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-blue-600/20 rounded-lg transition duration-300">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:text-blue-400 rounded-lg transition"
                onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2 border-t border-slate-700/50 pt-4">
              <a href="#about" onClick={() => setMobileOpen(false)}
                className="px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition">
                About
              </a>
              <a href="#experience" onClick={() => setMobileOpen(false)}
                className="px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition">
                Experience
              </a>
              <a href="#projects" onClick={() => setMobileOpen(false)}
                className="px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition">
                Projects
              </a>
              <a href="#skills" onClick={() => setMobileOpen(false)}
                className="px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition">
                Skills
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)}
                className="px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition">
                Contact
              </a>
              <div className="my-2 px-4 py-2 flex items-center gap-4 border-t border-slate-700/50 pt-4">
                <a href="https://github.com/mukul8896" target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/mukul-kumar-6408ab13b" target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:mukul.sharma8896@gmail.com"
                  className="text-slate-400 hover:text-blue-400 transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,200,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-8 hover:border-blue-400/50 transition">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Senior Software Engineer @ Oracle
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Full-Stack Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">&</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Automation Engineer</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Having 7+ years of expertise in software development, automation, and cloud. Specialized in integrating AI-Agents and tools in applications, microservices, and DevOps for optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/40 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Explore My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </a>
            <a href="mailto:mukul.sharma8896@gmail.com" className="px-8 py-4 border border-slate-400 rounded-lg font-semibold hover:bg-slate-800/50 hover:border-blue-400 transition duration-300">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center">
            <ChevronDown className="animate-bounce text-blue-400" size={32} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years Experience', value: '7+' },
            { label: 'Projects Delivered', value: '30+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Cloud Certifications', value: '4' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 group-hover:scale-110 transition duration-300">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm sm:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i} className="group bg-gradient-to-br from-slate-800/30 to-slate-900/20 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 hover:bg-slate-800/40 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-400 transition mb-2">{exp.role}</h3>
                    <p className="text-slate-300 font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-400 font-semibold px-4 py-2 bg-slate-700/30 rounded-lg whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-4 text-slate-300">
                      <span className="text-blue-400 font-bold mt-1 flex-shrink-0">→</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group h-full bg-gradient-to-br from-slate-800/50 to-slate-900/20 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300">
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 group-hover:text-cyan-400 transition">{project.title}</h3>
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>

                  <div className="mb-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                    <p className="text-xs text-slate-400"><span className="text-cyan-400 font-semibold">Key Impact:</span> {project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-500/15 text-blue-300 rounded-full text-xs font-semibold border border-blue-400/20 hover:border-blue-400/50 transition">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-3 bg-slate-700/50 hover:bg-blue-600/30 border border-slate-600 hover:border-blue-400 rounded-lg transition text-center text-sm font-semibold flex items-center justify-center gap-2 text-slate-300 hover:text-blue-300">
                      <Github size={16} /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition text-center text-sm font-semibold flex items-center justify-center gap-2">
                        <ExternalLink size={16} /> Live Demo
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
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i} className="group bg-gradient-to-br from-slate-800/30 to-slate-900/20 border border-slate-700/50 rounded-xl p-7 hover:border-blue-400/30 hover:bg-slate-800/40 transition duration-300">
                <h3 className="text-lg font-bold text-blue-400 group-hover:text-cyan-400 transition mb-5 flex items-center gap-2">
                  <Code size={20} /> {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span key={j} className="px-3.5 py-2 bg-slate-700/40 rounded-full text-sm text-slate-300 border border-slate-600/40 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 transition duration-300 cursor-pointer">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <Award className="text-yellow-400" size={40} />
              Professional Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {certifications.map(({ certName, certLink }, i) => (
              <a
                key={i}
                href={certLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-800/40 to-slate-900/20 border border-slate-700/50 rounded-lg p-5 hover:border-yellow-400/50 hover:bg-slate-800/50 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-slate-200 group-hover:text-white font-medium transition">{certName}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Create Impact Together</h2>
          <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
            I'm open to exciting opportunities, technical collaborations, and partnerships. Let's discuss how we can build something exceptional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mukul.sharma8896@gmail.com" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30">
              <Mail size={20} /> Send Email
            </a>
            <a href="https://linkedin.com/in/mukul-kumar-6408ab13b" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2">
              <Linkedin size={20} /> LinkedIn Profile
            </a>
            <a href="https://github.com/mukul8896" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-500 hover:border-slate-300 hover:bg-slate-800/50 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2">
              <Github size={20} /> View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 font-light">© 2025 Mukul Kumar. Crafting exceptional solutions in full-stack development and automation engineering</p>
        </div>
      </footer>
    </div>
  );
}