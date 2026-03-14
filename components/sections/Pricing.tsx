import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Straightforward Memberships</h2>
          <p className="text-zinc-400">No hidden fees. Pick the plan that fits your goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Quarterly Plan (Highlighted) */}
          <Card className="bg-zinc-900 border-2 border-orange-500 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-orange-900/20 md:col-start-2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
            <CardHeader>
              <CardTitle className="text-xl font-medium text-zinc-300">Quarterly Hustle</CardTitle>
              <div className="mt-2"><span className="text-4xl font-bold text-white">₹2,500</span><span className="text-zinc-500"> /3 mo</span></div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {['Full Gym Access', '1 Free Diet Consultation', 'Body Composition Tracking', 'Access to Member App'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500" /> {feat}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium">Join Now</Button>
            </CardFooter>
          </Card>
          
          {/* Add the 1-month and 12-month cards using similar <Card> structures here */}
        </div>
      </div>
    </section>
  );
}