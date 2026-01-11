import React from 'react';

export interface PricingOption {
  title: string;
  price: string;
  description?: string;
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode; // Using Lucide icon components
  color: 'blue' | 'red' | 'yellow' | 'green';
  pricing: PricingOption[];
  image?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}