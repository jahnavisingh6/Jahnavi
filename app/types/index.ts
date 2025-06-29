export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  tools: string[];
  tags: string[];
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
} 