import { Tool } from '../../types';

export const codeAssistanceTools: Tool[] = [
  {
    id: 'code-1',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps write better code faster',
    category: 'ai',
    subcategory: 'code',
    tags: ['programming', 'code completion', 'pair programming'],
    pricing: 'paid',
    url: 'https://github.com/features/copilot',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    features: ['Code suggestions', 'Documentation generation', 'Test writing']
  },
  {
    id: 'code-2',
    name: 'Tabnine',
    description: 'AI code completion tool that supports all major IDEs',
    category: 'ai',
    subcategory: 'code',
    tags: ['code completion', 'IDE integration', 'programming'],
    pricing: 'freemium',
    url: 'https://tabnine.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    features: ['Multi-language support', 'Team learning', 'Local processing']
  },
  {
    id: 'code-3',
    name: 'CodeWhisperer',
    description: 'Amazon\'s AI-powered code companion',
    category: 'ai',
    subcategory: 'code',
    tags: ['code generation', 'AWS', 'security'],
    pricing: 'freemium',
    url: 'https://aws.amazon.com/codewhisperer',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    features: ['Security scanning', 'AWS integration', 'Reference tracking']
  }
];