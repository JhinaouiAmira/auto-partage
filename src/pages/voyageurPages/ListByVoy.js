import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllVoyages } from '../../redux/actions/voyageur';
import CardByVoy from './CardByVoy';

function ListByVoy() {
    const dispatch = useDispatch();
  const voyageList = useSelector((state) => state.voyageurReducer.voyageList);
  const load = useSelector((state) => state.voyageurReducer.load);
  useEffect(() => {
    dispatch(getAllVoyages());
  }, [dispatch]);
  console.log(voyageList);
  return (
    <div style={{marginTop:"30px"}} >
      <h3 >Liste des voyages</h3>
      {load ? (
        <h2>loaaaaaaaaaading</h2>
      ) : (
        voyageList?.map((el) => <CardByVoy voya={el} key={el.id}/>)
      )}
    </div>
  )
}

export default ListByVoy