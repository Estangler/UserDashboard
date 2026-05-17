import { useEffect, useState } from "react";
import UserDashboardLayout from "./components/UserDashboardLayout";
import UserProfileCard from "./components/UserProfileCard";
import type { Theme } from "./types";
import { useUser } from "./hooks/useUser";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { user, error, isLoading } = useUser(
    "https://jsonplaceholder.typicode.com/users/1",
  );
  const { isMobile } = useWindowSize(428);
  const [theme, setTheme] = useState<Theme>(() => {
    const theme = localStorage.getItem("theme");

    if (!theme) {
      return "dark";
    }

    return JSON.parse(theme);
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.body.className = theme;
  }, [theme]);

  console.log(user);

  return (
    <UserDashboardLayout
      theme={theme}
      onToggleTheme={setTheme}
      isMobile={isMobile}
    >
      <UserProfileCard
        isEmpty={false}
        isError={error}
        isLoading={isLoading}
        user={user}
        isMobile={isMobile}
      />
    </UserDashboardLayout>
  );
}

export default App;
