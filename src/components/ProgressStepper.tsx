import React from 'react';

interface ProgressStepperProps {
  currentStep: 1 | 2;
}

export default function ProgressStepper({ currentStep }: ProgressStepperProps) {
  const steps = [
    {
      index: 1,
      title: "Data Entry",
    },
    {
      index: 2,
      title: "Payment Transfer",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-6 py-4">
      {/* Horizontal Steps Wrapper */}
      <div className="relative flex items-center justify-between">
        {/* Background Track Bar */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 -translate-y-1/2 z-0" />
        
        {/* Active fill track bar */}
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-emerald-500 -translate-y-1/2 transition-all duration-500 z-0"
          style={{ 
            width: currentStep === 1 ? '0%' : '100%' 
          }}
        />

        {steps.map((st) => {
          const isCompleted = currentStep > st.index;
          const isActive = currentStep === st.index;
          
          return (
            <div key={st.index} className="flex flex-col items-center relative z-10 w-24">
              {/* Stepper Node Circle with simple numbers */}
              <div 
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-black transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-100' 
                    : isActive 
                    ? 'bg-zinc-950 border-zinc-950 text-white ring-4 ring-emerald-50 shadow-sm' 
                    : 'bg-white border-zinc-300 text-zinc-400'
                }`}
              >
                {st.index}
              </div>
              
              {/* Simple Step Title Label (No description) */}
              <div className="mt-2 text-center">
                <span className={`block text-[11px] font-bold leading-tight uppercase tracking-wider ${isActive ? 'text-zinc-950 font-black' : isCompleted ? 'text-emerald-700' : 'text-zinc-400'}`}>
                  {st.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
