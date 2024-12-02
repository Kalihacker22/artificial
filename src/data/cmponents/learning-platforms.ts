import { Tool } from '../../types';

export const learningPlatforms: Tool[] = [
  {
    id: 'learn-1',
    name: 'freeCodeCamp',
    description: 'Free platform for learning web development and programming',
    category: 'website',
    subcategory: 'education',
    tags: ['programming', 'web development', 'learning'],
    pricing: 'free',
    url: 'https://freecodecamp.org',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    features: [
      'Interactive tutorials',
      'Project-based learning',
      'Certification programs',
      'Community support'
    ]
  },
  {
    id: 'learn-2',
    name: 'Coursera',
    description: 'Online learning platform featuring university courses',
    category: 'website',
    subcategory: 'education',
    tags: ['online courses', 'university', 'certificates'],
    pricing: 'freemium',
    url: 'https://coursera.org',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    features: [
      'University partnerships',
      'Professional certificates',
      'Degree programs',
      'Guided projects'
    ]
  }
];