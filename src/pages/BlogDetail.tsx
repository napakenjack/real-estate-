import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-40 pb-20 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">Article Not Found</h2>
        <Link to="/blog" className="text-gold font-bold">Back to blog</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/blog" className="flex items-center gap-2 text-gray-400 hover:text-charcoal mb-12 transition-colors text-sm font-medium uppercase tracking-widest mt-8">
          <ChevronLeft className="w-4 h-4" />
          The Journal
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gold mb-6">
             <span>{post.category}</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span className="text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-y border-gray-100 py-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-charcoal">
                   <User className="w-6 h-6" />
                </div>
                <div>
                   <span className="block font-bold text-charcoal">{post.author}</span>
                   <span className="text-xs text-gray-400 uppercase tracking-widest">Senior Analyst</span>
                </div>
             </div>
             <div className="flex gap-4">
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all"><Facebook className="w-4 h-4" /></button>
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all"><Twitter className="w-4 h-4" /></button>
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gold hover:text-white transition-all"><Linkedin className="w-4 h-4" /></button>
             </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-[3rem] overflow-hidden mb-16 aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-serif mb-20 text-gray-600 leading-relaxed font-light">
           <p className="text-2xl font-serif text-charcoal mb-8 italic leading-relaxed">
             {post.excerpt}
           </p>
           <p className="mb-6">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           </p>
           
           <h3 className="text-3xl font-serif font-bold text-charcoal mt-12 mb-6">The Strategic Approach</h3>
           <p className="mb-6 text-center">
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
           </p>
           
           <div className="bg-gray-50 border-l-4 border-gold p-8 my-12 rounded-r-3xl">
              <p className="font-serif italic text-xl text-charcoal mb-0">
                 "Investing in luxury property is not just about real estate; it's about acquiring an asset that reflects your legacy and lifestyle."
              </p>
           </div>

           <p className="mb-6">
             Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
           </p>
        </div>

        {/* Related Posts */}
        <div className="pt-20 border-t border-gray-100">
           <div className="flex justify-between items-end mb-12">
              <h3 className="text-3xl font-serif font-bold text-charcoal">Recommended Reading</h3>
              <Link to="/blog" className="text-gold font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                 All Articles <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {relatedPosts.map((p) => (
               <BlogCard key={p.id} post={p} />
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
