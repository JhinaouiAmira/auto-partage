//importation express
const express = require("express");
const { signin } = require("../controllers/conducteur");
const { signup } = require("../controllers/conducteur");
const isAuthConducteur = require("../middleware/isAuthConducteur");
const {
  loginValidation,
  validation,
  registerValidation,
} = require("../middleware/validator");
const conducteur = require("../controllers/conducteur");

//imprtation express router
const router = express.Router();

router.get("/current", isAuthConducteur, (req, res) => {
  res.send(req.conducteur);
});

//------------------signup && signin conducteur

router.post("/signup", signup, registerValidation(), validation);
router.post("/signin", signin, loginValidation(), validation);

//------------------------gérer son profil
router.get("/:_id", conducteur.getConducteurProfile);
router.put("/editProfil/:_id", conducteur.editProfil);
// router.patch("/editProfil/:_id", conducteur.editProfil);
router.delete("/deleteProfil/:_id", conducteur.deleteProfil);
router.post("/add", conducteur.addConducteur);

//--------------------------- gérer voiture
router.get("/voiture/all",conducteur.getAllVoitures);
router.post("/voiture/add", conducteur.addVoiture);
router.put("/voiture/edit/:_id", conducteur.editVoiture);
router.delete("/voiture/del/:_id", conducteur.deleteVoiture);

//--------------------------gérer voyage
router.get("/voyage/all/", conducteur.getAllVoyages);
router.get("/voyage/:_id", conducteur.getOneVoyage);
router.post("/voyage/add", conducteur.addVoyage);
router.put("/voyage/edit/:_id", conducteur.editVoyage);
router.delete("/voyage/del/:_id", conducteur.deleteVoyage);






module.exports = router;
