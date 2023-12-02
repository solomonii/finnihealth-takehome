import { addPatient } from "@/lib/firebase/firestore";

export async function handleAddPatient(data) {
  await addPatient({
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    dob: data.get("dob"),
    address: data.get("address"),
    notes: data.get("notes"),

    // hidden form field
    provider: data.get("providerId"),
  });
}
