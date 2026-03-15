import { RedirectButton } from "../RedirectButton";
import { TransformationCard } from "@/components/TransformationCard";
import { ScrollReveal } from "../ScrollReveal";

export function Transformations() {

    const topTransformations = [
        {
            title: "2 Years Of Intense Grind",
            desc: "The environment here pushes you to your absolute limits. The diet tracking and equipment are unmatched.",
            beforeImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773578162/WhatsApp_Image_2026-03-15_at_5.05.23_PM_czmlbq.jpg",
            afterImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773578163/WhatsApp_Image_2026-03-15_at_5.05.23_PM_1_svnvnr.jpg"
        },
        {
            title: "6-Month Lean Bulk",
            desc: "Gained 5kg of clean muscle tissue. Focused entirely on progressive overload and calorie surplus with expert guidance.",
            beforeImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567409/1000046779.jpg_wrjfmj.jpg",
            afterImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567413/IMG_20260314_141642_pnay6u.png"
        },
        {
            title: "10-Month Lean Bulk",
            desc: "Dialed in the diet down to the gram. Stage-ready conditioning achieved in just 16 weeks.",
            beforeImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567591/Screenshot_216_pj0tre.png",
            afterImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567591/Screenshot_217_httt3t.png"
        }
    ];

    return (
        <section id="transformations" className="py-24 border-t border-zinc-900 bg-zinc-950">
            <ScrollReveal>
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Members, Real Results.</h2>
                            <p className="text-zinc-400 max-w-lg">Consistency meets the right environment. See what our members have achieved at PMW Infinity.</p>
                        </div>
                        <RedirectButton link="/transformations" text="See more results" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topTransformations.map((item, idx) => (
                            <TransformationCard
                                key={idx}
                                beforeImage={item.beforeImage}
                                afterImage={item.afterImage}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>

                </div>
            </ScrollReveal>
        </section>
    );
}