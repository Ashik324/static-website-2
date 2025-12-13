import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, Cpu } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Vision', path: '/vision-mission' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-primary/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-neon-cyan/20" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-primary/80 border border-secondary/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:shadow-neon-cyan transition-all duration-300 backdrop-blur-sm overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             {/* Main Icon: Trending Up (Growth) */}
             <TrendingUp className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300 relative z-10" />
             
             {/* Badge: CPU (Tech) */}
             <div className="absolute -bottom-1 -right-1 bg-accent text-white rounded-lg p-1 shadow-neon-purple border border-white/20 z-20">
                <Cpu className="w-3 h-3 fill-current animate-pulse-slow" />
             </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white leading-none group-hover:text-secondary transition-colors">
              Tech Thrive
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
              Technology
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                  isActive 
                    ? "text-secondary" 
                    : "text-slate-400 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-secondary/10 border border-secondary/20 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
            <NavLink to="/enquiry">
            <Button variant="gradient" size="sm" className="rounded-full px-6 border border-white/10">
              Get Started
            </Button>
            </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-secondary hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/95 backdrop-blur-xl border-b border-secondary/20 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-base font-medium py-3 px-4 rounded-lg transition-all",
                      isActive 
                        ? "bg-secondary/10 text-secondary border border-secondary/20" 
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink to="/enquiry" className="mt-2">
                <Button variant="gradient" className="w-full justify-center">Get Started</Button>
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
