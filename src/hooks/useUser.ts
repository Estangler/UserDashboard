import { useEffect, useState } from "react";
import type { APIType } from "../components/UserProfileCard";
import fetchUser from "../service/user";

export function useUser(url: string) {
  const [user, setUser] = useState<APIType | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetcher() {
      try {
        const userData = await fetchUser(url);
        setUser(userData);
      } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetcher();
  }, [url]);

  return {
    user,
    error,
    isLoading,
  };
}
