import React from "react";
import { Carousel } from "react-bootstrap";
function About() {
  return (
  
    <div >
      <Carousel
        variant="dark"
        style={{ paddingLeft: "300px", paddingRight: "300px" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://us.123rf.com/450wm/scootz/scootz1204/scootz120400008/13179501-bus-orange-avec-des-passagers-dans-le-trafic-covoiturage-illustration.jpg?ver=6"
            alt="First slide"
            style={{height:"600px"}}
          />
          <Carousel.Caption>
            <h2 style={{marginBottom:"430px",marginLeft:"50px"}}>Eviter les embouteillages </h2>
            <h5 >
              {" "}
              Le covoiturage est une bonne solution: Moins de voitures sur les
              routes , donc moins du trafics ,donc moins de bouchons.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://www.ville-avrille.fr/medias/2017/01/covoiturage.jpg"
            src="https://www.ville-avrille.fr/medias/2017/01/covoiturage.jpg"

            alt="Second slide"
            style={{height:"600px"}}
          />
          <Carousel.Caption>
            <h2 style={{marginBottom:"430px",marginLeft:"50px"}}>Diviser frais d'essence</h2>
            <h5>
              C'est là que se pose la question du partage du coût du trajet, il
              n'y a pas de souci et on partage en divisant le coût par le nombre
              de participants.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/vectors/yellow-taxi-order-or-share-flat-line-illustration-vector-id1141727347?k=20&m=1141727347&s=612x612&w=0&h=Qhc9JLNLczvRi_9JIOEXRDFrI0EskxK0hWuJRzxosQs="
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 style={{marginBottom:"430px",marginLeft:"30px"}}>S’ouvrir aux autres</h2>
            <h5>
              Partager un trajet efface les barrières et crée du lien social.
            </h5>
            <br />
            <br />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>


    
  );
}

export default About;
