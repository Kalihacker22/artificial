import { Tool } from '../../types';

export const designResources: Tool[] = [
  {
    id: 'design-1',
    name: 'Dribbble',
    description: 'Design inspiration and community platform',
    category: 'website',
    subcategory: 'development',
    tags: ['design', 'inspiration', 'community'],
    pricing: 'freemium',
    url: 'https://dribbble.com',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    features: [
      'Design portfolios',
      'Job board',
      'Design resources',
      'Community feedback'
    ]
  },
  {
    id: 'design-2',
    name: 'Behance',
    description: 'Creative portfolio platform and job discovery',
    category: 'website',
    subcategory: 'development',
    tags: ['design', 'portfolio', 'creative'],
    pricing: 'free',
    url: 'https://behance.net',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800',
    features: [
      'Creative showcases',
      'Creative jobs',
      'Project discovery',
      'Adobe integration'
    ]
  }
];