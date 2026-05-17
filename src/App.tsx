import { useEffect, useState } from "react";
import UserDashboardLayout from "./components/UserDashboardLayout";
import UserProfileCard, { type APIType } from "./components/UserProfileCard";

function App() {
  const [user, setUser] = useState<APIType | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    async function fetcher(url: string) {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Fail to fetch data from api");
        }

        const user: APIType = await response.json();
        setUser(user);
      } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetcher("https://jsonplaceholder.typicode.com/users/1");
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UserDashboardLayout>
      <UserProfileCard
        isEmpty={false}
        isError={error}
        isLoading={isLoading}
        user={user}
      />
    </UserDashboardLayout>
  );
}

export default App;
