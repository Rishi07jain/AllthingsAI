export interface AITool {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  categories: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  tools: string[];
  icon: string;
}