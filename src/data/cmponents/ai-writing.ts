import { Tool } from '../../types';

export const aiWritingTools: Tool[] = [
  {
    id: 'writing-1',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar and style improvement',
    category: 'ai',
    subcategory: 'writing',
    tags: ['writing', 'grammar', 'editing'],
    pricing: 'freemium',
    url: 'https://grammarly.com',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    features: [
      'Grammar checking',
      'Style suggestions',
      'Tone detection',
      'Plagiarism detection'
    ]
  },
  {
    id: 'writing-2',
    name: 'Wordtune',
    description: 'AI writing tool that helps rephrase and improve your writing',
    category: 'ai',
    subcategory: 'writing',
    tags: ['writing', 'rewriting', 'editing'],
    pricing: 'freemium',
    url: 'https://wordtune.com',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    features: [
      'Sentence rewriting',
      'Tone adjustment',
      'Length control',
      'Multiple suggestions'
    ]
  },
  {
    id: 'writing-3',
    name: 'QuillBot',
    description: 'AI writing and paraphrasing tool with multiple writing modes',
    category: 'ai',
    subcategory: 'writing',
    tags: ['writing', 'paraphrasing', 'summarization'],
    pricing: 'freemium',
    url: 'https://quillbot.com',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    features: [
      'Paraphrasing modes',
      'Grammar checker',
      'Citation generator',
      'Summarizer'
    ]
  }
];