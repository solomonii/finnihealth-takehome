import PatientsTable from "@/components/PatientsTable";
import { getPatients } from "@/lib/firebase/firestore";

export const dynamic = "force-dynamic";

export default async function Dashboard({ searchParams }) {
  const filters = {
  };
  const patients = await getPatients(filters);

  return (
    <main>
      {/* <Search placeholder="Search for patients" /> */}
      <PatientsTable allPatients={patients} />
    </main>
  );
}
