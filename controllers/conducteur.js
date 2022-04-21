const Conducteur = require("../model/Conducteur");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Voiture = require("../model/Voiture");
const Voyage = require("../model/Voyage");

//-----------------signup conducteur

exports.signup = async (req, res) => {
  try {
    const { prenom, name, email, password, telephone, genre } = req.body;
    const foundConducteur = await Conducteur.findOne({ email });
    if (foundConducteur) {
      res.status(400).send({ errors: [{ msg: "email should be unique" }] });
    }
    //hashage de mot de passe
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newConducteur = new Conducteur({ ...req.body });
    newConducteur.password = hashedPassword;
    await newConducteur.save();
    //creation de token
    const token = jwt.sign({ id: newConducteur._id }, process.env.SECRET_KEY, {
      expiresIn: "5h",
    });
    return res.status(200).send({
      msg: "conducteur dkhal lel base de donnée",
      conducteur: newConducteur,
      token,
    });
  } catch (error) {}
  res.status(400).send({ msg: "conducteur ma dkhalech lel base de donnée" });
};

//-------------------signin conducteur

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundConducteur = await Conducteur.findOne({ email });
    if (!foundConducteur) {
      return res.status(400).send({ msg: "baaaaaaaaaad credentiel email" });
    }
    //hash password
    const foundPassword = await bcrypt.compare(
      password,
      foundConducteur.password
    );
    if (!foundPassword) {
      return res.status(400).send({ msg: "bad credentiel password" });
    }
    const token = jwt.sign(
      { id: foundConducteur._id },
      process.env.SECRET_KEY,
      { expiresIn: "5h" }
    );
    return res.status(200).send({
      msg: "conducteur dkhal lel base de donnée",
      conducteur: foundConducteur,
      token,
    });
  } catch (error) {
    return res.status(200).send({ msg: "login failed" });
  }
};

//------------------------------Partie Profil

/**-------CRUDS
 * description: edit profil conducteur
 * path: http://localhost:6060/api/conducteur/editProfil/:_id
 * methode:PUT
 * data:req.body && req.params
 */
exports.editProfil = async (req, res) => {
  try {
    const { _id } = req.params;
    // const { prenom, name, email, password, telephone, genre } = req.body;
    const editProfil = await Conducteur.updateOne(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "profile updated", editProfil });
  } catch (error) {
    res.status(400).send({
      msg: "cannot edit  this profile",
      error,
    });
  }
};

// exports.editProfil = async (req, res) => {
//   try {
//     const foundConducteur = await Conducteur.findById(req.params.id);
//     if (!foundConducteur) {
//       return res.status(400).send({ errors: [{ msg: "edit failed" }] });
//     }
//     Object.assign(foundConducteur, req.body);
//     await foundConducteur.save();
//     return res.status(200).send({ msg: "edit done ", conducteur: foundConducteur });
//   } catch (error) {
//     return res.status(400).send({ msg: "error edit " });
//   }
// };

/**
 * description: get profil conducteur
 * path: http://localhost:6060/api/conducteur/:_id
 * methode:GET
 * data: req.params
 */
