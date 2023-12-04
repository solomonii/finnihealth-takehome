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
import { The_Nautigal } from "next/font/google";

export async function addPatient(patientData) {
  try {
    await addDoc(collection(db, "patients"), patientData);
  } catch (error) {
    console.error("There was an error adding the patient", error);
  }
}

export async function getPatients(filters) {
  const { currentUser } = await getAuthenticatedAppForUser();
  let q = query(
    collection(db, "patients"),
    where("provider", "==", currentUser.uid)
  );
  q = applyQueryFilters(q, filters);
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

function applyQueryFilters(q, { firstname, lastname }) {
  // filter by status
  return query(q);
}