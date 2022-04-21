import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { voyageurs } from '../../redux/actions/admin';
import VoyCard from './VoyCard';

function VoyList() {
    const dispatch = useDispatch();
    const voyageursList= useSelector((state) => state.adminReducer.voyageursList);
    const load = useSelector((state) => state.adminReducer.load);
    useEffect(() => {
      dispatch(voyageurs());
    }, []);
    console.log(voyageursList)
  return (
    <div>
    <h3>Liste des voyageurs</h3>
    <div style={{display:"flex",flexWrap:'wrap',justifyContent:"space-around",marginBottom:"100px"}}>
    
    {load ? (
      <h2>loaaaaaaaaaading</h2>
    ) : (
        voyageursList?.map((el) => <VoyCard voyageur={el} key={el._id}/>)

    )} 
  </div>
  </div>
  )
}

export default VoyList