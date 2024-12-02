import { Tool } from '../../types';

export const securityTools: Tool[] = [
  {
    id: 'sec-1',
    name: 'Darktrace',
    description: 'Enterprise-grade AI cybersecurity platform that uses machine learning to detect and respond to threats in real-time',
    category: 'ai',
    subcategory: 'security',
    tags: ['cybersecurity', 'threat detection', 'enterprise'],
    pricing: 'paid',
    url: 'https://darktrace.com',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    features: ['Real-time threat detection', 'Autonomous response', 'Network visualization']
  },
  {
    id: 'sec-2',
    name: 'CrowdStrike',
    description: 'AI-powered endpoint protection platform that prevents, detects, and responds to cyber attacks',
    category: 'ai',
    subcategory: 'security',
    tags: ['endpoint security', 'threat hunting', 'incident response'],
    pricing: 'paid',
    url: 'https://crowdstrike.com',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    features: ['Endpoint protection', 'Threat intelligence', 'Automated remediation']
  },
  {
    id: 'sec-3',
    name: 'Cybereason',
    description: 'AI-driven security platform that provides endpoint detection and response',
    category: 'ai',
    subcategory: 'security',
    tags: ['endpoint security', 'malware protection', 'ransomware'],
    pricing: 'paid',
    url: 'https://cybereason.com',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
    features: ['Behavioral analysis', 'Automated investigation', 'Multi-layered prevention']
  },
  {
    id: 'sec-4',
    name: 'PentestGPT',
    description: 'Command line tool, integrating seamlessly into the workflows of penetration testers and hackers',
    category: 'ai',
    subcategory: 'security',
    tags: ['penetration testing', 'hacking', 'cyber security'],
    pricing: 'free',
    url: 'https://pentestgpt.ai/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhVJc0Es6euRQdi0fDP_799wA6I8caAa9ZeXyN_S8JAT9SiPNEXDdytsMtxrY-VKX3IQ&usqp=CAU',
    features: ['Automation Pentest', 'Automated investigation', 'AI ChatBot']
  }
];