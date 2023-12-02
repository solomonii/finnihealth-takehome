import styles from "./page.module.css";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Home() {
  // check if user is logged in
  const { currentUser } = await getAuthenticatedAppForUser();

  return (
    <main className={styles.main}>
      {currentUser ? redirect("/dashboard") : redirect("/login")}
    </main>
  );
}
