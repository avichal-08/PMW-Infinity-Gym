import { CheckCircle2 } from "lucide-react";
import { RedirectButton } from "../RedirectButton";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 border-t border-zinc-900 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Straightforward Memberships</h2>
                        <p className="text-zinc-400 max-w-2xl">No hidden fees. Pick the plan that fits your goals.</p>
                    </div>
                    <RedirectButton link="/pricing" text="All subscriptions" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
                        <h3 className="text-xl font-medium text-zinc-300 mb-2">Monthly Kickstart</h3>
                        <div className="mb-6"><span className="text-4xl font-bold text-white">₹1,199</span><span className="text-zinc-500"> /mo</span></div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Full Gym Access', 'Standard Equipment', 'Locker Room Access'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                    <CheckCircle2 className="h-5 w-5 text-zinc-600" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-zinc-900 border-2 border-orange-500 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
                        <h3 className="text-xl font-medium text-zinc-300 mb-2">Quarterly Hustle</h3>
                        <div className="mb-6"><span className="text-4xl font-bold text-white">₹2,999</span><span className="text-zinc-500"> /3 mo</span></div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Full Gym Access', 'Standard Equipment', 'Locker Room Access', 'Effective Price/month = 1000'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                    <CheckCircle2 className="h-5 w-5 text-orange-500" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
                        <h3 className="text-xl font-medium text-zinc-300 mb-2">Annual Athlete</h3>
                        <div className="mb-6"><span className="text-4xl font-bold text-white">₹7,999</span><span className="text-zinc-500"> /yr</span></div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Full Gym Access', 'Standard Equipment', 'Locker Room Access', 'Effective Price/month = 667'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                    <CheckCircle2 className="h-5 w-5 text-zinc-600" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}