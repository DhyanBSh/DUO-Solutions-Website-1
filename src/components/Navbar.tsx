import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      <motion.nav
        initial={{ y: -100, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/20 bg-white/70 backdrop-blur-md transition-all"
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src="DUO Logo ICON.png" alt="DUO Logo" className="h-10 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-bold text-[#111]">
          <Link
            to="/about"
            className={`hover:opacity-50 transition-all ${isActive('/about') ? 'opacity-100 border-b-2 border-[#111] pb-1' : ''}`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={`hover:opacity-50 transition-all ${isActive('/services') ? 'opacity-100 border-b-2 border-[#111] pb-1' : ''}`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`hover:opacity-50 transition-all ${isActive('/portfolio') ? 'opacity-100 border-b-2 border-[#111] pb-1' : ''}`}
          >
            Portfolio
          </Link>
        </div>

        <div className="flex justify-end">
          <Link
            to="/contact"
            className={`flex py-4 border group px-6 text-[10px] uppercase tracking-widest font-bold transition-colors items-center gap-2 ${
              isActive('/contact')
                ? 'bg-[#111] text-white border-[#111]'
                : 'border-[#111] text-[#111] hover:bg-[#111] hover:text-white'
            }`}
          >
            Contact Us
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.nav>

      {/* Secondary navbar for mobile */}
      <motion.nav
        initial={{ y: -100, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-[72px] left-0 right-0 z-40 md:hidden flex justify-start gap-8 px-6 py-4 border-b border-white/20 bg-white/70 backdrop-blur-md transition-all"
      >
        <Link
          to="/about"
          className={`text-[11px] uppercase tracking-[0.2em] font-bold text-[#111] hover:opacity-50 transition-all ${
            isActive('/about') ? 'opacity-100 border-b-2 border-[#111] pb-1' : ''
          }`}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`text-[11px] uppercase tracking-[0.2em] font-bold text-[#111] hover:opacity-50 transition-all ${
            isActive('/services') ? 'opacity-100 border-b-2 border-[#111] pb-1' : ''
          }`}
        >
          Services
        </Link>
        <Link
          to="/portfolio"
          className={`text-[11px] uppercase tracking-[0.2em] font-bold text-[#111] hover:opacity-50 transition-all ${
            isActive('/portfolio') ? 'opacity-100 border-b-2 border-[#111] pb-1' : ''
          }`}
        >
          Portfolio
        </Link>
      </motion.nav>
    </div>
  );
};
