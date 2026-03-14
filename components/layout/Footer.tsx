"use client";

import { MapPin, Phone, Clock, Navigation, Instagram } from "lucide-react";

export function Footer() {

    const handleDirectionClick = () => {
        window.location.href = "https://www.google.com/maps/dir//PMW+INFINITY+GYM,+Unity+city,+gole+chauraha,+Unity+City+Colony,+Phool+Bagh+Colony,+Lucknow,+Uttar+Pradesh+226022/@26.918912,80.9730048,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x399957182bae1a7b:0xcf614b56a692922!2m2!1d80.9698052!2d26.9139568?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";
    };

    const handleMapClick = () => {
        window.location.href = "https://www.google.com/maps/place/pmw+gym/data=!4m2!3m1!1s0x399957182bae1a7b:0xcf614b56a692922?sa=X&ved=1t:242&ictx=111";
    };

    const handleInstaClick = () => {
        window.location.href = "https://www.instagram.com/pmwinfinitygym/";
    };

    return (
        <footer id="contact" className="border-t border-zinc-900 pt-20 pb-10 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Come Crush Your Goals.</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-zinc-900 p-2 rounded-lg border border-zinc-800"><MapPin className="h-5 w-5 text-orange-500" /></div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Location</h4>
                                    <p className="text-zinc-400 text-sm">Unity City, Gole Chauraha, Kamla Complex, Kalyanpur<br />Lucknow, UP 226022</p>
                                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                                        <button onClick={handleDirectionClick} className="flex items-center justify-between gap-2 cursor-pointer text-lg hover:text-orange-300 transition-colors">
                                            <Navigation className="h-3 w-3" />Get Directions
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-zinc-900 p-2 rounded-lg border border-zinc-800"><Clock className="h-5 w-5 text-orange-500" /></div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Operating Hours</h4>
                                    <p className="text-zinc-400 text-sm">Mon - Sat:<br /> Morning: 05:30 AM - 10:00 PM<br />Evening: 05:00 PM - 10:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-zinc-900 p-2 rounded-lg border border-zinc-800"><Phone className="h-5 w-5 text-orange-500" /></div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Contact</h4>
                                    <p className="text-zinc-400 text-sm">+91 7388107639<br /></p>
                                    <div onClick={handleInstaClick} className="hover:text-zinc-300 transition-colors inline-block mt-2">
                                        <Instagram className="h-5 w-5 text-white cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full min-h-[300px] rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <MapPin className="h-10 w-10 text-orange-500 mb-3 drop-shadow-lg" />
                            <div onClick={handleMapClick} className="font-medium bg-zinc-950/80 hover:bg-zinc-950 text-white cursor-pointer backdrop-blur px-4 py-2 rounded-full text-sm border border-zinc-800 transition-colors">
                                View on Google Maps
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-sm text-zinc-500">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
                        <p>© {new Date().getFullYear()} PMW Infinity Gym. All rights reserved.</p>
                        <span className="hidden md:inline text-zinc-800">|</span>
                        <p>
                            Built by{' '}
                            <a 
                                href="https://github.com/avichal-08" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-medium text-zinc-400 hover:text-orange-500 transition-colors underline "
                            >
                                Avichal Pandey
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}