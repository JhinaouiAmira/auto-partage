import {Modal,Button} from "react-bootstrap"
function RéserverVoy() {
  return (
    <div style={{marginTop:"100px",marginBottom:"150px"}}>
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Félicitation</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {/* <h5>Réservation terminée avec succée </h5> */}
    <h5>Merci! Votre demande a bien été!</h5>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    {/* <Button variant="primary">Save changes</Button> */}
  </Modal.Footer>
</Modal.Dialog>
</div>
  )
}

export default RéserverVoy