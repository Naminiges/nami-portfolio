export const personal = {
  name: 'Putera Nami Shiddieqy',
  shortName: 'Putera Nami',
  initials: 'PN',
  role: 'Software Engineer & AI Builder',
  headline: 'Membangun produk digital yang berguna—dari antarmuka hingga model.',
  summary:
    'Mahasiswa Teknologi Informasi yang menggabungkan product thinking, full-stack engineering, dan machine learning untuk mengubah masalah nyata menjadi pengalaman digital yang jelas dan dapat digunakan.',
  location: 'Medan, Indonesia',
  email: 'puteranami1150@gmail.com',
  phone: '+6285361405700',
  github: 'https://github.com/Naminiges',
  linkedin: 'https://www.linkedin.com/in/putera-nami-shiddieqy/',
  availability: 'Terbuka untuk kolaborasi dan peluang baru',
};

export const stats = [
  { value: '3,98', label: 'IPK' },
  { value: '20+', label: 'Proyek dibangun' },
  { value: '500+', label: 'Jangkauan komunitas' },
];

export const languages = [
  { name: 'Bahasa Indonesia', level: 'Native', evidence: 'UKBI 694 · Sangat Unggul' },
  { name: 'English', level: 'Intermediate', evidence: 'TOEFL Prediction 517' },
];

export const codenami = {
  name: 'CodeNami',
  label: 'Independent technical studio',
  since: 'Sejak Januari 2025',
  headline: 'Pengetahuan teknis, ditulis agar bisa dipakai.',
  description:
    'CodeNami adalah identitas freelance Putera untuk mengemas pengalaman software engineering menjadi dokumentasi dan materi belajar yang runtut, praktis, dan ramah bagi pembaca.',
  metrics: [
    { value: '9', label: 'E-book dokumentasi IT' },
    { value: '2025', label: 'Mulai berkarya' },
    { value: '3', label: 'Fokus layanan' },
  ],
  services: ['Technical Documentation', 'Learning Content', 'Software Development'],
};

export const projectFilters = ['Semua', 'Web & Product', 'AI & Data', 'Backend & Infra', 'Mobile & Design'];

