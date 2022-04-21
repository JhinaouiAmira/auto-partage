//importation express
const express = require("express");
const { signup, signin } = require("../controllers/voyageur");

const isAuthVoyageur = require("../middleware/isAuthVoyageur");
const {
  registerValidation,
  validation,
  loginValidation,
} = require("../middleware/validator");
const voyageur = require("../controllers/voyageur");

//imprtation express router
const router = express.Router();

router.get("/current", isAuthVoyageur, (req, res) => {
  res.send(req.voyageur);
});
//----------------------signup && signin
router.post("/signup", signup, registerValidation(), validation);
router.post("/signin", signin, loginValidation(), validation);

//----------------------Gérer profil
router.get("/:_id", voyageur.getVoyageurProfile);
router.put("/updateProfil/:_id", voyageur.editProfil);
router.delete("/delete/:_id", voyageur.deleteProfil);

//-----------------------Gérer voyage
router.get("/voyage/all", voyageur.getAllVoyages);
router.get("/voyage/:_id", voyageur.getOneVoyage);



module.exports = router;
