import Link from 'next/link';
import {
    Dumbbell, Activity, TrendingDown, TrendingUp,
    Apple, Target, Wind, Droplets, Shirt, Footprints,
    Bath, Cctv, Sparkles, UserCheck
} from 'lucide-react';
import { RedirectArrow } from '@/components/RedirectArrow';

export default function Services() {

    const services = [
        { icon: TrendingUp, title: "Height Increase", desc: "Specialized stretching and workout routines designed to optimize posture and maximize growth." },
        { icon: TrendingDown, title: "Weight Loss", desc: "High-calorie burn programs combining HIIT and weight training to shed fat quickly." },
        { icon: Apple, title: "Free Diet Plan", desc: "Customized nutritional guidance included with your membership to fuel your results." },
        { icon: Dumbbell, title: "Strength", desc: "Heavy free weights, power racks, and isolation machines for serious muscle building." },
        { icon: Activity, title: "Cardio", desc: "Treadmills and bikes to build endurance and cardiovascular health." },
        { icon: Target, title: "Punching Bag", desc: "Dedicated heavy bag station for striking practice, stress relief, and high-intensity cardio." }
    ];

    const facilities = [
        { icon: Wind, title: "Fully AC" },
        { icon: Activity, title: "Cardio Section" },
        { icon: Droplets, title: "RO Water" },
        { icon: Shirt, title: "Changing Room" },
        { icon: Footprints, title: "Shoes Rack" },
        { icon: Bath, title: "Separate Washroom" },
        { icon: Cctv, title: "Covered by CCTV" },
        { icon: Sparkles, title: "Fully Hygiene" },
        { icon: Dumbbell, title: "Punching Bag" },
        { icon: UserCheck, title: "5 Expert Trainers" },
    ];

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30 pb-24">

            <RedirectArrow />

            <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center border-b border-zinc-900">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Everything You Need to <span className="text-orange-500">Train Hard.</span>
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                    The best and biggest gym with modern equipment in Kalyanpur. Explore our comprehensive services and premium facilities.
                </p>
            </section>

            <section className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-900">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Our Core Services</h2>
                    <p className="text-zinc-400">100% Guaranteed Results with programs tailored to your goals.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-colors duration-300">
                            <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                                <service.icon className="h-6 w-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-900">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Premium Facilities</h2>
                    <p className="text-zinc-400">Designed for your comfort, safety, and performance.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {facilities.map((facility, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                            <facility.icon className="h-5 w-5 text-orange-500 shrink-0" />
                            <span className="text-sm font-medium text-zinc-300">{facility.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pt-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Inside <span className="text-orange-500">PMW Infinity</span></h2>
                    <p className="text-zinc-400">Take a look at our fully equipped training facility.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-2 lg:col-span-2 aspect-video">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498972/WhatsApp_Image_2026-03-14_at_5.47.48_PM_tbaoud.jpg" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-1 aspect-[3/4]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498972/WhatsApp_Image_2026-03-14_at_5.47.46_PM_irp0sa.jpg" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-1 aspect-[3/4]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498972/WhatsApp_Image_2026-03-14_at_5.47.45_PM_2_wreczp.jpg" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>

                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-2 lg:col-span-2 aspect-video">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498973/WhatsApp_Image_2026-03-14_at_5.47.47_PM_ylaskl.jpg" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-2 lg:col-span-2 aspect-video">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498974/WhatsApp_Image_2026-03-14_at_5.47.46_PM_1_ep8ewu.jpg" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>

                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-1 lg:col-span-1 aspect-[3/4]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498973/WhatsApp_Image_2026-03-14_at_5.47.49_PM_fayyqc.jpg" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-1 md:col-span-2 lg:col-span-3 aspect-[4/3] lg:aspect-[21/9]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498972/WhatsApp_Image_2026-03-14_at_5.47.47_PM_2_wmncet.jpg" alt="Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>

                    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 sm:col-span-2 lg:col-span-4 aspect-video lg:aspect-[21/9]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://res.cloudinary.com/dcwso7qst/image/upload/v1773498973/WhatsApp_Image_2026-03-14_at_5.47.45_PM_dvqvph.jpg" alt="Gym Floor Epic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>

                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 mt-20">
                <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-orange-100 mb-8 max-w-xl mx-auto">Join the biggest gym in Kalyanpur today and get your free diet plan and access to our expert trainers.</p>
                        <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-zinc-950 text-white font-bold hover:bg-zinc-900 transition-colors shadow-xl">
                            View Membership Plans
                        </Link>
                    </div>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                </div>
            </div>

        </main>
    );
}