export const projects = [
  {
    title: 'Bahas',
    eyebrow: 'AI conversation coach',
    category: 'Web & Product',
    icon: 'messages',
    tone: 'orange',
    featured: true,
    description:
      'Ruang latihan privat untuk membantu pengguna menyiapkan percakapan finansial yang sensitif bersama keluarga atau pasangan sebelum percakapan nyata terjadi.',
    impact:
      'Menyatukan scenario generation, roleplay adaptif, skor drama, riwayat latihan, dan pesan siap kirim dalam satu alur produk terpandu.',
    technologies: ['Next.js 16', 'TypeScript', 'Supabase', 'Gemini', 'Vitest'],
    links: [
      { label: 'Live app', href: 'https://bahas-app.vercel.app/' },
    ],
  },
  {
    title: 'Langkah Kerja',
    eyebrow: 'Learning & freelance platform',
    category: 'Web & Product',
    icon: 'messages',
    tone: 'yellow',
    featured: true,
    description:
      'Media pembelajaran dan platform freelancer yang mendukung SDG 8: Decent Work and Economic Growth melalui akses belajar dan peluang kerja.',
    impact:
      'Memimpin pengembangan produk dan delivery website fungsional yang meraih Juara 3 Coderush 2025 pada kategori Solution Competition.',
    technologies: ['Laravel', 'PHP', 'Web Development', 'Product Leadership'],
    links: [],
  },
  {
    title: 'NEXAID',
    eyebrow: 'Disaster-response RAG',
    category: 'AI & Data',
    icon: 'sparkles',
    tone: 'blue',
    featured: true,
    description:
      'Asisten operasional tanggap bencana yang menjawab pertanyaan relawan berdasarkan dokumen SOP resmi dan menampilkan kutipan sumber yang dapat diverifikasi.',
    impact:
      'Pipeline RAG mencakup ekstraksi, chunking, embedding, pencarian pgvector, grounded answer, dan fallback ekstraktif saat layanan generatif tidak tersedia.',
    technologies: ['Next.js', 'Supabase', 'pgvector', 'Gemini', 'RAG'],
    links: [
      { label: 'Live app', href: 'https://nexaid-chi.vercel.app/' },
      { label: 'Repository', href: 'https://github.com/Naminiges/NEXAID' },
    ],
  },
  {
    title: 'Fashion Studio ETL Pipeline',
    eyebrow: 'Production-grade data pipeline',
    category: 'Backend & Infra',
    icon: 'activity',
    tone: 'blue',
    featured: true,
    description:
      'Pipeline ETL modular untuk mengekstrak lebih dari 1.000 data produk fashion, membersihkan dan mentransformasi data, lalu mendistribusikannya ke beberapa target penyimpanan.',
    impact:
      'Menjaga integritas data pada CSV, Google Sheets, dan PostgreSQL melalui error handling yang kuat serta unit test dengan cakupan lebih dari 80%.',
    technologies: ['Python', 'ETL', 'PostgreSQL', 'Google Sheets API', 'Pytest'],
    links: [],
  },
  {
    title: 'Brazil E-Commerce Dashboard',
    eyebrow: 'Interactive business intelligence',
    category: 'AI & Data',
    icon: 'chart',
    tone: 'blue',
    featured: true,
    description:
      'Dashboard analitik interaktif yang mengubah dataset e-commerce publik menjadi wawasan bisnis melalui data wrangling, EDA, statistik deskriptif, dan visualisasi dinamis.',
    impact:
      'Menyediakan tampilan insight yang dapat dieksplorasi langsung oleh stakeholder melalui aplikasi Streamlit yang telah dideploy.',
    technologies: ['Python', 'Pandas', 'Streamlit', 'EDA', 'Data Visualization'],
    links: [
      { label: 'Live dashboard', href: 'https://bfad-puteranami.streamlit.app/' },
    ],
  },
  {
    title: 'Fraud Detection ML',
    eyebrow: 'Anomaly & risk modelling',
    category: 'AI & Data',
    icon: 'scan',
    tone: 'violet',
    featured: false,
    description:
      'Pipeline machine learning end-to-end untuk mengidentifikasi transaksi anomali dan menyusun insight analitis dari pola pelanggan.',
    impact:
      'Menggabungkan preprocessing, segmentasi tanpa label dengan K-Means dan PCA, serta model klasifikasi Decision Tree dan Random Forest yang dituning.',
    technologies: ['Python', 'K-Means', 'PCA', 'Decision Tree', 'Random Forest'],
    links: [
      { label: 'Repository', href: 'https://github.com/Naminiges/proyek_customer_segmentation' },
    ],
  },
  {
    title: 'RootFacts',
    eyebrow: 'On-device AI PWA',
    category: 'AI & Data',
    icon: 'leaf',
    tone: 'green',
    featured: true,
    description:
      'Progressive Web App yang mengenali tanaman atau sayuran melalui kamera, lalu menyajikan fakta yang tetap relevan dengan hasil deteksi.',
    impact:
      'Menggabungkan TensorFlow.js, model browser, WebGPU fallback, prompt berbasis konteks, dan kemampuan instalasi offline.',
    technologies: ['React', 'TensorFlow.js', 'Transformers.js', 'WebGPU', 'PWA'],
    links: [],
  },
  {
    title: 'Sistem Pakar Risiko Kesehatan Mental',
    eyebrow: 'Rule-based expert system',
    category: 'AI & Data',
    icon: 'heart',
    tone: 'pink',
    featured: false,
    description:
      'Sistem pakar untuk mengukur tingkat risiko kesehatan mental remaja berdasarkan pola aktivitas digital dan indikator yang dimasukkan pengguna.',
    impact:
      'Berkontribusi sebagai full-stack developer dan menerapkan metode forward chaining untuk menghasilkan penilaian berbasis aturan.',
    technologies: ['Full-stack Development', 'Forward Chaining', 'Expert System'],
    links: [],
  },
  {
    title: 'EMISEE',
    eyebrow: 'Climate-action crowdfunding',
    category: 'Web & Product',
    icon: 'leaf',
    tone: 'green',
    featured: false,
    description:
      'Platform penggalangan dana untuk mendukung upaya penanggulangan emisi karbon di Kota Medan berdasarkan SDG 13: Climate Action.',
    impact:
      'Memimpin pengembangan solusi untuk DSC Solve 2024 dan membawa tim mencapai posisi Top 10 kompetisi.',
    technologies: ['Web Development', 'Product Leadership', 'SDGs'],
    links: [],
  },
  {
    title: 'BELUT — Belajar UTBK',
    eyebrow: 'AI-powered learning app',
    category: 'Mobile & Design',
    icon: 'brain',
    tone: 'blue',
    featured: false,
    description:
      'Platform edukasi Android untuk persiapan UTBK dengan latihan intensif, sinkronisasi data real-time, dan pengalaman belajar modern.',
    impact:
      'Mengintegrasikan Gemini untuk penjelasan soal langkah demi langkah serta Firebase untuk autentikasi, data, dan distribusi konten berbasis cloud.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Gemini', 'Firebase', 'Android'],
    links: [],
  },
  {
    title: 'SAPA PSI — Smart Geo Inventory',
    eyebrow: 'Spatial asset platform',
    category: 'Backend & Infra',
    icon: 'map',
    tone: 'violet',
    featured: false,
    description:
      'Platform inventaris aset dengan konteks lokasi, alur permintaan dan verifikasi distribusi, dashboard, serta dukungan operasional produksi.',
    impact:
      'Membawa data inventaris, pengguna, gedung, dan lokasi ke dalam aplikasi web berbasis database yang dapat dipetakan dan diaudit.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Leaflet', 'Docker'],
    links: [
      { label: 'Live app', href: 'https://sapa.usu.ac.id/' },
      { label: 'Repository', href: 'https://github.com/Naminiges/Smart-Geo-Inventory' },
    ],
  },
  {
    title: 'USU Peduli',
    eyebrow: 'Volunteer coordination',
    category: 'Web & Product',
    icon: 'heart',
    tone: 'red',
    featured: false,
    description:
      'Platform koordinasi relawan bencana Sumatera Utara untuk pendaftaran, informasi darurat, pemetaan kebutuhan lapangan, dan penugasan.',
    impact:
      'Dirancang untuk membantu respons lintas lokasi menjadi lebih cepat, terarah, transparan, dan mudah dipantau.',
    technologies: ['Flask', 'PostgreSQL', 'JavaScript', 'Maps', 'HTML/CSS'],
    links: [
      { label: 'Live app', href: 'https://usupeduli.duckdns.org/' },
      { label: 'Repository', href: 'https://github.com/Naminiges/USU-Peduli' },
    ],
  },
  {
    title: 'Spotify Sentiment',
    eyebrow: 'NLP experiment',
    category: 'AI & Data',
    icon: 'chart',
    tone: 'green',
    featured: false,
    description:
      'Eksperimen analisis sentimen ulasan Spotify di Google Play dengan dataset hasil scraping mandiri dan tiga skema deep learning.',
    impact:
      'Mencakup deduplikasi data, pelabelan tiga kelas, preprocessing teks, evaluasi beberapa arsitektur, dan inference kategorikal.',
    technologies: ['Python', 'TensorFlow', 'BiGRU', 'BiLSTM', 'NLP'],
    links: [
      { label: 'Repository', href: 'https://github.com/Naminiges/proyek-analisis-sentimen' },
    ],
  },
  {
    title: 'PCOS Image Classifier',
    eyebrow: 'Computer vision',
    category: 'AI & Data',
    icon: 'scan',
    tone: 'pink',
    featured: false,
    description:
      'Pipeline klasifikasi citra dua kelas yang mencakup eksplorasi data, augmentasi, pelatihan CNN, evaluasi, dan inference.',
    impact:
      'Model dipersiapkan untuk beberapa target deployment: SavedModel, TensorFlow Lite, dan TensorFlow.js.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'TFLite', 'TensorFlow.js'],
    links: [
      { label: 'Repository', href: 'https://github.com/Naminiges/proyek-klasifikasi-gambar' },
    ],
  },
  {
    title: 'Production ML System',
    eyebrow: 'End-to-end MLOps',
    category: 'Backend & Infra',
    icon: 'boxes',
    tone: 'yellow',
    featured: false,
    description:
      'Sistem machine learning terotomasi dari eksperimen dan tuning hingga CI, model serving, monitoring, serta observability.',
    impact:
      'Menghubungkan MLflow, GitHub Actions, Docker, Prometheus, dan Grafana dalam alur kerja model yang dapat dilacak.',
    technologies: ['MLflow', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana'],
    links: [],
  },
  {
    title: 'OCTATIX',
    eyebrow: 'Event ticketing platform',
    category: 'Web & Product',
    icon: 'boxes',
    tone: 'pink',
    featured: false,
    description:
      'Platform ticketing konser berbasis PHP yang mengotomasi alur penjualan dan transaksi melalui antarmuka responsif.',
    impact:
      'Memimpin tim beranggotakan lima orang dalam pengembangan end-to-end lebih dari 20 fitur fungsional sejak proyek awal pada 2023.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'Team Leadership'],
    links: [],
  },
];

