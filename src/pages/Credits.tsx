import { motion } from 'framer-motion';
import { Code, Palette, Cpu, Layers, Heart } from 'lucide-react';

const creditSections = [
  {
    title: "Core Architecture",
    icon: Code,
    members: ["Tech Thrive Team", "Frontend Engineering"]
  },
  {
    title: "Visual Interface",
    icon: Palette,
    members: ["UI/UX Design Team", "Creative Director"]
  },
  {
    title: "Technologies",
    icon: Cpu,
    members: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
  }
];

export default function Credits() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-surface pt-32 pb-20 text-center text-white border-b border-white/5">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black mb-4">System Credits</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-mono text-sm">ATTRIBUTION // ACKNOWLEDGMENTS</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {creditSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-secondary/50 hover:shadow-neon-cyan transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-surface-light rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <section.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              
              <h2 className="text-xl font-bold text-white mb-6">{section.title}</h2>
              
              <ul className="space-y-3">
                {section.members.map((member, idx) => (
                  <li key={idx} className="text-slate-400 font-mono text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    {member}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and</span>
            <span className="text-white font-bold">Dualite</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
