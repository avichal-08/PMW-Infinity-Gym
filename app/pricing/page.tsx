"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Activity, ShieldCheck } from "lucide-react";
import { RedirectArrow } from "@/components/RedirectArrow";

export default function Pricing() {
    const [activeTab, setActiveTab] = useState<"strength" | "cardio">("cardio");

    const pricingData = {
        strength: [
            { duration: "1 Month", price: "1,199", desc: "Base Plan. Pay on per month basis", popular: false },
            { duration: "3 Months", price: "2,999", desc: "Quarterly Plan. Saves total of ₹600", popular: true },
            { duration: "6 Months", price: "4,999", desc: "Half Yearly Plan. Saves total of ₹2200", popular: false },
            { duration: "1 Year", price: "7,999", desc: "Yearly Plan. Saves more than ₹6000", popular: false },
        ],
        cardio: [
            { duration: "1 Month", price: "1,499", desc: "Base Plan. Pay on per month basis", popular: false },
            { duration: "3 Months", price: "3,499", desc: "Quarterly Plan. Saves total of ₹1000", popular: true },
            { duration: "6 Months", price: "5,499", desc: "Half Yearly Plan. Saves total of ₹3500", popular: false },
            { duration: "1 Year", price: "8,499", desc: "Yearly Plan. Saves around ₹9500", popular: false },
        ]
    };


    return (
        <section id="pricing" className="py-24 border-t border-zinc-900 bg-zinc-950">

            <RedirectArrow />

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Straightforward <span className="text-orange-500">Pricing.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-8">
                        The best and biggest gym in Kalyanpur with modern equipment. No hidden fees. Pick your path.
                    </p>

                    <div className="inline-flex bg-zinc-900 border border-zinc-800 rounded-full p-1.5 relative z-10">
                        <button
                            onClick={() => setActiveTab("strength")}
                            className={`relative flex items-center gap-2 px-6 py-2.5 cursor-pointer rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "strength" ? "text-white bg-orange-500 shadow-lg shadow-orange-500/25" : "text-zinc-400 hover:text-zinc-200"
                                }`}
                        >
                            <Dumbbell className="h-4 w-4" /> Strength Only
                        </button>
                        <button
                            onClick={() => setActiveTab("cardio")}
                            className={`relative flex items-center gap-2 px-6 py-2.5 cursor-pointer rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "cardio" ? "text-white bg-orange-500 shadow-lg shadow-orange-500/25" : "text-zinc-400 hover:text-zinc-200"
                                }`}
                        >
                            <Activity className="h-4 w-4" /> Strength + Cardio
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {pricingData[activeTab].map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col p-8 rounded-2xl bg-zinc-900 transition-all duration-300 ${plan.popular
                                ? "border-2 border-orange-500 transform lg:-translate-y-2 shadow-2xl shadow-orange-900/20"
                                : "border border-zinc-800 hover:border-zinc-700"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-medium text-zinc-300 mb-2">{plan.duration}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-white">₹{plan.price}</span>
                                </div>
                                {plan.duration !== "1 Month" && (
                                    <p className="text-sm text-orange-400 mt-2 font-medium">
                                        {plan.duration === "3 Months" && `₹${Math.round(parseInt(plan.price.replace(',', '')) / 3)} /mo`}
                                        {plan.duration === "6 Months" && `₹${Math.round(parseInt(plan.price.replace(',', '')) / 6)} /mo`}
                                        {plan.duration === "1 Year" && `₹${Math.round(parseInt(plan.price.replace(',', '')) / 12)} /mo`}
                                    </p>
                                )}
                                <p className="text-lg text-orange-400 mt-2 font-medium">{plan.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-16 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                            <ShieldCheck className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">5 Expert Trainers</h4>
                            <p className="text-zinc-400 text-sm">Including dedicated Ladies Trainer and Arm Wrestling specialists.</p>
                        </div>
                    </div>
                    <Link href="/services" className="px-6 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 text-sm font-medium transition-colors whitespace-nowrap">
                        View All Facilities
                    </Link>
                </div>

            </div>
        </section>
    );
}