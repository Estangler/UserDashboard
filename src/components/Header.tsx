import { Diameter, Sun, Moon, Smartphone, LaptopMinimal } from "lucide-react";
import type { Theme } from "../types";

type HeaderProps = {
  theme: Theme;
  isMobile: boolean;
  onToggleTheme: (theme: Theme) => void;
};

export default function Header({
  theme,
  onToggleTheme,
  isMobile,
}: HeaderProps) {
  console.log(isMobile);
  return (
    <header className="w-full flex justify-between border-b border-slate-700 p-5">
      <div className="flex gap-2 items-center">
        <div className="bg-indigo-500 p-1 rounded-md">
          <Diameter />
        </div>
        <h1 className="text-xl font-semibold">Acme Corp</h1>
      </div>

      <div className="flex gap-2">
        {isMobile ? <Smartphone /> : <LaptopMinimal />}

        {theme === "dark" ? (
          <button
            className="flex active:scale-95"
            onClick={() => onToggleTheme("light")}
          >
            <Moon />
          </button>
        ) : (
          <button
            className="flex active:scale-95"
            onClick={() => onToggleTheme("dark")}
          >
            <Sun />
          </button>
        )}
      </div>
    </header>
  );
}
