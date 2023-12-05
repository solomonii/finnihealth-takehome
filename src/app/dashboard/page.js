import { getPatients } from "@/lib/firebase/firestore";
import DashboardContainer from "@/components/DashboardContainer";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const filters = {};
  const patients = await getPatients(filters);

  return (
    <div>
      <DashboardContainer patients={patients} />
    </div>
  );
}
