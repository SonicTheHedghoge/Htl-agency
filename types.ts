export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  legalAddress?: string;
  city: string;
}

export interface BranchInfo {
  name: string;
  city: string;
  phone: string;
  role: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Destination {
  name: string;
  country: string;
  description: string;
  imageSeed: string;
  tags: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}