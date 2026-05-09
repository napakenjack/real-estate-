import React, { useState } from 'react';
import { Send, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Inquire About a Property",
  subtitle = "Our experts will get back to you within 24 hours.",
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
    alert('Thank you! Your message has been sent.');
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
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
            <input
              type="text"
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
            <input
              type="email"
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
            <input
              type="tel"
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">I want to...</label>
            <select
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all appearance-none cursor-pointer"
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            >
              <option value="Buy">Buy a Property</option>
              <option value="Sell">Sell my Property</option>
              <option value="Rent">Rent a Property</option>
              <option value="Invest">Investment Inquiry</option>
              <option value="Consult">General Consultation</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
          <textarea
            rows={4}
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
            placeholder="Tell us what you are looking for..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-charcoal text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gold hover:text-charcoal transition-all duration-300 group shadow-lg"
        >
          Send Inquiry
          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
