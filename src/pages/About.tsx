import React from 'react';
import { Target, Users, Landmark, Globe2, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="py-24 px-6 mb-20 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-6">Наше Наследие</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-8 leading-tight">
               Построено на <span className="italic text-gold">Превосходстве</span> & <br/> Непоколебимом Доверии
            </h1>
            <p className="text-gray-500 text-xl font-light leading-relaxed">
               Более десяти лет Almaty Luxe является лучшим выбором для клиентов, ищущих необычное. Мы не просто проводим сделки; мы строим долгосрочные отношения, основанные на честности и непревзойденном знании рынка.
            </p>
         </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-charcoal text-white rounded-[4rem]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold">
                  <Target className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-serif font-bold">Наша Миссия</h3>
               <p className="text-gray-400 font-light leading-relaxed">Революционизировать рынок элитной недвижимости через инновации, персонализацию и бескомпромиссную приверженность удовлетворению потребностей клиентов.</p>
            </div>
            <div className="space-y-6">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold">
                  <Landmark className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-serif font-bold">Наша История</h3>
               <p className="text-gray-400 font-light leading-relaxed">Основанные в 2014 году, мы начали как небольшое бутиковое агентство и выросли в ведущего игрока в премиальном сегменте Алматы.</p>
            </div>
            <div className="space-y-6">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold">
                  <Globe2 className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-serif font-bold">Наш Охват</h3>
               <p className="text-gray-400 font-light leading-relaxed">Благодаря глубокой экспертизе во всех районах Алматы, мы предоставляем нашим клиентам доступ к самым эксклюзивным внерыночным предложениям.</p>
            </div>
         </div>
      </section>

      {/* Values & Experience */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <div className="relative aspect-square rounded-[3rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Team Leader" />
                  <div className="absolute bottom-10 right-10 bg-white p-8 rounded-[2rem] shadow-2xl">
                     <span className="block text-4xl font-serif font-bold text-gold mb-1">10+</span>
                     <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Наград получено</span>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2">
               <h2 className="text-4xl font-serif font-bold text-charcoal mb-8">Преимущества Almaty Luxe</h2>
               <div className="space-y-8">
                  {[
                     { title: 'Персонализированная Стратегия', desc: 'Нет двух одинаковых клиентов. Мы адаптируем каждый план поиска и маркетинга под индивидуальные цели.' },
                     { title: 'Рыночная Аналитика', desc: 'Мы выходим за рамки публичных данных, чтобы найти скрытые возможности на меняющемся рынке.' },
                     { title: 'VIP Сеть', desc: 'Прямые связи с частными инвесторами и квалифицированными покупателями.' },
                  ].map((value, i) => (
                     <div key={i} className="flex gap-6 items-start">
                        <div className="w-1.5 h-10 bg-gold mt-1 rounded-full"></div>
                        <div>
                           <h4 className="text-xl font-bold text-charcoal mb-2">{value.title}</h4>
                           <p className="text-gray-500 font-light leading-relaxed">{value.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-gray-50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Эксперты</h2>
               <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">Познакомьтесь с командой <br/> нашего успеха</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { name: 'Тимур Касымов', role: 'Основатель и CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Айгерим Смагулова', role: 'Руководитель отдела элиты', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Данияр Ибрагимов', role: 'Директор по инвестициям', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
                   { name: 'Динара Альжанова', role: 'Старший агент', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400' },
               ].map((member, i) => (
                  <div key={i} className="group overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                     <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                     <div className="p-8 text-center">
                        <h4 className="text-xl font-serif font-bold text-charcoal mb-1">{member.name}</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-gold">{member.role}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-serif font-bold text-charcoal mb-8">Работать с лучшими в индустрии</h3>
            <p className="text-gray-500 text-lg mb-10 font-light">Начинаете ли вы поиск или готовы выставить свое поместье на продажу, мы здесь, чтобы обеспечить ваш успех.</p>
            <div className="flex justify-center gap-6">
                <button className="bg-charcoal text-white px-10 py-4 rounded-full font-bold hover:bg-gold transition-all">Присоединиться к нам</button>
                <button className="bg-gold text-charcoal px-10 py-4 rounded-full font-bold hover:bg-charcoal hover:text-white transition-all">Связаться с нами</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
