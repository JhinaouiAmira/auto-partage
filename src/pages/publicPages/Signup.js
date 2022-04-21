import React from "react";
import { Link } from "react-router-dom";
import SingupCon from "../conducteurPages/SingupCon";
import SignupVoy from "../voyageurPages/SignupVoy";

function SignUp() {
  return (
    
    <div style={{display:"flex",justifyContent:"space-between",paddingTop:"0px"}}>
     
      <div style={{width:"50%"}}>
        <h2>Vous êtes : </h2>
        <h1> 
          <Link to={"/voyageur/signup"}>
          <a href="#">Voyageur</a>
          </Link>
        </h1>
        <p style={{fontSize:"25px",marginLeft:"100px",paddingRight:"150px"}} >
      Simple et économique : réservez facilement votre place en ligne et voyagez moins cher, en toute confiance. Même en dernière minute !
      </p>
        <img style={{height:"230px"}} alt="voyageur" src="https://theme.zdassets.com/theme_assets/9203332/e365a7d64d7d77f15251a68642f33842f320165d.png"/>
      
      </div>
      <div style={{backgroundColor:"#f3f3f3",width:"50%"}}>
        <h2>Vous êtes :</h2>
        <h1> 
          <Link to={"/conducteur/signup"}>
          <a href="#">Conducteur</a>
          </Link>
        </h1>
        <p style={{fontSize:"25px",marginRight:"100px",paddingLeft:"150px"}}>
        Économique et convivial : partagez vos frais en prenant des passagers sympas lors de vos longs trajets en voiture.
        </p>
        <img style={{height:"290px"}} src="https://wayzup.files.wordpress.com/2018/04/voiture-midas.png"/>
      </div>
    </div>
  );
}

export default SignUp;
