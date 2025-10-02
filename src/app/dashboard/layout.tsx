import { ReactNode, Suspense } from "react";
import { Header } from "@/components/ui/header";

export const metadata = {
  title: "Dashboard - Feedback Board",
  description: "Manage your feedbacks on the dashboard.",
};

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="h-full grow dashboard">{children}</div>
    </Suspense>
  );
}

export default DashboardLayout;
