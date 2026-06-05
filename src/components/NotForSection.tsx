import React from 'react';
import { motion } from 'motion/react';
import { XCircle, AlertTriangle, ShieldAlert, Award, AlertOctagon, HelpCircle, HeartCrack } from 'lucide-react';

export default function NotForSection() {
  const notForItems = [
    {
      title: "Tech Know-It-Alls",
      description: "Tech know-it-all programmers and developers who refuse to upgrade their skills, adapt to AI-guided workflows, or believe coding must remain tedious.",
      icon: XCircle,
      badge: "No Pivot"
    },
    {
      title: "Get-Rich-Quick Chasers",
      description: "People seeking raw overnight wealth, magical setups, or instant monetary returns without wanting to learn real product-building processes.",
      icon: ShieldAlert,
      badge: "No Effort"
    },
    {
      title: "Passive PDF Collect-Alls",
      description: "People who hoard tutorials and bookmarks but never write prompts, test apps, or sit down to run their live software builds.",
      icon: AlertOctagon,
      badge: "No Action"
    },
    {
      title: "Spoon-Fed Learners",
      description: "Folk who expect a teacher to copy-paste solutions for them without trying to grasp logical flow, structural design, and human reasoning.",
      icon: AlertTriangle,
      badge: "No Thinking"
    },
    {
      title: "Rigid Skeptics",
      description: "Skeptics who believe AI in tech is a passing fad or a basic school-essay writer, refusing to unlock its ultimate creative leverage.",
      icon: HeartCrack,
      badge: "No Vision"
    },
    {
      title: "Chronic Excuse Makers",
      description: "People who complain about not owning premium machinery or lacking computer diplomas instead of taking real, humble steps today.",
      icon: HelpCircle,
      badge: "No Excuses"
    }
  ];

  return (
    <section className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 sm:p-12 space-y-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)] my-12 animate-fade-in">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-[10px] font-mono tracking-widest text-red-650 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase font-black inline-flex items-center gap-1.5">
          <ShieldAlert className="h-3 w-3 text-red-600 animate-pulse" />
          <span>PLEASE READ BEFORE JOINING</span>
        </span>
        <h3 className="text-2xl font-black text-zinc-950 font-display">Who This Is NOT For</h3>
        <p className="text-xs text-zinc-500 font-sans font-light max-w-md mx-auto">
          We want to protect our cohort quality. Please save your registration fee if you identify with any of the following traits.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notForItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx}
              className="bg-white border border-zinc-150 rounded-2xl p-5 space-y-3.5 hover:border-zinc-300 transition-all duration-150 shadow-xs relative"
            >
              <div className="flex justify-between items-center">
                <span className="p-2 bg-red-50 text-red-600 rounded-lg border border-red-100/55">
                  <IconComponent className="h-4.5 w-4.5" />
                </span>
                <span className="text-[8px] font-mono font-black uppercase text-red-700 bg-red-50 border border-red-150 px-2 py-0.5 rounded-md">
                  {item.badge}
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-zinc-950 font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
