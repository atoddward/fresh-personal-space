
import React, { useEffect, useState } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminPanel from "@/components/AdminPanel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem("isAdminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {isAuthenticated ? (
          <div className="container mx-auto py-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Website Administration</h1>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
            <AdminPanel />
          </div>
        ) : (
          <AdminLogin onLogin={handleLogin} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
