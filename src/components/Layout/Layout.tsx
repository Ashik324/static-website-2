import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';
import LeadCaptureModal from '../LeadCaptureModal';

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Scroll logic handles both standard route changes and hash links
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small delay to ensure content is rendered before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen bg-primary text-slate-200 selection:bg-secondary selection:text-primary-dark font-sans">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50 mix-blend-overlay"></div>
      <Header />
      <main className="flex-grow pt-20 relative z-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadCaptureModal />
    </div>
  );
}
