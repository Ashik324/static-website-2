import { motion } from 'framer-motion';
import { Code, Smartphone, Share2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const servicesList = [
  {
    icon: Code,
    title: "Web Development",
    id: "web-development",
    description: "Blazing fast, visceral web experiences.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["React / Next.js", "3D WebGL", "Micro-interactions"]
  },
  {
    icon: Smartphone,
    title: "App Development",
    id: "app-development",
    description: "Native apps that feel alive in your hand.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["iOS & Android", "Haptic Feedback", "Fluid Motion"]
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    id: "digital-marketing",
    description: "Campaigns that trigger dopamine loops.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Viral Content", "Community Growth", "Influencer Ops"]
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    id: "ai-solutions",
    description: "Next-gen intelligence for automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Predictive Models", "Chatbots", "Data Mining"]
  }
];

export default function Services() {
  return (
    <div className="bg-primary min-h-screen text-slate-100">
      <div className="pt-32 pb-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-secondary/10 via-primary to-primary" />
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter">
              OUR <span className="text-transparent bg-clip-text bg-gradient-tech drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-mono text-sm">TOOLS // SYSTEMS // CAPABILITIES</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              id={service.id} // ID used for navigation anchoring
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface/40 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-neon-cyan scroll-mt-32"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/90 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Floating Icon */}
                <div className="absolute -bottom-8 right-8 z-20">
                  <div className="w-20 h-20 bg-surface border border-secondary/50 text-secondary rounded-2xl shadow-neon-cyan flex items-center justify-center transform rotate-3 group-hover:rotate-12 transition-transform duration-300">
                    <service.icon size={36} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 pt-12">
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-400 mb-8 text-lg font-light">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 font-medium text-slate-300">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_5px_#00F0FF]" />
                      <span className="font-mono text-sm tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/enquiry">
                  <Button variant="neon" className="w-full rounded-xl py-6 text-lg">
                    Deploy Solution
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
