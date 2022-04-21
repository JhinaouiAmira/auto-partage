import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVoitures } from "../../redux/actions/conducteur";
import VoituCard from "./VoituCard";

function ListVoituCon() {
  const dispatch = useDispatch();
  const voitureList = useSelector(
    (state) => state.conducteurReducer.voitureList
  );
  const load = useSelector((state) => state.conducteurReducer.load);
  useEffect(() => {
    dispatch(getAllVoitures());
  }, [dispatch]);
  console.log("voitureList",voitureList)
  return (
    <div style={{ marginTop: "50px" }}>
      <h3>Liste des voitures</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginBottom: "100px",
        }}
      >
        {load ? (
          <h2>loaaaaaaaaaading</h2>
        ) : (
          voitureList?.map((el) => <VoituCard voiture={el} key={el.id} />)
        )}
      </div>
    </div>
  );
}

export default ListVoituCon;
