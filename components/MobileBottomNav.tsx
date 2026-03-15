"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Dumbbell, Tag, MessageCircle } from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  // The same WhatsApp configuration
  const phoneNumber = "917388107639";
  const message = "Hi PMW Infinity! I was looking at your website and want to ask about membership plans.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navItems = [
    { name: "Home", href: "/", icon: Home, isExternal: false },
    { name: "Services", href: "/services", icon: Dumbbell, isExternal: false },
    { name: "Pricing", href: "/pricing", icon: Tag, isExternal: false },
    // Replaced "Join" with WhatsApp
    { name: "WhatsApp", href: whatsappUrl, icon: MessageCircle, isExternal: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-900 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const iconColor = item.name === "WhatsApp" ? "text-[#25D366]" : isActive ? "text-orange-500" : "text-zinc-500";
          
          const content = (
            <>
              <item.icon className={`h-5 w-5 ${iconColor}`} />
              <span className={`text-[10px] font-medium mt-1 ${iconColor}`}>
                {item.name}
              </span>
            </>
          );

          if (item.isExternal) {
            return (
              <a 
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full active:scale-95 transition-transform"
              >
                {content}
              </a>
            );
          }
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full active:scale-95 transition-transform"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}