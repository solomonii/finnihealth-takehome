"use client";

import { signOut } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Navigation() {
  const router = useRouter();

  async function handleSignOut(event) {
    event.preventDefault();
    await signOut().then(() => router.push("/login"));
  }

  return (
    <main>
      <a href="#" onClick={handleSignOut}>
        Log Out
      </a>
    </main>
  );
}
