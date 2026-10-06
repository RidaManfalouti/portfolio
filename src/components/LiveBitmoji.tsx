import React from "react";

export default function LiveBitmoji() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <style>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-avatar { animation: gentle-bounce 4s ease-in-out infinite; }
      `}</style>
      
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white shadow-lg transition-transform duration-200 group-hover:scale-100">
        Hi! 👋
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900"></div>
      </div>

      <div className="animate-float-avatar relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-50 p-1 shadow-lg transition-transform hover:scale-110">
        <img src="/images/avatar.jpg" alt="Say Hi" className="h-full w-full rounded-full object-cover" />
        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"></span>
      </div>
    </div>
  );
}
