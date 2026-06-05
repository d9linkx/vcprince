import React from 'react';
import { ArrowRight, Zap, Target, Compass, MessageSquare, Star } from 'lucide-react';

interface HeroSectionProps {
  onEnroll: () => void;
  onEnrollMasterclass: () => void;
}

export default function HeroSection({ onEnroll, onEnrollMasterclass }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-8 lg:pb-10 border-b border-zinc-100">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/40 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Mobile / Tablet Centered View Layout (lg:hidden) */}
        <div className="lg:hidden text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          
          {/* Elegant pill badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/75 px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-zinc-800 border border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.01)] select-none">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-800 font-extrabold font-sans">Nigeria's Friendly AI Practice School</span>
            <span className="text-zinc-300">|</span>
            <span className="font-mono text-zinc-500 font-medium">Open to All Ages!</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] sm:leading-[1.15] font-display">
            Build real apps & games in a few minutes <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">just by talking to AI</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-500 leading-relaxed font-sans font-light">
            Learn how to make real computer programs and list boards using simple English or Pidgin. 
            Specially designed for beginners in Nigeria to ride the global AI wave easily!
          </p>

          {/* Social Proof: Handsomely curated local student avatars */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2 select-none">
            <div className="flex -space-x-2 shrink-0">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Handsome young Nigerian student avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Excellent Nigerian developer woman avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" alt="Nigerian tech student avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Smart Nigerian tech sister avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100" alt="Young black developer male avatar" className="h-7 w-7 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="text-xs text-zinc-500 font-semibold font-sans">
              Join <span className="text-emerald-700 font-extrabold">1,240+ Nigerian girls & guys</span> practicing dynamic computer builds!
            </span>
          </div>

          {/* Dual Options Card Layout (Aesthetic, beautiful entry points for both pathways) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4 text-left">
            
            {/* Pathway 1: N1,000 Beginners Intro Class */}
            <div className="bg-white border border-zinc-250 hover:border-zinc-350 transition-all rounded-3xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="space-y-3">
                <span className="text-[9px] font-bold tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md uppercase font-mono block w-fit">OPTION A: BASIC COHORT</span>
                <h3 className="text-lg font-black text-zinc-900 font-display">Beginner Intro Course</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-sans font-light">
                  A 3-hour friendly lesson to learn the absolute basics of building with AI. Great for absolute beginners!
                </p>
                <div className="flex items-baseline gap-1.5 pt-2 border-t border-zinc-100 mt-2">
                  <span className="text-2xl font-black text-zinc-950">₦1,000</span>
                  <span className="text-[10px] text-zinc-400 font-sans">one-off fee</span>
                </div>
              </div>
              <button 
                onClick={onEnroll}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-950 px-4 py-3.5 text-xs font-bold text-white hover:bg-zinc-850 active:scale-95 transition-all mt-6 cursor-pointer"
              >
                <span>Signup for ₦1,000</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              </button>
            </div>

            {/* Pathway 2: N20,000 Premium Mentorship Masterclass */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.065)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[8px] tracking-widest uppercase font-mono px-3 py-1 font-black rounded-bl-xl flex items-center gap-1 border-l border-b border-emerald-500">
                <Star className="h-2.5 w-2.5 fill-current text-white animate-pulse" />
                <span>Mentorship</span>
              </div>
              
              <div className="space-y-3">
                <span className="text-[9px] font-bold tracking-widest text-[#0ea5e9] bg-[#0ea5e9]/10 px-2.5 py-1 rounded-md uppercase font-mono block w-fit">OPTION B: MASTERCLASS</span>
                <h3 className="text-lg font-black text-white font-display">1-on-1 Guidance Session</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                  Get full step-by-step guidance and daily chats with Prince Dike to build the exact website or App idea you have in mind!
                </p>
                <div className="flex items-baseline gap-1.5 pt-2 border-t border-zinc-800 mt-2">
                  <span className="text-2xl font-black text-emerald-400">₦20,000</span>
                  <span className="text-[10px] text-zinc-500 font-sans">full package</span>
                </div>
              </div>
              
              <button 
                onClick={onEnrollMasterclass}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-emerald-500 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40 text-xs text-emerald-400 hover:text-white font-extrabold transition-all mt-6 py-3.5 shadow-[0_0_12px_rgba(16,185,129,0.15)] active:scale-95 cursor-pointer"
              >
                <span>View Masterclass Details</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              </button>
            </div>

          </div>

          {/* Micro metrics grid at bottom for mobile/tablet */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-6 border-t border-zinc-100 pt-12 sm:grid-cols-4 max-w-4xl mx-auto text-left">
            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-emerald-50 p-2.5 border border-emerald-100 flex items-center justify-center shrink-0">
                <Zap className="h-4.5 w-4.5 text-emerald-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">Easy AI Coding</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">No hard computer code errors anymore.</dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-200/80 flex items-center justify-center shrink-0">
                <Target className="h-4.5 w-4.5 text-blue-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">Online Lesson</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">Learn from anywhere on Zoom or Meet.</dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-200/80 flex items-center justify-center shrink-0">
                <Compass className="h-4.5 w-4.5 text-amber-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">In-Person Space</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">Practice at our friendly classrooms.</dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-200/80 flex items-center justify-center shrink-0">
                <MessageSquare className="h-4.5 w-4.5 text-purple-600" />
              </div>
              <div>
                <dt className="text-xs font-bold text-zinc-900 font-display">WhatsApp Group</dt>
                <dd className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-normal">Ask questions and make cool friends.</dd>
              </div>
            </div>
          </div>

        </div>

        {/* Desktop View Layout (hidden lg:grid) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Context Discovery & Branding */}
          <div className="space-y-4 lg:col-span-7 lg:text-left">
            
            {/* Elegant pill badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/75 px-3 py-1 text-xs font-semibold text-zinc-805 border border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.01)] select-none">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-800 font-extrabold font-sans text-[11px]">Nigeria's Friendly AI Practice School</span>
              <span className="text-zinc-350">|</span>
              <span className="font-mono text-zinc-500 font-medium text-[10px]">Open to All!</span>
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] font-display">
              Build real apps & games in a few minutes <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">just by talking to AI</span>
            </h1>

            <p className="max-w-xl text-xs lg:text-sm text-zinc-500 leading-relaxed font-sans font-light">
              Learn how to make real computer programs and list boards using simple English or Pidgin. 
              Specially designed for beginners in Nigeria to ride the global AI wave easily!
            </p>

            {/* Social Proof Avatars */}
            <div className="flex items-center justify-start gap-2 pt-1 select-none">
              <div className="flex -space-x-1.5 shrink-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Handsome young Nigerian student avatar" className="h-6 w-6 rounded-full border border-white object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Excellent Nigerian developer woman avatar" className="h-6 w-6 rounded-full border border-white object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" alt="Nigerian tech student avatar" className="h-6 w-6 rounded-full border border-white object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Smart Nigerian tech sister avatar" className="h-6 w-6 rounded-full border border-white object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100" alt="Young black developer male avatar" className="h-6 w-6 rounded-full border border-white object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[11px] text-zinc-550 font-semibold font-sans">
                Join <span className="text-emerald-700 font-extrabold">1,240+ Nigerians</span> practicing dynamic computer builds!
              </span>
            </div>

            {/* Micro metrics grid - arranged horizontally in 4 columns on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 lg:gap-x-1.5 border-t border-zinc-100 pt-4 max-w-xl lg:max-w-none lg:w-full text-left">
              
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-emerald-50 p-1 border border-emerald-100 flex items-center justify-center shrink-0">
                  <Zap className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <div>
                  <dt className="text-xs font-bold text-zinc-900 font-display">Easy AI Coding</dt>
                  <dd className="text-[10px] text-zinc-500 leading-none mt-0.5">No hard coding errors.</dd>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-zinc-50 p-1 border border-zinc-200/80 flex items-center justify-center shrink-0">
                  <Target className="h-3.5 w-3.5 text-blue-600" />
                </div>
                <div>
                  <dt className="text-xs font-bold text-zinc-900 font-display">Online Lesson</dt>
                  <dd className="text-[10px] text-zinc-500 leading-none mt-0.5">Zoom or Meet panels.</dd>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-zinc-50 p-1 border border-zinc-200/80 flex items-center justify-center shrink-0">
                  <Compass className="h-3.5 w-3.5 text-amber-600" />
                </div>
                <div>
                  <dt className="text-xs font-bold text-zinc-900 font-display">Physical Space</dt>
                  <dd className="text-[10px] text-zinc-500 leading-none mt-0.5">ClassName classes available.</dd>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-zinc-50 p-1 border border-zinc-200/80 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-3.5 w-3.5 text-purple-600" />
                </div>
                <div>
                  <dt className="text-xs font-bold text-zinc-900 font-display">WhatsApp Support</dt>
                  <dd className="text-[10px] text-zinc-500 leading-none mt-0.5">Chat with peers.</dd>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dual Options CTA arranged vertically */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            
            {/* Option A Card (₦1,000 Beginner Intro) */}
            <div className="bg-white border border-zinc-200 hover:border-emerald-250 transition-all rounded-2xl p-4 text-left flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.01)] relative overflow-hidden h-full">
              <div className="space-y-2">
                <div className="flex justify-between items-center flex-wrap gap-1">
                  <span className="text-[8px] font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase font-mono">OPTION A: BASIC</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-black text-zinc-950">₦1,000</span>
                    <span className="text-[8px] text-zinc-400 font-sans">one-off</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-zinc-900 font-display">Beginner Intro Course</h3>
                <p className="text-[10.5px] text-zinc-500 leading-snug font-sans font-light">
                  A 3-hour friendly lesson to learn the absolute basics of building with AI. Great for absolute beginners!
                </p>
              </div>
              <button 
                onClick={onEnroll}
                className="w-full inline-flex items-center justify-center gap-1 rounded-xl bg-zinc-950 px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-850 active:scale-95 transition-all mt-4 cursor-pointer"
              >
                <span>Signup for ₦1,000</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              </button>
            </div>

            {/* Option B Card (₦20,000 Premium Mentorship Masterclass) */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border border-zinc-800 rounded-2xl p-4 text-left flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[7px] tracking-wider uppercase font-mono px-2 py-0.5 font-bold rounded-bl flex items-center gap-1 border-l border-b border-emerald-500 z-10">
                <Star className="h-1.5 w-1.5 fill-current text-white animate-pulse" />
                <span>Mentorship</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center flex-wrap gap-1">
                  <span className="text-[8px] font-bold tracking-wider text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-0.5 rounded uppercase font-mono">OPTION B: MASTERCLASS</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-black text-emerald-400">₦20,000</span>
                    <span className="text-[8px] text-zinc-400 font-sans">full</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white font-display">1-on-1 Guidance</h3>
                <p className="text-[10.5px] text-zinc-400 leading-snug font-sans font-light">
                  Get full step-by-step guidance and daily chats with Prince Dike to build the exact website or App idea you have in mind!
                </p>
              </div>
              
              <button 
                onClick={onEnrollMasterclass}
                className="w-full inline-flex items-center justify-center gap-1 rounded-xl border-2 border-emerald-500 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40 text-xs text-emerald-450 hover:text-white font-extrabold transition-all mt-4 py-2 shadow-[0_0_12px_rgba(16,185,129,0.15)] active:scale-95 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-450 font-black" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
