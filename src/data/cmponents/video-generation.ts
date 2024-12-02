import { Tool } from '../../types';

export const videoGenerationTools: Tool[] = [
  {
    id: 'video-1',
    name: 'Runway',
    description: 'Advanced AI video generation and editing platform',
    category: 'ai',
    subcategory: 'video-generation',
    tags: ['video', 'editing', 'generation'],
    pricing: 'freemium',
    url: 'https://runway.ml',
    image: 'https://aianimation.com/wp-content/uploads/2024/01/runway-ml-logo.jpg',
    features: [
      'Text-to-video generation',
      'Video editing tools',
      'Motion tracking',
      'Green screen removal'
    ],
    limitations: [
      'Limited renders per month',
      'Max video length restrictions',
      'Some features premium only'
    ]
  },
  {
    id: 'video-2',
    name: 'Synthesia',
    description: 'Create AI videos with virtual presenters',
    category: 'ai',
    subcategory: 'video-generation',
    tags: ['video', 'avatars', 'presentation'],
    pricing: 'paid',
    url: 'https://synthesia.io',
    image: 'https://ai.bizequals.com/media/com_jbusinessdirectory/pictures/companies/3/synthesia-logo-og.webp',
    features: [
      'AI presenters',
      'Multiple languages',
      'Custom scripts',
      'Brand customization'
    ]
  },
  {
    id: 'video-3',
    name: 'Pictory',
    description: 'Automatically create short-form videos from long content',
    category: 'ai',
    subcategory: 'video-generation',
    tags: ['video', 'automation', 'content repurposing'],
    pricing: 'freemium',
    url: 'https://pictory.ai',
    image: 'https://i0.wp.com/www.amazingathome.com/wp-content/uploads/2023/04/pictoryai_logo_main.jpg?fit=1080%2C1080&ssl=1',
    features: [
      'Content summarization',
      'Auto-captioning',
      'Highlight extraction',
      'Brand customization'
    ],
    limitations: [
      'Limited video exports',
      'Watermark in free plan',
      'Basic editing features'
    ]
  },
  {
    id: 'video-4',
    name: 'Descript Video',
    description: 'AI-powered video editing with text-based editing',
    category: 'ai',
    subcategory: 'video-generation',
    tags: ['video editing', 'transcription', 'collaboration'],
    pricing: 'freemium',
    url: 'https://descript.com/video',
    image: 'https://msofficestore.us/wp-content/uploads/2023/11/Untitled-design-3-4.png',
    features: [
      'Text-based editing',
      'Screen recording',
      'Automatic transcription',
      'Collaboration tools'
    ],
    limitations: [
      'Limited export length',
      'Basic effects in free plan',
      'Watermarked exports'
    ]
  }
];