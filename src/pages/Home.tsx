import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

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
      animate={{ scale: 1, opacity: 1, filter: 'blur(2px)' }}
      transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      src="/Hero2.jpg"
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="relative z-10 flex flex-col items-center w-full h-full px-6 md:px-12">
      <motion.h1
          initial={{ opacity: 0, y: 60, filter: 'blur(20px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[14vw] md:text-[6vw] leading-[0.8] tracking-tighter uppercase font-bold text-center text-[#111] my-auto mt-auto pt-16"
        >
          Designed for Impact. <br />Built to Last.
      </motion.h1>
    </div>
    <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="pt-24">
              {/* Scrolling Services Description */}
              <div className="relative overflow-hidden py-4">
                <motion.div
                  animate={{ x: [0, -2000] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex gap-16 whitespace-nowrap text-[16px] uppercase font-bold tracking-widest text-black/40"
                >
                  <span>UI/UX Design</span>
                  <span>Wireframing & Prototyping  —</span>
                  <span>User Research & Testing  —</span>
                  <span>Custom Web Development  —</span>
                  <span>E-commerce Development  —</span>
                  <span>Visual Production  —</span>
                  <span>Creative Design  —</span>
                  {/* Duplicate for seamless loop */}
                  <span>UI/UX & Experience Design  —</span>
                  <span>Wireframing & Prototyping  —</span>
                  <span>User Research & Testing  —</span>
                  <span>Custom Web Development  —</span>
                  <span>E-commerce Development  —</span>
                  <span>Visual Production  —</span>
                  <span>Creative Design  —</span>
                </motion.div>
              </div>
          </motion.section>
  </section>
);


const Manifesto = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 bg-[#fcfcfc]">
    <motion.h2
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
      className="text-[28px] md:text-[40px] lg:text-[48px] font-medium tracking-tight leading-[1.05] max-w-[1400px] mb-24 md:mb-32"
    >
      <motion.span variants={itemVariants}>We mix <span className="font-bold text-[#65c52b]">strategy, design, and development</span> to create digital products that don't just look good, <span className="font-bold italic text-[#111]">they perform.</span></motion.span>
    </motion.h2>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mt-24">
      <div className="lg:col-span-8">
        <h3 className="text-[16px] uppercase font-bold tracking-widest text-black/40 mb-8">Our Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-48 md:h-64">
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[14px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">UI/UX<br/>Designing</span>
             <img src="/Services/UI.webp" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[14px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Web<br/>Development</span>
             <img src="/Services/Web.jpg" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[14px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Branding</span>
             <img src="/Services/Logo.webp" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[14px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Creative<br/>Designing</span>
             <img src="/Services/Flyer.webp" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
        </div>
      </div>
      <div className="lg:col-span-4 lg:pl-16 flex flex-col justify-end">
        {/* <h3 className="text-[10px] uppercase font-bold tracking-widest text-black/40 mb-8">Est. 2026</h3> */}
        <p className="text-base font-semibold leading-relaxed mb-6 text-[#111]">
          We turn ideas into striking digital experiences that instantly capture attention and leave a lasting impression. Every detail is crafted with intention, blending creativity and strategy to create interactions that feel effortless and memorable.
        </p>
        <p className="text-base text-black/60 leading-relaxed mb-6 font-semibold">
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
      className="text-[40px] md:text-[6vw] leading-[0.9] font-bold tracking-tighter"
    >
      <motion.div variants={itemVariants} className="text-black/50">We bring <span className="text-[#65c52b]">Ideas and Execution,</span></motion.div>
      <motion.div variants={itemVariants} className="text-black">transforming vision <span className="text-black/50">into</span></motion.div>
      <motion.div variants={itemVariants} className="text-[#65c52b]">seamless and impactful</motion.div>
      <motion.div variants={itemVariants} className="text-black/50">digital experiences.</motion.div>
    </motion.h2>
  </section>
);

const Showreel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().catch(() => {
          // Playback can still be blocked by browser settings.
        });
      }
    }, { threshold: 0.25 });

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 md:px-12 pb-24 md:pb-32 bg-[#fcfcfc]">
      <a
        href="/portfolio"
        aria-label="View portfolio"
        className="block w-full"
      >
        <div className="group relative aspect-[3/4] md:aspect-video w-full cursor-pointer overflow-hidden bg-black">
          <video
            ref={videoRef}
            src="/Home Video.mp4"
            className="h-full w-full object-contain scale-[1.2] transition-all duration-1000"
            loop
            muted
            playsInline
            preload="metadata"
          />

          <div className="absolute bottom-6 left-6 z-10 flex w-full flex-col gap-4 pr-12 md:flex-row md:items-center md:gap-8">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-white mix-blend-difference transition-opacity group-hover:opacity-50">
              View Portfolio
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>

            <div className="text-[12px] font-bold uppercase tracking-widest text-white opacity-70 mix-blend-difference md:absolute md:right-12">
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
