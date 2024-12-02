import { Tool } from '../../types';

export const aiAssistants: Tool[] = [
  {
    id: 'assistant-1',
    name: 'Bard',
    description: 'Google\'s AI assistant for creative writing, analysis, and coding',
    category: 'ai',
    subcategory: 'ai-assistant',
    tags: ['writing', 'analysis', 'coding'],
    pricing: 'free',
    url: 'https://bard.google.com',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    features: [
      'Code generation',
      'Creative writing',
      'Data analysis',
      'Multi-modal capabilities'
    ]
  },
  {
    id: 'assistant-2',
    name: 'Pi by Inflection',
    description: 'Personal AI assistant with natural conversation abilities',
    category: 'ai',
    subcategory: 'ai-assistant',
    tags: ['personal assistant', 'conversation', 'learning'],
    pricing: 'free',
    url: 'https://pi.ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    features: [
      'Natural conversations',
      'Personalized responses',
      'Memory of past interactions',
      'Knowledge sharing'
    ]
  }
];