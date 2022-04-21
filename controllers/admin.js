const Admin = require("../model/Admin");
const Conducteur = require("../model/Conducteur");
const Voyageur = require("../model/Voyageur");
const Voyage = require("../model/Voyage");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Voiture = require("../model/Voiture");
 
//---------------signup
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (foundAdmin) {
      res.status(400).send({ errors: [{ msg: "email should be unique" }] });
    }
    //hashage de mot de passe
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newAdmin = new Admin({ ...req.body });
    newAdmin.password = hashedPassword;
    await newAdmin.save();
    //creation de token
    const token = jwt.sign({ id: newAdmin._id }, process.env.SECRET_KEY, {
      expiresIn: "5h",
    });
    return res
      .status(200)
      .send({ msg: "admin dkhal lel base de donnée", admin: newAdmin ,token});
  } catch (error) {}
  res.status(400).send({ msg: "admin ma dkhalech lel base de donnée" });
};
   
//---------------------------signin

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (!foundAdmin) {
      return res.status(400).send({ errors: [{ msg: "baaaaaaad credentiel" }] });
    }
    //hash password
    const foundPassword = await bcrypt.compare(password, foundAdmin.password);
    if (!foundPassword) {
      return res.status(400).send({ errors: [{ msg: "bad credentiel" }] });
    }
    const token = jwt.sign({ id: foundAdmin._id }, process.env.SECRET_KEY, {
      expiresIn: "5h",
    });
    return res
      .status(200)
      .send({ msg: "login success", admin: foundAdmin, token });
  } catch (error) {
    return res.status(200).send({ msg: "login failed" });
  }
};

//------------------Gérer profil
/**
 * description: delete profil
 * path: http://localhost:6060/api/admin/deleteProfil/:_id
 * methode:DELETE
 * data: req.params
 */
 exports.deleteProfil = async (req, res) => {
  try {
    const { _id } = req.params;
    await Admin.deleteOne({ _id });
    res.status(200).send({ msg: "profile deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this profile",
      error,
    });
  }
};

/**
 * description: edit profil admin
 * path: http://localhost:6060/api/admin/editProfil/:_id
 * methode:PUT
 * data:req.body && req.params
 */
 exports.editProfil = async (req, res) => {
  try {
    const { _id } = req.params;
    //bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    // const {  email, password } = req.body;
    const editProfil = await Admin.updateOne(
      { _id },
      { $set: { ...req.body, password: hashedPassword} }
    );
    res.status(200).send({ msg: "profile updated", editProfil });
  } catch (error) {
    res.status(400).send({
      msg: "cannot edit  this profile",
      error,
    });
  }
};


