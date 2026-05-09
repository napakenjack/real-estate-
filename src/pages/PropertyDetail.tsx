import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Share2, Heart, Phone, MessageSquare, Calendar, ChevronLeft, CheckCircle2 } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="pt-40 pb-20 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Объект не найден</h2>
        <Link to="/properties" className="text-gold font-bold">Назад к каталогу</Link>
      </div>
    );
  }

  const similarProperties = properties.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/properties" className="flex items-center gap-2 text-gray-400 hover:text-charcoal mb-8 transition-colors text-sm font-medium uppercase tracking-widest">
          <ChevronLeft className="w-4 h-4" />
          Все объекты
        </Link>

        {/* Gallery Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-[2rem] group">
            <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="hidden md:block overflow-hidden rounded-[2rem] group">
            <img src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80&w=600" alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="hidden md:block overflow-hidden rounded-[2rem] group">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600" alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="hidden md:block overflow-hidden rounded-[2rem] group">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="hidden md:block overflow-hidden rounded-[2rem] group relative">
             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center backdrop-blur-[2px] cursor-pointer hover:bg-charcoal/20 transition-all">
                <span className="text-white font-bold">+12 фото</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
               <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">{property.title}</h1>
                <div className="flex items-center gap-3 text-gray-500">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-lg">{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-gold block mb-2">{property.price}</span>
                <div className="flex gap-4 justify-end">
                   <button className="p-3 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors"><Share2 className="w-5 h-5" /></button>
                   <button className="p-3 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors"><Heart className="w-5 h-5" /></button>
                </div>
              </div>
            </div>

            <div className="flex gap-12 border-y border-gray-100 py-8 mb-12">
              <div className="flex items-center gap-4 text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gold"><Bed className="w-6 h-6" /></div>
                <div>
                  <span className="block font-bold text-lg">{property.beds}</span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Спальни</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gold"><Bath className="w-6 h-6" /></div>
                <div>
                  <span className="block font-bold text-lg">{property.baths}</span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Ванные</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gold"><Square className="w-6 h-6" /></div>
                <div>
                  <span className="block font-bold text-lg">{property.sqft}</span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">м²</span>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Об этом объекте</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                {property.description}
                <br /><br />
                Эта тщательно спроектированная резиденция является воплощением современной роскоши. Каждая деталь была продумана, чтобы обеспечить образ жизни, который является одновременно утонченным и комфортным. От высококлассной техники до индивидуальной отделки — эта недвижимость поистине уникальна.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Премиальные удобства</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="font-medium text-charcoal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
             <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">На карте</h3>
              <div className="w-full h-80 bg-gray-100 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map" className="w-full h-full object-cover grayscale opacity-50" />
                <div className="absolute z-10 p-4 bg-white rounded-xl shadow-xl flex items-center gap-3">
                   <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white"><MapPin className="w-5 h-5" /></div>
                   <span className="font-bold text-charcoal">{property.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Agent Card */}
              <div className="bg-charcoal rounded-[2.5rem] p-8 text-white">
                <div className="text-center mb-8">
                  <img src={property.agent.image} alt={property.agent.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gold object-cover" />
                  <h4 className="text-xl font-serif font-bold">{property.agent.name}</h4>
                  <p className="text-gold text-xs font-bold uppercase tracking-widest">{property.agent.role}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                   <button className="w-full bg-white text-charcoal py-4 rounded-xl flex items-center justify-center gap-3 font-bold hover:bg-gold transition-colors">
                      <Phone className="w-5 h-5" />
                      Позвонить
                   </button>
                   <button className="w-full bg-gold/20 border border-gold/30 text-gold py-4 rounded-xl flex items-center justify-center gap-3 font-bold hover:bg-gold hover:text-charcoal transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      Запрос в WhatsApp
                   </button>
                </div>

                <div className="pt-8 border-t border-white/10">
                   <h5 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Запланировать просмотр</h5>
                   <form className="space-y-4">
                      <input type="text" placeholder="Ваше имя" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold" />
                      <input type="email" placeholder="Ваш Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold" />
                      <button className="w-full bg-white text-charcoal py-4 rounded-xl font-bold flex items-center justify-center gap-3 mt-4">
                        <Calendar className="w-5 h-5" />
                        Записаться
                      </button>
                   </form>
                </div>
              </div>

              {/* Trust Card */}
              <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
                 <h4 className="text-lg font-serif font-bold mb-4">Безопасная сделка</h4>
                 <p className="text-sm text-gray-500 mb-6">Almaty Luxe гарантирует, что каждый объект на нашей платформе проверен на соответствие стандартам качества.</p>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-gold" /> Юридическая проверка</li>
                    <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-gold" /> Профессиональная оценка</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-32">
          <h3 className="text-3xl font-serif font-bold text-charcoal mb-12">Похожие резиденции</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {similarProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
