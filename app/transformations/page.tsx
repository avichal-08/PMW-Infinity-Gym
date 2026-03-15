import Link from 'next/link';
import { TransformationCard } from '@/components/TransformationCard';
import { RedirectArrow } from '@/components/RedirectArrow';

export default function TransformationsPage() {

  const allTransformations = [
    { 
      title: "6-Month Lean Bulk", 
      desc: "Gained 5kg of clean muscle tissue. Focused entirely on progressive overload and calorie surplus with expert guidance.",
      time: "6 Months",
      beforeImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567409/1000046779.jpg_wrjfmj.jpg",
      afterImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567413/IMG_20260314_141642_pnay6u.png"
    },
    { 
      title: "Contest Prep", 
      desc: "Dialed in the diet down to the gram. Stage-ready conditioning achieved in just 16 weeks.",
      time: "16 Weeks",
      beforeImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567591/Screenshot_216_pj0tre.png",
      afterImage: "https://res.cloudinary.com/dcwso7qst/image/upload/c_fill,w_800,h_1000,g_auto,f_auto,q_auto/v1773567591/Screenshot_217_httt3t.png"
    },
    { 
      title: "Summer Shred", 
      desc: "Dropped 12% body fat while maintaining strength. The cardio section and diet plan made all the difference.",
      time: "12 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1616279967983-ec413476e824?q=80&w=800&auto=format&fit=crop&sig=1a",
      afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop&sig=1b"
    },
    { 
      title: "Total Recomp", 
      desc: "Lost 15kg of fat and added 4kg of muscle simultaneously. A perfect execution of body recomposition.",
      time: "1 Year",
      beforeImage: "https://images.unsplash.com/photo-1616279967983-ec413476e824?q=80&w=800&auto=format&fit=crop&sig=3a",
      afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop&sig=3b"
    },
    { 
      title: "Strength Plateau Broken", 
      desc: "Added 40kg to the main lifts after being stuck for a year. The heavy free weights and power racks were key.",
      time: "4 Months",
      beforeImage: "https://images.unsplash.com/photo-1616279967983-ec413476e824?q=80&w=800&auto=format&fit=crop&sig=4a",
      afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop&sig=4b"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30 pb-24">
      
      <RedirectArrow />

      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center border-b border-zinc-900">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Proof is in the <span className="text-orange-500">Progress.</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Swipe through the sliders to see the real results our members have achieved through consistency, hard work, and our expert environment.
        </p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTransformations.map((item, idx) => (
            <TransformationCard 
              key={idx}
              title={item.title}
              desc={item.desc}
              time={item.time}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
            />
          ))}
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">You're Next.</h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">
              Stop waiting. Join PMW Infinity today, get your free customized diet plan, and start building your own before-and-after story.
            </p>
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