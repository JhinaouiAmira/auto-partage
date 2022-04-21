import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { conducteurs } from '../../redux/actions/admin';
import ConCard from './ConCard';

function ConList() {
    const dispatch = useDispatch();
  const conducteursList= useSelector((state) => state.adminReducer.conducteursList);
  const load = useSelector((state) => state.adminReducer.load);
  useEffect(() => {
    dispatch(conducteurs());
  }, []);
  console.log(conducteursList)
  return (
      <div>
    <h3>Liste des conducteurs</h3>
    <div style={{display:"flex",flexWrap:'wrap',justifyContent:"space-around",marginBottom:"100px"}}>
    
    {load ? (
      <h2>loaaaaaaaaaading</h2>
    ) : (
        conducteursList?.map((el) => <ConCard con={el} key={el._id}/>)

    )} 
  </div>
  </div>
  )
}

export default ConList