import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Share2, Cpu, Zap, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useRef } from 'react';

const services = [
  { icon: Code, title: "Web Development", desc: "Scalable, high-performance web solutions.", id: "web-development" },
  { icon: Smartphone, title: "App Development", desc: "Native & cross-platform mobile experiences.", id: "app-development" },
  { icon: Share2, title: "Digital Marketing", desc: "Data-driven strategies for growth.", id: "digital-marketing" },
  { icon: Cpu, title: "AI Solutions", desc: "Intelligent automation & analytics.", id: "ai-solutions" },
];

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-hidden bg-primary" ref={ref}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Neon Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" />
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-10 pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div style={{ y, opacity }} className="relative max-w-5xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-surface/50 border border-secondary/30 backdrop-blur-md mb-8 shadow-neon-cyan"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-secondary tracking-widest uppercase">System Online // Ready to Deploy</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-tech drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                Digital Intelligence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              <strong className="text-white">Tech Thrive Technology</strong> bridges the gap between human potential and artificial intelligence. We engineer the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/services">
                <Button size="lg" variant="gradient" className="rounded-full px-10 h-14 text-lg border border-white/20">
                  Initialize Project
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg backdrop-blur-sm">
                  Contact System
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-primary relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Core Modules</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Advanced technology solutions tailored to your specifications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-surface/40 border border-white/5 hover:border-secondary hover:bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-cyan h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-surface-light border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-secondary/50">
                  <service.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                
                {/* Updated Link to point to Services page with ID */}
                <Link 
                  to={`/services#${service.id}`} 
                  className="flex items-center text-secondary text-sm font-medium group-hover:text-white transition-colors mt-auto"
                >
                  Access Module <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner with <br /><span className="text-secondary">Tech Thrive?</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don't just write code; we build sustainable digital ecosystems. Our approach combines technical excellence with strategic vision to ensure your long-term success.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Globe, title: "Global Standards", desc: "World-class development practices and code quality." },
                  { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security built into every solution." },
                  { icon: Zap, title: "Rapid Innovation", desc: "Agile methodologies to get you to market faster." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent/50 group-hover:shadow-neon-purple transition-all">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-tech opacity-20 blur-[100px] rounded-full" />
              <div className="relative rounded-2xl border border-white/10 bg-surface-light/50 p-2 backdrop-blur-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Team Collaboration" 
                    className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay rounded-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-surface to-primary" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to <span className="text-accent">Upgrade?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the future. Scale your operations with Tech Thrive Technology.
          </p>
          <Link to="/enquiry">
            <Button size="lg" variant="gradient" className="rounded-full px-12 h-16 text-lg shadow-neon-purple border border-white/20">
              Initiate Sequence
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
