import { parseCookies } from "nookies";

export default function ReadCookiePage() {
  const cookies = parseCookies();
  const userPreference = cookies.userPreference || "No preference found";

  return (
    <div>
      <h1>Read User Preference</h1>
      <p>User Preference: {userPreference}</p>
    </div>
  );
}
