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
    period: 'Aug 2023 - May 2027',
    cgpa: '9.96',
  },
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Computer Organization & Architecture',
    'Object-Oriented Programming',
    'System Design',
    'Agile/Scrum Architecture',
  ],
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const EXPERIENCE: Experience[] = [
  {
    id: 'ankbyte',
    company: 'Ankbyte',
    location: 'Remote',
    role: 'AI Engineering Intern (Backend Systems)',
    period: 'Feb 2026 - Mar 2026',
    bullets: [
      'Replaced a manual form-based intake system with a full onboarding pipeline — integrating authentication (Better Auth), file upload, and knowledge-base storage (Cloudflare R2, PostgreSQL, Prisma).',
    ],
    stack: ['Better Auth', 'Cloudflare R2', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 'xhug',
    company: 'X-HUG.ai',
    location: 'Remote',
    role: 'Front End Web Development Intern',
    period: 'Mar 2025 - July 2025',
    bullets: [
      'Redesigned the company website, resolving cross-device layout inconsistencies and improving UI consistency which contributed to increased client engagement post-launch.',
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
      'Solved the problem of CKD-specific diet chart inaccessibility by building a web app that generated personalised diet plans based on CKD stage, age, and medical conditions.',
      'Reduced physicians’ manual diet planning effort by 70% through an exportable chart feature, validated across 20+ CKD patient profiles spanning 5 disease stages and 3 age groups.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'chainverify',
    title: 'ChainVerify',
    subtitle: 'A Digital Bill and Receipt Verification System',
    date: 'March 2026',
    github: 'https://github.com/AnoushkaSamanta/receipt-verification',
    stack: [
      'Python', 'FastAPI', 'Next.js', 'TypeScript',
      'Docker', 'Redis', 'PostgreSQL', 'Nginx', 'Cloudflare R2', 'WebSockets',
    ],
    description: 'Document fraud is costly and hard to catch manually. ChainVerify uses a custom blockchain engine with Merkle tree hashing to verify the integrity of bills and receipts in seconds — ensuring tampered documents are caught before they cause damage.',
    bullets: [
      'Built a custom blockchain with composite SHA-256 fingerprinting & Merkle tree anchoring.',
      'Engineered a 6-service Dockerized architecture with Nginx rate limiting, Redis Pub/Sub, and R2 storage.',
    ],
    detailedBullets: [
      'Built a custom blockchain where each document is fingerprinted using a composite SHA-256 hash (filename + raw bytes + extracted PDF text) and anchored via a Merkle tree into a dedicated blockchain microservice — batch-sealing blocks at 10 transactions or every 5 seconds, with Redis persisting chain state across restarts.',
      'Engineered a 6-service Dockerized architecture with Nginx rate limiting (5 req/s upload, 30 req/s API), Redis Pub/Sub broadcasting real-time events to an admin WebSocket dashboard, Cloudflare R2 for file storage, and OAuth-based access control via Google/GitHub — tamper detection without any third-party blockchain dependency.',
    ],
  },
  {
    id: 'codekraft',
    title: 'CodeKraft',
    subtitle: 'AI Powered Web App Builder',
    date: 'Jan 2026',
    github: 'https://github.com/AnoushkaSamanta/codekraft',
    stack: [
      'Next.js', 'TypeScript', 'Docker', 'Prisma',
      'PostgreSQL', 'Inngest', 'Google Gemini API', 'E2B Sandboxes', 'Clerk',
    ],
    description: 'Building a web app still takes days of boilerplate. CodeKraft changes that — describe what you want, and an AI agent generates, manages dependencies, and runs a fully functional Next.js application inside an isolated sandbox environment, live.',
    bullets: [
      'Engineered an LLM-powered platform (Gemini API + E2B sandboxes) converting prompts to deployed Next.js apps.',
      'Built a chat refinement loop with versioned incremental updates & live preview.',
    ],
    detailedBullets: [
      'Engineered an LLM-powered platform (Gemini API + E2B sandboxes) that converts natural language prompts into fully deployed Next.js apps in under 3 minutes, with automated dependency management inside isolated sandbox environments.',
      'Built a chat-like refinement loop where users can modify generated apps through follow-up prompts — each change updates the existing codebase incrementally with a saved version history and live preview, so no work is lost between iterations.',
    ],
  },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export type SkillItem = { name: string; icon: string }

export const SKILLS: Record<string, SkillItem[]> = {
  Languages: [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'SQL', icon: 'devicon-mysql-plain colored' },
    { name: 'R', icon: 'devicon-r-plain colored' },
  ],
  Frontend: [
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'React.js', icon: 'devicon-react-original colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
    { name: 'Socket.io', icon: 'devicon-socketio-original colored' },
  ],
  Backend: [
    { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'REST APIs', icon: '' },
  ],
  'Databases & ORM': [
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
    { name: 'NeonDB', icon: '' },
    { name: 'Prisma', icon: 'devicon-prisma-original' },
    { name: 'Redis', icon: 'devicon-redis-plain colored' },
  ],
  'AI & ML': [
    { name: 'scikit-learn', icon: 'devicon-scikitlearn-plain colored' },
    { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
    { name: 'pandas', icon: 'devicon-pandas-plain colored' },
    { name: 'Matplotlib', icon: 'devicon-matplotlib-plain colored' },
    { name: 'Seaborn', icon: '' },
    { name: 'Plotly', icon: '' },
    { name: 'NetworkX', icon: '' },
    { name: 'Gemini API', icon: '' },
  ],
  'Tools & DevOps': [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'AWS (S3, EC2, VPC)', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'GCP', icon: 'devicon-googlecloud-plain colored' },
    { name: 'CI/CD', icon: '' },
    { name: 'GitHub Actions', icon: 'devicon-github-original' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
    { name: 'Terraform', icon: 'devicon-terraform-plain colored' },
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

export const ACADEMICS_COMPETITIVE: Achievement[] = [
  {
    id: 'isc',
    title: 'ISC Board Examinations 2023',
    detail: 'All India Rank 2 in the ISC Board Examinations 2023, scoring 99.5% and placing in the top 0.01% of over 100,000 candidates.',
    type: 'Academic Excellence',
  },
  {
    id: 'leetcode',
    title: 'LeetCode Competitive Programming',
    detail: '300+ problems solved in Java — earned 100 Days Badge 2024 and 50 Days Badge 2026.',
    type: 'Competitive Programming',
  },
]
