import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Hero = () => (
  <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#fcfcfc] mt-0 pt-20">
    <motion.img 
      initial={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(5px)' }}
      transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      src="/Hero4.jpg"
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover grayscale"
      referrerPolicy="no-referrer"
    />
    <div className="relative z-10 flex flex-col items-center w-full h-full px-6 md:px-12 pb-12">
      <motion.h1 
        initial={{ opacity: 0, y: 60, filter: 'blur(20px)', scale: 0.95 }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-[14vw] md:text-[6vw] leading-[0.8] tracking-tighter uppercase font-bold text-center text-[#FFF] my-auto mt-auto pt-2"
      >
        Designed for Impact. <br/>Built to Last.
      </motion.h1>
    </div>
  </section>
);

// const CaseStudiesTable = () => (
//   <section className="px-6 md:px-12 py-16 md:py-24 border-b border-black/10 bg-[#fcfcfc]">
//     <div className="hidden md:flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-black/40 border-b border-black/10 pb-4 mb-4">
//       <div className="w-1/4">Partner</div>
//       <div className="w-1/4">Platform</div>
//       <div className="w-1/4 text-center">( DUO CASE STUDIES )</div>
//       <div className="w-1/4 text-right">Service</div>
//     </div>
//     <ul className="text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#111] flex flex-col gap-y-4 md:gap-y-0">
//        {[
//           { partner: 'DOCKERS', platform: 'SHOPIFY', label: 'a.', services: 'Integration, Marketing, SEO, CRO, MOR' },
//           { partner: 'CHAMPION', platform: 'SHOPIFY PLUS', label: 'b.', services: 'UX/UI, Dev, Integration, SEO, Marketing' },
//           { partner: 'BENETTON', platform: 'SHOPIFY PLUS', label: 'c.', services: 'UX/UI, Dev, Integration, SEO' },
//           { partner: 'SOTF', platform: 'CUSTOM', label: 'd.', services: 'UX/UI, Brand Direction' },
//           { partner: "MASON'S", platform: 'SHOPIFY PLUS', label: 'e.', services: 'UX/UI, Dev, Integration, SEO' },
//           { partner: 'ROBERTO COLLINA', platform: 'SHOPIFY PLUS', label: 'f.', services: 'UX/UI, Dev, B2C, Marketing' },
//           { partner: 'POLLINI', platform: 'LARAVEL', label: 'g.', services: 'UX/UI, Dev, Integration, SEO, Marketing' },
//           { partner: 'ENGINE', platform: 'SHOPIFY HEADLESS', label: 'h.', services: 'Dev, Marketing, Integration' },
//           { partner: 'ROMBO GROUP', platform: 'SHOPIFY', label: 'i.', services: 'UX/UI, Dev (B2C/B2B), Marketing' },
//           { partner: 'PIER', platform: 'SHOPIFY', label: 'j.', services: 'UX/UI, Dev, Integration, Marketing' },
//        ].map((item, i) => (
//          <motion.li 
//            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
//            key={i} 
//            className="group flex flex-col md:flex-row justify-between md:items-center py-2 md:py-3 md:border-b border-black/5 hover:bg-[#111] hover:text-white transition-colors cursor-pointer md:px-2 md:-mx-2"
//          >
//            <div className="w-full md:w-1/4 mb-1 md:mb-0 flex justify-between md:block">
//              <span className="md:hidden text-black/40 group-hover:text-white/60 transition-colors">Partner</span>
//              {item.partner}
//            </div>
//            <div className="w-full md:w-1/4 mb-2 md:mb-0 text-black/60 md:text-[#111] group-hover:text-white md:group-hover:text-white transition-colors flex justify-between md:block">
//              <span className="md:hidden text-black/40 group-hover:text-white/60 transition-colors">Platform</span>
//              {item.platform}
//            </div>
//            <div className="hidden md:block w-1/4 text-center text-black/40 group-hover:text-white/60 transition-colors font-serif italic lowercase">( {item.label} )</div>
//            <div className="w-full md:w-1/4 md:text-right overflow-hidden whitespace-nowrap text-ellipsis flex justify-between md:block">
//              <span className="md:hidden text-black/40 group-hover:text-white/60 transition-colors">Service</span>
//              <span className="truncate ml-4 md:ml-0">{item.services}</span>
//            </div>
//          </motion.li>
//        ))}
//     </ul>
//   </section>
// );

const Manifesto = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 bg-[#fcfcfc]">
    <motion.h2
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
      className="text-[28px] md:text-[40px] lg:text-[48px] font-medium tracking-tight leading-[1.05] max-w-[1400px] mb-24 md:mb-32"
    >
      <motion.span variants={itemVariants}>We mix <span className="font-bold text-black/50">strategy, design, and development</span> to create digital products that don't just look good, <span className="font-bold italic text-[#111]">they perform.</span></motion.span>
    </motion.h2>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mt-24">
      <div className="lg:col-span-8">
        <h3 className="text-[16px] uppercase font-bold tracking-widest text-black/40 mb-8">Our Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-48 md:h-64">
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">UI/UX<br/>Designing</span>
             <img src="/Services/UI.webp" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Web<br/>Development</span>
             <img src="/Services/Web.jpg" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Branding</span>
             <img src="/Services/Logo.webp" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Creative<br/>Designing</span>
             <img src="/Services/Flyer.webp" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
        </div>
      </div>
      <div className="lg:col-span-4 lg:pl-16 flex flex-col justify-end">
        {/* <h3 className="text-[10px] uppercase font-bold tracking-widest text-black/40 mb-8">Est. 2026</h3> */}
        <p className="text-base font-semibold leading-relaxed mb-6 text-[#111]">
          We turn ideas into striking digital experiences that instantly capture attention and leave a lasting impression. Every detail is crafted with intention, blending creativity and strategy to create interactions that feel effortless and memorable.
        </p>
        <p className="text-sm text-black/60 leading-relaxed mb-6 font-medium">
          We go beyond visuals. Crafting smooth, impactful experiences built to perform, with clarity, consistency, and modern design at the core.
        </p>
      </div>
    </div>
  </section>
);

const FadingText = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 bg-[#fcfcfc]">
    <motion.h2 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
      className="text-[40px] md:text-[6vw] leading-[0.9] font-bold tracking-tighter uppercase"
    >
      <motion.div variants={itemVariants} className="text-black/80">WE BRING IDEAS & EXECUTION,</motion.div>
      <motion.div variants={itemVariants} className="text-black/60">TRANSFORMING VISION</motion.div>
      <motion.div variants={itemVariants} className="text-black/40">INTO SEAMLESS, IMPACTFUL</motion.div>
      <motion.div variants={itemVariants} className="text-black/20">DIGITAL EXPERIENCES.</motion.div>
    </motion.h2>
  </section>
);

const Showreel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <section className="px-6 md:px-12 pb-24 md:pb-32 bg-[#fcfcfc]">
      <a
        href="/portfolio"
        aria-label="View portfolio"
        className="block w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="group relative aspect-[3/4] md:aspect-video w-full cursor-pointer overflow-hidden bg-black/5">
          <video
            ref={videoRef}
            src="/Home Video.mp4"
            className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
            loop
            muted
            playsInline
          />

          <div className="absolute bottom-6 left-6 z-10 flex w-full flex-col gap-4 pr-12 md:flex-row md:items-center md:gap-8">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white mix-blend-difference transition-opacity group-hover:opacity-50">
              View Portfolio
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>

            <div className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70 mix-blend-difference md:absolute md:right-12">
              DUO Solutions
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export const Home = () => (
  <main className="bg-[#fcfcfc] text-[#111]">
    <Hero />
    <Manifesto />
    <FadingText />
    <Showreel />
  </main>
);
