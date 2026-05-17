import type { APIType } from "../components/UserProfileCard";

export default async function fetchUser(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Fail to fetch user.");
  }

  const data: APIType = await response.json();

  return data;
}
