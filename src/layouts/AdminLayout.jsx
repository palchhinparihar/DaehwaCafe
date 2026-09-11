import { Routes, Route } from "react-router-dom";

import AdminNavbar from "../components/common/AdminNavbar";
import AdminDashboard from "../pages/AdminDashboard";
import ManageEvents from "../pages/ManageEvents";
import AddEvent from "../pages/AddEvent";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />

      <main className="min-h-screen">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="events" element={<ManageEvents />} />
          <Route path="add-event" element={<AddEvent />} />
        </Routes>
      </main>
    </>
  );
}

export default AdminLayout;