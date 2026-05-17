import type { ReactNode } from "react";
import Header from "./Header";

type Theme = "light" | "dark";

type UserDashboardLayoutProps = {
  children: ReactNode;
  theme: Theme;
  isMobile: boolean;
  onToggleTheme: (theme: Theme) => void;
};

export default function UserDashboardLayout({
  children,
  onToggleTheme,
  theme,
  isMobile,
}: UserDashboardLayoutProps) {
  return (
    <div className="min-h-dvh">
      <main className="min-h-dvh flex flex-col">
        <Header
          onToggleTheme={onToggleTheme}
          theme={theme}
          isMobile={isMobile}
        />
        <section className="flex-1 max-w-200 flex flex-col px-5 py-15 space-y-8">
          {children}
        </section>
      </main>
    </div>
  );
}
