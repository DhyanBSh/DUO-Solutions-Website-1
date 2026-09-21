import { motion } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const About = () => {
  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#fcfcfc] min-h-screen text-[#111] overflow-hidden relative">
      
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-12 max-w-7xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-black/[0.04]" />
        ))}
      </div>

      <motion.section 
        initial="hidden" animate="visible" variants={sectionVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex justify-between items-start text-[10px] uppercase tracking-widest font-bold text-black/50 mb-20 md:mb-32">
          <motion.div variants={itemVariants}>Brand Direction</motion.div>
          <motion.div variants={itemVariants} className="hidden md:block">Performance Marketing</motion.div>
          <motion.div variants={itemVariants}>Advanced Tech</motion.div>
        </div>
        
        <motion.h1
          variants={itemVariants}
          className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight font-medium mb-16 md:mb-20"
          style={{
            textShadow: '2px 2px 0px rgba(0,0,0,0.15), 4px 4px 0px rgba(0,0,0,0.12), 6px 6px 0px rgba(0,0,0,0.09), 8px 8px 0px rgba(0,0,0,0.06), 10px 10px 0px rgba(0,0,0,0.04)'
          }}
        >
          Born from ambition. Built for impact.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.3] tracking-tight mb-32 md:mb-48 max-w-4xl"
        >
          <span className="font-bold text-black/50">Aim:</span> Deliver high quality, on time digital products that help brands stand out <span className="font-bold text-[#111]">differently, truly.</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <motion.div variants={itemVariants} className="md:col-span-6 flex flex-col gap-8 text-xl md:text-2xl font-medium tracking-tight text-[#111] leading-[1.4]">
            <p className="font-medium">
              DUO started in 2026 with a simple purpose: build quality digital products, on time, every time. No excuses, no shortcuts.
            </p>
            <p>
              Whether you're a small team with a big idea or an enterprise running large scale projects, we bring the same level of care and craftsmanship to every build. We don't do dull, cookie cutter systems we create digital experiences that are as unique as the brands behind them.
            </p>
            <p>
              DUO wasn't born from a manifesto or a theory. It came from something real a genuine drive to build, to stand out, <span className="font-bold text-[#111]">to rise.</span> The will to <span className="font-bold">make something that matters,</span> to leave a mark, and to prove things can be done better. <span className="font-bold text-[#111]">Differently. Truly.</span>
            </p>
            <p>
              That spark is where everything begins and it's still what drives us today.
            </p>
           
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-6 flex flex-col gap-8 text-xl md:text-2xl font-medium tracking-tight text-[#111] leading-[1.4]">
            <p>
              And it takes shape within a team built not on similarity, but on tension. Designers, creatives, developers, strategists. People who come from opposite worlds yet coexist in balance. Because it is there at the intersection between vision and structure that the difference is made.
            </p>
            <p>
              The true strength of DUO lies precisely in this: a harmony of diverse tensions. Between those who imagine and those who bring ideas to life. Between those who break the rules and those who rebuild them better.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};
