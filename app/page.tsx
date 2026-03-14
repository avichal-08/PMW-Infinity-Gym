"use client";

import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Clock, Star, Dumbbell, Activity, 
  ShieldCheck, CheckCircle2, ArrowRight, Menu, X, 
  Instagram, Facebook, Navigation
} from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [distance, setDistance] = useState('Calculating...');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
      setDistance('2.4 km away from your location');
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30">
      
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold tracking-tight">PMW <span className="text-orange-500">INFINITY</span></span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#transformations" className="hover:text-white transition-colors">Transformations</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Location</a>
          </nav>

          <div className="hidden md:block">
            <a href="#pricing" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all hover:scale-105 active:scale-95">
              Join Now
            </a>
          </div>

          <button className="md:hidden text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-zinc-950 to-zinc-950 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
              <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
              <span>4.9/5 Top Rated Gym in Kalyanpur</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Physique Today.
              </span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
              State-of-the-art equipment, expert trainers, and a community built on hustle. Your ultimate fitness destination in Lucknow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-md font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]">
                Start Your Journey <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-6 py-3.5 rounded-md font-medium transition-colors">
                View Facilities
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
              alt="Gym Athlete" 
              className="relative rounded-xl border border-zinc-800 object-cover h-[500px] w-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services / Facilities */}
      <section id="services" className="py-24 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">We don't just offer space; we offer a complete training ecosystem engineered for your growth.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Dumbbell, title: "Strength Training", desc: "Premium free weights, power racks, and specialized isolation machines." },
              { icon: Activity, title: "Cardio & HIIT", desc: "Top-tier treadmills, stair climbers, and assault bikes for maximum endurance." },
              { icon: ShieldCheck, title: "Certified Trainers", desc: "Expert guidance on form, programming, and personalized diet plans." }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section id="transformations" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Members, Real Results.</h2>
              <p className="text-zinc-400 max-w-lg">Consistency meets the right environment. See what our members have achieved at PMW Infinity.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 relative">
                <div className="h-64 flex bg-zinc-800">
                  <div className="w-1/2 border-r border-zinc-950 relative">
                     <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-xs px-2 py-1 rounded text-white z-10">Before</div>
                     <img src={`https://images.unsplash.com/photo-1616279967983-ec413476e824?q=80&w=400&auto=format&fit=crop&sig=${item}a`} alt="Before" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" />
                  </div>
                  <div className="w-1/2 relative">
                     <div className="absolute top-2 right-2 bg-orange-500/90 backdrop-blur-sm text-xs px-2 py-1 rounded text-white z-10">After</div>
                     <img src={`https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop&sig=${item}b`} alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">12-Week Transformation</h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />)}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">"The environment here pushes you to your absolute limits. The diet tracking and equipment are unmatched."</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Straightforward Memberships</h2>
            <p className="text-zinc-400">No hidden fees. Pick the plan that fits your goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 1 Month */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
              <h3 className="text-xl font-medium text-zinc-300 mb-2">Monthly Kickstart</h3>
              <div className="mb-6"><span className="text-4xl font-bold">₹1,000</span><span className="text-zinc-500"> /mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Full Gym Access', 'Standard Equipment', 'Locker Room Access'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-zinc-600" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-md border border-zinc-700 hover:bg-zinc-800 font-medium transition-colors">Select Plan</button>
            </div>

            {/* 3 Months - Highlighted */}
            <div className="p-8 rounded-2xl bg-zinc-900 border-2 border-orange-500 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-xl font-medium text-zinc-300 mb-2">Quarterly Hustle</h3>
              <div className="mb-6"><span className="text-4xl font-bold">₹2,500</span><span className="text-zinc-500"> /3 mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Everything in Monthly', '1 Free Diet Consultation', 'Body Composition Tracking', 'Access to Member App'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors">Join Now</button>
            </div>

            {/* 12 Months */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
              <h3 className="text-xl font-medium text-zinc-300 mb-2">Annual Athlete</h3>
              <div className="mb-6"><span className="text-4xl font-bold">₹8,000</span><span className="text-zinc-500"> /yr</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Everything in Quarterly', 'Priority Support', 'Freeze Membership (up to 1 mo)', 'PMW Merchandise'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-zinc-600" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-md border border-zinc-700 hover:bg-zinc-800 font-medium transition-colors">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Footer */}
      <section id="contact" className="border-t border-zinc-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Come Crush Your Goals.</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-zinc-900 p-2 rounded-lg border border-zinc-800"><MapPin className="h-5 w-5 text-orange-500" /></div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-zinc-400 text-sm">Unity City Colony, Kalyanpur<br/>Lucknow, UP 226022</p>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                      <Navigation className="h-3 w-3" /> {distance}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-zinc-900 p-2 rounded-lg border border-zinc-800"><Clock className="h-5 w-5 text-orange-500" /></div>
                  <div>
                    <h4 className="font-semibold mb-1">Operating Hours</h4>
                    <p className="text-zinc-400 text-sm">Mon - Sat: 06:00 AM - 10:00 PM<br/>Sun: 07:00 AM - 01:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-zinc-900 p-2 rounded-lg border border-zinc-800"><Phone className="h-5 w-5 text-orange-500" /></div>
                  <div>
                    <h4 className="font-semibold mb-1">Contact</h4>
                    <p className="text-zinc-400 text-sm">+91 98765 43210<br/>support@pmwinfinity.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Minimal Map Placeholder */}
            <div className="h-full min-h-[300px] rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="h-10 w-10 text-orange-500 mb-3 drop-shadow-lg" />
                <span className="font-medium bg-zinc-950/80 backdrop-blur px-4 py-2 rounded-full text-sm border border-zinc-800">View on Google Maps</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} PMW Infinity Gym. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}