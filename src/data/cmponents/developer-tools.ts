import { Tool } from '../../types';

export const developerTools: Tool[] = [
  {
    id: 'dev-1',
    name: 'StackBlitz',
    description: 'Online IDE for web development with instant setup',
    category: 'website',
    subcategory: 'development',
    tags: ['development', 'IDE', 'collaboration'],
    pricing: 'freemium',
    url: 'https://stackblitz.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    features: [
      'Instant development environments',
      'Real-time collaboration',
      'GitHub integration',
      'WebContainer technology'
    ]
  },
  {
    id: 'dev-2',
    name: 'CodeSandbox',
    description: 'Online code editor for rapid web development',
    category: 'website',
    subcategory: 'development',
    tags: ['development', 'prototyping', 'collaboration'],
    pricing: 'freemium',
    url: 'https://codesandbox.io',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    features: [
      'Template library',
      'Team collaboration',
      'VS Code integration',
      'Live preview'
    ]
  }
];