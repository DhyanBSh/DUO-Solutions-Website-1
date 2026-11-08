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
    category: "UI/UX Designing",
    img: "/Services/UI.webp",
    subcategories: [
      "UI/UX & Experience Design",
      "Wireframing & Prototyping",
      "Conversion Rate Optimization",
      "User Research & Usability Testing"
    ]
  },
  {
    category: "Creative Designing",
    img: "/Services/Flyer.webp",
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
    img: "/Services/Web.jpg",
    subcategories: [
      "Custom Web Development",
      "E-commerce Development",
      "Hosting & Cloud Infrastructure",
      "SEO & Performance Optimization"
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
        
        <div className="px-6 md:px-12 text-center mb-24 md:mb-24">
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
              <span>UI/UX & Experience Design  —</span>
              <span>Wireframing & Prototyping  —</span>
              <span>User Research & Testing  —</span>
              <span>Custom Web Development  —</span>
              <span>E-commerce Development  —</span>
              <span>Visual Production  —</span>
              <span>Marketing Graphics  —</span>
              {/* Duplicate for seamless loop */}
              <span>UI/UX & Experience Design  —</span>
              <span>Wireframing & Prototyping  —</span>
              <span>User Research & Testing  —</span>
              <span>Custom Web Development  —</span>
              <span>E-commerce Development  —</span>
              <span>Visual Production  —</span>
              <span>Marketing Graphics  —</span>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Services Section: Two Column Layout */}
      {/* Page 1 Bottom / Page 2 Top: Massive Typography Ecosystem block */}
<motion.section
  initial="visible"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={sectionVariants}
  className="px-6 md:px-12 mb-36 md:mb32"
>
  <motion.h2
    variants={itemVariants}
    className="text-[48px] sm:text-[64px] md:text-[8vw] lg:text-[7vw] xl:text-[110px] leading-[1] tracking-tighter uppercase font-bold text-[#111]"
  >
    <span className="text-black/40">AN </span> END-TO-END ECOSYSTEM<br />
    <span className="text-black/40">DESIGNED TO</span> SCALE, PERFORM AND
    INTEGRATE <span className="text-black/40">SEAMLESSLY.</span>
  </motion.h2>
</motion.section>

{/* Services Section: Two Column Layout */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={sectionVariants}
  className="px-6 md:px-12 mb-32 md:mb-48"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
    {/* LEFT COLUMN: UI/UX Design & Graphic Designing */}
    <motion.div variants={itemVariants} className="space-y-12">
      <ul className="space-y-12">
        {leftServices.map((service, idx) => (
          <li key={idx}>
            <div className="flex items-start text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              {service.category}
            </div>

            <ul className="ml-11 mt-4 space-y-2 text-sm md:text-base font-normal text-black/60">
              {service.subcategories.map((sub, subIdx) => (
                <li key={subIdx}>— {sub}</li>
              ))}
            </ul>

            <div className="mt-6">
              <div className="h-[40vh] md:h-[90vh] bg-black/5 overflow-hidden group relative">
                <img
                  src={service.img}
                  alt={service.category}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* RIGHT COLUMN: Web Development & System Development */}
    <motion.div variants={itemVariants} className="space-y-12">
      <ul className="space-y-12">
        {rightServices.map((service, idx) => (
          <li key={idx}>
            <div className="flex items-start text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              {service.category}
            </div>

            <ul className="ml-11 mt-4 space-y-2 text-sm md:text-base font-normal text-black/60">
              {service.subcategories.map((sub, subIdx) => (
                <li key={subIdx}>— {sub}</li>
              ))}
            </ul>

            <div className="mt-6">
              <div className="h-[40vh] md:h-[90vh] bg-black/5 overflow-hidden group relative">
                <img
                  src={service.img}
                  alt={service.category}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
</motion.section>
      
    </main>
  );
};
