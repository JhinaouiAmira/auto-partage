import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateAdmin({ children }) {
  const load = useSelector((state) => state.adminReducer.load);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  return load ? (
    <p>loaaaaaaading</p>
  ) : isAuthAdmin ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
}

export default PrivateAdmin;