/**
 * description: get profil admin
 * path: http://localhost:6060/api/admin/:_id
 * methode:GET
 * data: req.params
 */
 exports.getAdminProfile = async (req, res) => {
  try {
    const { _id } = req.params;
    const profileToGet = await Admin.findOne({ _id });
    res.status(200).send({ msg: "get profile Admin", profileToGet });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};



//---------------------Partie conducteur

/**---------------CRUDS
 * description:get all comptes of conducteurs 
 * path: http://localhost:6060/api/admin/conducteur/all
 * methode:GET
 * data:no data
 */
exports.conducteurs = async (req, res) => {
  try {
    const conducteursList = await Conducteur.find();
    return res.status(200).send({
      msg: "this the list of conducteurs ",
      conducteursList,
    });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description:get one conducteur
 * path: http://localhost:6060/api/admin/conducteur/:_id
 * methode:GET
 * data:req.params
 */

exports.getConducteur = async (req, res) => {
  try {
    const { _id } = req.params;
    const conducteurToGet = await Conducteur.findOne({ _id });
    res.status(200).send({ msg: "get one conducteur", conducteurToGet });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description: delete conducteur
 * path: http://localhost:6060/api/admin/conducteur/delete/:_id
 * methode:DELETE
 * data:req params
 */

exports.deleteConducteur = async (req, res) => {
  try {
    const { _id } = req.params;
    await Conducteur.deleteOne({ _id });
    res.status(200).send({ msg: "conducteur deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this conducteur",
      error,
    });
  }
};

/**
 * description: editer conducteur
 * path: http://localhost:6060/api/admin/conducteur/edit/:_id
 * methode:PUT
 * data:req params && req body
 */
exports.editConducteur = async (req, res) => {
  try {
    const { _id } = req.params;
    const { prenom, name, email, password, telephone, genre } = req.body;
    const editConducteur = await Conducteur.updateOne(
      { _id },
      { $set: { ...req.body}}
    );
    res.status(200).send({ msg: "conducteur updated", editConducteur });
  } catch (error) {
    res.status(400).send({
      msg: "cannot update this conducteur",
      error,
    });
  }
};

//--------------------partie voyageur

/**
 * description:get all comptes of voyageurs 
 * path: http://localhost:6060/api/admin/voyageurs/all
 * methode:GET
 * data:no data
 */
exports.voyageurs = async (req, res) => {
  try {
    const voyageursList = await Voyageur.find();
    return res.status(200).send({
      msg: "this the list of voyageurs ",
      voyageursList,
    });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description:get one voyageur
 * path: http://localhost:6060/api/admin/voyageur/:_id
 * methode:GET
 * data:req.params
 */

exports.getVoyageur = async (req, res) => {
  try {
    const { _id } = req.params;
    const voyageurToGet = await Voyageur.findOne({ _id });
    res.status(200).send({ msg: "get one voyageur", voyageurToGet });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description: delete voyageur
 * path: http://localhost:6060/api/admin/voyageur/:_id
 * methode:DELETE
 * data:req params
 */

exports.deleteVoyageur = async (req, res) => {
  try {
    const { _id } = req.params;
    await Voyageur.deleteOne({ _id });
    res.status(200).send({ msg: "voyageur deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this voyageur",
      error,
    });
  }
};


/**
 * description: editer voyageur
 * path: http://localhost:6060/api/admin/voyageur/edit/:_id
 * methode:PUT
 * data:req params && req body
 */
 exports.editVoyageur = async (req, res) => {
  try {
    const { _id } = req.params;
    const { prenom, name, email, password, telephone, genre } = req.body;
    const editVoyageur = await Voyageur.updateOne(
      { _id },
      { $set: { ...req.body } }

    );
    res.status(200).send({ msg: "Voyageur updated", editVoyageur });
  } catch (error) {
    res.status(400).send({
      msg: "cannot edit  this Voyageur",
      error,
    });
  }
};



//-------------------Partie voyage


/**
 * description: get all voyages
 * path: http://localhost:6060/api/admin/voyage/all
 * methode:GET 
 * data:
 */

 exports.getvoyages = async (req, res) => {
  try {
    const voyageList = await Voyage.find();
    return res.status(200).send({
      msg: "this the list of voyages ",
      voyageList,
    });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};


/**
 * description: get one  voyage
 * path: http://localhost:6060/api/admin/voyage/:_id
 * methode:GET 
 * data:
 */

 exports.getOneVoyage = async (req, res) => {
  try {
    const { _id } = req.params;
    const voyageToGet = await Voyage.findOne({_id});
    return res.status(200).send({
      msg: "get one voyage ",
      voyageToGet,
    });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description: delete voyage
 * path: http://localhost:6060/api/admin/voyage/del/:_id
 * methode:DELETE
 * data:req.params
 */

exports.deleteVoyage = async (req, res) => {
  try {
    const { _id } = req.params;
    await Voyage.deleteOne({ _id });
    res.status(200).send({ msg: "Voyage deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this Voyage",
      error,
    });
  }
};
  



//-------------------Partie voiture


/**
 * description: get all voitures
 * path: http://localhost:6060/api/admin/voiture/all
 * methode:GET 
 * data:
 */

 exports.getVoitures = async (req, res) => {
  try {
    const voitureList = await Voiture.find();
    return res.status(200).send({
      msg: "this the list of voitures ",
      voitureList,
    });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};


/**
 * description: get one  voiture
 * path: http://localhost:6060/api/admin/voiture/:_id
 * methode:GET 
 * data:
 */

 exports.getOneVoiture = async (req, res) => {
  try {
    const { _id } = req.params;
    const voitureToGet = await Voiture.findOne({_id});
    return res.status(200).send({
      msg: "get one voiture ",
      voitureToGet,
    });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description: delete voiture
 * path: http://localhost:6060/api/admin/voiture/del/:_id
 * methode:DELETE
 * data:req.params
 */

exports.deleteVoiture = async (req, res) => {
  try {
    const { _id } = req.params;
    await Voiture.deleteOne({ _id });
    res.status(200).send({ msg: "Voiture deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this Voiture",
      error,
    });
  }
};
  
