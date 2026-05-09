import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Map, Users, TrendingUp, Search, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '@/components/PropertyCard';
import BlogCard from '@/components/BlogCard';
import TestimonialCard from '@/components/TestimonialCard';
import { properties } from '@/data/properties';
import { blogPosts, testimonials } from '@/data/blogPosts';

const Home = () => {
  const featuredProperties = properties.slice(0, 6);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Home"
            className="w-full h-full object-cover scale-105 motion-safe:animate-[zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm">Luxury Real Estate</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Find Your Perfect Property With <span className="italic text-gold">Trusted</span> Experts
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-light">
              Helping elite clients buy, sell, and invest in the most exclusive premium properties across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/properties"
                className="bg-gold text-charcoal px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                View Properties
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-charcoal transition-all flex items-center justify-center gap-2"
              >
                Book Consultation
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-gold">10+</span>
                <span className="text-sm font-medium text-gray-300 uppercase tracking-widest leading-loose">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gold">500+</span>
                <span className="text-sm font-medium text-gray-300 uppercase tracking-widest leading-loose">Properties Sold</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gold">99%</span>
                <span className="text-sm font-medium text-gray-300 uppercase tracking-widest leading-loose">Trusted Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Curated Selection</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Featured Residences</h3>
            </div>
            <Link to="/properties" className="text-charcoal font-bold flex items-center gap-2 hover:text-gold transition-colors group border-b-2 border-charcoal/10 pb-1">
              Explore All Listings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Buy/Sell Split CTA */}
      <section className="py-20 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-charcoal rounded-[2.5rem] p-12 relative overflow-hidden group min-h-[400px] flex items-center"
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&q=80&w=800"
                alt="Buying"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold text-white mb-6">Looking to Buy?</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-sm">Find your dream home in our curated catalog of elite residences worldwide.</p>
              <Link to="/buy" className="bg-white text-charcoal px-8 py-4 rounded-full font-bold hover:bg-gold transition-colors inline-block">
                Start Your Search
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-gold rounded-[2.5rem] p-12 relative overflow-hidden group min-h-[400px] flex items-center"
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80&w=800"
                alt="Selling"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold text-charcoal mb-6">Planning to Sell?</h3>
              <p className="text-charcoal/80 text-lg mb-8 max-w-sm">Get the maximum value for your property with our expert marketing strategies.</p>
              <Link to="/sell" className="bg-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-charcoal transition-colors inline-block">
                Value Your Property
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 font-sans">Our Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
              Why Discerning Clients Trust LuxeEstate
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Map, title: 'Local Market Expertise', desc: 'Deep insights into neighborhoods and developing property values.' },
              { icon: ShieldCheck, title: 'Verified Listings', desc: 'Every property undergoes a rigorous verification for your peace of mind.' },
              { icon: Star, title: 'Investment Guidance', desc: 'Data-driven advice to maximize your real estate portfolio ROI.' },
              { icon: Users, title: 'Expert Negotiation', desc: 'Professional advocacy to ensure you get the absolute best price.' },
              { icon: MessageSquare, title: 'Fast Communication', desc: 'Real-time updates and seamless coordination throughout the process.' },
              { icon: TrendingUp, title: 'End-to-End Support', desc: 'From first viewing to final legal paperwork, we handle everything.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] border border-gray-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-charcoal mb-4">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Neighbourhoods */}
       <section className="py-32 px-6 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Popular Neighbourhoods</h3>
            <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              Explore the most sought-after locations where lifestyle and luxury converge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Beverly Hills', count: 12, img: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=600' },
              { name: 'Manhattan', count: 24, img: 'https://images.unsplash.com/photo-1496871455396-14e56815f1f4?auto=format&fit=crop&q=80&w=600' },
              { name: 'Miami Beach', count: 18, img: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&q=80&w=600' },
              { name: 'Aspen Hills', count: 8, img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600' },
            ].map((area, i) => (
              <Link to="/properties" key={i} className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] block">
                <img src={area.img} alt={area.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-serif font-bold mb-2">{area.name}</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">{area.count} Properties</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Client Experience</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Voice of Happiness</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Insights</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Latest Articles</h3>
            </div>
            <Link to="/blog" className="text-charcoal font-bold flex items-center gap-2 hover:text-gold transition-colors group hidden md:flex">
              View All News
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-charcoal rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Search className="w-40 h-40 text-white" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
              Ready to Make Your <span className="text-gold italic">Next Move?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              Whether you are looking to buy, sell, or invest, our specialized agents are here to guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gold text-charcoal px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </button>
              <Link to="/contact" className="bg-white text-charcoal px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gold transition-all">
                <Phone className="w-5 h-5" />
                Book Consultation
              </Link>
              <Link to="/properties" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
