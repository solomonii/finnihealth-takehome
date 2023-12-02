import { addPatient, updatePatient } from "@/lib/firebase/firestore";

export async function handleAddPatient(data) {
  let formattedData = {}
  data.forEach((value, key) => {
    if (value !== "") {
      formattedData[key] = value;
    }
  });
  
  await addPatient(formattedData);
}

export async function handleUpdatePatient(data) {
  let formattedData = {}
  data.forEach((value, key) => {
    if (value !== "" && key !== "patientId") {
      formattedData[key] = value;
    }
  });

  await updatePatient(data.get("patientId"), formattedData);
}
