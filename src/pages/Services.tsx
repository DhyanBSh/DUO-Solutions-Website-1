import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const leftServices = [
  {
    category: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    subcategories: [
      "UI/UX & Experience Design",
      "Wireframing & Prototyping",
      "Conversion Rate Optimization",
      "User Research & Usability Testing"
    ]
  },
  {
    category: "Graphic Designing",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070&auto=format&fit=crop",
    subcategories: [
      "Brand Positioning & Identity",
      "Visual Production & Art Direction",
      "Marketing & Social Media Graphics",
      "Print & Digital Collateral"
    ]
  }
];

const rightServices = [
  {
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    subcategories: [
      "Custom Web Development",
      "E-commerce Development",
      "Hosting & Cloud Infrastructure",
      "SEO & Performance Optimization"
    ]
  },
  {
    category: "System Development",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2074&auto=format&fit=crop",
    subcategories: [
      "System Development",
      "API & Third-Party Integrations",
      "Cloud & Infrastructure Solutions",
      "Maintenance & Technical Support"
    ]
  }
];

export const Services = () => {
  const [leftActiveIndex, setLeftActiveIndex] = useState<number | null>(null);
  const [rightActiveIndex, setRightActiveIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#fcfcfc] text-[#111] overflow-hidden">
      {/* Page 1: Hero Image & Abstract Introduction */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="pt-24 md:pt-32">
        <div className="px-6 md:px-12 mb-16 md:mb-24">
          <motion.div variants={itemVariants} className="w-full h-[50vh] md:h-[75vh] overflow-hidden bg-black/5 relative group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Interior Office Landscape" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <div className="px-6 md:px-12 text-center mb-24 md:mb-32">
          {/* <motion.h2 variants={itemVariants} className="text-[28px] md:text-[40px] lg:text-[48px] font-medium tracking-tight mb-12">
            Design. Technology. Marketing. Real digital presence connects them all.
          </motion.h2> */}  

          {/* Scrolling Services Description */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap text-[13px] uppercase font-bold tracking-widest text-black/40"
            >
              <span>UI/UX & Experience Design —</span>
              <span>Wireframing & Prototyping —</span>
              <span>User Research & Testing —</span>
              <span>Custom Web Development —</span>
              <span>E-commerce Development —</span>
              <span>System Development —</span>
              <span>API & Integrations —</span>
              <span>Cloud Infrastructure —</span>
              <span>Technical Support —</span>
              <span>Visual Production —</span>
              <span>Marketing Graphics —</span>
              {/* Duplicate for seamless loop */}
              <span>UI/UX & Experience Design —</span>
              <span>Wireframing & Prototyping —</span>
              <span>User Research & Testing —</span>
              <span>Custom Web Development —</span>
              <span>E-commerce Development —</span>
              <span>System Development —</span>
              <span>API & Integrations —</span>
              <span>Cloud Infrastructure —</span>
              <span>Technical Support —</span>
              <span>Visual Production —</span>
              <span>Marketing Graphics —</span>
            </motion.div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 px-6 md:px-12 mb-32 md:mb-48">
          <motion.div variants={itemVariants} className="md:col-span-5 aspect-[3/4] bg-black/5 overflow-hidden group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
              src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop" 
              alt="Abstract Art Poster" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="md:col-span-7 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 md:gap-8 pb-12">
            <motion.div variants={itemVariants} className="max-w-[340px] text-[13px] font-medium leading-relaxed text-[#111]">
              In the digital ecosystem, strategy, design, technology, and marketing often operate separately. The result is fragmentation and inefficiency. DUO was created to change that. We design digital ecosystems where strategy, design, and performance work as one integrated system. We build structures that make scaling simpler, more efficient, and truly seamless.
            </motion.div>
            <motion.div variants={itemVariants} className="w-32 h-32 lg:w-48 lg:h-48 bg-black/5 overflow-hidden shrink-0 hidden md:block group">
              <motion.img 
                animate={{ scale: [1, 1.08, 1] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop" 
                alt="Detail Texture" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div> */}
      </motion.section>

      {/* Page 1 Bottom / Page 2 Top: Massive Typography Ecosystem block */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="px-6 md:px-12 mb-24 md:mb-32"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-[48px] sm:text-[64px] md:text-[8vw] lg:text-[7vw] xl:text-[110px] leading-[0.85] tracking-tighter uppercase font-bold text-[#111]"
        >
          AN END-TO-END ECOSYSTEM<br/>
          DESIGNED TO SCALE, PERFORM AND<br/>
          <span className="text-black/30">INTEGRATE SEAMLESSLY.</span>
        </motion.h2>
      </motion.section>

      {/* Services Section: Two Column Layout */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="px-6 md:px-12 mb-32 md:mb-48"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT COLUMN: UI/UX Design & Graphic Designing */}
          <motion.div variants={itemVariants} className="space-y-12">
            <ul className="space-y-8" onMouseLeave={() => setLeftActiveIndex(null)}>
              {leftServices.map((service, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => setLeftActiveIndex(idx)}
                  className="cursor-pointer"
                >
                  <div className={`flex items-start text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-all duration-300 ${
                    leftActiveIndex === idx ? 'text-[#111] scale-105' : 'text-black/40 hover:text-black/60'
                  }`}>
                    <span className={`text-[11px] font-bold mr-6 mt-[8px] shrink-0 transition-colors ${
                      leftActiveIndex === idx ? 'text-black/60' : 'text-black/30'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    {service.category}
                  </div>

                  <AnimatePresence>
                    {leftActiveIndex === idx && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="ml-11 mt-4 space-y-2 text-sm md:text-base font-normal text-black/60 overflow-hidden"
                      >
                        {service.subcategories.map((sub, subIdx) => (
                          <motion.li
                            key={subIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: subIdx * 0.05 }}
                          >
                            — {sub}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Image for this service */}
                  <AnimatePresence>
                    {leftActiveIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 overflow-hidden"
                      >
                        <div className="h-[40vh] md:h-[50vh] bg-black/5 overflow-hidden group relative">
                          <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7 }}
                            src={service.img}
                            alt={service.category}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: Web Development & System Development */}
          <motion.div variants={itemVariants} className="space-y-12">
            <ul className="space-y-8" onMouseLeave={() => setRightActiveIndex(null)}>
              {rightServices.map((service, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => setRightActiveIndex(idx)}
                  className="cursor-pointer"
                >
                  <div className={`flex items-start text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-all duration-300 ${
                    rightActiveIndex === idx ? 'text-[#111] scale-105' : 'text-black/40 hover:text-black/60'
                  }`}>
                    <span className={`text-[11px] font-bold mr-6 mt-[8px] shrink-0 transition-colors ${
                      rightActiveIndex === idx ? 'text-black/60' : 'text-black/30'
                    }`}>
                      {String(idx + 3).padStart(2, '0')}.
                    </span>
                    {service.category}
                  </div>

                  <AnimatePresence>
                    {rightActiveIndex === idx && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="ml-11 mt-4 space-y-2 text-sm md:text-base font-normal text-black/60 overflow-hidden"
                      >
                        {service.subcategories.map((sub, subIdx) => (
                          <motion.li
                            key={subIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: subIdx * 0.05 }}
                          >
                            — {sub}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Image for this service */}
                  <AnimatePresence>
                    {rightActiveIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 overflow-hidden"
                      >
                        <div className="h-[40vh] md:h-[50vh] bg-black/5 overflow-hidden group relative">
                          <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7 }}
                            src={service.img}
                            alt={service.category}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.section>

      {/* Page 2 Bottom: Two Column Image Break */}
      {/* <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="mb-32 md:mb-48"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 px-6 md:px-0">
          <motion.div variants={itemVariants} className="aspect-[4/5] bg-black/5 overflow-hidden relative group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              src="https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=1974&auto=format&fit=crop" 
              alt="Abstract Floral Blur" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="aspect-[4/5] bg-black/5 overflow-hidden relative group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 26, repeat: Infinity, ease: "linear", delay: 2 }}
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" 
              alt="Abstract Fashion Blur" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <div className="px-6 md:px-12 mt-8 md:mt-12">
          <motion.div variants={itemVariants} className="max-w-md text-xs font-semibold leading-relaxed text-[#111]">
            DUO works with brands that refuse to treat digital platforms as simple landing pages. Brands that see it as infrastructure, as strategy, as a system to build and scale over time. From established companies to emerging brands, we collaborate with teams that want clarity, structure, and real performance. Fashion, lifestyle, and consumer brands that understand that growth doesn't come from noise, but from strong foundations. Together we design digital ecosystems built to perform, evolve, and grow continuously.
          </motion.div>
        </div>
      </motion.section> */}

      {/* Featured Clients Section */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="px-6 md:px-12 pb-32"
      >
        {/* Featured Clients */}
        <motion.div variants={itemVariants} className="border-t border-black/10 pt-16">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">Featured Clients</h3>
          <div className="text-[10px] text-black/40 font-bold uppercase tracking-widest mb-16">2026 - Present</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-24">
            {[
              { label: 'a', name: "Bake Fairy", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
              { label: 'b', name: "AURA Clothing", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop" },
              { label: 'c', name: "Ceylon Mart", img: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1964&auto=format&fit=crop" }
            ].map((client, i) => (
              <div key={i} className="flex flex-col group">
                <div className="flex justify-between items-end text-[10px] uppercase font-bold tracking-widest mb-6">
                  <span className="text-black/40 font-serif lowercase italic text-xs">( {client.label}. )</span>
                  <span className="text-[#111]">{client.name}</span>
                </div>
                <div className="w-full aspect-square bg-black/5 overflow-hidden relative">
                  <motion.img
                    animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * 2 }}
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      
    </main>
  );
};
