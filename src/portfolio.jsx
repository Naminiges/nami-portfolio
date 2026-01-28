import React, { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, Award, Code, Shield, Database, User, Menu, X, ChevronRight } from 'lucide-react';

// Custom GitHub icon component (since Github is deprecated in lucide-react)
const GithubIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

// ========================================
  // CUSTOMIZATION SECTION - EDIT THIS PART
  // ========================================

  const personalInfo = {
    name: "Putera Nami Shiddieqy",
    title: "Tech Enthusiast | Software Engineer | Web Development",
    description: "Mahasiswa S1 Teknologi Informasi yang antusias dalam bidang Software Development dan Kecerdasan Buatan, dengan keahlian menengah di Laravel, C/C++, dan Python.",
    github: "https://github.com/Naminiges", 
    email: "puteranami1150@gmail.com", 
    phone: "+6285361405700" 
  };

  const aboutMe = {
    intro: "Saya merupakan mahasiswa S1 Teknologi Informasi di Universitas Sumatera Utara yang telah mendalami bidang IT dan pengembangan website sejak tahun 2023.", 
    experience: "Memiliki pengalaman sebagai Intern di PT Elrei Dasera Nusantara dalam mengoptimalkan sistem ranking, serta aktif sebagai Asisten Laboratorium yang mengajar Pemrograman Web Lanjutan menggunakan Laravel.", 
    goals: "Fokus pada pengembangan solusi teknologi yang berdampak sosial, terbukti dari kepemimpinan dalam berbagai proyek berbasis SDGs dan kesuksesan menginisiasi kompetisi teknologi nasional.", 
    education: {
      institution: "Universitas Sumatera Utara", 
      program: "S1 Teknologi Informasi", 
      focus: "Teknologi Informasi (IPK: 3,98)" 
    },
    careerGoals: {
      title: "Software Developer / AI Researcher", 
      certification: "Alibaba Certified Developer", 
      vision: "Mengembangkan inovasi cerdas berbasis AI dan Web untuk mendukung keberlanjutan global (SDGs)." 
    }
  };

  const projects = [
    {
      title: 'Langkah Kerja', 
      description: 'Media pembelajaran dan platform freelancer berlandaskan SDGs Decent Work and Economic Growth.',
      technologies: ['Laravel', 'Web Development'], 
      github: 'https://github.com/Naminiges',
      preview: 'https://link-to-demo-or-video',
      highlights: [
        'Project Leader dalam pengembangan sistem.', 
        'Memenangkan Juara 3 pada kompetisi Coderush 2025.', 
        'Luaran berupa website fungsional untuk kompetisi Solution Competition.', 
      ]
    },
    {
      title: 'Sistem Pakar Penilaian Risiko Kesehatan Mental', 
      description: 'Sistem pakar untuk mengukur tingkat risiko kesehatan mental remaja berdasarkan pola aktivitas digital.', 
      technologies: ['Fullstack Developer', 'Forward Chaining'], 
      github: 'https://github.com/Naminiges',
      preview: 'https://link-to-demo-or-video',
      highlights: [
        'Menggunakan metode inferensi maju (forward chaining).', 
        'Bertanggung jawab sebagai Fullstack Developer.', 
        'Dikembangkan pada Mei 2025.', 
      ]
    },
    {
      title: 'EMISEE', 
      description: 'Website penggalangan dana untuk menanggulangi emisi karbon di Kota Medan (SDGs Climate Action).', 
      technologies: ['Web Development', 'SDGs Points'], 
      github: 'https://github.com/Naminiges',
      preview: 'https://link-to-demo-or-video',
      highlights: [
        'Project Leader untuk kompetisi DSC Solve 2024.', 
        'Berhasil meraih posisi Top 10 Developer Student Club Solve 2024.', 
        'Implementasi solusi untuk poin 13 Climate Action.', 
      ]
    }
  ];

  const skills = [
    { 
      category: 'Bahasa Pemrograman', 
      items: ['Python', 'C/C++', 'PHP', 'Javascript'],
      icon: Code 
    },
    { 
      category: 'Framework & Tools', 
      items: ['Laravel', 'React JS', 'Git', 'Github'], 
      icon: Database 
    },
    { 
      category: 'Soft Skill', 
      items: ['Kepemimpinan', 'Manajemen Waktu', 'Komunikasi', 'Pemecahan Masalah'], 
      icon: User 
    },
    { 
      category: 'Lainnya', 
      items: ['Meneliti', 'Microsoft Office', 'Networking & Security'], 
      icon: Shield 
    }
  ];

  const certifications = [
    {
      title: 'Python IT Specialist', 
      institution: 'Pearson', 
      date: '2025', 
      achievement: 'Sertifikat Kompetensi Kelulusan IT Specialist.', 
      preview: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=471&cvid=V6gqXxhh8klqfLCdWot2Jg==' 
    },
    {
      title: 'Alibaba Certified Developer', 
      institution: 'Alibaba Cloud', 
      date: '2024', 
      achievement: 'Sertifikat mengembangkan aplikasi dengan Alibaba Cloud Services.', 
      preview: 'ACCD0119700100008890' 
    },
    {
      title: 'Juara 3 Coderush 2025', 
      institution: 'GDGOC USU & ITLG USU', 
      date: 'Februari 2025', 
      achievement: 'Pemenang dalam Solution Competition dengan produk LangkahKerja.', 
      preview: 'https://link-to-certificate-or-proof'
    }
  ];

  // ========================================
  // END OF CUSTOMIZATION SECTION
  // ========================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="portfolio">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .portfolio {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #ffffff;
          color: #1f2937;
          line-height: 1.6;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid #e5e7eb;
          padding: 1rem 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-desktop {
          display: flex;
          gap: 2rem;
        }

        .nav-button {
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.2s;
          padding: 0.5rem;
        }

        .nav-button:hover {
          color: #2563eb;
        }

        .nav-button.active {
          color: #2563eb;
          font-weight: 600;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #1f2937;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          padding: 1rem 1.5rem;
          background-color: #ffffff;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-menu-button {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 0;
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .mobile-menu-button:hover {
          color: #2563eb;
        }

        /* Sections */
        section {
          padding: 5rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .section-alt {
          background-color: #f9fafb;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
        }

        /* Hero Section */
        .hero {
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ffffff 0%, #eff6ff 100%);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(59, 130, 246, 0.05));
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          transition: all 1s;
          transform: translateY(40px);
          opacity: 0;
        }

        .hero-content.fade-in {
          transform: translateY(0);
          opacity: 1;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #1e40af, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #4b5563;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 3rem;
          color: #6b7280;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .button-primary, .button-secondary {
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }

        .button-primary {
          background-color: #2563eb;
          color: white;
          box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
        }

        .button-primary:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
        }

        .button-secondary {
          background-color: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
        }

        .button-secondary:hover {
          background-color: #eff6ff;
          transform: translateY(-2px);
        }

        /* Content sections */
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .fade-in-section {
          transition: all 1s;
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* About section */
        .about-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-text {
          background-color: #ffffff;
          border-radius: 0.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #4b5563;
          line-height: 1.7;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .about-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
        }

        .about-card:hover {
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
          border-color: #3b82f6;
        }

        .about-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2563eb;
        }

        .about-card p {
          color: #4b5563;
          margin: 0;
        }

        /* Projects section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .project-card:hover {
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.15);
          transform: translateY(-5px);
          border-color: #3b82f6;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2563eb;
        }

        .project-description {
          color: #4b5563;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .project-highlights {
          margin-bottom: 1rem;
        }

        .project-highlight-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        .project-highlight-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .project-highlight-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .project-highlight-dot {
          width: 6px;
          height: 6px;
          background-color: #3b82f6;
          border-radius: 50%;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .project-technologies {
          margin-bottom: 1rem;
        }

        .project-tech-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tech-tag {
          padding: 0.25rem 0.75rem;
          background-color: #eff6ff;
          color: #1e40af;
          font-size: 0.875rem;
          border-radius: 9999px;
          border: 1px solid #bfdbfe;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #2563eb;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }

        .project-link:hover {
          color: #1d4ed8;
        }

        /* Skills section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .skill-card:hover {
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.15);
          transform: translateY(-5px);
          border-color: #3b82f6;
        }

        .skill-icon {
          color: #3b82f6;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .skill-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2563eb;
        }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .skill-item {
          color: #4b5563;
          margin-bottom: 0.5rem;
        }

        /* Certifications section */
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .cert-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .cert-card:hover {
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.15);
          transform: translateY(-5px);
          border-color: #3b82f6;
        }

        .cert-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .cert-icon {
          color: #f59e0b;
          margin-right: 0.75rem;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2563eb;
        }

        .cert-detail {
          color: #4b5563;
          margin-bottom: 0.5rem;
        }

        .cert-achievement {
          font-size: 0.9rem;
          color: #6b7280;
        }

        /* Contact section */
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          padding: 2rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .contact-description {
          font-size: 1.1rem;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: white;
          font-weight: 600;
          transition: all 0.2s;
        }

        .contact-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .contact-email {
          background-color: #2563eb;
        }

        .contact-email:hover {
          background-color: #1d4ed8;
        }

        .contact-phone {
          background-color: #10b981;
        }

        .contact-phone:hover {
          background-color: #059669;
        }

        .contact-github {
          background-color: #6b7280;
        }

        .contact-github:hover {
          background-color: #4b5563;
        }

        /* Footer */
        footer {
          padding: 2rem 0;
          background-color: #f9fafb;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          section {
            padding: 4rem 0;
          }

          .projects-grid,
          .skills-grid,
          .certifications-grid,
          .about-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .container {
            padding: 0 1rem;
          }

          .logo {
            font-size: 1.2rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">
            {personalInfo.name}
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mobile-menu-button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero">
            <div className={`hero-content ${isVisible.home ? 'fade-in' : ''}`}>
              <h1 className="hero-title">
                {personalInfo.name}
              </h1>
              <p className="hero-subtitle">
                {personalInfo.title}
              </p>
              <p className="hero-description">
                {personalInfo.description}
              </p>
              <div className="hero-buttons">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="button-primary"
                >
                  <span>View Projects</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="button-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-alt">
        <div className="container">
          <div className={`about-content fade-in-section ${isVisible.about ? 'visible' : ''}`}>
            <h2 className="section-title">About Me</h2>
            <div className="about-text">
              <p>{aboutMe.intro}</p>
              <p>{aboutMe.experience}</p>
              <p>{aboutMe.goals}</p>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <h3 className="about-card-title">Education</h3>
                <p>
                  <strong>{aboutMe.education.institution}</strong><br />
                  {aboutMe.education.program}<br />
                  Focus: {aboutMe.education.focus}
                </p>
              </div>
              <div className="about-card">
                <h3 className="about-card-title">Career Goals</h3>
                <p>
                  {aboutMe.careerGoals.title}<br />
                  Target: {aboutMe.careerGoals.certification}<br />
                  Vision: {aboutMe.careerGoals.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className={`projects-grid fade-in-section ${isVisible.projects ? 'visible' : ''}`}>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  <h4 className="project-highlight-title">Key Highlights:</h4>
                  <ul className="project-highlight-list">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="project-highlight-item">
                        <span className="project-highlight-dot"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h4 className="project-tech-title">Technologies:</h4>
                  <div className="project-tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GithubIcon size={16} />
                    <span>View Code</span>
                  </a>

                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      <span>Preview</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-alt">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className={`skills-grid fade-in-section ${isVisible.skills ? 'visible' : ''}`}>
            {skills.map((skillCategory, index) => {
              const IconComponent = skillCategory.icon;
              return (
                <div key={index} className="skill-card">
                  <div className="skill-icon">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="skill-title">{skillCategory.category}</h3>
                  <ul className="skill-list">
                    {skillCategory.items.map((skill, i) => (
                      <li key={i} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="container">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className={`certifications-grid fade-in-section ${isVisible.certifications ? 'visible' : ''}`}>
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-header">
                  <Award size={24} className="cert-icon" />
                  <h3 className="cert-title">{cert.title}</h3>
                </div>
                <p className="cert-detail"><strong>Institution:</strong> {cert.institution}</p>
                <p className="cert-detail"><strong>Date:</strong> {cert.date}</p>
                <p className="cert-achievement">{cert.achievement}</p>

                {cert.preview && (
                  <a
                    href={cert.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{ marginTop: '0.5rem', display: 'inline-flex' }}
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-alt">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className={`contact-content fade-in-section ${isVisible.contact ? 'visible' : ''}`}>
            <div className="contact-card">
              <p className="contact-description">
                I'm always open to discussing new opportunities and collaborations.
              </p>
              <div className="contact-grid">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-link contact-email"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact-link contact-phone"
                >
                  <Phone size={20} />
                  <span>Phone</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link contact-github"
                >
                  <GithubIcon size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 {personalInfo.name}. Built with React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
