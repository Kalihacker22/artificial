import { Tool } from '../../types';

export const aiEducationTools: Tool[] = [
  {
    id: 'edu-1',
    name: 'Duolingo Max',
    description: 'AI-powered language learning with personalized lessons',
    category: 'ai',
    subcategory: 'education',
    tags: ['language learning', 'education', 'personalization'],
    pricing: 'freemium',
    url: 'https://duolingo.com',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    features: [
      'Personalized learning',
      'AI conversation practice',
      'Instant feedback',
      'Adaptive difficulty'
    ]
  },
  {
    id: 'edu-2',
    name: 'Khan Academy GPT',
    description: 'AI tutor for personalized learning across multiple subjects',
    category: 'ai',
    subcategory: 'education',
    tags: ['tutoring', 'education', 'learning'],
    pricing: 'free',
    url: 'https://khanacademy.org',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    features: [
      'Subject explanations',
      'Practice problems',
      'Step-by-step solutions',
      'Progress tracking'
    ]
  }
];