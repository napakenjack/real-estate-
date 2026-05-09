import React, { useState } from 'react';
import { Send, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Узнать подробнее об объекте",
  subtitle = "Наши эксперты свяжутся с вами в течение 24 часов.",
  className
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buy',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('Спасибо! Ваше сообщение отправлено.');
  };

  return (
    <div className={cn("bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100", className)}>
      <div className="mb-10">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-3">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Полное имя</label>
            <input
              type="text"
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email адрес</label>
            <input
              type="email"
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="ivan@mail.kz"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Номер телефона</label>
            <input
              type="tel"
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="+7 (700) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Я хочу...</label>
            <select
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all appearance-none cursor-pointer"
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            >
              <option value="Buy">Купить недвижимость</option>
              <option value="Sell">Продать недвижимость</option>
              <option value="Rent">Арендовать недвижимость</option>
              <option value="Invest">Инвестиционный запрос</option>
              <option value="Consult">Общая консультация</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Ваше сообщение</label>
          <textarea
            rows={4}
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
            placeholder="Опишите, что вы ищете..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-charcoal text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gold hover:text-charcoal transition-all duration-300 group shadow-lg"
        >
          Отправить запрос
          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
