import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVoyages } from "../../redux/actions/conducteur";
import CardVoyage from "./CardVoyage";

function ListByCon() {
  const dispatch = useDispatch();
  const voyageList = useSelector((state) => state.conducteurReducer.voyageList);
  const load = useSelector((state) => state.conducteurReducer.load);
  useEffect(() => {
    dispatch(getAllVoyages());
  }, [dispatch]);
  console.log("voyageList",voyageList);
  return (
    <div style={{marginTop:"30px"}} >
      <h3 style={{marginBottom:"30px"}} >Liste des voyages</h3>
      {load ? (
        <h2>loaaaaaaaaaading</h2>
      ) : (
        voyageList?.map((el) => <CardVoyage conduc={el} key={el.id} />)
      )}
    </div>
  );
}

export default ListByCon;
