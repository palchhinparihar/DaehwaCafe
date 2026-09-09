import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Login from "./pages/Login";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 120,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Protected Admin */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      />

      {/* Public Website */}
      <Route path="*" element={<PublicLayout />} />
    </Routes>
  );
}

export default App;