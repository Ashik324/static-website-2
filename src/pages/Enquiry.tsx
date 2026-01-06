import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';
import { COMPANY_DETAILS } from '../lib/constants';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Enquiry() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Construct the WhatsApp Message
    const text = `*New Project Enquiry (Dedicated Page)* 🚀%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Service:* ${data.service}%0A` +
      `*Details:* ${data.message}`;

    // Redirect to WhatsApp
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${text}`;
    window.open(url, '_blank');

    // Show success state
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-surface pt-32 pb-20 text-center text-white border-b border-white/5">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black mb-4">Enquiry Form</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-mono text-sm">INPUT REQUIREMENTS // START PROJECT</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-surface/50 backdrop-blur-md p-12 rounded-3xl shadow-neon-cyan text-center border border-secondary/50"
            >
              <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#25D366] shadow-neon-cyan">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">WhatsApp Opened</h2>
              <p className="text-slate-400 text-lg mb-8">
                We have redirected your enquiry to WhatsApp. Please hit the <strong>send button</strong> in the chat to complete the process.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Submit Another Enquiry
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface/30 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-glass border border-white/10"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Project Parameters</h2>
                <p className="text-slate-400 mt-2 font-mono text-sm">Fill out the data fields below to start a WhatsApp chat.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                    <input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary focus:shadow-neon-cyan outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-accent text-xs">{errors.name.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                      })}
                      className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary focus:shadow-neon-cyan outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-accent text-xs">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary focus:shadow-neon-cyan outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-accent text-xs">{errors.phone.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-300">Interested Service</label>
                    <select
                      id="service"
                      {...register("service", { required: "Please select a service" })}
                      className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:shadow-neon-cyan outline-none transition-all appearance-none"
                    >
                      <option value="" className="bg-primary">Select a service...</option>
                      <option value="Web Development" className="bg-primary">Web Development</option>
                      <option value="App Development" className="bg-primary">App Development</option>
                      <option value="Social Media Marketing" className="bg-primary">Social Media Marketing</option>
                      <option value="AI Solutions" className="bg-primary">AI Solutions</option>
                      <option value="Other" className="bg-primary">Other</option>
                    </select>
                    {errors.service && <span className="text-accent text-xs">{errors.service.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Please provide some details" })}
                    className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary focus:shadow-neon-cyan outline-none transition-all resize-none"
                    placeholder="Briefly describe your project needs, goals, and timeline..."
                  />
                  {errors.message && <span className="text-accent text-xs">{errors.message.message}</span>}
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="gradient"
                    size="lg" 
                    className="w-full md:w-auto min-w-[200px] shadow-neon-purple"
                    isLoading={isSubmitting}
                  >
                    {!isSubmitting && <MessageCircle className="w-4 h-4 mr-2" />}
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
