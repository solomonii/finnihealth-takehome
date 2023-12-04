"use client";

import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import Image from "next/image";
import image from "@/lib/kiddo.png";
import logo from "@/lib/logo.svg";

export default function Login() {
  const router = useRouter();

  async function handleSignIn(event) {
    event.preventDefault();
    await signInWithGoogle().then(() => router.push("/dashboard"));
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <div className={styles.loginForm}>
          <Image src={logo} width={100} height={100} alt="logo" />
          <button onClick={handleSignIn} className={styles.googleButton}>
            Login with Google
          </button>
        </div>
      </div>
      <div className={styles.rightSection}>
        <Image src={image} alt="image of kid" />
      </div>
    </div>
  );
}
