import PatientsTable from "@/components/PatientsTable";
import { getPatients } from "@/lib/firebase/firestore";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
    const patients = await getPatients();

    return (
        <main>
            <PatientsTable patients={patients} />
        </main>
    )
}