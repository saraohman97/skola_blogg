
import getCurrentUser from "@/actions/getCurrentUser";
import DashboardNavbar from "./components/navbar";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const currentUser = await getCurrentUser();

  if(!currentUser) redirect("/logga-in")
  return (
    <div className="bg-[#FEFEFE] min-h-screen p-4">
      <DashboardNavbar currentUser={currentUser} />
    </div>
  );
}
