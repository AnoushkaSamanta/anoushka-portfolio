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
      'Built the complete onboarding pipeline for an AI agent product from scratch — auth (Better Auth), document ingestion to Cloudflare R2 and agent config storage in PostgreSQL — replacing a manual Google Forms + human-upload workflow. ',
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
      'Led the frontend work on a website rebuild from scratch in collaboration with product managers, translating complex AI product capabilities into a clear, responsive user interface — improving cross-device consistency and client-facing product presentation. ',
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
    id: 'rategate',
    title: 'RateGate',
    subtitle: 'Distributed Rate Limiter & API Gateway',
    date: 'Aug 2026',
    github: 'https://github.com/AnoushkaSamanta/RateGate',
    stack: [
      'Go', 'Redis Cluster', 'Docker', 'Prometheus', 'k6', 'Lua'
    ],
    description: 'A distributed rate limiter enforcing atomic limits across stateless Go nodes and a Redis Cluster, using atomic Lua scripting to guarantee correctness under concurrent multi-node traffic.',
    bullets: [
      'Engineered a horizontally-scaled rate limiter enforcing atomic limits across 5 stateless Go nodes and a 6-node Redis Cluster.',
      'Sustained 5,000 RPS for 60s with zero failures, optimizing p95 latency to 85ms and implementing fail-open circuit breakers.',
    ],
    detailedBullets: [
      'Engineered a horizontally-scaled rate limiter enforcing atomic limits across 5 stateless Go nodes and a 6-node Redis Cluster, using atomic Lua scripting to guarantee correctness under concurrent multi-node traffic.',
      'Implemented pluggable token-bucket and sliding-window algorithms as atomic Lua scripts with hash-tag key design; verified zero double-counting across 5,000 requests over 10 concurrent load-test runs.',
      'Load-tested with k6 across 15 containers on a single 16-core host, sustaining 5,000 RPS for 60s with zero failed responses and peaking at 9,209 RPS; right-sized the Redis pool from 5,000 to 500 connections, cutting p95 latency from 96ms to 85ms and removing 40 timeout-induced 500s.',
      'Chaos-tested by killing a live Redis master mid-load, measuring a 9.21s automatic failover; a custom per-route circuit breaker tripped to fail-open instantly, sustaining traffic while the cluster self-healed.'
    ],
  },
  {
    id: 'clearnote',
    title: 'ClearNote',
    subtitle: 'Intelligent Clinical Dashboard & SOAP Note Generator',
    date: 'June 2026',
    github: 'https://github.com/MayankV004/clearnote',
    stack: [
      'Next.js', 'FastAPI','LangChain', 'PostgreSQL', 'AWS', 'RAG Pipeline','Terraform','Github Actions','Gemini/Groq','Docker','Deepgram','Pytest'
    ],
    description: 'An advanced clinical dashboard for healthcare professionals featuring automated SOAP note generation, patient activity tracking, and intelligent medical data retrieval using RAG pipelines.',
    bullets: [
      'Implemented automated SOAP note generation and real-time patient analytics dashboard.',
      'Integrated RAG pipelines to assist in intelligent medical data retrieval.',
    ],
    detailedBullets: [
      'Engineered an end-to-end pipeline transcribing doctor-patient audio via Deepgram, generating SOAP notes through Gemini/Groq LLMs, running drug-interaction checks, and exporting formatted PDF prescriptions via WeasyPrint — with Redis caching LLM responses to cut repeat API costs.',
      'Built a RAG pipeline with LangChain and pgvector to chunk and embed medical guidelines into PostgreSQL, grounding LLM outputs against clinical standards rather than raw generation; stored audio/documents in S3-compatible object storage (AWS S3/MinIO).',
      'Provisioned cloud infrastructure with Terraform, enforced code quality via GitHub Actions (linting and test checks on every PR), and wrote Pytest unit and integration tests.'
    ],
  },
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
  ],
  Frontend: [
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'React.js', icon: 'devicon-react-original colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  ],
  Backend: [
    { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'REST APIs', icon: '' },
    { name: 'Web Sockets', icon: 'devicon-socketio-original colored' },
  ],
  'Databases & ORM': [
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'NeonDB', icon: 'https://cdn.simpleicons.org/neon' },
    { name: 'Prisma', icon: 'devicon-prisma-original' },
    { name: 'Redis', icon: 'devicon-redis-plain colored' },
  ],
  'AI & ML': [
    { name: 'scikit-learn', icon: 'devicon-scikitlearn-plain colored' },
    { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
    { name: 'pandas', icon: 'devicon-pandas-plain colored' },
    { name: 'Matplotlib', icon: 'devicon-matplotlib-plain colored' },
    { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain' },
    { name: 'LangGraph', icon: 'https://cdn.simpleicons.org/langgraph' },
    { name: 'RAG', icon: '' },
  ],
  'Tools & DevOps': [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'CI/CD', icon: '' },
    { name: 'GitHub Actions', icon: 'devicon-github-original' },
    { name: 'Terraform', icon: 'devicon-terraform-plain colored' },
    { name: 'Cloudflare R2', icon: 'https://cdn.simpleicons.org/cloudflare' },
    { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
    { name: 'Nginx', icon: 'devicon-nginx-original colored' },
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
    detail: 'Solved 450+ LeetCode problems in Java; achieved a 1,688 Contest Rating (Top ~14.68% globally).',
    type: 'Competitive Programming',
  },
]
