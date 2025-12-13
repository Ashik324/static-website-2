import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-primary min-h-screen">
      {/* Header */}
      <div className="bg-surface pt-32 pb-20 text-center text-white relative overflow-hidden border-b border-white/5">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary/90 z-0" />
         <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight"><span className="text-secondary">About</span> System</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-mono text-sm">IDENTIFICATION // ORIGIN // PURPOSE</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Pioneering Digital Excellence</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                At <strong className="text-secondary">Tech Thrive Technology</strong>, we believe in the transformative power of technology. Founded with a vision to bridge the gap between complex digital problems and elegant, user-centric solutions, we have grown into a full-service technology partner for businesses worldwide.
              </p>
              <p>
                Our team consists of passionate developers, creative designers, and strategic thinkers who are dedicated to pushing the boundaries of what's possible on the web. We don't just build websites or apps; we build digital ecosystems that foster growth.
              </p>
              <p>
                Whether you are a startup looking to make a mark or an established enterprise seeking to modernize, we bring the same level of enthusiasm and expertise to every project.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary rounded-2xl rotate-3 opacity-20 blur-lg" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Team working together" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {[
            { label: "Projects Completed", value: "200+" },
            { label: "Happy Clients", value: "150+" },
            { label: "Team Members", value: "25+" },
            { label: "Years Experience", value: "8+" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-surface/50 rounded-xl shadow-glass border border-white/5 hover:border-secondary/50 transition-all group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
