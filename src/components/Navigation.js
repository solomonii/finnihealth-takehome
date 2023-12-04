"use client";

import { signOut } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/dashboard/dashboard.module.css";
import logo from "@/lib/logo.svg";

export const dynamic = "force-dynamic";

export default function Navigation() {
  const router = useRouter();

  async function handleSignOut(event) {
    event.preventDefault();
    await signOut().then(() => router.push("/login"));
  }

  return (
    <div className={styles.sidebar}>
      <Image src={logo} width={100} height={100} alt="logo" />
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
    </div>
  );
}
