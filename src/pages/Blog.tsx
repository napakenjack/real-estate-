import React, { useState } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Buying', 'Selling', 'Market Insights', 'Investment'];
  
  const categoryNames: Record<string, string> = {
    'All': 'Все',
    'Buying': 'Покупка',
    'Selling': 'Продажа',
    'Market Insights': 'Аналитика',
    'Investment': 'Инвестиции'
  };

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Наш Журнал</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">Рыночная <span className="italic">Аналитика</span> & Советы</h1>
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            Оставайтесь в курсе последних тенденций рынка элитной недвижимости Алматы и мира вместе с нашими экспертными гайдами.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-charcoal text-white border-charcoal shadow-xl' 
                  : 'bg-white text-gray-500 border-gray-100 hover:border-gold hover:text-gold'
              }`}
            >
              {categoryNames[cat] || cat}
            </button>
          ))}
        </div>

        {/* Featured Post (Hero style if available) */}
        {activeCategory === 'All' && (
           <div className="mb-20 group relative overflow-hidden rounded-[3rem] aspect-video max-h-[500px]">
              <img src="https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Featured" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
              <div className="absolute bottom-12 left-12 max-w-2xl text-white">
                 <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Избранное</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Навигация по глобальному рынку недвижимости в 2024 году</h2>
                 <button className="text-gold font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">Читать полный отчет</button>
              </div>
           </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Newsletter In-feed */}
        <div className="mt-32 bg-gray-50 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="max-w-xl">
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">Не пропустите важное</h3>
              <p className="text-gray-500 text-lg font-light text-center lg:text-left">Присоединяйтесь к нашему кругу подписчиков, чтобы получать отчеты о рынке дважды в неделю.</p>
           </div>
           <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Email адрес" className="bg-white border-none rounded-2xl px-8 py-5 outline-none w-full sm:w-80 shadow-sm focus:ring-1 focus:ring-gold" />
              <button className="bg-gold text-charcoal px-10 py-5 rounded-2xl font-bold hover:bg-charcoal hover:text-white transition-all shadow-lg">Подписаться</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
