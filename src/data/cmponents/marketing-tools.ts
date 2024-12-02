import { Tool } from '../../types';

export const marketingTools: Tool[] = [
  {
    id: 'mkt-1',
    name: 'MarketMuse',
    description: 'AI content planning and optimization platform for content marketing',
    category: 'ai',
    subcategory: 'marketing',
    tags: ['content marketing', 'SEO', 'content strategy'],
    pricing: 'paid',
    url: 'https://marketmuse.com',
    image: 'https://mms-app.s3.amazonaws.com/wordpress/2021/06/15120226/marketmuse-share.png',
    features: ['Content optimization', 'Topic research', 'Competitive analysis']
  },
  {
    id: 'mkt-2',
    name: 'Persado',
    description: 'AI-powered marketing language platform that generates and optimizes marketing copy',
    category: 'ai',
    subcategory: 'marketing',
    tags: ['copywriting', 'optimization', 'personalization'],
    pricing: 'paid',
    url: 'https://persado.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    features: ['Message generation', 'Emotional analysis', 'Performance tracking']
  },
  {
    id: 'mkt-3',
    name: 'Phrasee',
    description: 'AI copywriting tool specialized in email marketing and social media',
    category: 'ai',
    subcategory: 'marketing',
    tags: ['email marketing', 'social media', 'copywriting'],
    pricing: 'paid',
    url: 'https://phrasee.co',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800',
    features: ['Email subject lines', 'Social media copy', 'Brand voice customization']
  }
];