import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-40 pb-20 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">Статья не найдена</h2>
        <Link to="/blog" className="text-gold font-bold">Вернуться в журнал</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Breadcrumb */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-charcoal mb-12 transition-colors text-sm font-medium uppercase tracking-widest mt-8">
          <ChevronLeft className="w-4 h-4" />
          Журнал
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-gold mb-6">
             <span>{post.category}</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span className="text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-y border-gray-100 py-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-charcoal">
                   <User className="w-6 h-6" />
                </div>
                <div className="text-left">
                   <span className="block font-bold text-charcoal">{post.author}</span>
                   <span className="text-xs text-gray-400 uppercase tracking-widest">Старший Аналитик</span>
                </div>
             </div>
             <div className="flex gap-4">
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all"><Facebook className="w-4 h-4" /></button>
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all"><Twitter className="w-4 h-4" /></button>
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all"><Linkedin className="w-4 h-4" /></button>
             </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-[3rem] overflow-hidden mb-16 aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-serif mb-20 text-gray-600 leading-relaxed font-light text-center">
           <p className="text-2xl font-serif text-charcoal mb-8 italic leading-relaxed">
             {post.excerpt}
           </p>
           <p className="mb-6">
             Рынок элитной недвижимости Алматы продолжает демонстрировать устойчивость и рост. В этом обзоре мы рассматриваем ключевые факторы, влияющие на выбор покупателей в премиальном сегменте и даем практические советы по инвестированию.
           </p>
           
           <h3 className="text-3xl font-serif font-bold text-charcoal mt-12 mb-6">Стратегический Подход</h3>
           <p className="mb-6">
             Мы верим, что каждая покупка должна быть обоснована глубоким анализом. В Almaty Luxe мы используем передовые инструменты оценки для обеспечения выгоды наших клиентов.
           </p>
           
           <div className="bg-gray-50 border-l-4 border-gold p-8 my-12 rounded-r-3xl text-center">
              <p className="font-serif italic text-xl text-charcoal mb-0">
                 "Инвестиции в элитную недвижимость — это не просто квадратные метры; это приобретение актива, отражающего ваше наследие и образ жизни."
              </p>
           </div>

           <p className="mb-6">
             Наши эксперты всегда готовы предоставить индивидуальную консультацию и помочь вам найти объект, который идеально соответствует вашим ожиданиям.
           </p>
        </div>

        {/* Related Posts */}
        <div className="pt-20 border-t border-gray-100">
           <div className="flex justify-between items-end mb-12">
              <h3 className="text-3xl font-serif font-bold text-charcoal">Рекомендуемое чтение</h3>
              <Link to="/blog" className="text-gold font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                 Все статьи <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {relatedPosts.map((p) => (
               <BlogCard key={p.id} post={p} />
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
