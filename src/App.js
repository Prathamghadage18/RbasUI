import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import PermissionsPage from "./pages/PermissionsPage";
import Login from "./components/Login";

const App = () => {
  let ifAdminLogin;
  useEffect(() => {

    ifAdminLogin = localStorage.getItem('admin');
  }, []);
  return (
    <Router>
      <Header />
      <div style={{ width: "full", display: "flex", }}>

        <div style={{ borderTop: "1px solid white", width: "20%" }}>
          <Sidebar />
        </div>

        <main style={{ padding: "20px", width: "80%" }} >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/permissions" element={<PermissionsPage />} />
          </Routes>
        </main>


      </div>
    </Router>
  );
};

export default App;
