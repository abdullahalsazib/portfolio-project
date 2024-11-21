import { BlogPost, Category } from '../interfaces/blog.interface';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Modern Web Applications',
    excerpt: 'Exploring the latest trends and technologies in web development...',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>Key Features</h2>
      <ul>
        <li>Modern Architecture</li>
        <li>Responsive Design</li>
        <li>Performance Optimization</li>
        <li>Security Best Practices</li>
      </ul>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `,
    image: 'https://picsum.photos/800/600?random=1',
    category: 'Tech',
    tags: ['Web Development', 'JavaScript', 'Angular'],
    author: {
      name: 'John Doe',
      avatar: 'https://picsum.photos/100/100?random=1',
      role: 'Senior Developer'
    },
    date: 'March 15, 2024',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 11,
    title: 'Neural Networks in Browser',
    excerpt: 'Running machine learning models directly in the browser using TensorFlow.js...',
    content: `
      <p>Explore the possibilities of client-side AI processing with TensorFlow.js.</p>
      <h2>Implementation Guide</h2>
      <ul>
        <li>Model Optimization</li>
        <li>WebGL Acceleration</li>
        <li>Real-time Processing</li>
        <li>Memory Management</li>
      </ul>
      <p>Learn how to integrate AI capabilities without server-side processing.</p>
    `,
    image: 'https://picsum.photos/800/600?random=11',
    category: 'Tech',
    tags: ['AI', 'TensorFlow.js', 'Machine Learning'],
    author: {
      name: 'Dr. Maria Torres',
      avatar: 'https://picsum.photos/100/100?random=11',
      role: 'AI Researcher'
    },
    date: 'March 5, 2024',
    readTime: '12 min read'
  },
  {
    id: 12,
    title: 'Neomorphic Design Trends',
    excerpt: 'Exploring the evolution of soft UI and its impact on modern interfaces...',
    content: `
      <p>Discover how neomorphism is shaping the future of UI design.</p>
      <h2>Design Elements</h2>
      <ul>
        <li>Soft Shadows</li>
        <li>Color Theory</li>
        <li>Depth Perception</li>
        <li>Accessibility Considerations</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=12',
    category: 'Design',
    tags: ['UI Design', 'Neomorphism', 'Trends'],
    author: {
      name: 'Sophie Bernard',
      avatar: 'https://picsum.photos/100/100?random=12',
      role: 'UI/UX Designer'
    },
    date: 'March 4, 2024',
    readTime: '7 min read'
  },
  {
    id: 13,
    title: 'IoT Dashboard with MQTT',
    excerpt: 'Building a real-time IoT monitoring system using MQTT and WebSockets...',
    content: `
      <p>Create a scalable IoT dashboard for device monitoring and control.</p>
      <h2>System Architecture</h2>
      <ul>
        <li>MQTT Protocol</li>
        <li>Real-time Updates</li>
        <li>Device Management</li>
        <li>Data Visualization</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=13',
    category: 'Projects',
    tags: ['IoT', 'MQTT', 'Real-time'],
    author: {
      name: 'Robert Chang',
      avatar: 'https://picsum.photos/100/100?random=13',
      role: 'IoT Specialist'
    },
    date: 'March 3, 2024',
    readTime: '9 min read'
  },
  {
    id: 14,
    title: 'Voice UI Development',
    excerpt: 'Implementing voice interfaces for web applications...',
    content: `
      <p>Learn how to create intuitive voice-controlled interfaces.</p>
      <h2>Key Components</h2>
      <ul>
        <li>Speech Recognition</li>
        <li>Natural Language Processing</li>
        <li>Voice Feedback</li>
        <li>Accessibility Integration</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=14',
    category: 'Tech',
    tags: ['Voice UI', 'Accessibility', 'UX'],
    author: {
      name: 'James Wilson',
      avatar: 'https://picsum.photos/100/100?random=14',
      role: 'Voice UI Developer'
    },
    date: 'March 2, 2024',
    readTime: '8 min read'
  },
  {
    id: 15,
    title: 'CSS Art Gallery',
    excerpt: 'Creating stunning artwork using pure CSS and HTML...',
    content: `
      <p>Push the boundaries of what's possible with CSS art.</p>
      <h2>Techniques Covered</h2>
      <ul>
        <li>Shape Morphing</li>
        <li>Gradient Manipulation</li>
        <li>Animation Effects</li>
        <li>Performance Optimization</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=15',
    category: 'Design',
    tags: ['CSS', 'Art', 'Creative Coding'],
    author: {
      name: 'Nina Rodriguez',
      avatar: 'https://picsum.photos/100/100?random=15',
      role: 'Creative Developer'
    },
    date: 'March 1, 2024',
    readTime: '6 min read'
  },
  {
    id: 16,
    title: 'Quantum Computing Simulator',
    excerpt: 'Building a quantum circuit simulator using WebAssembly...',
    content: `
      <p>Explore quantum computing concepts through interactive simulation.</p>
      <h2>Project Features</h2>
      <ul>
        <li>Circuit Design</li>
        <li>Quantum Gates</li>
        <li>State Visualization</li>
        <li>Educational Tools</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=16',
    category: 'Projects',
    tags: ['Quantum Computing', 'WebAssembly', 'Education'],
    author: {
      name: 'Dr. Alan Mitchell',
      avatar: 'https://picsum.photos/100/100?random=16',
      role: 'Quantum Researcher'
    },
    date: 'February 29, 2024',
    readTime: '15 min read'
  },
  {
    id: 17,
    title: '3D Typography in Web',
    excerpt: 'Creating immersive 3D text experiences using Three.js...',
    content: `
      <p>Learn to create engaging 3D typography for the web.</p>
      <h2>Technical Aspects</h2>
      <ul>
        <li>3D Text Geometry</li>
        <li>Lighting Effects</li>
        <li>Interactive Animation</li>
        <li>Performance Tips</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=17',
    category: 'Design',
    tags: ['3D', 'Typography', 'Three.js'],
    author: {
      name: 'Lucas Silva',
      avatar: 'https://picsum.photos/100/100?random=17',
      role: '3D Web Designer'
    },
    date: 'February 28, 2024',
    readTime: '10 min read'
  },
  {
    id: 18,
    title: 'Blockchain Social Platform',
    excerpt: 'Building a decentralized social network using Ethereum...',
    content: `
      <p>Create a censorship-resistant social platform on blockchain.</p>
      <h2>Core Features</h2>
      <ul>
        <li>Smart Contracts</li>
        <li>Decentralized Storage</li>
        <li>Identity Management</li>
        <li>Content Monetization</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=18',
    category: 'Projects',
    tags: ['Blockchain', 'Ethereum', 'Web3'],
    author: {
      name: 'Vitalik Chen',
      avatar: 'https://picsum.photos/100/100?random=18',
      role: 'Blockchain Developer'
    },
    date: 'February 27, 2024',
    readTime: '11 min read'
  },
  {
    id: 19,
    title: 'Generative Art with P5.js',
    excerpt: 'Creating algorithmic artwork using JavaScript and P5.js...',
    content: `
      <p>Explore the intersection of code and creativity.</p>
      <h2>Art Techniques</h2>
      <ul>
        <li>Particle Systems</li>
        <li>Flow Fields</li>
        <li>Noise Algorithms</li>
        <li>Color Theory</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=19',
    category: 'Design',
    tags: ['Creative Coding', 'P5.js', 'Generative Art'],
    author: {
      name: 'Isabella Arte',
      avatar: 'https://picsum.photos/100/100?random=19',
      role: 'Creative Technologist'
    },
    date: 'February 26, 2024',
    readTime: '8 min read'
  },
  {
    id: 20,
    title: 'WebXR Virtual Gallery',
    excerpt: 'Building an immersive art gallery using WebXR...',
    content: `
      <p>Create virtual reality experiences accessible through the web.</p>
      <h2>Implementation Details</h2>
      <ul>
        <li>3D Environment Design</li>
        <li>VR Interactions</li>
        <li>Asset Optimization</li>
        <li>Cross-device Support</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/600?random=20',
    category: 'Projects',
    tags: ['WebXR', 'Virtual Reality', '3D'],
    author: {
      name: 'Maya VR',
      avatar: 'https://picsum.photos/100/100?random=20',
      role: 'XR Developer'
    },
    date: 'February 25, 2024',
    readTime: '13 min read'
  }
];

export const categories: Category[] = [
  { name: 'All', class: 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200' },
  { name: 'Tech', class: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
  { name: 'Design', class: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
  { name: 'Projects', class: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' }
]; 