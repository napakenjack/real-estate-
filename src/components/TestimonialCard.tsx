import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/data/blogPosts';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative">
      <Quote className="absolute top-6 right-8 w-12 h-12 text-gold/10" />

      <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-serif font-bold text-charcoal">{testimonial.name}</h4>
          <p className="text-xs text-gold font-bold uppercase tracking-widest">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
