import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(150, Math.max(48, Math.round((width * height) / 8500)));
      particles.length = 0;
      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.08 + Math.random() * 0.16;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 0.8 + Math.random() * 1.2,
        });
      }
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const pointer = pointerRef.current;
      const linkDistance = 142;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        if (!mediaQuery.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);
            if (distance > 0 && distance < 150) {
              const force = ((150 - distance) / 150) * 0.045;
              particle.vx += (dx / distance) * force;
              particle.vy += (dy / distance) * force;
              particle.vx *= 0.985;
              particle.vy *= 0.985;
            }
          }
        }

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < linkDistance) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(35, 45, 55, ${(1 - distance / linkDistance) * 0.13})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        if (pointer.active) {
          const distance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
          if (distance < 178) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(35, 45, 55, ${(1 - distance / 178) * 0.2})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(35, 45, 55, 0.34)';
        context.fill();
      }

      if (pointer.active) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 170);
        glow.addColorStop(0, 'rgba(120, 135, 150, 0.055)');
        glow.addColorStop(1, 'rgba(120, 135, 150, 0)');
        context.fillStyle = glow;
        context.fillRect(pointer.x - 170, pointer.y - 170, 340, 340);
      }
    };

    const animate = () => {
      draw();
      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      pointerRef.current = {
        x,
        y,
        active: x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height,
      };
      if (mediaQuery.matches) draw();
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
      if (mediaQuery.matches) draw();
    };

    const handleMotionChange = () => {
      window.cancelAnimationFrame(frame);
      if (!mediaQuery.matches) frame = window.requestAnimationFrame(animate);
      else draw();
    };

    resize();
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', resize);
    mediaQuery.addEventListener('change', handleMotionChange);
    if (!mediaQuery.matches) frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', resize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
};

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
    <HeroParticles />
    <div className="relative z-10 flex flex-col items-center w-full h-full px-6 md:px-12 pb-12">
      <motion.h1 
        initial={{ opacity: 0, y: 60, filter: 'blur(20px)', scale: 0.95 }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-[14vw] md:text-[8vw] leading-[0.8] tracking-tighter uppercase font-bold text-center text-[#111] my-auto mt-auto pt-16"
      >
        Designed for Impact. <br/>Built to Last.
      </motion.h1>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="w-full flex justify-between text-[12px] uppercase font-bold tracking-widest mt-auto text-[#111]">
        <motion.span variants={itemVariants}>Branding</motion.span>
        <motion.span variants={itemVariants} className="hidden md:block">Software Development</motion.span>
        <motion.span variants={itemVariants}>Creative Designing</motion.span>
      </motion.div>
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
      <motion.span variants={itemVariants}>From <span className="font-bold text-black/50">"just an idea"</span> to <span className="font-bold text-[#111]">"wait, we made this?!"</span> we mix strategy, design, and development to create digital products that don't just look good, <span className="font-bold italic text-[#111]">they perform.</span></motion.span>
    </motion.h2>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mt-24">
      <div className="lg:col-span-8">
        <h3 className="text-[16px] uppercase font-bold tracking-widest text-black/40 mb-8">Our Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-48 md:h-64">
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">UI/UX<br/>Designing</span>
             <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Web<br/>Development</span>
             <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Branding</span>
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
           <Link to="/services" className="bg-[#111] p-4 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
             <span className="relative z-10 text-[10px] uppercase font-bold tracking-widest text-white group-hover:text-white/0 transition-colors duration-300">Creative<br/>Designing</span>
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
           </Link>
        </div>
      </div>
      <div className="lg:col-span-4 lg:pl-16 flex flex-col justify-end">
        {/* <h3 className="text-[10px] uppercase font-bold tracking-widest text-black/40 mb-8">Est. 2026</h3> */}
        <p className="text-sm font-semibold leading-relaxed mb-6 text-[#111]">
          We turn ideas into striking digital experiences that instantly capture attention and leave a lasting impression. Every detail is crafted with intention, blending creativity and strategy to create interactions that feel effortless and memorable.
        </p>
        <p className="text-xs text-black/60 leading-relaxed mb-6 font-medium">
          We go beyond visuals. Crafting smooth, impactful experiences built to perform, with clarity, consistency, and modern design at the core.
        </p>
        <p className="text-xs text-black/60 leading-relaxed font-medium">
          From bold ideas to refined execution, we help brands stand out with confidence, delivering work that feels fresh, polished, and engaging.
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
      <motion.div variants={itemVariants} className="text-[#111]">INNOVATION IS CONNECTION.</motion.div>
      <motion.div variants={itemVariants} className="text-black/80">WE BRING IDEAS & EXECUTION,</motion.div>
      <motion.div variants={itemVariants} className="text-black/60">TRANSFORMING VISION</motion.div>
      <motion.div variants={itemVariants} className="text-black/40">INTO SEAMLESS, IMPACTFUL</motion.div>
      <motion.div variants={itemVariants} className="text-black/20">DIGITAL EXPERIENCES.</motion.div>
    </motion.h2>
  </section>
);

const Showreel = () => (
  <section className="px-6 md:px-12 pb-24 md:pb-32 bg-[#fcfcfc]">
    <div className="w-full relative aspect-[3/4] md:aspect-video bg-black/5 overflow-hidden group cursor-pointer">
      <div className="absolute top-6 left-6 z-10 text-[10px] font-bold uppercase tracking-widest text-white mix-blend-difference opacity-70">
        00:02:30
      </div>
      <div className="absolute top-6 right-6 z-10 text-[10px] font-bold uppercase tracking-widest text-white mix-blend-difference opacity-70 text-right">
        60fps<br/>Res: 1920x1080
      </div>
      
      <motion.img 
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] md:w-[60%] h-[30%] bg-white/10 backdrop-blur-sm border border-white/20 p-2 overflow-hidden flex items-center">
           <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" referrerPolicy="no-referrer" className="object-cover w-full h-full grayscale mix-blend-overlay opacity-50"/>
           <div className="absolute inset-0 flex items-center justify-center text-white/50 font-serif italic text-3xl md:text-5xl tracking-tighter mix-blend-overlay">NOWHERE</div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 flex-col md:flex-row flex md:items-center gap-4 md:gap-8 z-10 w-full pr-12">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white mix-blend-difference flex items-center gap-2 group-hover:opacity-50 transition-opacity">
          Play Showreel <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 px-4 py-1 border border-white/30 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-white">
          04. AI CONTENT CREATION
        </div>
        <div className="md:absolute right-12 text-[10px] font-bold uppercase tracking-widest text-white mix-blend-difference opacity-70">
          DUO©2026_SHOWREEL.MP4
        </div>
      </div>
    </div>
  </section>
);

export const Home = () => (
  <main className="bg-[#fcfcfc] text-[#111]">
    <Hero />
    <Manifesto />
    <FadingText />
    <Showreel />
  </main>
);
