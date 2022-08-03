import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";

const AdminTemplate = () => {
  return (
    <div className="flex">
      <div className="w-1/6  h-full shadow-none drop-shadow-none">
        <Dashboard />
      </div>
      <div className="w-5/6 title px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminTemplate;