export const archiveProjects = [
  { year: '2025', title: 'SehatMakmur', area: 'Health product concept', detail: 'Personalized gamification workout planner untuk pencegahan penyakit tidak menular.' },
  { year: '2025', title: 'FlorAI', area: 'Expert system', detail: 'Rekomendasi tanaman hias berbasis forward chaining, lingkungan, dan profil finansial.' },
  { year: '2025', title: 'DropList', area: 'Product strategy', detail: 'Konsep marketplace dropshipping B2B untuk integrasi rantai pasok UMKM.' },
  { year: '2025', title: 'TOHO Coffee', area: 'Web & HCI', detail: 'Aplikasi e-commerce interaktif dengan desain HCI dan basis data MySQL.' },
  { year: '2025', title: 'Math Hero', area: 'Mobile UI/UX', detail: 'Desain aplikasi kuis matematika bergaya petualangan untuk anak usia 6-12 tahun.' },
  { year: '2024', title: 'POS Toko Cahaya Barokah', area: 'Database engineering', detail: 'Arsitektur MySQL dengan normalisasi, trigger, procedure, function, dan transaction control.' },
  { year: '2024', title: 'Skeen AI', area: 'AI product strategy', detail: 'Konsep analisis kondisi kulit dan rekomendasi skincare personal berbasis AI.' },
  { year: '2024', title: 'LepasAjar', area: 'EdTech', detail: 'Platform sertifikasi IT untuk pencari kerja dan finalis USU Pitching Competition.' },
  { year: '2024', title: 'USU Library Locker', area: 'Java application', detail: 'Sistem pemantauan dan reservasi loker real-time berbasis OOP dan database.' },
  { year: '2024', title: 'SM4RTBUY', area: 'E-commerce', detail: 'Platform full-stack dengan autentikasi, manajemen pesanan, dan insight Chart.js.' },
];

