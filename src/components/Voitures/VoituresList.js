import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVoitures } from "../../redux/actions/admin";
import CardVoiture from "./CardVoiture";

function VoituresList() {
  const dispatch = useDispatch();
  const voitureList = useSelector(
    (state) => state.adminReducer.voitureList
  );
  const load = useSelector((state) => state.adminReducer.load);
  useEffect(() => {
    dispatch(getVoitures());
  }, []);
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
          voitureList?.map((el) => <CardVoiture voi={el} key={el._id} />)
        )}
      </div>
    </div>
  );
}

export default VoituresList;
