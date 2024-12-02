export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'ai' | 'website';
  subcategory: 
    | 'research' 
    | 'chatbot' 
    | 'image-generation' 
    | 'video' 
    | 'writing' 
    | 'development' 
    | '3d' 
    | 'project-management' 
    | 'photo-editing'
    | 'audio'
    | 'code'
    | 'data-analysis'
    | 'marketing'
    | 'pdfinteraction'
    | 'productivity'
    | 'education'
    | 'healthcare'
    | 'finance'
    | 'legal'
    | 'security'
    | 'short-film-pre'
    | 'short-film-prod'
    | 'short-film-post'
    | 'music-generation'
    | 'video-generation'
    | 'app-development'
    | 'ai-assistant'
    | 'content-creation'
    | 'automation'
    | 'game-development';
  tags: string[];
  pricing: 'free' | 'paid' | 'freemium';
  url: string;
  image: string;
  features?: string[];
  limitations?: string[];
}