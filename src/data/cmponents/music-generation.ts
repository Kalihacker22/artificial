import { Tool } from '../../types';

export const musicGenerationTools: Tool[] = [
  {
    id: 'music-1',
    name: 'Soundraw',
    description: 'AI music generator that creates original, royalty-free music for your content',
    category: 'ai',
    subcategory: 'music-generation',
    tags: ['music', 'audio', 'content creation'],
    pricing: 'freemium',
    url: 'https://soundraw.io',
    image: 'https://pplx-res.cloudinary.com/image/fetch/s--A3qj9Yrg--/t_limit/https://cdn.soundraw.io/soundraw_ogp_EN.png',
    features: [
      'Custom music generation',
      'Multiple genres and moods',
      'Royalty-free licensing',
      'Export in high quality'
    ],
    limitations: [
      'Limited exports in free plan',
      'Some genres locked in free version',
      'Basic editing features only'
    ]
  },
  {
    id: 'music-2',
    name: 'Mubert',
    description: 'AI-powered music streaming and generation platform',
    category: 'ai',
    subcategory: 'music-generation',
    tags: ['music', 'streaming', 'generation'],
    pricing: 'freemium',
    url: 'https://mubert.com',
    image: 'https://www.musicinafrica.net/sites/default/files/styles/article_slider_large/public/images/article/202307/mubert-logo.jpg?itok=GGUnkinu',
    features: [
      'Real-time music generation',
      'Mood-based creation',
      'API access',
      'Commercial licensing'
    ],
    limitations: [
      'Limited duration in free plan',
      'Watermarked exports',
      'Basic customization only'
    ]
  },
  {
    id: 'music-3',
    name: 'Suno.ai',
    description: 'Create original songs with AI using text prompts',
    category: 'ai',
    subcategory: 'music-generation',
    tags: ['music', 'songwriting', 'vocals'],
    pricing: 'freemium',
    url: 'https://suno.ai',
    image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2024/03/suno-ai-1-01-scaled-671f1bad53ed6.webp',
    features: [
      'Text-to-song generation',
      'Multiple vocal styles',
      'Full song arrangement',
      'Lyric generation'
    ],
    limitations: [
      'Limited song length',
      'Queue waiting times',
      'Some voices restricted'
    ]
  }
];