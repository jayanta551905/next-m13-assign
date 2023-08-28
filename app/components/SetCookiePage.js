"use client";
import { useState } from "react";
import { setCookie } from "nookies";

export default function SetCookiePage() {
  const [userPreference, setUserPreference] = useState("");

  const handleButtonClick = () => {
    setCookie(null, "userPreference", userPreference, {
      maxAge: 3600,
      path: "/",
    });
  };

  return (
    <div>
      <h1>Set User Preference</h1>
      <input
        type="text"
        placeholder="Enter user preference"
        value={userPreference}
        onChange={(e) => setUserPreference(e.target.value)}
      />
      <button onClick={handleButtonClick}>Set Preference</button>
    </div>
  );
}
