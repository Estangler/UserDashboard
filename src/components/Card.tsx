import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="border border-slate-700/70 bg-slate-800/40 rounded-lg shadow-2xl backdrop-blur-md flex flex-col space-y-5">
      {children}
    </div>
  );
}
