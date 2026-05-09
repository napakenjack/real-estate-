import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

const Properties = () => {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = properties.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'All' || p.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Curated Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">Explore Luxury <span className="italic">Residences</span></h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Browse through our exclusive selection of high-end properties in the most desirable neighborhoods.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-4 mb-12">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location, title..."
              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-1 focus:ring-gold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex w-full lg:w-auto items-center gap-4">
            <div className="relative flex-1 lg:flex-none">
              <select
                className="w-full lg:w-48 appearance-none bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none focus:ring-1 focus:ring-gold cursor-pointer text-charcoal font-medium"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Luxury">Luxury</option>
                <option value="Residential">Residential</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Commercial">Commercial</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <button className="bg-charcoal text-white flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold hover:bg-gold hover:text-charcoal transition-all">
              <SlidersHorizontal className="w-5 h-5" />
              Advanced
            </button>
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                <Search className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">No Properties Found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query to find more results.</p>
            <button
              onClick={() => { setSearchQuery(''); setFilterType('All'); }}
              className="mt-6 text-gold font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Final CTA */}
        <div className="mt-32 text-center p-16 bg-white rounded-[3rem] shadow-sm border border-gray-100">
           <h3 className="text-3xl font-serif font-bold text-charcoal mb-6">Didn't find what you are looking for?</h3>
           <p className="text-gray-500 max-w-xl mx-auto mb-10">Our agents have access to many off-market luxury listings that are not publicly displayed on our website.</p>
           <button className="bg-charcoal text-white px-10 py-4 rounded-full font-bold hover:bg-gold transition-all">
              Request VIP Access
           </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
