import { Star } from "lucide-react";
import { RedirectButton } from "../RedirectButton";

export function Transformations() {
    return (
        <section id="transformations" className="py-24 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Members, Real Results.</h2>
                        <p className="text-zinc-400 max-w-lg">Consistency meets the right environment. See what our members have achieved at PMW Infinity.</p>
                    </div>
                    <RedirectButton link="/transformations" text="See more results"/>
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
                                    <h4 className="font-semibold text-white text-lg">12-Week Transformation</h4>
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
    );
}