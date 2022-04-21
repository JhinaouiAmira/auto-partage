import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {Card,Button,Spinner} from "react-bootstrap"
import {deleteProfilAd} from "../../redux/actions/admin"

function ProfileAd() {
const dispatch=useDispatch()
  const navigate=useNavigate()
  const load = useSelector((state) => state.adminReducer.load);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const admin = useSelector((state) => state.adminReducer.admin);
  return (
    <div style={{marginTop:'50px',marginBottom:'300px'}}>
    {load ? (
      <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
    ) : isAuthAdmin ? (
      <Card className="text-center" style={{marginRight:"100px",marginLeft:"100px"}}>
  <Card.Header><h3>Profil Administrateur :</h3></Card.Header>
  <Card.Body>
    <Card.Title>Email: {admin.email}</Card.Title>
    {/* <Card.Text>
    mot de passe: {admin.password}
    </Card.Text> */}
    </Card.Body>
    </Card>
    ) : (
      <div>
        {alert("Please Check your Email Or Password")}
        <Navigate to={"/admin/signin"} />
      </div>
    )}
    <Button onClick={()=>navigate(`/admin/editProfil/${admin._id}`)}>Editer</Button>
    <Button onClick={()=>dispatch(deleteProfilAd(admin._id))}>supprimer</Button>

  </div>
  );
}

export default ProfileAd;
