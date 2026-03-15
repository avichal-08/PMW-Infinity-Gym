import { Dumbbell, Activity, ShieldCheck } from "lucide-react";
import { RedirectButton } from "../RedirectButton";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Services() {
    const topServices = [
        { icon: Dumbbell, title: "Strength Training", desc: "The best and biggest gym in Kalyanpur. Fully equipped for intense strength training and specialized isolation machines." },
        { icon: Activity, title: "Cardio & HIIT", desc: "Dedicated cardio section with top-tier treadmills and assault bikes for maximum endurance." },
        { icon: ShieldCheck, title: "Expert Coaching", desc: "5 dedicated trainers on the floor, including a specialized Ladies Trainer." }
    ];

    return (
        <section id="services" className="py-24 border-t border-zinc-900 bg-zinc-950/50">
            <ScrollReveal>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h2>
                        <p className="text-zinc-400 max-w-2xl">We don't just offer space; we offer a complete training ecosystem engineered for your growth.</p>
                    </div>
                    <RedirectButton link="/services" text="See all services"/>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {topServices.map((service, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="h-6 w-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            </ScrollReveal>
        </section>
    );
}