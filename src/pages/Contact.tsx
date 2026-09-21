import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const Contact = () => (
  <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#fcfcfc] min-h-screen text-[#111] overflow-hidden">
    <motion.section 
      initial="hidden" animate="visible" variants={sectionVariants}
      className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
    >
      <div className="lg:col-span-6 flex flex-col">
        <motion.span variants={itemVariants} className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 block mb-6">Let's Talk</motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 60, filter: 'blur(20px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-[0.85] tracking-tighter uppercase font-bold mb-16 md:mb-24"
        >
          START A <br/><span className="text-black/30">PROJECT.</span>
        </motion.h1>

        <motion.div variants={sectionVariants} className="space-y-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-4">Email</h3>
            <a href="mailto:build.with.duo@gmail.com" className="text-lg md:text-xl font-medium tracking-tight hover:opacity-50 transition-opacity flex items-center gap-3"> build.with.duo@gmail.com</a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-4">Phone</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+94763932043" className="text-lg md:text-xl font-medium tracking-tight hover:opacity-50 transition-opacity flex items-center gap-3"> +94 76 393 2043</a>
              <a href="tel:+94776208398" className="text-lg md:text-xl font-medium tracking-tight hover:opacity-50 transition-opacity flex items-center gap-3"> +94 77 620 8398</a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-4">Location</h3>
            <p className="text-lg md:text-xl font-medium tracking-tight flex items-center gap-3"> Colombo, Sri Lanka</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="lg:col-span-6 flex flex-col justify-start">
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <motion.div 
            initial="hidden" animate="visible" variants={sectionVariants}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="group border-b border-black/20 pb-4 focus-within:border-black transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block mb-2 origin-left transform transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:scale-110 group-focus-within:text-[#111]">Your Name</label>
              <input type="text" className="w-full bg-transparent text-lg md:text-xl font-medium focus:outline-none placeholder:text-black/20" placeholder="Dhyan Bhashitha" />
            </motion.div>
            <motion.div variants={itemVariants} className="group border-b border-black/20 pb-4 focus-within:border-black transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block mb-2 origin-left transform transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:scale-110 group-focus-within:text-[#111]">Email Address</label>
              <input type="email" className="w-full bg-transparent text-lg md:text-xl font-medium focus:outline-none placeholder:text-black/20" placeholder="dhyan@example.com" />
            </motion.div>
            <motion.div variants={itemVariants} className="group border-b border-black/20 pb-4 focus-within:border-black transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block mb-2 origin-left transform transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:scale-110 group-focus-within:text-[#111]">Project Details</label>
              <textarea rows={4} className="w-full bg-transparent text-lg md:text-xl font-medium focus:outline-none placeholder:text-black/20 resize-none" placeholder="Tell us about your objectives..."></textarea>
            </motion.div>
            <motion.button variants={itemVariants} className="w-full py-6 border border-[#111] text-[#111] group flex justify-between items-center px-8 text-xs uppercase tracking-widest font-bold hover:bg-[#111] hover:text-white transition-colors mt-12 bg-transparent">
              Submit Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.section>
  </main>
);
