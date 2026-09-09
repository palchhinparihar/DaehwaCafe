import { Routes, Route } from "react-router-dom";

import AdminNavbar from "../components/common/AdminNavbar";
import AdminDashboard from "../pages/AdminDashboard";
import ManageEvents from "../pages/ManageEvents";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/events" element={<ManageEvents />} />
        </Routes>
      </main>
    </>
  );
}

export default AdminLayout;