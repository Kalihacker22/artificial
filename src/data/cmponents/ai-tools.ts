import { Tool } from '../../types';

export const aiTools: Tool[] = [
  {
    id: 'ai-1',
    name: 'GPT-4',
    description: 'Advanced language model for complex tasks and reasoning',
    category: 'ai',
    subcategory: 'chatbot',
    tags: ['language', 'writing', 'coding'],
    pricing: 'paid',
    url: 'https://openai.com/gpt-4',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    features: ['Advanced reasoning', 'Code generation', 'Creative writing']
  },
  {
    id: 'ai-2',
    name: 'Claude 2',
    description: 'AI assistant with strong analysis and writing capabilities',
    category: 'ai',
    subcategory: 'chatbot',
    tags: ['analysis', 'writing', 'research'],
    pricing: 'freemium',
    url: 'https://anthropic.com/claude',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    features: ['Long context window', 'Academic writing', 'Data analysis']
  },
  // Add more AI tools here...
];