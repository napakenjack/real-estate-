import React from 'react';
import { motion } from 'motion/react';
import { Search, Map, FileCode, Key, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

const Buy = () => {
  const buyerProperties = properties.slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="py-20 px-6 bg-charcoal text-white rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-6">Home Ownership</h2>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight">Your Journey to a <br/> <span className="italic text-gold">Dream Home</span></h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Finding the perfect residence is an art. We provide the canvas, the colors, and the expertise to make it yours.
          </p>
        </div>
      </section>

      {/* Buyer's Journey */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-8">The Buyer's Journey <br/> <span className="text-gold italic underline underline-offset-8">Perfected</span></h2>
              <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed">
                Buying a premium property requires more than just a search—it requires a strategic partner who understands your lifestyle and investment goals.
              </p>
              
              <div className="space-y-10">
                {[
                  { icon: Search, title: 'Tailored Property Search', desc: 'We curate listings that match your specific lifestyle requirements and aesthetic preferences.' },
                  { icon: Heart, title: 'Private Viewings', desc: 'Secure early access to off-market estates and schedule exclusive walkthroughs at your convenience.' },
                  { icon: ShieldCheck, title: 'Market Analysis', desc: 'Receive detailed reports on neighborhood trends, future developments, and historical pricing.' },
                  { icon: FileCode, title: 'Smooth Transaction', desc: 'Our experts handle the complex paperwork and legal requirements to ensure a seamless closing.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 text-gold shadow-sm">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-charcoal mb-2">{step.title}</h4>
                      <p className="text-gray-500 font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&q=80&w=800" alt="Buyer" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold rounded-full -z-10 opacity-20 blur-3xl"></div>
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-charcoal rounded-full -z-10 opacity-10 blur-3xl"></div>
            </div>
          </div>

          {/* Mortgage Section */}
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2">
                <h3 className="text-3xl font-serif font-bold text-charcoal mb-6">Financing Your Ambition</h3>
                <p className="text-gray-500 text-lg mb-8 font-light">
                  Our network includes the most prestigious lenders specializing in jumbo loans and custom financing solutions for high-value acquisitions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white px-6 py-3 rounded-full text-sm font-bold border border-gray-100 shadow-sm">Mortgage Prequalification</span>
                  <span className="bg-white px-6 py-3 rounded-full text-sm font-bold border border-gray-100 shadow-sm">Private Banking Referrals</span>
                  <span className="bg-white px-6 py-3 rounded-full text-sm font-bold border border-gray-100 shadow-sm">Investment Analysis</span>
                </div>
             </div>
             <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center">
                   <TrendingUp className="w-10 h-10 text-gold mb-4" />
                   <span className="block text-2xl font-bold font-serif mb-1">Low Rates</span>
                   <span className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-loose">Premium Networks</span>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center">
                   <ShieldCheck className="w-10 h-10 text-gold mb-4" />
                   <span className="block text-2xl font-bold font-serif mb-1">Fast Close</span>
                   <span className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-loose">Priority Service</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Popular for Buyers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
             <h3 className="text-4xl font-serif font-bold text-charcoal">Recommended Residences</h3>
             <Link to="/properties" className="text-gold font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Browse More <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {buyerProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
           <ContactForm 
              title="Start Your Search Today" 
              subtitle="Connect with a luxury buying specialist for a personalized consultation."
           />
        </div>
      </section>
    </div>
  );
};

const TrendingUp = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default Buy;
