import type { ReactNode } from "react";
type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="border border-slate-700/70 bg-slate-800/40 rounded-lg shadow-2xl backdrop-blur-md space-y-5">
      {children}
    </div>
  );
}
