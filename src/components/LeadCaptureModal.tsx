import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Modal from './ui/Modal';
import { Button } from './ui/Button';
import { sendEmail } from '../lib/email';

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<{ email: string }>();

  useEffect(() => {
    // Show modal after 8 seconds if not already shown in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenLeadModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenLeadModal', 'true');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const onSubmit = async (data: { email: string }) => {
    try {
      await sendEmail({
        type: "Lead Capture (Modal)",
        email: data.email,
        message: "User requested a Free Tech Audit via Modal.",
      });
      setHasSubmitted(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to capture lead", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/10 to-transparent" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

        <div className="p-8 pt-10 text-center relative z-10">
          {!hasSubmitted ? (
            <>
              <div className="w-16 h-16 bg-surface-light border border-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon-cyan transform -rotate-3">
                <Sparkles className="text-secondary w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">
                Get a <span className="text-secondary">Free Tech Audit</span>
              </h2>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Unlock your business potential. Enter your email to receive a complimentary digital strategy assessment from our experts.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                    })}
                    className="w-full px-4 py-3 pl-4 rounded-xl bg-primary/50 border border-white/10 text-white placeholder-slate-500 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  />
                  {errors.email && <span className="absolute left-1 -bottom-5 text-accent text-xs">{errors.email.message}</span>}
                </div>

                <Button 
                  type="submit" 
                  variant="gradient" 
                  className="w-full py-6 text-base shadow-neon-purple"
                  isLoading={isSubmitting}
                >
                  Claim Free Audit <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
              
              <p className="mt-4 text-xs text-slate-600">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="py-10">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-slate-400">We'll be in touch shortly.</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
