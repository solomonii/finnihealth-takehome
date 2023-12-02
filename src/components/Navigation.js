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
      <ul>
        <li>
          <a href="/dashboard">Patients</a>
        </li>
        <li>
          <a href="/dashboard/addpatient">Add Patient</a>
        </li>
        <li>
          <a href="#" onClick={handleSignOut}>
            Log Out
          </a>
        </li>
      </ul>
    </main>
  );
}
