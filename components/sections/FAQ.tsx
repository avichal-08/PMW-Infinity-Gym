"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We are open Monday through Saturday. Our morning batch runs from 05:30 AM to 10:00 PM, and our evening batch is from 05:00 PM to 10:00 PM."
  },
  {
    question: "Do you have female trainers available?",
    answer: "Yes, absolutely! We have a dedicated Ladies Trainer on staff to ensure a comfortable, safe, and expertly guided environment for all our female members."
  },
  {
    question: "Is a diet plan included with the membership?",
    answer: "Yes. Whether you choose the Strength or the Strength + Cardio plan, you receive a free, customized diet plan tailored to your specific goals (weight loss, height increase, or lean bulk)."
  },
  {
    question: "What facilities are available at the gym?",
    answer: "PMW Infinity is the best-equipped gym in Kalyanpur. We offer a fully AC environment, RO water, secure changing rooms, shoe racks, separate washrooms, and 24/7 CCTV coverage for your safety."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked <span className="text-orange-500">Questions.</span></h2>
          <p className="text-zinc-400 text-lg">Everything you need to know before joining PMW Infinity.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-orange-500/50 bg-zinc-900/80' : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}