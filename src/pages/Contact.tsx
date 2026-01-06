import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Globe, ChevronDown } from 'lucide-react';
import { COMPANY_DETAILS } from '../lib/constants';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const { whatsappNumber, whatsappMessage } = COMPANY_DETAILS;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnquire = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp Message
    const text = `*New Project Enquiry from Website* 🚀%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.countryCode} ${formData.phone}%0A` +
      `*Service:* ${formData.service || 'Not Specified'}%0A` +
      `*Details:* ${formData.message}`;

    // Redirect to WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  };

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
          {/* Left Column: Contact Details */}
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

          {/* Right Column: WhatsApp Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-neon-cyan/20 relative flex flex-col"
          >
             {/* Header Strip */}
             <div className="bg-gradient-tech p-1"></div>
             
             <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">Get Your <span className="text-secondary">Free Quote!</span></h2>
                  <p className="text-slate-400 text-sm">Fill the form below to start your project conversation on WhatsApp.</p>
                </div>

                <form onSubmit={handleEnquire} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Name*</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email ID</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    />
                  </div>

                  {/* Phone Number (Split) */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Contact Number*</label>
                    <div className="flex gap-3">
                      <div className="relative w-1/3 md:w-1/4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Globe className="h-4 w-4 text-slate-500" />
                        </div>
                        <input
                          type="text"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          placeholder="+971"
                          className="w-full pl-9 pr-3 py-3 rounded-xl bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-center"
                        />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="50 123 4567"
                        className="flex-1 px-4 py-3 rounded-xl bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Service*</label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-white/10 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-surface text-slate-400">Select a Service...</option>
                        <option value="Web Development" className="bg-surface">Web Development</option>
                        <option value="App Development" className="bg-surface">App Development</option>
                        <option value="Digital Marketing" className="bg-surface">Digital Marketing</option>
                        <option value="AI Solutions" className="bg-surface">AI Solutions</option>
                        <option value="Other" className="bg-surface">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Project Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us a bit about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="gradient" 
                    className="w-full py-6 text-lg font-bold shadow-neon-purple mt-4 group"
                  >
                    ENQUIRE NOW 
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
