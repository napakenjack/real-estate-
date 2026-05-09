import React from 'react';
import { Camera, Megaphone, Target, BarChart3, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Sell = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
         <div className="absolute inset-0 bg-gray-50 -z-10 skew-y-3 origin-top-left transform translate-y-20 scale-110"></div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-6">Экспертная Продажа</h2>
              <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight text-charcoal">Максимизируйте <br/> <span className="italic text-gold underline underline-offset-[12px]">Стоимость Объекта</span></h1>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-10">
                Продажа премиального дома — это история, стратегия и доступ к правильной аудитории. Мы представим ваше поместье самым квалифицированным покупателям мира.
              </p>
              <div className="flex gap-4">
                 <button className="bg-charcoal text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-gold transition-all">Оценить объект</button>
                 <button className="border border-charcoal/10 text-charcoal px-8 py-4 rounded-full font-bold hover:bg-charcoal hover:text-white transition-all">Наша стратегия</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl mt-12" alt="House 1" />
               <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl" alt="House 2" />
            </div>
         </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto bg-charcoal rounded-[3rem] p-12 md:p-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-white text-center">
            <div>
               <span className="block text-4xl font-serif font-bold text-gold mb-2">98%</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Соотношение цены продажи</span>
            </div>
            <div>
               <span className="block text-4xl font-serif font-bold text-gold mb-2">14 дней</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Среднее время продажи</span>
            </div>
            <div>
               <span className="block text-4xl font-serif font-bold text-gold mb-2">500 млн+</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Общий объем продаж</span>
            </div>
            <div>
               <span className="block text-4xl font-serif font-bold text-gold mb-2">10к+</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Глобальная сеть покупателей</span>
            </div>
         </div>
      </section>

      {/* Selling Process */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">Наша Маркетинговая Экосистема</h2>
               <p className="text-gray-500 font-light text-lg">Мы не просто выставляем объекты; мы запускаем их на глобальный рынок роскоши.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { icon: Camera, title: 'Визуальное совершенство', desc: 'Профессиональная архитектурная съемка, 4K видео и 3D-моделирование.' },
                  { icon: Target, title: 'Точный таргетинг', desc: 'Цифровые кампании, ориентированные на состоятельных лиц.' },
                  { icon: Megaphone, title: 'Глобальный охват', desc: 'Размещение в эксклюзивных международных сетях элитной недвижимости.' },
                  { icon: BarChart3, title: 'Аналитика', desc: 'Отчеты в реальном времени о просмотрах, запросах и настроениях рынка.' },
               ].map((step, i) => (
                  <div key={i} className="p-8 rounded-[2rem] border border-gray-100 hover:border-gold hover:shadow-2xl transition-all duration-500">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                        <step.icon className="w-7 h-7" />
                     </div>
                     <h4 className="text-xl font-bold text-charcoal mb-3">{step.title}</h4>
                     <p className="text-sm font-light text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Professional Photography CTA */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto bg-gray-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-center border border-white/5 shadow-2xl">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
               <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Первое впечатление — <br/> <span className="text-gold italic">всё</span></h3>
               <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                  Каждый объект, который мы представляем, получает индивидуальный визуальный пакет. Наша команда гарантирует, что ваш дом будет выглядеть безупречно.
               </p>
               <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold" /> Сумеречная архитектурная съемка</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold" /> Кинематографичные ролики для соцсетей</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold" /> Эксклюзивное PR-размещение</li>
               </ul>
               <button className="bg-gold text-charcoal px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all group">
                  Узнать о нашем маркетинге
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            <div className="lg:w-1/2 h-full">
               <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover min-h-[500px]" alt="Marketing" />
            </div>
         </div>
      </section>

      {/* Valuation Form */}
      <section className="py-32 px-6 bg-gray-50">
         <div className="max-w-5xl mx-auto">
            <ContactForm 
               title="Запросить оценку недвижимости" 
               subtitle="Введите свои данные, и наши ведущие агенты проведут всесторонний анализ рынка для вашего поместья."
            />
         </div>
      </section>
    </div>
  );
};

export default Sell;
