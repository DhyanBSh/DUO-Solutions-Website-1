import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { createPortal } from 'react-dom';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const portfolioItems = [
  // Row 1
  {
    img: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1964&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-[3/4]',
    partner: 'Champion',
    services: 'eCommerce Development, Design UX / UI, Custom Systems, Web Development'
  },
  {
    img: 'https://images.unsplash.com/photo-1621570074981-ee6a0145c8b5?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-8',
    aspect: 'aspect-[21/9]',
    partner: 'Benetton',
    services: 'eCommerce Development, Design UX / UI, Custom Systems, Web Development'
  },
  // Row 2
  {
    img: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-square',
    partner: 'Sotf',
    services: 'Design UX / UI, Graphic Designs'
  },
  {
    img: 'https://images.unsplash.com/photo-1480455624313-e23b44b2a390?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-[4/5]',
    partner: "Mason's",
    services: 'eCommerce Development, Design UX / UI, Custom Systems, Web Development'
  },
  {
    img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-[3/4]',
    partner: 'Roberto Collina',
    services: 'eCommerce Development, Design UX / UI, Custom Systems, Web Development'
  },
  // Row 3
  {
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-[9/16]',
    partner: 'Aura',
    services: 'Design UX / UI, Custom Systems, Graphic Designs'
  },
  {
    img: 'https://images.unsplash.com/photo-1584328591636-b87332152914?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-8',
    aspect: 'aspect-[16/9]',
    partner: '8pm',
    services: 'eCommerce Development, Design UX / UI, Custom Systems, Web Development'
  },
  // Row 4
  {
    img: 'https://images.unsplash.com/photo-1585122684803-a15d2a71f016?q=80&w=2069&auto=format&fit=crop',
    span: 'md:col-span-6',
    aspect: 'aspect-[4/3]',
    partner: 'Kunci',
    services: 'eCommerce Development, Design UX / UI, Custom Systems, Web Development'
  },
  {
    img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop',
    span: 'md:col-span-6',
    aspect: 'aspect-[4/3]',
    partner: 'Pollini',
    services: 'eCommerce Development, Design UX / UI, Custom Systems, Web Development'
  },
  // Additional Web Development & Graphic Designs Projects
  {
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-[4/5]',
    partner: 'TechFlow',
    services: 'Web Development, Custom Systems'
  },
  {
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-square',
    partner: 'BrandVision',
    services: 'Graphic Designs, Design UX / UI'
  },
  {
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
    span: 'md:col-span-4',
    aspect: 'aspect-[3/4]',
    partner: 'CreativeStudio',
    services: 'Graphic Designs, Design UX / UI'
  }
];

export const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    setVisibleCount(5);
  }, [selectedFilter]);

  const allServices = ['All', 'Custom Systems', 'Design UX / UI', 'Web Development', 'eCommerce Development', 'Graphic Designs'];
  
  const filteredItems = selectedFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.services.includes(selectedFilter));

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#fcfcfc] min-h-screen text-[#111] overflow-hidden">
      {/* Header Section mimicking PDF layout */}
      <motion.section 
      initial="hidden" animate="visible" variants={sectionVariants}
      className="mb-24 md:mb-32 max-w-7xl mx-auto"
    >
      <div className="flex justify-between items-start text-[10px] uppercase tracking-widest font-bold text-black/50 mb-12">
        <div>Brand Direction</div>
        <div>Digital Strategy</div>
        <div>Advanced Tech</div>
      </div>
      
      <motion.h1
        initial={{ opacity: 0, y: 60, filter: 'blur(20px)', scale: 0.95 }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-[32px] md:text-[48px] lg:text-[72px] leading-[1.05] tracking-tight font-medium mb-12"
      >
        We turn <span className="font-bold text-black/50">"just a brand"</span> into <span className="font-bold text-[#111]">"the brand."</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-[20px] md:text-[28px] lg:text-[36px] leading-[1.3] tracking-tight font-medium mb-16 max-w-5xl"
      >
        UI/UX. Development. Integration. Strategy. Everything it takes to grow shaped into one seamless vision.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 font-bold text-lg md:text-xl lg:text-2xl tracking-tight">
        {allServices.map(service => (
          <button 
            key={service}
            onClick={() => setSelectedFilter(service)}
            className={`transition-colors text-left ${selectedFilter === service ? 'text-[#111]' : 'text-black/30 hover:text-black/60'}`}
          >
            [{service}]
          </button>
        ))}
      </motion.div>
    </motion.section>

    {/* Portfolio Masonry Grid */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "100px" }} 
      variants={sectionVariants}
      className="max-w-7xl mx-auto"
    >
      <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-16 lg:gap-x-12 lg:gap-y-24">
        <AnimatePresence>
          {visibleItems.map((item, i) => (
            <motion.div 
              key={item.partner} 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col group ${item.span}`}
            >
              <div 
                className={`w-full overflow-hidden mb-6 bg-black/5 ${item.aspect} cursor-pointer`}
                onClick={() => setSelectedItem(item)}
              >
                <motion.img 
                  animate={{ scale: [1, 1.05, 1] }} 
                  transition={{ duration: 25 + i * 2, repeat: Infinity, ease: "linear", delay: i }}
                  src={item.img} 
                  alt={item.partner} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Metadata Table Format from PDF */}
              <div className="flex flex-col gap-y-3 text-[10px] sm:text-[11px] leading-tight">
                <div className="flex items-start">
                  <div className="w-24 uppercase font-semibold text-black/40 tracking-widest shrink-0">Partner</div>
                  <div className="font-bold uppercase tracking-widest text-[#111]">{item.partner}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 uppercase font-semibold text-black/40 tracking-widest shrink-0">Services</div>
                  <div className="font-medium text-black/70 pr-4">{item.services}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {visibleCount < filteredItems.length && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-20 md:mt-32"
        >
          <button 
            onClick={() => setVisibleCount(prev => prev + 4)}
            className="group flex flex-col items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-black/40 hover:text-[#111] transition-colors"
          >
            <span className="w-[1px] h-16 bg-black/20 group-hover:bg-[#111] group-hover:h-20 transition-all duration-300"></span>
            Load More Projects
          </button>
        </motion.div>
      )}
    </motion.section>

    {/* Lightbox Modal */}
    {createPortal(
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-[#111]/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center justify-center cursor-default bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 md:-top-10 right-0 text-white/50 hover:text-white transition-colors p-2"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="w-full h-full max-h-[75vh] md:max-h-[85vh] relative flex justify-center">
                <img 
                  src={selectedItem.img} 
                  alt={selectedItem.partner} 
                  className="max-w-full max-h-full object-contain shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-black/50 backdrop-blur-md px-6 py-5 border border-white/10 text-white max-w-[80vw] md:max-w-md shadow-xl flex flex-col items-start">
                <div className="text-[10px] uppercase font-bold tracking-widest mb-1 text-white/50">Partner</div>
                <div className="text-xl md:text-2xl font-medium tracking-tight mb-4">{selectedItem.partner}</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">Services</div>
                <div className="text-xs font-light leading-relaxed mb-6">{selectedItem.services}</div>
                
                <a 
                  href="#"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-3 bg-white text-black text-[10px] uppercase font-bold tracking-widest px-8 py-3.5 hover:bg-black hover:text-white border border-transparent hover:border-white transition-colors duration-300 group"
                >
                  Visit Project
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
  </main>
  );
};