export const capabilities = [
  {
    title: 'Product Engineering',
    icon: 'layers',
    description:
      'Menerjemahkan kebutuhan menjadi alur produk, antarmuka responsif, autentikasi, API, dan data flow yang siap digunakan.',
    tools: ['React', 'Next.js', 'TypeScript', 'Laravel', 'Kotlin'],
  },
  {
    title: 'Applied AI & ML',
    icon: 'brain',
    description:
      'Membangun solusi NLP, computer vision, RAG, dan inference dengan perhatian pada konteks, evaluasi, serta batas model.',
    tools: ['Python', 'TensorFlow', 'Gemini', 'pgvector', 'scikit-learn'],
  },
  {
    title: 'Backend & Data',
    icon: 'database',
    description:
      'Merancang layanan, skema database, akses data, dan integrasi untuk aplikasi yang aman dan mudah dipelihara.',
    tools: ['Flask', 'PostgreSQL', 'REST API', 'PostGIS', 'NetBox'],
  },
  {
    title: 'Delivery & Observability',
    icon: 'activity',
    description:
      'Membawa aplikasi dari repository ke lingkungan yang dapat diuji, dipantau, dan dikembangkan secara berulang.',
    tools: ['Git', 'Docker', 'Vercel', 'MLflow', 'Grafana'],
  },
];

