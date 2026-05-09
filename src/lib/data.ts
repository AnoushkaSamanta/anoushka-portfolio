export type Project = {
  id: string
  title: string
  subtitle: string
  date: string
  github: string
  stack: string[]
  bullets: string[]
  detailedBullets: string[]
  description: string
}

export type Experience = {
  id: string
  company: string
  location: string
  role: string
  period: string
  bullets: string[]
  stack: string[]
}

export type Achievement = {
  id: string
  title: string
  detail: string
  type: string
  certLink?: string
}

// ─── PERSONAL ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Anoushka Samanta',
  location: 'Kolkata, West Bengal, India',
  email: 'anoushka1701@gmail.com',
  phone: '+91-6290075800',
  linkedin: 'https://www.linkedin.com/in/anoushka-samanta-b094082a6/', 
  github: 'https://github.com/AnoushkaSamanta/',                             
  education: {
    institution: 'Indian Institute of Information Technology, Kottayam, Kerala',
    shortName: 'IIIT Kottayam',
    degree: 'B.Tech Computer Science and Engineering',
    period: '2023 – 2027',
    cgpa: '9.95',
  },
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Computer Organization & Architecture',
    'Object-Oriented Programming',
    'System Design',
  ],
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const EXPERIENCE: Experience[] = [
  {
    id: 'ankbyte',
    company: 'Ankbyte',
    location: 'Remote',
    role: 'AI Engineering Intern — Backend Systems',
    period: 'Feb 2026 – Mar 2026',
    bullets: [
      'Replaced a manual form-based intake system with authentication, file upload, and knowledge-base integration using Better Auth, PostgreSQL, Prisma, and Cloudflare R2.',
      'Reduced onboarding data entry by approximately 60%.',
    ],
    stack: ['Next.js','Better Auth', 'PostgreSQL', 'Prisma', 'Cloudflare R2'],
  },
  {
    id: 'xhug',
    company: 'X-HUG.ai',
    location: 'Remote',
    role: 'Front End Web Development Intern',
    period: 'Mar 2025 – July 2025',
    bullets: [
      'Redesigned the websites of X-HUG, resolving cross-device layout issues and improving UI consistency by 40%.',
      'Improved site speed and reliability, resulting in a 2× increase in client interaction.',
    ],
    stack: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'eldroga',
    company: 'Eldroga Life Sciences',
    location: 'Remote',
    role: 'Freelance Web Developer',
    period: 'June 2025',
    bullets: [
      'Built a web application that generates personalised CKD-specific diet plans based on disease stage, age, and medical conditions.',
      'Reduced physicians\' manual diet planning effort by 70%; validated across 20+ patient profiles spanning 5 disease stages and 3 age groups.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js','MongoDB'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'chainverify',
    title: 'ChainVerify',
    subtitle: 'Digital Bill and Receipt Verification System',
    date: 'March 2026',
    github: 'https://github.com/AnoushkaSamanta/receipt-verification', // fill in
    stack: [
      'Python', 'FastAPI', 'Next.js', 'TypeScript',
      'Docker', 'Redis', 'PostgreSQL', 'Nginx', 'Cloudflare R2', 'WebSockets',
    ],
    description: 'Document fraud is costly and hard to catch manually. ChainVerify uses a custom blockchain engine with Merkle tree hashing to verify the integrity of bills and receipts in seconds — ensuring tampered documents are caught before they cause damage.',
    bullets: [
      'Engineered a custom blockchain engine for tamper-proof document storage.',
      'Designed an end-to-end receipt verification pipeline.',
    ],
    detailedBullets: [
      'Engineered a custom blockchain engine processing 100+ documents/batch with Merkle tree construction and SHA-256 fingerprinting, achieving 100% tamper-proof document integrity at the storage layer.',
      'Designed an end-to-end verification pipeline with QR-based receipt verification, real-time transaction monitoring via WebSockets, rate limiting, caching via Redis, and activity logging — reducing fraudulent document acceptance to 0%.',
    ],
  },
  {
    id: 'transitflow',
    title: 'TransitFlow',
    subtitle: 'Predictive Delay & Network Bottleneck Analysis',
    date: 'Feb 2026',
    github: 'https://github.com/AnoushkaSamanta/Public-Transport-Bottleneck-Analysis_Team21', // fill in
    stack: [
      'R', 'dplyr', 'tidyr', 'lubridate', 'caret',
      'randomForest', 'e1071', 'keras', 'TensorFlow', 'igraph', 'PCA', 'K-Means', 'DBSCAN', 'LSTM',
    ],
    description: 'Public transit delay data is messy and underutilized. TransitFlow applies machine learning — from Random Forest classifiers to LSTM networks — to predict route delays and surface network bottlenecks, achieving 75%+ cross-validated accuracy.',
    bullets: [
      'Built an end-to-end ML data pipeline for transit delays.',
      'Trained classification models achieving 75%+ cross-validated accuracy.',
    ],
    detailedBullets: [
      'Built an end-to-end ML data pipeline processing 2,000+ records, reducing the missing value rate to 0% via IQR-based imputation and normalization — cutting pre-processing time by 40%.',
      'Applied PCA, K-Means, and DBSCAN to identify high-delay clusters; trained classification models (Random Forest, SVM, Logistic Regression) achieving 75%+ cross-validated accuracy in predicting route delays.',
    ],
  },
  {
    id: 'codekraft',
    title: 'CodeKraft',
    subtitle: 'AI-Powered Web Application Builder',
    date: 'Jan 2026',
    github: 'https://github.com/AnoushkaSamanta/codekraft', // fill in
    stack: [
      'Next.js', 'TypeScript', 'Docker', 'Prisma',
      'PostgreSQL', 'Inngest', 'Google Gemini API', 'E2B Sandboxes', 'Clerk',
    ],
    description: 'Building a web app still takes days of boilerplate. CodeKraft changes that — describe what you want, and an AI agent generates, manages dependencies, and runs a fully functional Next.js application inside an isolated sandbox environment, live.',
    bullets: [
      'Built an AI-driven application that generates Next.js projects inside isolated sandboxes.',
      'Implemented a chat-based project workflow with live previews.',
      'Integrated secure authentication and payment-enabled plan upgrades.',
    ],
    detailedBullets: [
      'Built an AI-driven application that converts user instructions into fully functional Next.js applications, generating code, managing dependencies, and running projects inside isolated E2B sandbox environments — reducing manual effort by 85%.',
      'Implemented a chat-based project workflow with complete message history, versioned code fragments, live previews, and incremental updates, improving development speed by 60%.',
      'Integrated secure authentication, credit-based rate limiting, usage tracking, and payment-enabled plan upgrades.',
    ],
  },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export type SkillItem = { name: string; icon: string }

export const SKILLS: Record<string, SkillItem[]> = {
  Languages: [
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  ],
  Technologies: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'React.js', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
    { name: 'REST APIs', icon: '' },
    { name: 'WebSockets', icon: '' },
    { name: 'JWT', icon: '' },
    { name: 'Better Auth', icon: '' },
    { name: 'Nginx', icon: 'devicon-nginx-original colored' },
    { name: 'Redis', icon: 'devicon-redis-plain colored' },
  ],
  'Databases & Storage': [
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Prisma', icon: 'devicon-prisma-original' },
    { name: 'Cloudflare R2', icon: 'devicon-cloudflare-plain colored' },
  ],
  'Platforms & Tools': [
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Jest', icon: 'devicon-jest-plain colored' },
    { name: 'Supertest', icon: '' },
    { name: 'GitHub Actions', icon: 'devicon-github-original' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
  ],
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const OPEN_SOURCE: Achievement[] = [
  {
    id: 'gssoc',
    title: 'GirlScript Summer of Code 2025',
    detail: 'Contributed to GirlScript Summer of Code 2025, earning 60+ points through consistent open-source engagement.',
    type: 'Open Source',
    certLink: 'https://drive.google.com/file/d/1FixEB3kn4nku6eFoI2Ih4gACfPfhpHyT/view',
  },
  {
    id: 'ssoc',
    title: 'Social Summer of Code 2025',
    detail: 'Contributed to Social Summer of Code 2025 with 10+ merged pull requests across AI-integrated MERN stack applications.',
    type: 'Open Source',
    certLink: 'https://drive.google.com/file/d/1QhyosWDNyFKQgTdfo66VkNZQ6eJCTdu_/view',
  },
]

export const CERTIFICATIONS: Achievement[] = [
  {
    id: 'aws',
    title: 'Machine Learning Foundations',
    detail: 'Amazon AWS Educate certification in Machine Learning Foundations — July 2025.',
    type: 'Certification',
    certLink: 'https://www.credly.com/badges/3a86ed4e-5d9b-4426-9670-aca0b7b616cf',
  },
]
