export interface Skill {
  name: string;
  percentage: number;
  delay: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  iconAlt: string;
  gradientFrom: string;
  gradientTo: string;
  skills: Skill[];
  description?: string;
  focusAreas?: string[];
  exampleAssessments?: string[];
}

export interface AdditionalSkill {
  name: string;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Development',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    iconAlt: 'Programming',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-purple-600',
    description:
      'Advanced algorithms, data structures, OOP, design patterns, and clean code practices',
    focusAreas: [
      'Advanced algorithms and data structures (DSA)',
      'Object-Oriented Programming (OOP) and design patterns',
      'Functional programming concepts in JavaScript/TypeScript',
      'Writing clean, modular, testable, and scalable code',
    ],
    exampleAssessments: [
      'REST API implementation in Go with Fiber/Gin and PostgreSQL',
      'Building dynamic, reactive frontend components using React + TypeScript',
      'Implementing multi-threading, concurrency, and async operations',
      'Solving intermediate to advanced algorithmic challenges on LeetCode/HackerRank',
    ],
    skills: [
      { name: 'Go', percentage: 85, delay: '0s' },
      { name: 'JavaScript/TypeScript', percentage: 89, delay: '0.2s' },
      { name: 'Python', percentage: 75, delay: '0.4s' },
      { name: 'C++', percentage: 80, delay: '0.4s' },
      { name: 'Java', percentage: 78, delay: '0.6s' },
      { name: 'DSA & Algorithms', percentage: 85, delay: '0.8s' },
      { name: 'Design Patterns', percentage: 82, delay: '1s' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    iconAlt: 'Web Development',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-600',
    description:
      'Full-stack development with modern frameworks, authentication, and API integration',
    focusAreas: [
      'Backend: Go (Fiber/Gin), Node.js basics, JWT, REST & GraphQL APIs',
      'Frontend: ReactJS + TypeScript, TailwindCSS, Next.js basics, responsive & mobile-first design',
      'Full-stack project architecture and implementation',
      'Authentication & role-based authorization (Super Admin, Admin, User)',
      'Input validation, error handling, and API security',
      'Integration with third-party services (payment gateways, email APIs)',
    ],
    exampleAssessments: [
      'E-commerce systems with user management and order processing',
      'Admin dashboards with dynamic UI and secure API integration',
      'Search and filter functionality using optimized frontend and backend queries',
    ],
    skills: [
      { name: 'React', percentage: 85, delay: '0s' },
      { name: 'Angular', percentage: 67, delay: '0.2s' },
      { name: 'TypeScript', percentage: 89, delay: '0.4s' },
      { name: 'Go (Fiber/Gin)', percentage: 85, delay: '0.6s' },
      { name: 'JWT & REST APIs', percentage: 88, delay: '0.8s' },
      { name: 'TailwindCSS', percentage: 90, delay: '1s' },
      { name: 'Next.js', percentage: 75, delay: '1.2s' },
      { name: 'GraphQL', percentage: 72, delay: '1.4s' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Data Management',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    iconAlt: 'Database',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-600',
    description:
      'Relational & non-relational database design, optimization, and ORM usage',
    focusAreas: [
      'Relational & non-relational database design',
      'Advanced SQL queries, joins, transactions, and indexing',
      'ORM usage for scalable applications',
      'Data validation, migration, and performance optimization',
    ],
    exampleAssessments: [
      'Designing and implementing e-commerce and admin system schemas',
      'Writing efficient reports and analytics queries',
      'Handling high-volume transactional operations safely',
    ],
    skills: [
      { name: 'PostgreSQL', percentage: 84, delay: '0s' },
      { name: 'MySQL', percentage: 82, delay: '0.2s' },
      { name: 'GORM ORM', percentage: 85, delay: '0.4s' },
      { name: 'MongoDB', percentage: 70, delay: '0.6s' },
      { name: 'Database Design', percentage: 88, delay: '0.8s' },
      { name: 'SQL Optimization', percentage: 85, delay: '1s' },
      { name: 'Data Migration', percentage: 80, delay: '1.2s' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Engineering',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    iconAlt: 'DevOps',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    description:
      'Containerization, CI/CD pipelines, cloud deployments, and server management',
    focusAreas: [
      'Linux (Arch, Kali), Bash scripting',
      'Docker, Kubernetes basics',
      'CI/CD pipelines with GitHub Actions',
      'AWS basics, Git/GitHub, Nginx',
      'System monitoring and performance tuning',
      'Cloud deployments and environment configuration',
    ],
    exampleAssessments: [
      'Deploy full-stack projects using Docker and GitHub Actions',
      'Automate server setup and maintenance with Bash scripts',
      'Monitor server health and logs for production applications',
    ],
    skills: [
      { name: 'Linux (Arch/Kali)', percentage: 95, delay: '0s' },
      { name: 'Docker', percentage: 80, delay: '0.2s' },
      { name: 'CI/CD (GitHub Actions)', percentage: 85, delay: '0.4s' },
      { name: 'Git/GitHub', percentage: 97, delay: '0.6s' },
      { name: 'Bash Scripting', percentage: 88, delay: '0.8s' },
      { name: 'Kubernetes', percentage: 65, delay: '1s' },
      { name: 'AWS Basics', percentage: 70, delay: '1.2s' },
      { name: 'Nginx', percentage: 75, delay: '1.4s' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    iconAlt: 'Cybersecurity',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-orange-600',
    description:
      'Network security, penetration testing, secure coding, and OWASP guidelines',
    focusAreas: [
      'Network security, penetration testing, secure coding, OWASP guidelines',
      'Tools: Kali Linux, Nmap, Metasploit basics, Burp Suite basics',
      'Vulnerability scanning and remediation',
      'Secure API and web application development',
      'Network monitoring and intrusion detection',
      'Password management and encryption techniques',
    ],
    exampleAssessments: [
      'Performing security audits on sample applications',
      'Implementing HTTPS, secure JWT, and safe user authentication',
      'Testing input validation and SQL injection prevention',
    ],
    skills: [
      { name: 'Network Security', percentage: 82, delay: '0s' },
      { name: 'Penetration Testing', percentage: 78, delay: '0.2s' },
      { name: 'Kali Linux', percentage: 85, delay: '0.4s' },
      { name: 'Secure Coding', percentage: 88, delay: '0.6s' },
      { name: 'Vulnerability Assessment', percentage: 80, delay: '0.8s' },
      { name: 'OWASP Guidelines', percentage: 83, delay: '1s' },
      { name: 'Nmap & Security Tools', percentage: 75, delay: '1.2s' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills & Project Leadership',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    iconAlt: 'Project Management',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    description:
      'Architecture design, technical documentation, debugging, and mentorship',
    focusAreas: [
      'Architecture design, technical documentation, debugging, problem-solving, mentorship',
      'Designing microservices and modular system architecture',
      'Writing clear technical documentation for team collaboration',
      'Debugging complex applications with logs and tests',
      'Leading small projects, code reviews, and best practices adoption',
    ],
    exampleAssessments: [
      'Design scalable microservices architectures',
      'Create API documentation with Swagger/OpenAPI',
      'Perform comprehensive debugging and optimization',
    ],
    skills: [
      { name: 'System Architecture', percentage: 85, delay: '0s' },
      { name: 'Technical Documentation', percentage: 88, delay: '0.2s' },
      { name: 'Code Review', percentage: 87, delay: '0.4s' },
      { name: 'Debugging', percentage: 90, delay: '0.6s' },
      { name: 'Project Planning', percentage: 83, delay: '0.8s' },
      { name: 'Mentorship', percentage: 80, delay: '1s' },
      { name: 'Problem Solving', percentage: 92, delay: '1.2s' },
    ],
  },
  {
    id: 'cloud-apis',
    title: 'Cloud, APIs & Integration',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    iconAlt: 'Cloud & APIs',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-yellow-600',
    description:
      'REST & GraphQL API design, third-party integration, WebSockets, and caching',
    focusAreas: [
      'REST & GraphQL API design, third-party API integration, WebSockets, caching strategies',
      'Tools: Postman, Swagger/OpenAPI, Redis basics',
      'Building scalable and maintainable APIs',
      'Real-time data handling using WebSockets',
      'API documentation and testing for production-ready applications',
      'Integration with payment systems, email services, and cloud storage',
    ],
    exampleAssessments: [
      'Design and implement RESTful APIs with comprehensive documentation',
      'Integrate third-party services (payment gateways, email APIs)',
      'Build real-time features using WebSockets',
      'Implement caching strategies for improved performance',
    ],
    skills: [
      { name: 'REST API Design', percentage: 88, delay: '0s' },
      { name: 'GraphQL', percentage: 72, delay: '0.2s' },
      { name: 'WebSockets', percentage: 75, delay: '0.4s' },
      { name: 'API Integration', percentage: 85, delay: '0.6s' },
      { name: 'Postman', percentage: 90, delay: '0.8s' },
      { name: 'Swagger/OpenAPI', percentage: 85, delay: '1s' },
      { name: 'Redis (Caching)', percentage: 70, delay: '1.2s' },
    ],
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning & Modern Practices',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    iconAlt: 'Learning',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-600',
    description:
      'Agile methodologies, modern workflows, and staying current with technology',
    focusAreas: [
      'Agile & Scrum understanding for project management',
      'Familiarity with CI/CD, Git workflows, and version control',
      'Keeping up-to-date with latest frameworks, tools, and language updates',
      'Open-source contributions and collaborative development',
    ],
    exampleAssessments: [
      'Participate in Agile/Scrum project workflows',
      'Contribute to open-source projects',
      'Stay updated with latest technology trends and best practices',
      'Implement modern development workflows and practices',
    ],
    skills: [
      { name: 'Agile/Scrum', percentage: 80, delay: '0s' },
      { name: 'Git Workflows', percentage: 95, delay: '0.2s' },
      { name: 'Version Control', percentage: 97, delay: '0.4s' },
      { name: 'Open Source', percentage: 75, delay: '0.6s' },
      { name: 'Tech Learning', percentage: 90, delay: '0.8s' },
      { name: 'Best Practices', percentage: 88, delay: '1s' },
    ],
  },
];

export const additionalSkills: AdditionalSkill[] = [
  {
    name: 'Tailwind CSS',
    color:
      'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  },
  {
    name: 'Next.js',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  },
  {
    name: 'GraphQL',
    color:
      'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  },
  {
    name: 'Firebase',
    color:
      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  },
  {
    name: 'Redux',
    color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  },
  {
    name: 'Vim/Nvim',
    color:
      'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
  },
  {
    name: 'Swagger/OpenAPI',
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
  },
  {
    name: 'Microservices',
    color:
      'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
  },
];
