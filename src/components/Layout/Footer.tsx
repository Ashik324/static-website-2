import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, TrendingUp, Cpu, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../../lib/constants';
import { Button } from '../ui/Button';
import { useState } from 'react';
import { sendEmail } from '../../lib/email';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      await sendEmail({
        type: "Newsletter Subscription",
        email: email,
        message: "User subscribed via Footer.",
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-primary border border-secondary/50 shadow-neon-cyan">
                 <TrendingUp className="w-7 h-7 text-secondary" />
                 <div className="absolute -bottom-1 -right-1 bg-accent text-white rounded-lg p-1 shadow-neon-purple border border-white/20">
                    <Cpu className="w-3 h-3 fill-current" />
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-none">{COMPANY_DETAILS.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Technology</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {COMPANY_DETAILS.tagline}. We engineer digital growth through innovation and excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 hover:shadow-neon-cyan border border-transparent hover:border-secondary">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {['Home', 'About Us', 'Vision & Mission', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-secondary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0 text-secondary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (New Lead Capture) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white">Stay Ahead of the Curve</h3>
            <p className="text-slate-400 text-sm mb-4 max-w-md">
              Subscribe to our newsletter for the latest insights on AI, Tech Trends, and Digital Innovation.
            </p>
            
            {status === 'success' ? (
              <div className="flex items-center gap-3 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20 max-w-md">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  required
                  className="flex-grow px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-slate-600 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                />
                <Button variant="neon" className="whitespace-nowrap" isLoading={status === 'loading'}>
                  Subscribe <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
            
            <p className="text-xs text-slate-600 mt-3">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-white/10 pt-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">{COMPANY_DETAILS.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">{COMPANY_DETAILS.email}</span>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
