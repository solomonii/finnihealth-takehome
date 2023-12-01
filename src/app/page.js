import styles from "./page.module.css";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase";

export default async function Home() {
  // check if user is logged in
  const { currentUser } = await getAuthenticatedAppForUser();

  return (
    <main className={styles.main}>
      <h1>finni health take home</h1>
      {currentUser ? <h1>logged in</h1> : <h1>logged out</h1>}
    </main>
  );
}
