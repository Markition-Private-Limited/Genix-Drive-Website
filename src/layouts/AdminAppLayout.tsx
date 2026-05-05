import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminAppLayout = () => {
  return (
    <div className="min-h-screen bg-surface-light font-cairo grid grid-cols-1 md:grid-cols-12">
      <AdminSidebar />
      <main className="p-5 md:col-span-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminAppLayout;
