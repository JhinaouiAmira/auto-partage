//importation express
const express = require("express");
const { signin, signup } = require("../controllers/admin");
const isAuthAdmin = require("../middleware/isAuthAdmin");
const {
  loginValidation,
  validation,
  registerValidation,
} = require("../middleware/validator");
const admin = require("../controllers/admin");
//importation express router
const router = express.Router();

router.get("/current", isAuthAdmin, (req, res) => {
  res.send(req.admin);
});
//---------------------signup && signin admin
router.post("/signup", signup, registerValidation(), validation);
router.post("/signin", signin, loginValidation(), validation);

//------------------------Gérer Profil
router.get("/:_id", admin.getAdminProfile);
router.put("/editProfil/:_id", admin.editProfil);
router.delete("/deleteProfil/:_id", admin.deleteProfil);

//---------------------Gérer conducteur
router.get("/conducteur/all", admin.conducteurs);
router.get("/conducteur/:_id", admin.getConducteur);
router.delete("/conducteur/delete/:_id", admin.deleteConducteur);
router.put("/conducteur/edit/:_id", admin.editConducteur);

//-----------------------Gérer voyageur
router.get("/voyageur/:_id", admin.getVoyageur);
router.get("/voyageurs/all", admin.voyageurs);
router.put("/voyageur/edit/:_id", admin.editVoyageur);
router.delete("/voyageur/:_id",  admin.deleteVoyageur);

//-----------------------Gérer voyage
router.get("/voyage/all", admin.getvoyages);
router.delete("/voyage/del/:_id", admin.deleteVoyage);
router.get("/voyage/:_id", admin.getOneVoyage);

//-----------------------Gérer voiture
router.get("/voiture/all", admin.getVoitures);
router.delete("/voiture/del/:_id", admin.deleteVoiture);
router.get("/voiture/:_id", admin.getOneVoiture);

module.exports = router;
