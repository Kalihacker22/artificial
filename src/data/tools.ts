import { Tool } from '../types';
import { aiResearchTools } from './categories/ai-research';
import { websiteBuilders } from './categories/website-builders';
import { projectManagementTools } from './categories/project-management';
import { threeDWebTools } from './categories/3d-websites';
import { freeMediaTools } from './categories/free-media-tools';
import { securityTools } from './categories/security-tools';
import { marketingTools } from './categories/marketing-tools';
import { productivityTools } from './categories/productivity-tools';
import { dataAnalysisTools } from './categories/data-analysis-tools';
import { codeAssistanceTools } from './categories/code-assistance-tools';
import { audioTools } from './categories/audio-tools';
import { pdfinteraction } from './categories/pdf-interaction';
import { shortFilmTools } from './categories/short-film-tools';
import { musicGenerationTools } from './categories/music-generation';
import { videoGenerationTools } from './categories/video-generation';
import { appDevelopmentTools } from './categories/app-development';
import { modernAiTools } from './categories/modern-ai-tools';
import { gameDevelopmentTools } from './categories/game-development';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for conversation and content generation',
    category: 'ai',
    subcategory: 'chatbot',
    tags: ['chatbot', 'writing', 'coding'],
    pricing: 'freemium',
    url: 'https://chat.openai.com',
    image: 'https://cdn-bdfbc.nitrocdn.com/mpQHUpeCagYMmyclYzWrEuJOvwEOajTJ/assets/images/optimized/rev-8697898/www.unimedia.tech/wp-content/uploads/2023/12/openAI-chat-gpt-1-4-1024x623.jpg'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation from text descriptions',
    category: 'ai',
    subcategory: 'image-generation',
    tags: ['image', 'art', 'design'],
    pricing: 'paid',
    url: 'https://midjourney.com',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQG77Rlgtqa93g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1704255099294?e=2147483647&v=beta&t=dew3cfOMUoD6BkoCfA0-wdJ3qlNcB6yh5QuPlDAJqn4'
  },
  {
    id: '3',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, and collaboration',
    category: 'website',
    subcategory: 'project-management',
    tags: ['productivity', 'organization', 'collaboration'],
    pricing: 'freemium',
    url: 'https://notion.so',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vLysTO1Z3RxGQRv4Q9dlAHx2E33tteGUlg&s'
  },
  {
    id: '4',
    name: 'DALL-E',
    description: 'Create realistic images and art from natural language descriptions',
    category: 'ai',
    subcategory: 'image-generation',
    tags: ['image generation', 'art', 'design'],
    pricing: 'paid',
    url: 'https://openai.com/dall-e-2',
    image: 'https://thinglabs.io/wp-content/uploads/dall-e-logo1.png'
  },
  {
    id: '5',
    name: 'Jasper',
    description: 'AI writing assistant for marketing copy and content creation',
    category: 'ai',
    subcategory: 'writing',
    tags: ['writing', 'marketing', 'content'],
    pricing: 'paid',
    url: 'https://jasper.ai',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '13',
    name: 'ChatPDF',
    description: 'Allow you to interact with PDFs using AI to get answers to questions, summaries, and more ',
    category: 'ai',
    subcategory: 'research',
    tags: ['PDF Reader', 'writing', 'summarizig', 'Document Interacting'],
    pricing: 'free',
    url: 'https://www.chatpdf.com/',
    image: 'https://10web.io/wp-content/uploads/2024/07/ChatPDF.png'
  },
  {
    id: '6',
    name: 'Stable Diffusion',
    description: 'Open-source image generation model',
    category: 'ai',
    subcategory: 'image-generation',
    tags: ['image generation', 'art'],
    pricing: 'free',
    url: 'https://stability.ai',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*Rbq9cDCJpGq7HKeNAeIitg.jpeg'
  },
  {
    id: '7',
    name: 'Copy.ai',
    description: 'AI-powered copywriting tool for marketing and content',
    category: 'ai',
    subcategory: 'writing',
    tags: ['writing', 'marketing'],
    pricing: 'freemium',
    url: 'https://copy.ai',
    image: 'https://cdn.prod.website-files.com/628288c5cd3e8451380a36c7/649f3be5d6633f87a930d6d4_channels4_profile.jpg'
  },
  {
    id: '8',
    name: 'Anthropic Claude',
    description: 'Advanced AI assistant for analysis and writing',
    category: 'ai',
    subcategory: 'chatbot',
    tags: ['chatbot', 'writing', 'analysis'],
    pricing: 'freemium',
    url: 'https://claude.ai',
    image: 'https://i.gadgets360cdn.com/large/claude_logo_1730712169271.jpg'
  },
  {
    id: '9',
    name: 'Figma',
    description: 'Collaborative interface design tool',
    category: 'website',
    subcategory: 'development',
    tags: ['design', 'collaboration', 'prototyping'],
    pricing: 'freemium',
    url: 'https://figma.com',
    image: 'https://img.uxcel.com/tags/figma-1698087967030-2x.jpg'
  },
  {
    id: '10',
    name: 'Canva',
    description: 'Online graphic design platform',
    category: 'website',
    subcategory: 'development',
    tags: ['design', 'graphics', 'templates'],
    pricing: 'freemium',
    url: 'https://canva.com',
    image: 'https://logos-world.net/wp-content/uploads/2020/02/Canva-Logo.png'
  },
  {
    id: '11',
    name: 'GitHub',
    description: 'Version control and collaboration platform for developers',
    category: 'website',
    subcategory: 'development',
    tags: ['development', 'collaboration', 'code'],
    pricing: 'freemium',
    url: 'https://github.com',
    image: 'https://github.blog/wp-content/uploads/2023/01/1200x640-2.png?fit=1200%2C640'
  },
  {
    id: '12',
    name: 'Perplexity',
    description: 'Free AI Search engine, revolutionize the way you discover information, Do deep research on any topic. ',
    category: 'ai',
    subcategory: 'research',
    tags: ['chatbot', 'writing', 'research'],
    pricing: 'free',
    url: 'https://www.perplexity.ai/',
    image: 'https://assets.bizclikmedia.net/1336/b9c92286e658119663b97a2267aee9d1:b7f93fa59523b14569bb4b668bb2297b/perplexity-logo.webp'
  },
  // ... (rest of the existing tools)
  ...aiResearchTools,
  ...websiteBuilders,
  ...projectManagementTools,
  ...threeDWebTools,
  ...freeMediaTools,
  ...securityTools,
  ...marketingTools,
  ...productivityTools,
  ...dataAnalysisTools,
  ...codeAssistanceTools,
  ...audioTools,
  ...pdfinteraction,
  ...shortFilmTools,
  ...musicGenerationTools,
  ...videoGenerationTools,
  ...appDevelopmentTools,
  ...modernAiTools,
  ...gameDevelopmentTools
];