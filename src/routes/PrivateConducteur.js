import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateConducteur({children}) {
  const load = useSelector((state) => state.conducteurReducer.load);
  const isAuthConducteur = useSelector(
    (state) => state.conducteurReducer.isAuthConducteur
  );

  return load ? (
    <p>loaaaaaaading</p>
  ) : isAuthConducteur ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
}

export default PrivateConducteur;
