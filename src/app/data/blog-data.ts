import { BlogPost, Category } from '../interfaces/blog.interface';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Mihad.site — Personal / Portfolio Website',
    excerpt:
      'A clean, modern personal website and portfolio that I designed and built for a senior engineer, showcasing his work, skills, and blog posts.',
    content: `
    <p>
      <strong>Mihad.site</strong> is a personal/portfolio website I created for a senior engineer 
      who is one of my motivators. The website highlights his professional background, 
      projects, and writings in a polished, minimal, yet professional design.
    </p>

    <h2>Main Features</h2>
    <ul>
      <li><strong>Landing / Home Page</strong> — introducing who he is, what he does, and what visitors can explore.</li>
      <li><strong>Projects Showcase</strong> — a gallery of his major projects with descriptions, live links, GitHub links, and tags.</li>
      <li><strong>Blog Section</strong> — for sharing insights, tutorials, and journey updates.</li>
      <li><strong>About Section</strong> — bio, skills, tools & technologies, education/background.</li>
      <li><strong>Contact</strong> — contact form, social media links, resume download.</li>
      <li><strong>Responsive Design</strong> — optimized for mobile, tablet, and desktop.</li>
      <li><strong>Performance & SEO</strong> — optimized images, SEO best practices, and fast load times.</li>
      <li><strong>Consistent Design</strong> — professional typography, color scheme, and UI components.</li>
    </ul>

    <h2>Tech Stack & Tools</h2>
    <ul>
      <li><strong>Frontend:</strong> Next.js / React</li>
      <li><strong>Styling:</strong> TailwindCSS</li>
      <li><strong>Deployment:</strong> Vercel with custom domain</li>
      <li><strong>Extras:</strong> Analytics, SEO tools, image optimization</li>
    </ul>

    <p>
      This project was an important milestone for me, as I built and designed a professional 
      portfolio for someone I look up to. It not only showcases his achievements but also 
      reflects my skills in frontend development and design.
    </p>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759328163/a2ff1a5e-c151-4f77-b348-b368cf8b10a4.png',
    category: 'Projects',
    tags: [
      'Portfolio',
      'Personal Website',
      'Responsive Design',
      'SEO',
      'Frontend',
      'Design',
    ],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Frontend Developer & Designer',
    },
    date: 'October 1, 2025',
    readTime: '4 min read',
    featured: false,
    liveLink: 'https://www.mihad.site',
    githubLink: '', // add GitHub link if repo is public
  },
  {
    id: 2,
    title: 'E-commerce Multi-Vendor Platform',
    excerpt:
      'A scalable and secure multi-vendor e-commerce platform built with Next.js, Golang, PostgreSQL, and modern DevOps practices.',
    content: `
    <p>
      This project is a <strong>multi-vendor e-commerce application</strong> where multiple sellers can register, list products, manage inventory, and process orders, 
      while customers can browse, search, and purchase items with a smooth shopping experience.
    </p>
    
    <h2>Key Features</h2>
    <ul>
      <li><strong>Multi-Vendor System</strong> – Support for multiple sellers with their own dashboards.</li>
      <li><strong>Role-Based Access Control (RBAC)</strong> – Super Admin, Admin, Vendor, and User roles with fine-grained permissions.</li>
      <li><strong>User Authentication & Authorization</strong> – JWT-based secure login, registration, and role-based routes.</li>
      <li><strong>Product Management</strong> – CRUD for products with categories, tags, and images.</li>
      <li><strong>Order Management</strong> – Cart, checkout, and order tracking with transactional integrity.</li>
      <li><strong>Payment Integration</strong> – Basic payment gateway handling (Stripe/SSLCommerz integration planned).</li>
      <li><strong>Search & Filtering</strong> – Full-text search and filtering by category, price, and availability.</li>
      <li><strong>Admin Dashboard</strong> – Vendors and admins manage products, users, and sales analytics.</li>
      <li><strong>Responsive UI</strong> – Built with Next.js (TypeScript) and TailwindCSS for modern, mobile-first design.</li>
      <li><strong>Optimized API</strong> – Golang + Fiber backend with PostgreSQL, GORM ORM, and caching strategies.</li>
      <li><strong>Scalable Architecture</strong> – Dockerized services, CI/CD with GitHub Actions, and deployment-ready.</li>
    </ul>
    
    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Frontend:</strong> Next.js (TypeScript), React, TailwindCSS</li>
      <li><strong>Backend:</strong> Golang (Fiber), GORM ORM, Viper for config</li>
      <li><strong>Database:</strong> PostgreSQL</li>
      <li><strong>Authentication:</strong> JWT, RBAC</li>
      <li><strong>Tools & Deployment:</strong> Docker, GitHub Actions CI/CD, Netlify (frontend), Railway/DigitalOcean (backend)</li>
    </ul>
    
    <p>
      This project reflects my journey into full-stack development, combining <strong>scalable backend APIs</strong>, 
      <strong>secure authentication</strong>, and a <strong>modern frontend experience</strong>. 
      It’s designed to demonstrate both <em>technical depth</em> and <em>practical application</em>.
    </p>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759328246/8fa7fada-3469-462d-9e65-262fd0336725.png',
    category: 'Projects',
    tags: [
      'NextJs',
      'TailwindCSS',
      'Go',
      'Postgres',
      'RBAC',
      'Docker',
      'CI/CD',
    ],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Full-Stack Developer',
    },
    date: 'September 30, 2025',
    readTime: '7 min read',
    featured: true,
    liveLink: 'https://e-com-nextjs-six.vercel.app',
    githubLink: 'https://github.com/abdullahalsazib/e-com-nextjs',
  },
  {
    id: 3,
    title: 'E-commerce Backend API (Golang)',
    excerpt:
      'A robust, scalable, and secure RESTful API for a multi-vendor e-commerce platform, built with Golang, Fiber, and PostgreSQL.',
    content: `
    <p>
      The <strong>backend system</strong> of the multi-vendor e-commerce platform is designed with <strong>clean architecture</strong>, 
      ensuring scalability, performance, and security. It provides all necessary APIs for vendors, users, admins, and super-admins with 
      role-based access control (RBAC).
    </p>
    
    <h2>Key Features</h2>
    <ul>
      <li><strong>Authentication & Authorization</strong> – Secure JWT-based login, signup, logout with refresh tokens.</li>
      <li><strong>Role-Based Access Control (RBAC)</strong> – Separate roles for Super Admin, Admin, Vendor, and Customer.</li>
      <li><strong>User Management</strong> – APIs for registering, updating, and managing users with different roles.</li>
      <li><strong>Product Management</strong> – CRUD operations for products, categories, and tags.</li>
      <li><strong>Order Processing</strong> – Cart system, checkout, order creation, and transactional integrity.</li>
      <li><strong>Vendor Dashboard APIs</strong> – Vendors can manage their products and view order details.</li>
      <li><strong>Admin Dashboard APIs</strong> – Admins can manage all users, vendors, and products.</li>
      <li><strong>Security</strong> – Middleware for authentication, validation, rate limiting, and secure headers.</li>
      <li><strong>Database Layer</strong> – PostgreSQL with GORM ORM for models, migrations, and queries.</li>
      <li><strong>Configuration</strong> – Managed with Viper for environment variables and secrets.</li>
      <li><strong>Testing</strong> – Postman collections for API testing.</li>
      <li><strong>CI/CD Pipeline</strong> – Automated builds, tests, and Docker image publishing with GitHub Actions.</li>
    </ul>
    
    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Language:</strong> Go (Golang)</li>
      <li><strong>Framework:</strong> Fiber</li>
      <li><strong>Database:</strong> PostgreSQL</li>
      <li><strong>ORM:</strong> GORM</li>
      <li><strong>Configuration:</strong> Viper</li>
      <li><strong>Authentication:</strong> JWT, RBAC</li>
      <li><strong>Deployment:</strong> Docker, GitHub Actions CI/CD</li>
    </ul>
    
    <p>
      This backend project is the <strong>core engine</strong> of the multi-vendor e-commerce system, 
      enabling <em>secure APIs</em>, <em>scalable database design</em>, and <em>modern DevOps practices</em>. 
      It’s a production-ready backend that can be extended for payments, search optimization, and advanced analytics.
    </p>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759328370/937d9929-64b1-4ca2-b1f0-e5a4e9596ceb.png',
    category: 'Projects',
    tags: [
      'Golang',
      'Fiber',
      'Postgres',
      'GORM',
      'JWT',
      'RBAC',
      'Docker',
      'CI/CD',
    ],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Backend Developer',
    },
    date: 'October 1, 2025',
    readTime: '6 min read',
    featured: true,
    liveLink: 'https://github.com/abdullahalsazib/ecom-backend', // if you push backend separately
    githubLink: 'https://github.com/abdullahalsazib/ecom-backend',
  },
  {
    id: 4,
    title: 'Admin Dashboard (React + Tailwind)',
    excerpt:
      'A responsive and role-based admin dashboard integrated with backend APIs for managing products, users, and orders.',
    content: `
    <p>
      This is the <strong>Admin Dashboard</strong> for my multi-vendor e-commerce platform. It is designed with a clean UI, responsive 
      layout, and integrates directly with my Golang backend APIs.
    </p>

    <h2>Features</h2>
    <ul>
      <li>Role-based routes for Super Admin, Admin, and Vendor.</li>
      <li>Product management (create, update, delete).</li>
      <li>User management with RBAC support.</li>
      <li>Dashboard analytics and order tracking.</li>
      <li>Reusable components and TypeScript type safety.</li>
      <li>Authentication & Authorization via JWT tokens.</li>
    </ul>

    <h2>Stack</h2>
    <ul>
      <li>React (TSX), TailwindCSS, Axios</li>
      <li>Integration with Golang + Fiber API</li>
      <li>Protected routes with React Router</li>
    </ul>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759329831/cd544848-ae69-47b8-a60b-39f3a351a4f4.png',
    category: 'Projects',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'RBAC', 'Admin Dashboard'],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Frontend Developer',
    },
    date: 'August 20, 2025',
    readTime: '5 min read',
    featured: true,
    liveLink: 'https://dashboard-react-tailwindcss.netlify.app',
    githubLink:
      'https://github.com/abdullahalsazib/Dashboard_React_TailwindCss',
  },
  {
    id: 5,
    title: 'Personal Blog Platform',
    excerpt:
      'A modern blog system with Next.js frontend and Golang backend APIs, designed for writing and sharing posts.',
    content: `
    <p>
      This project is a <strong>blog application</strong> where users can browse, read, and interact with posts. 
      It demonstrates integration of a React-based frontend with a RESTful Golang backend API.
    </p>

    <h2>Features</h2>
    <ul>
      <li>SEO-optimized blog pages with Next.js.</li>
      <li>Admin panel for creating and managing posts.</li>
      <li>Category and tag-based filtering.</li>
      <li>Responsive design for all devices.</li>
      <li>Deployed with Docker and CI/CD pipelines.</li>
    </ul>

    <h2>Stack</h2>
    <ul>
      <li>Frontend: Next.js, TailwindCSS</li>
      <li>Backend: Golang, PostgreSQL</li>
      <li>Deployment: Docker, GitHub Actions, Netlify</li>
    </ul>
  `,
    image: 'https://picsum.photos/800/600?random=6',
    category: 'Projects',
    tags: ['NextJs', 'TailwindCSS', 'Go', 'Postgres', 'Blog'],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Full-Stack Developer',
    },
    date: 'July 15, 2025',
    readTime: '6 min read',
    featured: false,
    liveLink: 'https://blog.dosibridge.com',
    githubLink: '',
  },
  {
    id: 6,
    title: 'Dockerized CI/CD Pipeline',
    excerpt:
      'Automated CI/CD pipeline for containerized applications using Docker and GitHub Actions.',
    content: `
    <p>
      This project is about <strong>DevOps automation</strong> where I created a Dockerized CI/CD pipeline 
      for building, testing, and deploying my applications.
    </p>

    <h2>Features</h2>
    <ul>
      <li>Multi-stage Docker builds for optimized images.</li>
      <li>GitHub Actions for CI/CD automation.</li>
      <li>Deployment to servers via SSH + Docker.</li>
      <li>Secrets management and environment configuration.</li>
    </ul>

    <h2>Stack</h2>
    <ul>
      <li>Docker, Docker Compose</li>
      <li>GitHub Actions</li>
      <li>Netlify / Vercel for frontend</li>
      <li>Railway / VPS for backend</li>
    </ul>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759330032/df1db7f2-c344-46db-9fce-ec8937c9dad0.png',
    category: 'DevOps',
    tags: ['Docker', 'CI/CD', 'GitHub Actions', 'DevOps'],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'DevOps Enthusiast',
    },
    date: 'April 5, 2025',
    readTime: '5 min read',
    featured: false,
    liveLink:
      'https://github.com/abdullahalsazib/dev_Ops_practical/actions/runs/17938197724',
    githubLink: 'https://github.com/abdullahalsazib/dev_Ops_practical',
  },
  {
    id: 7,
    title: 'Multi-Signup System (React)',
    excerpt:
      'A role-based multi-signup and authentication system UI using React and TailwindCSS.',
    content: `
    <p>
      This project demonstrates a <strong>multi-signup system</strong> where different types of users 
      (e.g. Admin, Vendor, Customer, Student) can register with different forms. 
      It focuses on frontend logic, form validation, and clean UI.
    </p>

    <h2>Features</h2>
    <ul>
      <li>Separate signup flows for multiple user types.</li>
      <li>Role-based UI with conditional rendering.</li>
      <li>Form validation with error handling.</li>
      <li>Responsive design with TailwindCSS.</li>
      <li>Reusable components for forms and inputs.</li>
    </ul>

    <h2>Stack</h2>
    <ul>
      <li>React (TypeScript optional)</li>
      <li>TailwindCSS</li>
    </ul>

    <p>
      Currently a <strong>UI-only project</strong> but ready to integrate with a backend for full 
      authentication and role-based access.
    </p>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759329292/d1e5de3d-49f0-44ba-91a2-eead5d3a821b.png',
    category: 'Projects',
    tags: ['React', 'TailwindCSS', 'UI', 'Signup', 'Role-based'],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Frontend Developer',
    },
    date: 'September 15, 2025',
    readTime: '4 min read',
    featured: false,
    liveLink: 'https://multi-signup.netlify.app/',
    githubLink: 'https://github.com/Abdullahalsazib/multi-sign',
  },
  {
    id: 8,
    title: 'IT Education Demo UI',
    excerpt:
      'A frontend-only demo website for IT education and courses, built with React and TailwindCSS.',
    content: `
    <p>
      The <strong>IT Education Demo</strong> project is a frontend-only prototype for an 
      online learning platform. It showcases modern UI design for courses, categories, and 
      learning content.
    </p>

    <h2>Features</h2>
    <ul>
      <li>Landing page with hero section and call-to-action.</li>
      <li>Course listing with category filtering.</li>
      <li>Responsive card-based layout for course previews.</li>
      <li>Modern design using TailwindCSS.</li>
      <li>Reusable components for buttons, cards, and forms.</li>
    </ul>

    <h2>Stack</h2>
    <ul>
      <li>React (JS/TS)</li>
      <li>TailwindCSS</li>
    </ul>

    <p>
      This project is designed as a <strong>UI demo</strong> for an education platform, 
      and can be extended with a backend for course management and authentication.
    </p>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759329569/9c4b863c-c952-4b0b-a58a-fbd3ea0d105b.png',
    category: 'Design',
    tags: ['React', 'TailwindCSS', 'UI', 'Education', 'Frontend'],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Frontend Developer & Designer',
    },
    date: 'September 20, 2025',
    readTime: '3 min read',
    featured: false,
    liveLink: 'https://it-education-demo.netlify.app',
    githubLink: 'https://github.com/Abdullahalsazib/IT_Education_templates',
  },
  {
    id: 9,
    title: 'Product Landing Page',
    excerpt:
      'A modern landing page to introduce a product quickly and effectively.',
    content: `
    <p>
      The <strong>Landing Page</strong> project was created to introduce products 
      quickly and effectively with a professional design. Built with ReactJS and TailwindCSS, 
      it highlights product features, benefits, and CTAs.
    </p>

    <h2>Features</h2>
    <ul>
      <li>Hero section with bold call-to-action.</li>
      <li>Features section with icons.</li>
      <li>Pricing section with responsive cards.</li>
      <li>Contact form and footer.</li>
    </ul>

    <h2>Stack</h2>
    <ul>
      <li>ReactJS</li>
      <li>TailwindCSS</li>
    </ul>
  `,
    image:
      'https://res.cloudinary.com/dbxlafemm/image/upload/v1759329626/efbf7bbf-343f-441a-997b-90844b1570af.png',
    category: 'Design',
    tags: ['React', 'TailwindCSS', 'Landing Page', 'UI', 'Frontend'],
    author: {
      name: 'Abdullah Al Sazib',
      avatar: 'https://i.ibb.co/ZHMMHQB/20241031-181937.jpg',
      role: 'Frontend Developer & Designer',
    },
    date: 'September 28, 2025',
    readTime: '3 min read',
    featured: true,
    liveLink: 'https://abdullah-al-sazib-react-tailwindcss.netlify.app',
    githubLink: 'https://github.com/Abdullahalsazib/React_Figma_Tailwind',
  },
];

export const categories: Category[] = [
  {
    name: 'All',
    class: 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200',
  },
  {
    name: 'Projects',
    class:
      'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  },
  {
    name: 'DevOps',
    class:
      'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  },
  {
    name: 'Design',
    class: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  },
];
