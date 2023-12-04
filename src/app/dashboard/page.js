import PatientsTable from "@/components/PatientsTable";
import { getPatients } from "@/lib/firebase/firestore";
import styles from "@/app/dashboard/dashboard.module.css";

export const dynamic = "force-dynamic";

export default async function Dashboard({ searchParams }) {
  const filters = {
  };
  const patients = await getPatients(filters);

  return (
    <div>
      <h2 className={styles.header}>Patients</h2>
      <PatientsTable allPatients={patients} />
    </div>
  );
}
