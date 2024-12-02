import { Tool } from '../../types';

export const shortFilmTools: Tool[] = [
  {
    id: 'film-pre-1',
    name: 'Milanote',
    description: 'Visual planning tool for storyboarding and organizing film projects',
    category: 'website',
    subcategory: 'short-film-pre',
    tags: ['pre-production', 'storyboard', 'planning'],
    pricing: 'freemium',
    url: 'https://milanote.com',
    image: 'https://tonyballantyne.com/wp-content/uploads/2024/09/1e624-milanote-logo.png?w=600',
    features: ['Visual boards', 'Collaboration', 'File organization', 'Templates'],
    limitations: ['100 elements per project', 'Limited file uploads', '10 images per project']
  },
  {
    id: 'film-pre-2',
    name: 'Celtx',
    description: 'Scriptwriting and pre-production planning platform',
    category: 'website',
    subcategory: 'short-film-pre',
    tags: ['pre-production', 'scriptwriting', 'planning'],
    pricing: 'freemium',
    url: 'https://celtx.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hi_Res_white_on_black_celtx_logo.jpg',
    features: ['Script editor', 'Storyboard tools', 'Production scheduling'],
    limitations: ['3 projects', 'Basic formatting', 'Limited collaboration']
  },
  {
    id: 'film-prod-1',
    name: 'OpenShot',
    description: 'Free, open-source video editor with professional features',
    category: 'website',
    subcategory: 'short-film-prod',
    tags: ['production', 'video editing', 'open source'],
    pricing: 'free',
    url: 'https://openshot.org',
    image: 'https://i.ytimg.com/vi/4DVlgFsW9xQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZGi-MmLqP8Ys3ofnlaoE1y-kkAQ',
    features: ['Multi-track editing', 'Animation tools', 'Audio mixing', '3D titles'],
    limitations: ['Basic effects library', 'Limited codec support']
  },
  {
    id: 'film-prod-2',
    name: 'DaVinci Resolve',
    description: 'Professional-grade video editing software with powerful free version',
    category: 'website',
    subcategory: 'short-film-prod',
    tags: ['production', 'video editing', 'color grading'],
    pricing: 'freemium',
    url: 'https://www.blackmagicdesign.com/products/davinciresolve',
    image: 'https://blog.frame.io/wp-content/uploads/2023/02/insider-tips-resolve.jpg',
    features: ['Professional editing', 'Color correction', 'Audio post', 'Visual effects'],
    limitations: ['4K export limit', 'Limited collaboration', 'Some effects restricted']
  },
  {
    id: 'film-post-1',
    name: 'Audacity',
    description: 'Free, open-source audio editor for post-production sound',
    category: 'website',
    subcategory: 'short-film-post',
    tags: ['post-production', 'audio editing', 'sound mixing'],
    pricing: 'free',
    url: 'https://www.audacityteam.org',
    image: 'https://www.vice.com/wp-content/uploads/sites/2/2021/07/1625512301147-copy-of-post-w-gradient-background-22.jpeg',
    features: ['Multi-track audio', 'Effects library', 'Noise reduction', 'Audio restoration'],
    limitations: ['Basic interface', 'Limited plugin support']
  },
  {
    id: 'film-post-2',
    name: 'VSDC Free Video Editor',
    description: 'Feature-rich video editor for post-production',
    category: 'website',
    subcategory: 'short-film-post',
    tags: ['post-production', 'video editing', 'effects'],
    pricing: 'freemium',
    url: 'http://www.videosoftdev.com',
    image: 'https://legisvideo.com/logos/vsdcvideoeditor.png',
    features: ['Non-linear editing', 'Visual effects', 'Color correction', 'Audio tools'],
    limitations: ['No hardware acceleration', 'Limited format support']
  },
  {
    id: 'film-post-3',
    name: 'Kapwing',
    description: 'Online video editor with collaborative features',
    category: 'website',
    subcategory: 'short-film-post',
    tags: ['post-production', 'online editing', 'collaboration'],
    pricing: 'freemium',
    url: 'https://www.kapwing.com',
    image: 'https://www.kapwing.com/help/content/images/2022/12/Copy_of_Kapwing-s_Refund_Policy.jpeg',
    features: ['Cloud editing', 'Templates', 'Subtitles', 'Team collaboration'],
    limitations: ['Watermark in free version', '250MB file limit', 'Limited storage']
  }
];