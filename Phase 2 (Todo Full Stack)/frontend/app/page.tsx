"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Layout, Shield, Zap, Star, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-48 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-float opacity-50" />
          <div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-float opacity-50 transition-delay-1000" />
          <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="animate-welcome space-y-8 max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black tracking-widest uppercase mb-4 animate-glow">
            <Sparkles className="w-4 h-4" />
            The Future of Productivity is Here
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-foreground">
            Master your day, <br />
            <span className="text-gradient italic">Perfectly</span> Organized.
          </h1>

          <p className="body max-w-2xl mx-auto text-xl md:text-2xl mt-8 opacity-80 font-medium">
            Experience the ultimate todo platform with glassmorphism aesthetics
            and seamless performance. Built for high-achievers.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
            <Link href="/auth/sign-up">
              <Button
                variant="primary"
                size="lg"
                className="h-16 px-10 rounded-2xl text-lg font-bold shadow-[0_20px_40px_rgba(var(--primary),0.3)] group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started for Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
            <Link href="/auth/sign-in">
              <Button
                variant="secondary"
                size="lg"
                className="h-16 px-10 rounded-2xl text-lg font-bold glass-premium border-white/20 hover:scale-105"
              >
                Sign In to Account
              </Button>
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="relative mt-24 w-full max-w-6xl mx-auto animate-welcome px-4 sm:px-10" style={{ animationDelay: '0.4s' }}>
          <div className="glass-premium rounded-[2.5rem] p-4 border border-white/20 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="bg-background/80 rounded-[2rem] overflow-hidden aspect-[16/9] md:aspect-[16/7] flex items-center justify-center border border-white/5 relative">
              {/* Mock Content */}
              <div className="flex flex-col items-center gap-4 text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary animate-float mb-4">
                  <Layout className="w-8 h-8" />
                </div>
                <h3 className="h3">Intelligent Dashboard</h3>
                <p className="body max-w-md">Your tasks organized in a beautiful, responsive, and blazing-fast interface.</p>
              </div>
              {/* Decorative dots/circles for "mock" UI feel */}
              <div className="absolute top-6 left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-horizontal section-vertical bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="h2 mb-4">Why TaskFlow Pro?</h2>
            <p className="body">Superior design and performance for your workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Lightning Fast"
              description="Optimized performance ensures your tasks load in milliseconds, no matter the scale."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure by Design"
              description="Enterprise-grade JWT authentication keeps your personal data safe and private."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Premium UI"
              description="Beautiful glassmorphism design with smooth animations and dark mode support."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 border-y border-ui-border/20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex -space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center font-bold text-xs ring-2 ring-primary/20">
                U{i}
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-background bg-primary text-white flex items-center justify-center font-bold text-xs">+</div>
          </div>
          <h3 className="h3 mb-2">Used by 10,000+ teams worldwide</h3>
          <p className="body uppercase tracking-widest font-black text-xs opacity-50">Trusted across the globe</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-ui-border/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                <CheckCircle2 className="w-5 h-5" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black tracking-tighter">TaskFlow Pro</h3>
            </div>
            <p className="body max-w-sm">
              The premium way to organize your life and tasks. Beautifully designed,
              intelligently built.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-50">Product</h4>
            <ul className="space-y-2 font-bold text-sm">
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-50">Company</h4>
            <ul className="space-y-2 font-bold text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-ui-border/10 text-center text-sm font-bold opacity-30">
          &copy; 2026 TaskFlow Pro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-premium rounded-[2rem] p-10 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
        {icon}
      </div>
      <h3 className="h3 mb-4">{title}</h3>
      <p className="body text-base opacity-70 group-hover:opacity-100 transition-opacity">
        {description}
      </p>
    </div>
  );
}
