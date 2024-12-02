import { Tool } from '../../types';

export const audioTools: Tool[] = [
  {
    id: 'audio-1',
    name: 'Descript',
    description: 'AI-powered audio and video editor with transcription capabilities',
    category: 'ai',
    subcategory: 'audio',
    tags: ['audio editing', 'transcription', 'podcast'],
    pricing: 'freemium',
    url: 'https://descript.com',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    features: ['Text-based editing', 'Voice cloning', 'Studio sound']
  },
  {
    id: 'audio-2',
    name: 'Murf',
    description: 'AI voice generator and text-to-speech platform',
    category: 'ai',
    subcategory: 'audio',
    tags: ['text-to-speech', 'voice synthesis', 'voiceover'],
    pricing: 'freemium',
    url: 'https://murf.ai',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    features: ['100+ voices', 'Multiple languages', 'Voice customization']
  },
  {
    id: 'audio-3',
    name: 'Adobe Podcast',
    description: 'AI-enhanced audio recording and enhancement tool',
    category: 'ai',
    subcategory: 'audio',
    tags: ['podcast', 'audio enhancement', 'recording'],
    pricing: 'free',
    url: 'https://podcast.adobe.com',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    features: ['Noise reduction', 'Echo removal', 'Speech enhancement']
  }
];