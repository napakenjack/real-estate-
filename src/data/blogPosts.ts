export interface BlogPost {
  id: string;
  title: string;
  category: 'Buying' | 'Selling' | 'Market Insights' | 'Investment';
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Prepare for Your First Luxury Home Purchase',
    category: 'Buying',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Navigating the luxury real estate market requires a different set of strategies and considerations than standard home buying...',
    content: 'Long form content about buying luxury homes...',
    author: 'Sarah Jenkins'
  },
  {
    id: '2',
    title: 'The Hidden Costs of Selling a High-Value Property',
    category: 'Selling',
    date: 'April 22, 2024',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Selling your home involves more than just setting a price. Understanding the full financial picture is crucial for a smooth transaction...',
    content: 'Long form content about selling costs...',
    author: 'Michael Chen'
  },
  {
    id: '3',
    title: 'Real Estate Market Trends to Watch in Q3 2024',
    category: 'Market Insights',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=800',
    excerpt: 'As interest rates stabilize, new patterns are emerging in luxury markets across the United States. Here is what you need to know...',
    content: 'Long form content about market insights...',
    author: 'Emma Rodriguez'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Vance',
    role: 'Home Buyer',
    content: 'The team at LuxeEstate didn\'t just find me a house; they found me a lifestyle. Their attention to detail and market knowledge is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'David Thompson',
    role: 'Property Investor',
    content: 'I\'ve worked with many realtors, but the professionalism and investment guidance I received here was on another level. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Julianne Moore',
    role: 'Home Seller',
    content: 'Selling my estate was a complex process, but they made it look easy. The marketing strategy was brilliant and result spoke for itself.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];
