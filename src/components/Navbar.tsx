import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('RU');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Объекты', path: '/properties' },
    { name: 'Купить', path: '/buy' },
    { name: 'Продать', path: '/sell' },
    { name: 'О нас', path: '/about' },
    { name: 'Блог', path: '/blog' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-charcoal">
          ALMATY<span className="text-gold">LUXE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold' : 'text-charcoal/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setLang(lang === 'RU' ? 'EN' : 'RU')}
            className="text-sm font-bold text-charcoal/60 hover:text-gold transition-colors px-2 border-l border-gray-200"
          >
            {lang}
          </button>
          <Link
            to="/contact"
            className="bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold transition-colors flex items-center gap-2 group"
          >
            Консультация
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>


        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-white z-40 lg:hidden px-6 py-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-serif font-medium text-charcoal border-b border-gray-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-xl font-serif font-medium text-charcoal">Язык / Language</span>
                <button 
                  onClick={() => setLang(lang === 'RU' ? 'EN' : 'RU')}
                  className="text-gold font-bold text-xl"
                >
                  {lang}
                </button>
              </div>
              <Link
                to="/contact"
                className="bg-charcoal text-white w-full py-4 rounded-xl text-center font-medium text-lg mt-4"
              >
                Консультация
              </Link>
              <div className="flex items-center gap-3 text-gray-500 mt-8">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+7 (727) 345-67-89</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
