import { Tool } from '../../types';

export const productivityTools: Tool[] = [
  {
    id: 'prod-1',
    name: 'Otter.ai',
    description: 'AI-powered meeting transcription and note-taking assistant',
    category: 'ai',
    subcategory: 'productivity',
    tags: ['transcription', 'meetings', 'notes'],
    pricing: 'freemium',
    url: 'https://otter.ai',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    features: ['Real-time transcription', 'Meeting summaries', 'Collaboration']
  },
  {
    id: 'prod-2',
    name: 'Motion',
    description: 'AI calendar and task management tool that automatically schedules your work',
    category: 'ai',
    subcategory: 'productivity',
    tags: ['calendar', 'task management', 'scheduling'],
    pricing: 'paid',
    url: 'https://motion.app',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    features: ['Smart scheduling', 'Task prioritization', 'Time blocking']
  },
  {
    id: 'prod-3',
    name: 'Mem.ai',
    description: 'AI-powered workspace that helps organize and connect your notes and knowledge',
    category: 'ai',
    subcategory: 'productivity',
    tags: ['notes', 'knowledge management', 'organization'],
    pricing: 'freemium',
    url: 'https://mem.ai',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    features: ['Knowledge graphs', 'Smart search', 'Automated organization']
  }
];