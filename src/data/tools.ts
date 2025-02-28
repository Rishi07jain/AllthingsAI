import { AITool, Category, Package } from '../types';
import { 
  Code, 
  Image, 
  MessageSquare, 
  FileText, 
  Video, 
  Music, 
  Database, 
  Layout, 
  Sparkles, 
  Zap, 
  Rocket, 
  Lightbulb
} from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'text-generation',
    name: 'Text Generation',
    description: 'Tools for generating and manipulating text content',
    icon: 'MessageSquare'
  },
  {
    id: 'image-generation',
    name: 'Image Generation',
    description: 'Create and edit images with AI',
    icon: 'Image'
  },
  {
    id: 'code-generation',
    name: 'Code Generation',
    description: 'AI-powered coding assistants and tools',
    icon: 'Code'
  },
  {
    id: 'document-processing',
    name: 'Document Processing',
    description: 'Extract and process information from documents',
    icon: 'FileText'
  },
  {
    id: 'video-generation',
    name: 'Video Generation',
    description: 'Create and edit videos with AI',
    icon: 'Video'
  },
  {
    id: 'audio-generation',
    name: 'Audio Generation',
    description: 'Generate music, voice, and audio effects',
    icon: 'Music'
  },
  {
    id: 'database',
    name: 'Database & Storage',
    description: 'AI-powered database and storage solutions',
    icon: 'Database'
  },
  {
    id: 'ui-design',
    name: 'UI Design',
    description: 'Design interfaces and experiences with AI',
    icon: 'Layout'
  }
];

export const aiTools: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced language model for conversation and content generation',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    url: 'https://chat.openai.com',
    categories: ['text-generation'],
    isPopular: true
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI art generator that creates images from textual descriptions',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png',
    url: 'https://www.midjourney.com',
    categories: ['image-generation'],
    isPopular: true
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster',
    logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    url: 'https://github.com/features/copilot',
    categories: ['code-generation'],
    isPopular: true
  },
  {
    id: 'dall-e',
    name: 'DALL-E',
    description: 'Creates images from textual descriptions',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/DALL-E_Logo.png',
    url: 'https://openai.com/dall-e-3',
    categories: ['image-generation'],
    isPopular: true
  },
  {
    id: 'vercel-ai',
    name: 'Vercel AI SDK',
    description: 'Build AI-powered applications with React and Vercel',
    logo: 'https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png',
    url: 'https://sdk.vercel.ai/docs',
    categories: ['code-generation'],
    isNew: true
  },
  {
    id: 'anthropic-claude',
    name: 'Claude',
    description: 'Advanced AI assistant for text generation and analysis',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Anthropic_Logo.svg/1200px-Anthropic_Logo.svg.png',
    url: 'https://www.anthropic.com/claude',
    categories: ['text-generation'],
    isNew: true
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'Platform for building, training and deploying ML models',
    logo: 'https://huggingface.co/front/assets/huggingface_logo.svg',
    url: 'https://huggingface.co',
    categories: ['text-generation', 'image-generation', 'code-generation'],
    isPopular: true
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'AI magic tools for video editing and generation',
    logo: 'https://images.ctfassets.net/9tp4nDTgA28l/7oUKvUiLNNui7Mue2CvVs7/3a3294fed36398aee8153a2cbb4a89db/logo.svg',
    url: 'https://runwayml.com',
    categories: ['video-generation', 'image-generation'],
    isNew: true
  },
  {
    id: 'eleven-labs',
    name: 'ElevenLabs',
    description: 'AI voice generator and text to speech platform',
    logo: 'https://images.ctfassets.net/ozvjkvutowwg/5pxXxkBc2EbYgGtYbqxSzs/9e7a0f5a9a45a3bd9f782f40f0917853/elevenlabs-logo.png',
    url: 'https://elevenlabs.io',
    categories: ['audio-generation'],
    isNew: true
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Open source Firebase alternative with AI features',
    logo: 'https://supabase.com/dashboard/img/supabase-logo.svg',
    url: 'https://supabase.com',
    categories: ['database'],
    isPopular: true
  },
  {
    id: 'v0',
    name: 'v0',
    description: 'Design and generate production-ready UI components',
    logo: 'https://v0.dev/favicon.svg',
    url: 'https://v0.dev',
    categories: ['ui-design', 'code-generation'],
    isNew: true
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    description: 'Vector database for machine learning applications',
    logo: 'https://www.pinecone.io/images/pinecone-logo.svg',
    url: 'https://www.pinecone.io',
    categories: ['database'],
    isPopular: true
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Run machine learning models with an API',
    logo: 'https://replicate.com/static/favicon.e724e88d6949.png',
    url: 'https://replicate.com',
    categories: ['image-generation', 'video-generation', 'text-generation'],
    isPopular: true
  },
  {
    id: 'langchain',
    name: 'LangChain',
    description: 'Framework for developing applications powered by language models',
    logo: 'https://avatars.githubusercontent.com/u/126733545',
    url: 'https://www.langchain.com',
    categories: ['text-generation', 'code-generation'],
    isPopular: true
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides accurate answers',
    logo: 'https://www.perplexity.ai/favicon.ico',
    url: 'https://www.perplexity.ai',
    categories: ['text-generation'],
    isNew: true
  },
  {
    id: 'stability-ai',
    name: 'Stability AI',
    description: 'Open source generative AI models for images and more',
    logo: 'https://stability.ai/assets/images/stability-ai-logo.svg',
    url: 'https://stability.ai',
    categories: ['image-generation'],
    isPopular: true
  }
];

export const packages: Package[] = [
  {
    id: 'hackathon',
    name: 'Hackathon Package',
    description: 'Essential AI tools for building a project in a 24-hour hackathon',
    tools: ['github-copilot', 'vercel-ai', 'chatgpt', 'midjourney', 'supabase', 'v0', 'langchain'],
    icon: 'Rocket'
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    description: 'Tools for creating engaging content across multiple formats',
    tools: ['chatgpt', 'midjourney', 'dall-e', 'runway', 'eleven-labs'],
    icon: 'Sparkles'
  },
  {
    id: 'developer',
    name: 'Developer Toolkit',
    description: 'AI-powered tools to supercharge your development workflow',
    tools: ['github-copilot', 'vercel-ai', 'huggingface', 'supabase', 'langchain'],
    icon: 'Code'
  },
  {
    id: 'startup',
    name: 'Startup Essentials',
    description: 'AI tools to help launch and grow your startup',
    tools: ['chatgpt', 'v0', 'supabase', 'github-copilot', 'midjourney'],
    icon: 'Lightbulb'
  }
];

export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'MessageSquare': return MessageSquare;
    case 'Image': return Image;
    case 'Code': return Code;
    case 'FileText': return FileText;
    case 'Video': return Video;
    case 'Music': return Music;
    case 'Database': return Database;
    case 'Layout': return Layout;
    default: return Sparkles;
  }
};

export const getPackageIcon = (iconName: string) => {
  switch (iconName) {
    case 'Rocket': return Rocket;
    case 'Sparkles': return Sparkles;
    case 'Code': return Code;
    case 'Lightbulb': return Lightbulb;
    default: return Zap;
  }
};