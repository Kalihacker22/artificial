import { Tool } from '../../types';

export const aiHealthcareTools: Tool[] = [
  {
    id: 'health-1',
    name: 'Ada Health',
    description: 'AI-powered health assessment and symptom checker',
    category: 'ai',
    subcategory: 'healthcare',
    tags: ['health', 'diagnosis', 'medical'],
    pricing: 'free',
    url: 'https://ada.com',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    features: [
      'Symptom assessment',
      'Medical knowledge base',
      'Personalized health insights',
      'Medical AI consultation'
    ]
  },
  {
    id: 'health-2',
    name: 'BenevolentAI',
    description: 'AI platform for drug discovery and development',
    category: 'ai',
    subcategory: 'healthcare',
    tags: ['drug discovery', 'research', 'medical'],
    pricing: 'paid',
    url: 'https://benevolent.ai',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    features: [
      'Drug target identification',
      'Biomedical research',
      'Clinical trials analysis',
      'Disease mechanism insights'
    ]
  }
];