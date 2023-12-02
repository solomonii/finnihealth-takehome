import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export async function addPatient(patientData) {
  try {
    await addDoc(collection(db, "patients"), patientData);
  } catch (error) {
    console.error("There was an error adding the patient", error);
  }
}
