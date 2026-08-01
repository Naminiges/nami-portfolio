import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Award,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Database,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Leaf,
  Linkedin,
  Mail,
  Map,
  MapPin,
  Menu,
  MessageCircleMore,
  Moon,
  ScanSearch,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import {
  additionalCredentials,
  achievements,
  archiveProjects,
  capabilities,
  codenami,
  education,
  experiences,
  languages,
  personal,
  projectFilters,
  projects,
  stats,
} from './data/portfolioData';

const iconMap = {
  activity: Activity,
  boxes: Boxes,
  brain: BrainCircuit,
  chart: ChartNoAxesCombined,
  database: Database,
  heart: HeartHandshake,
  layers: Layers3,
  leaf: Leaf,
  map: Map,
  messages: MessageCircleMore,
  scan: ScanSearch,
  sparkles: Sparkles,
};

const navItems = [
  { id: 'about', label: 'Tentang' },
  { id: 'codenami', label: 'CodeNami' },
  { id: 'projects', label: 'Karya' },
  { id: 'expertise', label: 'Keahlian' },
  { id: 'journey', label: 'Perjalanan' },
  { id: 'contact', label: 'Kontak' },
];

function GithubIcon({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.02c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.72 5.39-5.3 5.68.42.36.79 1.07.79 2.16v3.03c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-kicker">
        <span>{label}</span>
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('Semua');
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const filteredProjects = useMemo(
    () =>
      projectFilter === 'Semua'
        ? projects
        : projects.filter((project) => project.category === projectFilter),
    [projectFilter],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;

    const scrollTimer = window.setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'instant' });
    }, 100);

    return () => window.clearTimeout(scrollTimer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55%', threshold: 0 },
    );

    document.querySelectorAll('main section[id]').forEach((section) => {
      sectionObserver.observe(section);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      revealObserver.observe(element);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [filteredProjects]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <header className="topbar">
        <div className="nav-wrap">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Kembali ke beranda">
            <span className="brand-mark brand-logo"><img src="/codenami-favicon.svg" alt="" /></span>
            <span className="brand-name">Code<span>Nami</span></span>
          </button>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Gunakan tema terang' : 'Gunakan tema gelap'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="nav-cta" href={`mailto:${personal.email}`}>
              Mari terhubung <ArrowUpRight size={16} />
            </a>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          className={menuOpen ? 'mobile-nav open' : 'mobile-nav'}
          aria-label="Navigasi seluler"
        >
          {navItems.map((item, index) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              <span>0{index + 1}</span>
              {item.label}
              <ChevronRight size={18} />
            </button>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="hero-section">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="availability-pill">
                <span className="status-dot" />
                {personal.availability}
              </div>
              <p className="hero-owner">{personal.name} <span>aka {codenami.name}</span></p>
              <p className="hero-overline">{personal.role}</p>
              <h1>{personal.headline}</h1>
              <p className="hero-summary">{personal.summary}</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo('projects')}>
                  Lihat karya pilihan <ArrowDown size={17} />
                </button>
                <a className="button button-quiet" href={personal.github} target="_blank" rel="noreferrer">
                  <GithubIcon size={18} /> GitHub
                </a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={15} /> {personal.location}</span>
                <span><GraduationCap size={15} /> S1 Teknologi Informasi</span>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="orbit orbit-outer" />
              <div className="orbit orbit-inner" />
              <div className="profile-disc">
                <img className="profile-logo" src="/codenami-favicon.svg" alt="Logo CodeNami" />
              </div>
              <div className="floating-card floating-code">
                <Code2 size={18} />
                <span>full_stack</span>
                <strong>01</strong>
              </div>
              <div className="floating-card floating-ai">
                <Sparkles size={18} />
                <span>applied_ai</span>
                <strong>02</strong>
              </div>
              <div className="floating-card floating-data">
                <Database size={18} />
                <span>data_systems</span>
                <strong>03</strong>
              </div>
              <div className="visual-caption">
                <span>Currently exploring</span>
                <strong>Human-centered AI products</strong>
              </div>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Gulir ke bagian tentang">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </button>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <SectionHeading
              label="01 / Tentang"
              title="Teknologi yang kuat dimulai dari masalah yang dipahami dengan baik."
            />
            <div className="about-layout">
              <div className="about-statement" data-reveal>
                <p className="large-copy">
                  Saya menikmati proses bergerak dari <em>“mengapa ini penting?”</em> menuju produk yang benar-benar
                  bisa disentuh, diuji, dan dikembangkan.
                </p>
                <p>
                  Sejak 2023, saya mengerjakan spektrum proyek yang luas: aplikasi full-stack, platform relawan,
                  computer vision di browser, RAG berbasis SOP, eksperimen machine learning, hingga monitoring sistem.
                  Pengalaman itu membentuk cara kerja yang lintas disiplin tanpa kehilangan perhatian pada detail.
                </p>
              </div>
              <div className="stats-panel" data-reveal>
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
                <div className="principle-card">
                  <Sparkles size={19} />
                  <div>
                    <span>Prinsip kerja</span>
                    <strong>Jelas, relevan, dapat dipertanggungjawabkan.</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="language-bar" data-reveal>
              <div className="language-title">
                <MessageCircleMore size={18} />
                <span>Bahasa</span>
              </div>
              {languages.map((language) => (
                <div className="language-item" key={language.name}>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                  <small>{language.evidence}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="codenami" className="section codenami-section">
          <div className="container codenami-layout">
            <div className="codenami-copy" data-reveal>
              <p className="section-kicker"><span>02 / Personal brand</span></p>
              <p className="codenami-label">{codenami.label} · {codenami.since}</p>
              <h2>{codenami.headline}</h2>
              <p>{codenami.description}</p>
              <div className="codenami-services">
                {codenami.services.map((service) => <span key={service}>{service}</span>)}
              </div>
              <a className="button button-primary" href={`mailto:${personal.email}?subject=Kolaborasi%20dengan%20CodeNami`}>
                Bekerja dengan CodeNami <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="codenami-card" data-reveal>
              <div className="codenami-codebar">
                <span /><span /><span />
                <code>identity.ts</code>
              </div>
              <div className="codenami-wordmark">
                <small>const personalBrand =</small>
                <strong>Code<span>Nami</span></strong>
                <p>{'{ clarity + craft + code }'}</p>
              </div>
              <div className="codenami-metrics">
                {codenami.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionHeading
              label="03 / Karya pilihan"
              title="Dari ide, menjadi sistem yang bekerja."
              description="Pilihan proyek lintas product engineering, artificial intelligence, data, dan infrastructure."
            />

            <div className="project-toolbar" data-reveal>
              <div className="filter-list" aria-label="Filter proyek">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    className={projectFilter === filter ? 'filter-button active' : 'filter-button'}
                    onClick={() => setProjectFilter(filter)}
                    aria-pressed={projectFilter === filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <span className="project-count">{filteredProjects.length.toString().padStart(2, '0')} proyek</span>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, index) => {
                const ProjectIcon = iconMap[project.icon] || Code2;
                return (
                  <article
                    key={project.title}
                    className={`project-card tone-${project.tone} ${project.featured ? 'featured' : ''}`}
                    data-reveal
                    style={{ '--card-index': index }}
                  >
                    <div className="project-topline">
                      <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <div className="project-icon"><ProjectIcon size={25} /></div>
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-impact"><span>Kontribusi</span>{project.impact}</p>
                    <div className="tech-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.length > 0 ? (
                        project.links.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                            {link.label} <ArrowUpRight size={15} />
                          </a>
                        ))
                      ) : (
                        <span className="no-public-link">Case study lokal</span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {projectFilter === 'Semua' && (
              <div className="project-archive" data-reveal>
                <div className="archive-heading">
                  <div>
                    <p className="section-kicker"><span>Project archive</span></p>
                    <h3>Eksperimen lain yang membentuk perjalanan.</h3>
                  </div>
                  <span>{archiveProjects.length.toString().padStart(2, '0')} proyek lainnya</span>
                </div>
                <div className="archive-list">
                  {archiveProjects.map((project, index) => (
                    <article className="archive-item" key={project.title}>
                      <span className="archive-index">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h4>{project.title}</h4>
                        <p>{project.detail}</p>
                      </div>
                      <span className="archive-area">{project.area}</span>
                      <span className="archive-year">{project.year}</span>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="expertise" className="section expertise-section">
          <div className="container">
            <SectionHeading
              label="04 / Keahlian"
              title="Satu cara berpikir, beberapa lapisan teknologi."
              description="Bukan daftar progress bar—ini adalah area yang sudah saya gunakan untuk membangun dan mengirim proyek nyata."
            />
            <div className="capability-grid">
              {capabilities.map((capability, index) => {
                const CapabilityIcon = iconMap[capability.icon] || Code2;
                return (
                  <article className="capability-card" key={capability.title} data-reveal>
                    <div className="capability-head">
                      <span>0{index + 1}</span>
                      <CapabilityIcon size={24} />
                    </div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    <div className="tool-list">
                      {capability.tools.map((tool) => <span key={tool}>{tool}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="container">
            <SectionHeading
              label="05 / Perjalanan"
              title="Belajar di kelas, menguji lewat karya."
            />
            <div className="journey-layout">
              <div className="experience-column" data-reveal>
                <div className="column-title"><BriefcaseBusiness size={19} /> Pengalaman</div>
                <div className="timeline">
                  {experiences.map((experience) => (
                    <article className="timeline-item" key={`${experience.role}-${experience.organization}`}>
                      <span className="timeline-dot" />
                      <p className="timeline-meta">{experience.meta}</p>
                      <h3>{experience.role}</h3>
                      <h4>{experience.organization}</h4>
                      <p>{experience.description}</p>
                    </article>
                  ))}
                </div>
                <article className="education-card">
                  <GraduationCap size={23} />
                  <div>
                    <span>Pendidikan</span>
                    <h3>{education.program}</h3>
                    <p>{education.institution}</p>
                    <small>{education.detail}</small>
                  </div>
                </article>
              </div>

              <div className="achievement-column" data-reveal>
                <div className="column-title"><Award size={19} /> Sertifikasi & pencapaian</div>
                <div className="achievement-list">
                  {achievements.map((achievement, index) => {
                    const content = (
                      <>
                        <span className="achievement-index">0{index + 1}</span>
                        <div>
                          <span className="achievement-type">{achievement.type}</span>
                          <h3>{achievement.title}</h3>
                          <p>{achievement.issuer}</p>
                          {achievement.credential && <small>ID: {achievement.credential}</small>}
                        </div>
                        <span className="achievement-year">{achievement.year}</span>
                        {achievement.href && <ExternalLink className="achievement-link-icon" size={16} />}
                      </>
                    );

                    return achievement.href ? (
                      <a
                        className="achievement-item"
                        key={achievement.title}
                        href={achievement.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Lihat ${achievement.title}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <article className="achievement-item" key={achievement.title}>{content}</article>
                    );
                  })}
                </div>
                <div className="credential-cloud">
                  <span className="credential-cloud-label">Kredensial lainnya</span>
                  <div>
                    {additionalCredentials.map((credential) => (
                      <span key={credential.title}>
                        <strong>{credential.title}</strong>
                        {credential.issuer} · {credential.year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner" data-reveal>
            <p className="section-kicker"><span>06 / Kontak</span></p>
            <h2>Punya masalah menarik untuk dipecahkan?</h2>
            <p>
              Saya senang berdiskusi tentang product engineering, web development, AI, atau kolaborasi yang punya
              dampak nyata. Mari mulai dari sebuah percakapan.
            </p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${personal.email}`}>
                <Mail size={18} /> Kirim email <ArrowUpRight size={16} />
              </a>
              <button className="button button-outline-light" onClick={copyEmail}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Email tersalin' : 'Salin alamat email'}
              </button>
            </div>
            <div className="contact-details">
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
              <a href={personal.github} target="_blank" rel="noreferrer"><GithubIcon size={17} /> github.com/Naminiges</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <span><MapPin size={17} /> {personal.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <span className="brand-mark brand-logo small"><img src="/codenami-favicon.svg" alt="" /></span>
            <p><strong>CodeNami</strong> · Dirancang dan dibangun oleh {personal.name}.</p>
          </div>
          <p>© {new Date().getFullYear()} · React + Vite</p>
          <button onClick={() => scrollTo('home')}>Kembali ke atas <ArrowUpRight size={15} /></button>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
