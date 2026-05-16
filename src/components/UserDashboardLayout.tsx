import { Diameter, Sun, Moon } from "lucide-react";
import type { ReactNode } from "react";

export default function UserDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh">
      <main className="min-h-dvh flex flex-col">
        <header className="w-full flex justify-between border-b border-slate-700 p-5">
          <div className="flex gap-2 items-center">
            <div className="bg-indigo-500 p-1 rounded-md">
              <Diameter />
            </div>
            <h1 className="text-xl font-semibold">Acme Corp</h1>
          </div>
          <button className="flex active:scale-95">
            <Sun />
            <Moon />
          </button>
        </header>

        <section className="flex-1 max-w-200 flex flex-col px-5 py-15 space-y-8">
          {children}
        </section>
      </main>
    </div>
  );
}