export const experiences = [
  {
    role: 'Data Center Ops',
    organization: 'Direktorat Sistem Informasi dan Pengembangan Teknologi USU',
    meta: 'Januari 2026 — Sekarang',
    description:
      'Mengembangkan SAPA PSI berbasis Python, PostGIS, dan Leaflet; menstandardisasi NetBox sebagai Single Source of Truth perangkat IT; serta memvisualisasikan data Environmental Monitoring System berbasis IoT.',
  },
  {
    role: 'Vice Secretary General',
    organization: 'BEM Fasilkom-TI USU',
    meta: 'Februari — November 2026',
    description:
      'Merumuskan tata kelola organisasi tingkat fakultas dan merapikan alur administrasi lintas departemen untuk memperjelas koordinasi operasional.',
  },
  {
    role: 'Data Scientist Cohort',
    organization: 'Coding Camp by DBS Foundation',
    meta: 'Februari — Juli 2026',
    description:
      'Membangun model regresi dan clustering, pipeline ETL terotomasi, analisis data end-to-end, serta aplikasi Streamlit untuk menyampaikan insight kepada stakeholder.',
  },
  {
    role: 'Core Team',
    organization: 'Google Developer Groups on Campus USU',
    meta: 'Oktober 2025 — Agustus 2026',
    description:
      'Berkontribusi dalam tim inti beranggotakan 14 orang yang melayani komunitas 500+ anggota dan menyelenggarakan sesi teknis Firebase NoSQL.',
  },
  {
    role: 'Professional Speaker',
    organization: 'PMB DEBUG IT 2025',
    meta: 'September 2025',
    description:
      'Membawakan sesi Introduction to Web Programming kepada lebih dari 100 mahasiswa beserta roadmap teknologi web dan praktik industri.',
  },
  {
    role: 'Software Engineering Intern',
    organization: 'PT Elrei Dasera Nusantara',
    meta: 'Juli — Agustus 2025',
    description:
      'Mengembangkan fitur website inisiator.com menggunakan Laravel dan MySQL dengan perhatian pada backend serta integritas data.',
  },
  {
    role: 'Committee Lead',
    organization: 'CodeFest 001 USU',
    meta: 'Februari — Mei 2025',
    description:
      'Memimpin kompetisi IT berskala nasional dengan 300+ peserta dari 28 provinsi dan mengoordinasikan tim lintas fungsi hingga pelaksanaan.',
  },
  {
    role: 'Asisten Laboratorium',
    organization: 'Universitas Sumatera Utara',
    meta: 'Januari 2025 — Juni 2026',
    description:
      'Membimbing Pemrograman Berorientasi Objek dan Pemrograman Web Lanjutan, termasuk JDBC, Laravel ORM, MySQL, implementasi, dan debugging.',
  },
  {
    role: 'Freelance Technical Writer & Developer',
    organization: 'CodeNami',
    meta: 'Januari 2025 — Sekarang',
    description:
      'Menulis sembilan e-book dokumentasi IT yang merangkum software development dan praktik pemrograman menjadi panduan teknis yang sistematis.',
  },
];

export const education = {
  institution: 'Universitas Sumatera Utara',
  program: 'S1 Teknologi Informasi',
  detail: 'IPK 3,98 · Fokus pada software engineering dan kecerdasan buatan',
};

export const achievements = [
  {
    title: 'Machine Learning',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    type: 'Sertifikasi',
  },
  {
    title: 'IT Specialist — Python',
    issuer: 'Pearson / Certiport',
    year: '2025',
    type: 'Sertifikasi',
    href: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=471&cvid=V6gqXxhh8klqfLCdWot2Jg==',
  },
  {
    title: 'Alibaba Certified Developer',
    issuer: 'Alibaba Cloud',
    year: '2024',
    type: 'Sertifikasi',
    credential: 'ACCD0119700100008890',
  },
  {
    title: 'Juara 3 Coderush',
    issuer: 'GDGoC USU & ITLG USU',
    year: '2025',
    type: 'Pencapaian',
  },
  {
    title: 'Seleksi Nasional SATRIA DATA — SIC',
    issuer: 'Kemdiktisaintek',
    year: '2025',
    type: 'Pencapaian',
  },
  {
    title: 'Seleksi Nasional LIDM — Poster Digital Pendidikan',
    issuer: 'Kemdiktisaintek',
    year: '2025',
    type: 'Pencapaian',
  },
  {
    title: 'Juara 3 Competitive Programming',
    issuer: 'HIMATIF USU',
    year: '2025',
    type: 'Pencapaian',
  },
  {
    title: 'Network Support and Security',
    issuer: 'Cisco',
    year: '2025',
    type: 'Sertifikasi',
  },
  {
    title: 'Top 10 DSC Solve',
    issuer: 'Developer Student Clubs',
    year: '2024',
    type: 'Pencapaian',
  },
];

export const additionalCredentials = [
  { title: 'Cloud Developer PHP', issuer: 'DewaCloud Academy', year: '2025' },
  { title: 'Stage 1 Samsung Innovation Campus', issuer: 'Skilvul', year: '2025' },
  { title: 'Data Analysis in Python', issuer: 'DataCamp', year: '2025' },
  { title: 'Cloud Developer Node.js', issuer: 'DewaCloud Academy', year: '2025' },
  { title: 'Laravel', issuer: 'Codepolitan', year: '2025' },
  { title: 'Cloud Practitioner Essentials', issuer: 'Dicoding Indonesia', year: '2023' },
];
