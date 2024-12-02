import { Tool } from '../../types';

export const dataAnalysisTools: Tool[] = [
  {
    id: 'data-1',
    name: 'Obviously AI',
    description: 'No-code AI platform for predictive analytics and machine learning',
    category: 'ai',
    subcategory: 'data-analysis',
    tags: ['predictive analytics', 'machine learning', 'no-code'],
    pricing: 'paid',
    url: 'https://obviously.ai',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: ['Automated predictions', 'Data visualization', 'Model deployment']
  },
  {
    id: 'data-2',
    name: 'MindsDB',
    description: 'AI database that brings machine learning to your existing databases',
    category: 'ai',
    subcategory: 'data-analysis',
    tags: ['machine learning', 'databases', 'predictions'],
    pricing: 'freemium',
    url: 'https://mindsdb.com',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    features: ['SQL integration', 'Automated ML', 'Time-series forecasting']
  },
  {
    id: 'data-3',
    name: 'Akkio',
    description: 'No-code AI platform for quick data analysis and predictions',
    category: 'ai',
    subcategory: 'data-analysis',
    tags: ['no-code', 'predictions', 'automation'],
    pricing: 'paid',
    url: 'https://akkio.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: ['Drag-and-drop interface', 'Quick model training', 'API integration']
  }
];