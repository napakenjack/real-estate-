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
    title: 'Как подготовиться к покупке первой элитной недвижимости',
    category: 'Buying',
    date: '15 мая, 2024',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Навигация по рынку элитной недвижимости требует особого подхода и учета множества факторов, отличных от стандартной покупки...',
    content: 'Длинный контент о покупке элитного жилья...',
    author: 'Айгерим Смагулова'
  },
  {
    id: '2',
    title: 'Скрытые расходы при продаже дорогой недвижимости в Алматы',
    category: 'Selling',
    date: '22 апреля, 2024',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Продажа дома — это больше, чем просто установка цены. Понимание полной финансовой картины критично для успешной сделки...',
    content: 'Контент о расходах при продаже...',
    author: 'Тимур Касымов'
  },
  {
    id: '3',
    title: 'Тренды рынка недвижимости Алматы в 2024 году',
    category: 'Market Insights',
    date: '10 марта, 2024',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Рынок Алматы показывает новые паттерны развития в премиальном сегменте. Вот что вам нужно знать сегодня...',
    content: 'Контент о трендах рынка...',
    author: 'Динара Альжанова'
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
    name: 'Александра Ким',
    role: 'Покупатель дома',
    content: 'Команда Almaty Luxe не просто нашла мне дом; они нашли мне стиль жизни. Внимание к деталям и знание рынка просто поразительны.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Данияр Ибрагимов',
    role: 'Инвестор',
    content: 'Я работал со многими риелторами, но уровень профессионализма и инвестиционных советов здесь на другом уровне. Рекомендую.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Юлия Моренко',
    role: 'Продавец недвижимости',
    content: 'Продажа моего поместья была сложным процессом, но они сделали это легко. Маркетинговая стратегия была великолепной.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];
