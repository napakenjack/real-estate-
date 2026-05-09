import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      <Link to={`/properties/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-charcoal">
          {property.type}
        </div>
        <div className="absolute top-4 right-4 bg-gold text-charcoal p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-gold transition-colors">
            {property.title}
          </h3>
          <span className="text-lg font-bold text-gold">{property.price}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
          <MapPin className="w-4 h-4 text-gold" />
          <span>{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-charcoal/70">
            <Bed className="w-4 h-4 text-gold" />
            <span className="text-xs font-medium">{property.beds} <span className="hidden sm:inline">Спальни</span></span>
          </div>
          <div className="flex items-center gap-2 text-charcoal/70">
            <Bath className="w-4 h-4 text-gold" />
            <span className="text-xs font-medium">{property.baths} <span className="hidden sm:inline">Ванные</span></span>
          </div>
          <div className="flex items-center gap-2 text-charcoal/70">
            <Square className="w-4 h-4 text-gold" />
            <span className="text-xs font-medium">{property.sqft} <span className="hidden sm:inline">м²</span></span>
          </div>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-charcoal/10 rounded-xl text-sm font-bold text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
        >
          Подробнее
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
