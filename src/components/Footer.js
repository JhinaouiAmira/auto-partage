import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"black",color:"white"}} >
      <div >
        <div >
          <div>
            <h5>Contact</h5>
            <p>
              <address>
                <span>Téléphone: </span>
                00 216 28 007 874
                <br />
                <span>Email:  </span>
                <a href="contact@autopartage.tn">contact@autopartage.tn</a>
              </address>
            </p>
            <p>
              © 2022. All rights reserved. <br />
              Site développé par : JHINAOUI Amira{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
