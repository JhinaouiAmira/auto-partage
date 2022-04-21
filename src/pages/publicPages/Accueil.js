import React from "react";
import VoyageList from "../../components/Voyages.js/VoyageList";
import ChercherVoyage from "./ChercherVoyage";

function Accueil() {
  return (
   
    <div style={{display:"flex",flexWrap:"nowrap",justifyContent:'space-around',backgroundColor:"#f3f3f3"}}>
      <div  style={{marginTop:"100px"}}>
<h3>c'est quoi le covoiturage ?</h3>
        <p>
          Le covoiturage, c’est l’expérience de partager un trajet ensemble. Au
           fond, chaque fois que vous visitez une autre ville en voiture avec des
           amis, c’est du covoiturage. Avec Auto-Partage, on va un peu plus loin, en
           mettant en relation des conducteurs qui ont des places libres avec des
           personnes qui voyagent vers la même destination. Il s’agit surtout de
          trajets longue-distance allant d’une ville à une autre. En Tunisie,
           la distance moyenne parcourue par trajet est de 205km!
         </p>
</div>
<div style={{width:"68%"}}>
  <img src="https://www.mobilitytechgreen.com/wp-content/uploads/2019/04/auto_visu-1024x512.png"/>
</div>

</div>

  );
}

export default Accueil;

    // <div
    //   style={{
    //     backgroundImage:
    //       "url(" +
    //       "https://www.mobilitytechgreen.com/wp-content/uploads/2019/04/auto_visu-1024x512.png" +
    //       ")",
    //     backgroundRepeat: "no-repeat",
    //     height: "500px",marginLeft:"200px"
       
    //   }}
    // >
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>

    //   <br/>
    //   <br/>

    //   <br/>

    //   <div style={{marginRight:"200px"}} >
    //     <h3>c'est quoi le covoiturage ?</h3>
    //     <p>
    //       Le covoiturage, c’est l’expérience de partager un trajet ensemble. Au
    //       fond, chaque fois que vous visitez une autre ville en voiture avec des
    //       amis, c’est du covoiturage. Avec Auto-Partage, on va un peu plus loin, en
    //       mettant en relation des conducteurs qui ont des places libres avec des
    //       personnes qui voyagent vers la même destination. Il s’agit surtout de
    //       trajets longue-distance allant d’une ville à une autre. En Tunisie,
    //       la distance moyenne parcourue par trajet est de 205km!
    //     </p>
    //   </div>
      // <hr/>
      {/* <p style={{paddingLeft:"300px",paddingRight:"200px",paddingTop:"40px"}}> */}
      {/* <ChercherVoyage/> */}
      {/* </p> */}
      {/* <div > */}
      {/* <p style={{paddingTop:"40px",paddingLeft:"150px",paddingRight:"150px"}}> */}
      {/* <VoyageList /> */}
      {/* </p> */}
      {/* </div> */}
    // </div>