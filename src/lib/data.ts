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
  linkedin: 'https://linkedin.com/in/[your-handle]', // fill in
  github: 'https://github.com/[your-handle]',         // fill in
  portfolio: '[portfolio-url]',                        // fill in
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
    location: 'Mexico',
    role: 'AI Engineering Intern — Backend Systems',
    period: 'Feb 2026 – Mar 2026',
    bullets: [
      'Replaced a manual form-based intake system with authentication, file upload, and knowledge-base integration using Better Auth, PostgreSQL, Prisma, and Cloudflare R2.',
      'Reduced onboarding data entry by approximately 60%.',
    ],
    stack: ['Better Auth', 'PostgreSQL', 'Prisma', 'Cloudflare R2'],
  },
  {
    id: 'xhug',
    company: 'X-HUG.ai',
    location: 'Texas, US',
    role: 'Front End Web Development Intern',
    period: 'Mar 2025 – July 2025',
    bullets: [
      'Redesigned the websites of X-HUG and Ankbyte, resolving cross-device layout issues and improving UI consistency by 40%.',
      'Improved site speed and reliability, resulting in a 2× increase in client interaction.',
    ],
    stack: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'eldroga',
    company: 'Eldroga Life Sciences',
    location: 'Chennai, Tamil Nadu',
    role: 'Freelance Web Developer',
    period: 'June 2025',
    bullets: [
      'Built a web application that generates personalised CKD-specific diet plans based on disease stage, age, and medical conditions.',
      'Reduced physicians\' manual diet planning effort by 70%; validated across 20+ patient profiles spanning 5 disease stages and 3 age groups.',
    ],
    stack: ['React.js', 'Node.js', 'PostgreSQL'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'chainverify',
    title: 'ChainVerify',
    subtitle: 'Digital Bill and Receipt Verification System',
    date: 'March 2026',
    github: 'https://github.com/[handle]/chainverify', // fill in
    stack: [
      'Python', 'FastAPI', 'Next.js', 'TypeScript',
      'Docker', 'Redis', 'PostgreSQL', 'Nginx', 'Cloudflare R2', 'WebSockets',
    ],
    description: 'A robust digital verification system that uses custom blockchain technology to ensure document integrity.',
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
    github: 'https://github.com/[handle]/transitflow', // fill in
    stack: [
      'R', 'dplyr', 'tidyr', 'lubridate', 'caret',
      'randomForest', 'e1071', 'keras', 'TensorFlow', 'igraph', 'PCA', 'K-Means', 'DBSCAN', 'LSTM',
    ],
    description: 'An advanced predictive delay analysis tool that uses machine learning to identify bottlenecks in transit networks.',
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
    github: 'https://github.com/[handle]/codekraft', // fill in
    stack: [
      'Next.js', 'TypeScript', 'Docker', 'Prisma',
      'PostgreSQL', 'Inngest', 'Google Gemini API', 'E2B Sandboxes', 'Clerk',
    ],
    description: 'An AI-powered web application builder that generates and runs code dynamically within isolated sandboxes.',
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
    { name: 'AWS S3', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'AWS EC2', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
  ],
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const OPEN_SOURCE: Achievement[] = [
  {
    id: 'gssoc',
    title: 'GirlScript Summer of Code 2025',
    detail: 'Earned 60+ points and received certificate; built features and debugged.',
    type: 'Open Source',
    certLink: '[gssoc-cert-link]',
  },
  {
    id: 'ssoc',
    title: 'Social Summer of Code 2025',
    detail: '10+ PRs merged across AI-integrated MERN applications.',
    type: 'Open Source',
    certLink: '[ssoc-cert-link]',
  },
]

export const CERTIFICATIONS: Achievement[] = [
  {
    id: 'aws',
    title: 'Machine Learning Foundations',
    detail: 'Amazon AWS Educate certification in Machine Learning Foundations — July 2025.',
    type: 'Certification',
    certLink: '[aws-badge-link]',
  },
]
