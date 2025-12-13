import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export default function VisionMission() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-surface pt-32 pb-20 text-center text-white border-b border-white/5">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black mb-4">Vision & Mission</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-mono text-sm">CORE DIRECTIVES // FUTURE OUTLOOK</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20 space-y-20">
        
        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="bg-surface/30 p-8 md:p-12 rounded-3xl shadow-glass border border-white/5 border-l-4 border-l-secondary relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-secondary">
                <Lightbulb size={200} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary border border-secondary/20 shadow-neon-cyan">
                  <Lightbulb size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">
                To be the global catalyst for digital transformation, empowering businesses of all sizes to thrive in an ever-evolving technological landscape through innovation, integrity, and excellence. We envision a future where technology seamlessly enhances human potential.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Visionary Technology" 
                  className="w-full h-[300px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Team Mission" 
                  className="w-full h-[300px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-surface/30 p-8 md:p-12 rounded-3xl shadow-glass border border-white/5 border-r-4 border-r-accent relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 p-8 opacity-5 text-accent">
                <Target size={200} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent border border-accent/20 shadow-neon-purple">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">
                To deliver high-quality, scalable, and user-centric technology solutions that solve real-world problems. We are committed to fostering long-term partnerships with our clients by providing exceptional service, continuous support, and measurable results that drive business growth.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
