import { Routes, Route } from "react-router-dom";

import AdminNavbar from "../components/common/AdminNavbar";
import AdminDashboard from "../pages/AdminDashboard";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default AdminLayout;