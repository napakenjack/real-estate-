import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Map, Users, TrendingUp, Search, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '@/components/PropertyCard';
import BlogCard from '@/components/BlogCard';
import TestimonialCard from '@/components/TestimonialCard';
import { properties } from '@/data/properties';
import { blogPosts, testimonials } from '@/data/blogPosts';

const Home = () => {
  const featuredProperties = properties.slice(0, 6);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Home"
            className="w-full h-full object-cover scale-105 motion-safe:animate-[zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm">Элитная Недвижимость</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Найдите свою идеальную недвижимость с <span className="italic text-gold">проверенными</span> экспертами
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-light">
              Помогаем элитным клиентам покупать, продавать и инвестировать в самые эксклюзивные объекты премиум-класса в Алматы.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/properties"
                className="bg-gold text-charcoal px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Смотреть объекты
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-charcoal transition-all flex items-center justify-center gap-2"
              >
                Консультация
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-gold">10+</span>
                <span className="text-sm font-medium text-gray-300 uppercase tracking-widest leading-loose">Лет опыта</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gold">500+</span>
                <span className="text-sm font-medium text-gray-300 uppercase tracking-widest leading-loose">Объектов продано</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gold">99%</span>
                <span className="text-sm font-medium text-gray-300 uppercase tracking-widest leading-loose">Довольных клиентов</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Тщательный отбор</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Избранные Резиденции</h3>
            </div>
            <Link to="/properties" className="text-charcoal font-bold flex items-center gap-2 hover:text-gold transition-colors group border-b-2 border-charcoal/10 pb-1">
              Весь каталог
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Buy/Sell Split CTA */}
      <section className="py-20 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-charcoal rounded-[2.5rem] p-12 relative overflow-hidden group min-h-[400px] flex items-center"
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1740258662768-b46a3f3f0c06?q=80&w=1470&auto=format&fit=crop"
                alt="Buying"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold text-white mb-6">Хотите купить?</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-sm">Найдите дом своей мечты в нашем каталоге элитных резиденций.</p>
              <Link to="/buy" className="bg-white text-charcoal px-8 py-4 rounded-full font-bold hover:bg-gold transition-colors inline-block">
                Начать поиск
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-gold rounded-[2.5rem] p-12 relative overflow-hidden group min-h-[400px] flex items-center"
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1932&auto=format&fit=crop"
                alt="Selling"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold text-charcoal mb-6">Планируете продать?</h3>
              <p className="text-charcoal/80 text-lg mb-8 max-w-sm">Получите максимальную стоимость за свой объект с нашей маркетинговой стратегией.</p>
              <Link to="/sell" className="bg-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-charcoal transition-colors inline-block">
                Оценить объект
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 font-sans">Наши преимущества</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
              Почему клиенты выбирают Almaty Luxe
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Map, title: 'Знание рынка Алматы', desc: 'Глубокое понимание специфики районов и динамики цен на недвижимость.' },
              { icon: ShieldCheck, title: 'Проверенные объекты', desc: 'Каждый объект проходит строгую проверку для вашего спокойствия.' },
              { icon: Star, title: 'Инвестиционные советы', desc: 'Профессиональные консультации для максимизации доходности вашего портфеля.' },
              { icon: Users, title: 'Мастера переговоров', desc: 'Ваши интересы — наш приоритет. Обеспечиваем лучшие условия сделки.' },
              { icon: MessageSquare, title: 'Оперативность', desc: 'Постоянная связь и бесшовное взаимодействие на всех этапах.' },
              { icon: TrendingUp, title: 'Полное сопровождение', desc: 'От первого просмотра до финального оформления документов.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] border border-gray-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-charcoal mb-4">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Neighbourhoods */}
       <section className="py-32 px-6 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Престижные Районы</h3>
            <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              Узнайте больше о самых востребованных локациях Алматы.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Медеуский', count: 12, img: 'https://images.unsplash.com/photo-1697290111814-3af7bef90a8b?q=80&w=1470&auto=format&fit=crop' },
              { name: 'Бостандыкский', count: 24, img: 'https://images.unsplash.com/photo-1496871455396-14e56815f1f4?auto=format&fit=crop&q=80&w=600' },
              { name: 'Центр города', count: 18, img: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&q=80&w=600' },
              { name: 'Верхние районы', count: 8, img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600' },
            ].map((area, i) => (
              <Link to="/properties" key={i} className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] block">
                <img src={area.img} alt={area.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-serif font-bold mb-2">{area.name} район</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">{area.count} объектов</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Отзывы клиентов</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Истории успеха</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Инсайты</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Последние статьи</h3>
            </div>
            <Link to="/blog" className="text-charcoal font-bold flex items-center gap-2 hover:text-gold transition-colors group hidden md:flex">
              Все новости
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-charcoal rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Search className="w-40 h-40 text-white" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
              Готовы к <span className="text-gold italic">новому шагу?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              Ищете ли вы покупку, продажу или инвестиции, наши специалисты готовы направить вас на каждом этапе пути.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gold text-charcoal px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </button>
              <Link to="/contact" className="bg-white text-charcoal px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gold transition-all">
                <Phone className="w-5 h-5" />
                Консультация
              </Link>
              <Link to="/properties" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Смотреть объекты
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
