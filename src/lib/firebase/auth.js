import { auth } from "./firebase";
import {
  onAuthStateChanged as _onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error(error);
  }
}
