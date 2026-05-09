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
    title: 'Современная Вилла в Медеу',
    location: 'Медеуский район, Алматы',
    price: '450,000,000 ₸',
    beds: 5,
    baths: 6,
    sqft: 580,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'Шедевр современной архитектуры, эта вилла предлагает непревзойденный вид на горы Заилийского Алатау и абсолютную приватность.',
    features: ['Инфинити бассейн', 'Домашний кинотеатр', 'Система Умный дом', 'Винный погреб'],
    agent: {
      name: 'Айгерим Смагулова',
      role: 'Специалист по роскоши',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      phone: '+7 (701) 123-4567',
      email: 'aigerim@almatyluxe.kz'
    }
  },
  {
    id: '2',
    title: 'Пентхаус в Esentai City',
    location: 'Пр. Аль-Фараби, Алматы',
    price: '820,000,000 ₸',
    beds: 4,
    baths: 4.5,
    sqft: 420,
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Жизнь выше облаков с панорамным видом на город и горы в этом эксклюзивном пентхаусе самого престижного района.',
    features: ['Окна в пол', 'Собственная терраса', '24/7 Консьерж', 'Премиальный паркинг'],
    agent: {
      name: 'Тимур Касымов',
      role: 'Эксперт городской недвижимости',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
      phone: '+7 (702) 234-5678',
      email: 'timur@almatyluxe.kz'
    }
  },
  {
    id: '3',
    title: 'Поместье в Ремизовке',
    location: 'Бостандыкский район, Алматы',
    price: '380,000,000 ₸',
    beds: 6,
    baths: 5,
    sqft: 720,
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'Романтичное поместье, вдохновленное классическим стилем, с пышными садами и изысканной отделкой натуральным камнем.',
    features: ['Сад с фонтаном', 'Летняя кухня', 'Гостевой дом', 'Теннисный корт'],
    agent: {
      name: 'Динара Альжанова',
      role: 'Эксперт загородной недвижимости',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200',
      phone: '+7 (777) 345-6789',
      email: 'dinara@almatyluxe.kz'
    }
  },
  {
    id: '4',
    title: 'Лофт в "Золотом Квадрате"',
    location: 'Центр, Алматы',
    price: '125,000,000 ₸',
    beds: 2,
    baths: 2,
    sqft: 180,
    type: 'Luxury',
    image: 'https://plus.unsplash.com/premium_photo-1776286130119-35577420205b?q=80&w=1470&auto=format&fit=crop',
    description: 'Идеальное сочетание истории и современного люкса в самом сердце старого центра города.',
    features: ['Кирпичные стены', 'Кухня шеф-повара', 'Умное освещение', 'Студия йоги'],
    agent: {
      name: 'Тимур Касымов',
      role: 'Эксперт городской недвижимости',
      image: 'https://plus.unsplash.com/premium_photo-1776286130119-35577420205b?q=80&w=1470&auto=format&fit=crop',
      phone: '+7 (702) 234-5678',
      email: 'timur@almatyluxe.kz'
    }
  },
  {
    id: '5',
    title: 'Резиденция в Горном Гиганте',
    location: 'Бостандыкский район, Алматы',
    price: '950,000,000 ₸',
    beds: 7,
    baths: 8,
    sqft: 850,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'Вершина роскоши в Алматы с уникальным дизайном, стирающим границы между интерьером и природой.',
    features: ['Домашний спортзал', 'Хамам', 'Открытый кинотеатр', 'Бильярдная'],
    agent: {
      name: 'Айгерим Смагулова',
      role: 'Специалист по роскоши',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      phone: '+7 (701) 123-4567',
      email: 'aigerim@almatyluxe.kz'
    }
  },
  {
    id: '6',
    title: 'Коттедж в Ерменсае',
    location: 'Верхняя часть города, Алматы',
    price: '210,000,000 ₸',
    beds: 3,
    baths: 3,
    sqft: 280,
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    description: 'Современный дом в экологически чистом районе, идеально подходящий для тихой семейной жизни вдали от шума города.',
    features: ['Бассейн', 'Ландшафтный дизайн', 'Панорамный вид', 'Гараж на 2 авто'],
    agent: {
      name: 'Динара Альжанова',
      role: 'Эксперт загородной недвижимости',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200',
      phone: '+7 (777) 345-6789',
      email: 'dinara@almatyluxe.kz'
    }
  }
];
