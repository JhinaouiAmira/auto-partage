import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVoyages } from "../../redux/actions/admin";
import VoyageCard from "./VoyageCard";
// import conducteurReducer from '../../redux/reducers/conducteur';
function VoyageList({inputSearch}) {
  const dispatch = useDispatch();
  const voyageList = useSelector((state) => state.adminReducer.voyageList);
  const load = useSelector((state) => state.adminReducer.load);
  useEffect(() => {
    dispatch(getVoyages());
  }, [dispatch]);
  console.log(voyageList)
  return (
    <div style={{marginTop:'30px',marginBottom:"50px"}}>
      <h3 style={{marginBottom:"30px"}}>Dérnier voyages publiés</h3>
      {load ? (
        <h2>loaaaaaaaaaading</h2>
      ) : (
         voyageList?.filter((el)=>(el.ville_départ && el.ville_arrivée && el.date).toUpperCase().includes(inputSearch.toUpperCase()))
         .map((el) => <VoyageCard tab={el } key={el.id}/>)

      )} 
    </div>
  );
}

export default VoyageList;
