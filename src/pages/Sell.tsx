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
              <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-6">Expert Selling</h2>
              <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight text-charcoal">Maximize Your <br/> <span className="italic text-gold underline underline-offset-[12px]">Property Value</span></h1>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-10">
                Selling a premium home is about storytelling, strategy, and access to the right audience. We bring your estate to the world's most qualified buyers.
              </p>
              <div className="flex gap-4">
                 <button className="bg-charcoal text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-gold transition-all">Get Valuation</button>
                 <button className="border border-charcoal/10 text-charcoal px-8 py-4 rounded-full font-bold hover:bg-charcoal hover:text-white transition-all">Our Strategy</button>
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
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Avg Sale to List Price</span>
            </div>
            <div>
               <span className="block text-4xl font-serif font-bold text-gold mb-2">14 Days</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Median Sell Time</span>
            </div>
            <div>
               <span className="block text-4xl font-serif font-bold text-gold mb-2">$500M+</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Total Sales Volume</span>
            </div>
            <div>
               <span className="block text-4xl font-serif font-bold text-gold mb-2">10k+</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Global Buyer Network</span>
            </div>
         </div>
      </section>

      {/* Selling Process */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">Our Premium Marketing Ecosystem</h2>
               <p className="text-gray-500 font-light text-lg">We don't just list properties; we launch them into the global luxury marketplace.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { icon: Camera, title: 'Visual Excellence', desc: 'Professional architectural photography, 4K cinematic video, and 3D mapping.' },
                  { icon: Target, title: 'Precision Targeting', desc: 'Data-driven digital marketing campaigns focused on high-net-worth individuals.' },
                  { icon: Megaphone, title: 'Global Exposure', desc: 'Listing syndication to exclusive international luxury property networks.' },
                  { icon: BarChart3, title: 'Performance Analytics', desc: 'Real-time reporting on listing views, inquiries, and market sentiment.' },
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
               <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">First Impressions are <br/> <span className="text-gold italic">Everything</span></h3>
               <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                  Every property we represent receives a bespoke visual package. Our in-house production team ensures your home looks its absolute best on every screen and in every brochure.
               </p>
               <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold" /> Twilight architectural photography</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold" /> Social media cinematic reels</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold" /> Exclusive property PR placement</li>
               </ul>
               <button className="bg-gold text-charcoal px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all group">
                  Learn About Our Marketing
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
               title="Request Property Valuation" 
               subtitle="Enter your details and our senior agents will provide a comprehensive market analysis of your estate."
            />
         </div>
      </section>
    </div>
  );
};

export default Sell;
