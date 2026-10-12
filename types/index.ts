export interface NavLink {
  label: string;
  href: string;
  children?: Omit<NavLink, "children">[];
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  level: "Certificate" | "Diploma" | "Degree" | "Specialized";
  duration: string;
  description: string;
  shortDescription: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  socialLinks?: {
    email?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  program?: string;
  imageUrl?: string;
}
