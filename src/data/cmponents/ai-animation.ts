import { Tool } from '../../types';

export const aiAnimationTools: Tool[] = [
  {
    id: 'anim-1',
    name: 'Kaiber',
    description: 'Free AI animation tool for creating animated videos and characters',
    category: 'ai',
    subcategory: 'video',
    tags: ['animation', 'cartoon', 'video'],
    pricing: 'free',
    url: 'https://kaiber.ai',
    image: 'https://cdn.sanity.io/images/u0v1th4q/production/cbf13cbf0f0dfd69c3e5e45e38c4c5500c9a1bdf-1920x1080.jpg',
    features: [
      'Character animation',
      'Style transfer',
      'Motion generation',
      'Video synthesis'
    ],
    limitations: [
      'Limited exports per day',
      'Basic resolution in free tier',
      'Community assets only'
    ]
  },
  {
    id: 'anim-2',
    name: 'Artbreeder Collages',
    description: 'Free AI tool for creating and animating artistic compositions',
    category: 'ai',
    subcategory: 'image-generation',
    tags: ['animation', 'art', 'collage'],
    pricing: 'free',
    url: 'https://artbreeder.com/collage',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    features: [
      'Image composition',
      'Style mixing',
      'Animation effects',
      'Character creation'
    ],
    limitations: [
      'Basic features only',
      'Limited export options',
      'Standard resolution'
    ]
  },
  {
    id: 'anim-3',
    name: 'Canva Animation',
    description: 'Free animation tools within Canva with AI-powered features',
    category: 'ai',
    subcategory: 'video',
    tags: ['animation', 'design', 'video'],
    pricing: 'free',
    url: 'https://canva.com/animation',
    image: 'https://static.canva.com/web/images/1492564f3f0d64af432f.jpg',
    features: [
      'Animation templates',
      'Character animation',
      'Text animation',
      'Export to multiple formats'
    ],
    limitations: [
      'Basic animations in free plan',
      'Canva watermark in free version',
      'Limited premium content'
    ]
  },
  {
    id: 'anim-4',
    name: 'Animaker',
    description: 'Free online tool for creating animated videos and characters',
    category: 'ai',
    subcategory: 'video',
    tags: ['animation', 'video', 'characters'],
    pricing: 'free',
    url: 'https://animaker.com',
    image: 'https://www.animaker.com/assets/home/home_new/img/animaker_og_image.jpg',
    features: [
      'Character customization',
      'Animation templates',
      'Scene creation',
      'Voice-over support'
    ],
    limitations: [
      'Limited duration in free plan',
      'Basic resolution',
      'Standard characters only'
    ]
  },
  {
    id: 'anim-5',
    name: 'Wombo Dream',
    description: 'Free AI art generator with animation capabilities',
    category: 'ai',
    subcategory: 'image-generation',
    tags: ['art', 'animation', 'generation'],
    pricing: 'free',
    url: 'https://wombo.art',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    features: [
      'Art generation',
      'Style transfer',
      'Animation effects',
      'Quick export'
    ],
    limitations: [
      'Basic resolution',
      'Limited styles',
      'Standard export options'
    ]
  }
];