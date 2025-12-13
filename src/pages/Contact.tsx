import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../lib/constants';

export default function Contact() {
  const { whatsappNumber, whatsappMessage } = COMPANY_DETAILS;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-surface pt-32 pb-20 text-center text-white border-b border-white/5">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black mb-4">Contact Info</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-mono text-sm">ESTABLISH CONNECTION // SECURE LINE</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-surface/30 backdrop-blur-sm p-8 rounded-2xl shadow-glass border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-lg border border-secondary/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Our Location</h3>
                    <p className="text-slate-400 mt-1 whitespace-pre-line">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-lg border border-secondary/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone Number</h3>
                    <p className="text-slate-400 mt-1">{COMPANY_DETAILS.phone}</p>
                    <p className="text-slate-500 text-sm">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-lg border border-[#25D366]/20">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp</h3>
                    <p className="text-slate-400 mt-1">Chat directly with our team</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline text-sm font-medium mt-1 inline-block">
                      Start Chat &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-lg border border-secondary/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Address</h3>
                    <p className="text-slate-400 mt-1">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-surface to-primary p-8 rounded-2xl shadow-glass border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 text-accent rounded-lg border border-white/10">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Business Hours</h3>
                  <div className="mt-4 space-y-2 text-slate-300 font-mono text-sm">
                    <div className="flex justify-between w-full gap-8">
                      <span>Monday - Friday</span>
                      <span className="text-secondary">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between w-full gap-8">
                      <span>Saturday</span>
                      <span className="text-secondary">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between w-full gap-8">
                      <span>Sunday</span>
                      <span className="text-red-400">OFFLINE</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-full min-h-[400px] bg-surface rounded-2xl overflow-hidden shadow-glass border border-white/10 relative group"
          >
             {/* Simulating a map */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/80 backdrop-blur px-6 py-3 rounded-full shadow-neon-cyan text-white font-semibold flex items-center gap-2 border border-secondary/50">
                   <MapPin size={18} className="text-secondary" />
                   Locate Us on Map
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
