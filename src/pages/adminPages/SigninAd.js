import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/actions/admin";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SigninAd() {
  const [newAdmin, setNewAdmin] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="Container" id="container">
        <form>
          <h2>Connectez-vous</h2>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email .."
            onChange={handleChange}
          />
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password .."
            onChange={handleChange}
          />
          <Link to={"/admin/profile"}>
            <Button
              style={{ textAlign: "center", margin: "20px" }}
              onClick={() => dispatch(signin(newAdmin))}
            >
              S'identifier
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SigninAd;
