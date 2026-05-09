import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
              ALMATY<span className="text-gold">LUXE</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Переосмысление роскошной недвижимости через экспертное руководство, персонализированный сервис и кураторский подбор самых исключительных объектов.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Навигация</h4>
            <ul className="space-y-4">
              {[
                { name: 'Объекты', path: '/properties' },
                { name: 'Купить', path: '/buy' },
                { name: 'Продать', path: '/sell' },
                { name: 'О нас', path: '/about' },
                { name: 'Блог', path: '/blog' },
                { name: 'Контакты', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Алматы, пр. Аль-Фараби 77/7, Esentai Tower</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+7 (701) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>hello@almatyluxe.kz</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Рассылка</h4>
            <p className="text-gray-400 mb-4">Подпишитесь на эксклюзивные предложения и обзор рынка.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="bg-gray-800 border-none rounded-lg px-4 py-3 text-sm flex-1 focus:ring-1 focus:ring-gold outline-none"
              />
              <button className="bg-gold text-charcoal px-4 py-3 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                Ок
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 Almaty Luxe. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gold transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
