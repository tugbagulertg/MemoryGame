import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ element }) {
  const mode = useSelector((state) => state.memory.mode);
  return mode ? <Outlet /> : <Navigate to={"/"} />;
}

export default ProtectedRoute;