exports.getConducteurProfile = async (req, res) => {
  try {
    const { _id } = req.params;
    const profileToGet = await Conducteur.findOne({ _id });
    res.status(200).send({ msg: "get profile conducteur", profileToGet });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description: delete profil
 * path: http://localhost:6060/api/conducteur/deleteProfil/:_id
 * methode:DELETE
 * data: req.params
 */
exports.deleteProfil = async (req, res) => {
  try {
    const { _id } = req.params;
    await Conducteur.deleteOne({ _id });
    res.status(200).send({ msg: "profile deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this profile",
      error,
    });
  }
};

/**
 * description: add conducteur
 * path: http://localhost:6060/api/conducteur/add
 * methode:POST
 * data:req.body
 */
exports.addConducteur = async (req, res) => {
  try {
    const { prenom, name, email, password, telephone, genre } = req.body;
    const newConducteur = new Conducteur({
      prenom,
      name,
      email,
      password,
      telephone,
      genre,
      idc,
    });
    await newConducteur.save();
    res.status(200).send({
      msg: "conducteur added succesfully...",
      newConducteur,
    });
  } catch (error) {
    res.status(400).send({
      msg: "cannot be added",
      error,
    });
  }
};

//------------------partie voituuuuuure

/**
 * description: get all voitures
 * path: http://localhost:6060/api/conducteur/voiture/all
 * methode:GET
 * data: no data
 */

exports.getAllVoitures = async (req, res) => {
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
 * description: add voiture
 * path: http://localhost:6060/api/conducteur/
 * methode:POST
 * data:req.body
 */

exports.addVoiture = async (req, res) => {
  try {
    const { immatriculation, marque, couleur, nombre_places } = req.body;

    const newVoiture = new Voiture({
      immatriculation,
      marque,
      couleur,
      nombre_places,
    });
    await newVoiture.save();
    res.status(200).send({
      msg: "Voiture added succesfully...",
      newVoiture,
    });
  } catch (error) {
    res.status(400).send({
      msg: "cannot be added",
      error,
    });
  }
};

/**
 * description: edit voiture
 * path: http://localhost:6060/api/conducteur/voiture/:_id
 * methode:PUT
 * data:req.body && req.params
 */
exports.editVoiture = async (req, res) => {
  try {
    const { _id } = req.params;
    const { immatriculation, marque, couleur, nombre_places } = req.body;
    const result = await Voiture.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "voiture updated", result });
  } catch (error) {
    res.status(400).send({
      msg: "cannot edit this voiture",
      error,
    });
  }
};

/**
 * description: delete voiture
 * path: http://localhost:6060/api/conducteur/voiture/del/:_id
 * methode:DELETE
 * data:req.params
 */

exports.deleteVoiture = async (req, res) => {
  try {
    const { _id } = req.params;
    await Voiture.deleteOne({ _id });
    res.status(200).send({ msg: "voiture deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this voiture",
      error,
    });
  }
};

//-----------------partie voyaaaage

/**
 * description: get all voyages
 * path: http://localhost:6060/api/conducteur/voyage/all/
 * methode:GET
 * data: no data
 */

exports.getAllVoyages = async (req, res) => {
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
 * description: get one voyage
 * path: http://localhost:6060/api/admin/voyage/:_id
 * methode:GET
 * data:
 */

exports.getOneVoyage = async (req, res) => {
  try {
    const { _id } = req.params;
    const voyageToGet = await Voyage.findOne({ _id });
    return res.status(200).send({
      msg: "get one voyage ",
      voyageToGet,
    });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

/**
 * description: add voyage
 * path: http://localhost:6060/api/conducteur/voyage/add
 * methode:POST
 * data:req.body
 */

exports.addVoyage = async (req, res) => {
  try {
    const { ville_départ, ville_arrivée, date, prix, idc } = req.body;

    const newVoyage = new Voyage({
      ville_départ,
      ville_arrivée,
      date,
      prix,
      idc,
    });
    await newVoyage.save();
    res.status(200).send({
      msg: "Voyage added succesfully...",
      newVoyage,
    });
  } catch (error) {
    res.status(400).send({
      msg: "cannot be added",
      error,
    });
  }
};

/**
 * description: edit voyage
 * path: http://localhost:6060/api/conducteur/voyage/edit/:_id
 * methode:PUT
 * data:req.body && req.params
 */
exports.editVoyage = async (req, res) => {
  try {
    const { _id } = req.params;
    const { ville_départ, ville_arrivée, date, prix, idc } = req.body;
    const result = await Voyage.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "Voyage updated", result });
  } catch (error) {
    res.status(400).send({
      msg: "cannot edit this Voyage",
      error,
    });
  }
};

/**
 * description: delete voyage
 * path: http://localhost:6060/api/conducteur/voyage/del/:_id
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
