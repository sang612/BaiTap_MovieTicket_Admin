import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import  "../../_Playground/CSS/main.css"

const AdminTemplate = () => {
  return (
    <div className="flex">
      <div className="w-1/5  h-full shadow-none drop-shadow-none">
        <Dashboard />
      </div>
      <div className="w-4/5 title">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminTemplate;
