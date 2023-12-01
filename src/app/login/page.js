"use client";

import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  async function handleSignIn(event) {
    event.preventDefault();
    await signInWithGoogle().then(() => router.push("/dashboard"));
  }

  return (
    <main>
      <h1>Finni Health</h1>
      <a href="#" onClick={handleSignIn}>
        Log In with Google
      </a>
    </main>
  );
}
