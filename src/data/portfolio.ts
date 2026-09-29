export const site = {
  name: 'Your Name',
  role: 'Product Designer & Developer',
  tagline: 'I craft digital experiences that blend thoughtful design with clean, performant code.',
  email: 'hello@example.com',
  location: 'Toronto, Canada',
  social: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  bio: [
    'I\'m a multidisciplinary designer and front-end developer with a passion for building products that feel intuitive and look beautiful.',
    'With 5+ years of experience across startups and enterprise teams, I bridge the gap between design systems and production-ready interfaces.',
  ],
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '40+', label: 'Projects Delivered' },
    { value: '12', label: 'Happy Clients' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'FinFlow Dashboard',
    category: 'Web App',
    description:
      'A real-time financial analytics platform with custom data visualizations and role-based access.',
    tags: ['React', 'TypeScript', 'D3.js'],
    year: '2025',
    color: '#1e3a2f',
  },
  {
    id: 2,
    title: 'Lumina Brand System',
    category: 'Design System',
    description:
      'End-to-end design system with 60+ components, documentation site, and Figma library.',
    tags: ['Figma', 'Storybook', 'CSS'],
    year: '2024',
    color: '#2a1f3d',
  },
  {
    id: 3,
    title: 'Pulse Health',
    category: 'Mobile',
    description:
      'Patient-facing health app focused on accessibility, with WCAG 2.1 AA compliance.',
    tags: ['React Native', 'Node.js'],
    year: '2024',
    color: '#1f2a3d',
  },
  {
    id: 4,
    title: 'Artisan Commerce',
    category: 'E-commerce',
    description:
      'Headless storefront for independent makers with custom checkout and inventory flows.',
    tags: ['Next.js', 'Shopify', 'GraphQL'],
    year: '2023',
    color: '#3d2a1f',
  },
]

export const skills = [
  {
    category: 'Design',
    items: ['UI/UX Design', 'Design Systems', 'Prototyping', 'Figma', 'Motion Design'],
  },
  {
    category: 'Development',
    items: ['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'CSS/Sass'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Storybook', 'Jest', 'Vite', 'Contentful'],
  },
]
