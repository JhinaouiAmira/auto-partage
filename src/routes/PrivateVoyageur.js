import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateVoyageur({children}) {
  const load = useSelector((state) => state.voyageurReducer.load);
  const isAuthVoyageur = useSelector(
    (state) => state.voyageurReducer.isAuthVoyageur
  );
  return load ? (
    <p>loaaaaaaading</p>
  ) : isAuthVoyageur ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
}

export default PrivateVoyageur;
