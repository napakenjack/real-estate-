export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
  type: 'Residential' | 'Commercial' | 'Luxury' | 'Penthouse';
  features: string[];
  agent: {
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    location: 'Bel Air, Los Angeles',
    price: '$8,500,000',
    beds: 5,
    baths: 6,
    sqft: 6200,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of modern architecture, this villa offers unparalleled views and ultimate privacy in the heart of Bel Air.',
    features: ['Infinite Pool', 'Home Theater', 'Smart Home System', 'Wine Cellar'],
    agent: {
      name: 'Sarah Jenkins',
      role: 'Luxury Specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      phone: '+1 (555) 012-3456',
      email: 'sarah@luxeestate.com'
    }
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    location: 'Manhattan, New York',
    price: '$12,000,000',
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Live above the clouds with panoramic views of the Manhattan skyline in this ultra-exclusive penthouse.',
    features: ['Floor-to-ceiling Windows', 'Private Rooftop Terrace', '24/7 Concierge', 'Valet Parking'],
    agent: {
      name: 'Michael Chen',
      role: 'Urban Property Expert',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
      phone: '+1 (555) 023-4567',
      email: 'michael@luxeestate.com'
    }
  },
  {
    id: '3',
    title: 'Tuscany Inspired Estate',
    location: 'Montecito, California',
    price: '$6,750,000',
    beds: 6,
    baths: 5,
    sqft: 7800,
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'A romantic estate inspired by the rolling hills of Tuscany, featuring lush gardens and exquisite stone work.',
    features: ['Olive Grove', 'Outdoor Kitchen', 'Guest House', 'Tennis Court'],
    agent: {
      name: 'Emma Rodriguez',
      role: 'Estate Specialist',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200',
      phone: '+1 (555) 034-5678',
      email: 'emma@luxeestate.com'
    }
  },
  {
    id: '4',
    title: 'Industrial Loft',
    location: 'DUMBO, Brooklyn',
    price: '$3,200,000',
    beds: 2,
    baths: 2,
    sqft: 2200,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80&w=1200',
    description: 'Perfect blend of industrial history and modern luxury, featuring exposed brick and massive factory windows.',
    features: ['Exposed Brick', 'Custom Chef Kitchen', 'Smart Lighting', 'Yoga Studio'],
    agent: {
      name: 'Michael Chen',
      role: 'Urban Property Expert',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
      phone: '+1 (555) 023-4567',
      email: 'michael@luxeestate.com'
    }
  },
  {
    id: '5',
    title: 'Glass Waterfront Retreat',
    location: 'Miami Beach, Florida',
    price: '$15,400,000',
    beds: 7,
    baths: 8,
    sqft: 9500,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'The pinnacle of Miami luxury with direct ocean access and a design that blurs the lines between indoor and outdoor.',
    features: ['Private Dock', 'Home Gym', 'Steam Room', 'Outdoor Cinema'],
    agent: {
      name: 'Sarah Jenkins',
      role: 'Luxury Specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      phone: '+1 (555) 012-3456',
      email: 'sarah@luxeestate.com'
    }
  },
  {
    id: '6',
    title: 'Mid-Century Modern Gem',
    location: 'Palm Springs, California',
    price: '$2,850,000',
    beds: 3,
    baths: 3,
    sqft: 3100,
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    description: 'Iconic Palm Springs architecture perfectly restored with modern amenities for a timeless desert lifestyle.',
    features: ['Pool House', 'Zero-edge Pool', 'Desert Landscaping', 'Custom Millwork'],
    agent: {
      name: 'Emma Rodriguez',
      role: 'Estate Specialist',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200',
      phone: '+1 (555) 034-5678',
      email: 'emma@luxeestate.com'
    }
  }
];
