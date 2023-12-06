import { addPatient, updatePatient } from "@/lib/firebase/firestore";

export async function handleAddPatient(data) {
  await addPatient(data);
}

export async function handleUpdatePatient(data, patientId) {
  await updatePatient(patientId, data);
}
