import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="py-20 px-6 bg-charcoal text-white rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-6">Concierge Support</h2>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Get In <span className="italic text-gold">Touch</span></h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Our specialized agents are ready to assist you with every aspect of your premium property journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">Contact Information</h2>
            <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed">
              Visit our headquarters in Beverly Hills or reach out via phone or email. We are available for private consultations worldwide.
            </p>

            <div className="space-y-10">
               <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 text-gold shadow-sm">
                     <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-charcoal mb-1">Our Office</h4>
                     <p className="text-gray-500 font-light">123 Luxury Drive, Beverly Hills, CA 90210</p>
                  </div>
               </div>

               <div className="flex gap-6 text-center">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 text-gold shadow-sm">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-charcoal mb-1">Phone</h4>
                     <p className="text-gray-500 font-light">+1 (555) 012-3456</p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 text-gold shadow-sm">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-charcoal mb-1">Email</h4>
                     <p className="text-gray-500 font-light">hello@luxeestate.com</p>
                  </div>
               </div>

               <div className="flex gap-6 text-center">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 text-gold shadow-sm">
                     <Clock className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-charcoal mb-1">Working Hours</h4>
                     <p className="text-gray-500 font-light">Mon - Fri: 9:00 AM - 6:00 PM <br/> Sat: 10:00 AM - 4:00 PM</p>
                  </div>
               </div>
            </div>

            <div className="mt-16">
               <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-6">Follow Us</h4>
               <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gold hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gold hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gold hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gold hover:text-white transition-all"><MessageSquare className="w-5 h-5" /></a>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div>
             <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 mb-20 text-center">
        <div className="max-w-7xl mx-auto h-[500px] bg-gray-100 rounded-[3rem] overflow-hidden relative border border-gray-100">
           <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover grayscale opacity-60" 
              alt="Map" 
           />
           <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center">
                 <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white mb-4">
                    <MapPin className="w-8 h-8" />
                 </div>
                 <h4 className="text-xl font-serif font-bold text-charcoal">Beverly Hills HQ</h4>
                 <p className="text-gray-500 font-light text-sm mt-2">123 Luxury Drive, Beverly Hills, CA 90210</p>
                 <button className="mt-6 text-gold font-bold flex items-center gap-2 hover:underline">
                    Get Directions
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
