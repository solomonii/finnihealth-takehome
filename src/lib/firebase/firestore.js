import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getAuthenticatedAppForUser } from "./firebase";
import { db } from "./firebase";

export async function addPatient(patientData) {
  try {
    await addDoc(collection(db, "patients"), patientData);
  } catch (error) {
    console.error("There was an error adding the patient", error);
  }
}

export async function getPatients() {
  const { currentUser } = await getAuthenticatedAppForUser();
  const q = query(
    collection(db, "patients"),
    where("provider", "==", currentUser.uid)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
}

export async function updatePatient(patientId, data) {
  const patientRef = doc(db, "patients", patientId);

  if (patientRef) {
    await updateDoc(patientRef, data);
  }
}
