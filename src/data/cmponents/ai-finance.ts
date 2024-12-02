import { Tool } from '../../types';

export const aiFinanceTools: Tool[] = [
  {
    id: 'finance-1',
    name: 'TradingView',
    description: 'AI-enhanced trading platform with advanced analytics',
    category: 'ai',
    subcategory: 'finance',
    tags: ['trading', 'analytics', 'finance'],
    pricing: 'freemium',
    url: 'https://tradingview.com',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    features: [
      'Technical analysis',
      'AI price predictions',
      'Trading signals',
      'Market insights'
    ]
  },
  {
    id: 'finance-2',
    name: 'Plaid',
    description: 'AI-powered financial data platform and analysis',
    category: 'ai',
    subcategory: 'finance',
    tags: ['banking', 'fintech', 'data'],
    pricing: 'paid',
    url: 'https://plaid.com',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Financial data analysis',
      'Risk assessment',
      'Transaction categorization',
      'Banking insights'
    ]
  }
];