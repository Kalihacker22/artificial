import { Tool } from '../../types';

export const aiLegalTools: Tool[] = [
  {
    id: 'legal-1',
    name: 'Harvey AI',
    description: 'AI-powered legal research and document analysis',
    category: 'ai',
    subcategory: 'legal',
    tags: ['legal', 'research', 'documents'],
    pricing: 'paid',
    url: 'https://harvey.ai',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    features: [
      'Legal research',
      'Document analysis',
      'Case law search',
      'Contract review'
    ]
  },
  {
    id: 'legal-2',
    name: 'Casetext',
    description: 'AI legal research assistant for lawyers',
    category: 'ai',
    subcategory: 'legal',
    tags: ['legal', 'research', 'law'],
    pricing: 'paid',
    url: 'https://casetext.com',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    features: [
      'Case law analysis',
      'Legal brief writing',
      'Document comparison',
      'Citation checking'
    ]
  }
];