import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/read-cookie");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
