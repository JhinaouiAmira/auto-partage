const Voyageur = require("../model/Voyageur");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Voyage = require("../model/Voyage");


//----------------------signup 

exports.signup = async (req, res) => {
  try {
    const { prenom,name, email, password,telephone,genre,idv } = req.body;
    const foundVoyageur = await Voyageur.findOne({ email });
    if (foundVoyageur) {
      res.status(400).send({ errors: [{ msg: "email should be unique" }] });
    }
    //hashage de mot de passe
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newVoyageur = new Voyageur({ ...req.body });
    newVoyageur.password = hashedPassword;
    await newVoyageur.save();
    //creation de token
    const token = jwt.sign({ id: newVoyageur._id }, process.env.SECRET_KEY, {
      expiresIn: "5h",
    });
    return res.status(200).send({
      msg: "Voyageur dkhal lel base de donnée",
      voyageur: newVoyageur,
      token,
    });
  } catch (error) {}
  res.status(400).send({ msg: "Voyageur ma dkhalech lel base de donnée" });
};

//---------------------------signin

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundVoyageur = await Voyageur.findOne({ email });
    if (!foundVoyageur) {
      return res.status(400).send({ msg: "baaaaaaaaaad credentiel email" });
    }
    //hash password
    const foundPassword = await bcrypt.compare(
      password,
      foundVoyageur.password
    );
    if (!foundPassword) {
      return res.status(400).send({ msg: "bad credentiel password" });
    }
    const token = jwt.sign({ id: foundVoyageur._id }, process.env.SECRET_KEY, {
      expiresIn: "5h",
    });
    return res.status(200).send({
      msg: "Voyageur : signin sucess",
      voyageur: foundVoyageur,
      token,
    });
  } catch (error) {
    return res.status(200).send({ msg: "login failed" });
  }
};

//-------------------Gérer profil voyageur


/**
 * description: get profil voyageur
 * path: http://localhost:6060/api/voyageur/:_id
 * methode:GET
 * data: req.params
 */
 exports.getVoyageurProfile = async (req, res) => {
  try {
    const { _id } = req.params;
    const profileToGet = await Voyageur.findOne({ _id });
    res.status(200).send({ msg: "get profile voyageur", profileToGet });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};


/**
 * description: edit profil
 * path: http://localhost:6060/api/updateProfil/:_id
 * methode:PUT
 * data:req.body && req.params
 */
exports.editProfil = async (req, res) => {
  try {
    const { _id } = req.params;
    const { prenom, name, email, password, telephone, genre } = req.body;
    const editProfil = await Voyageur.updateOne(
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

/**
 * description: delete profil
 * path: http://localhost:6060/api/voyageur/delete/:_id
 * methode:DELETE
 * data: req.params
 */
exports.deleteProfil = async (req, res) => {
  try {
    const { _id } = req.params;
    await Voyageur.deleteOne({ _id });
    res.status(200).send({ msg: "profile deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete this profile",
      error,
    });
  }
};



/**
 * description: add voyageur
 * path: http://localhost:6060/api/voyageur/add
 * methode:POST
 * data:req.body
 */
// exports.addVoyageur = async (req, res) => {
//   try {
//     const { prenom,name, email, password,telephone,genre,idv } = req.body;

//     const newVoyageur = new Voyageur({
  //     prenom,
//       name,
//       email,
//       password,
// telephone,
// genre,
// idv,
//     });
//     await newVoyageur.save();
//     res.status(200).send({
//       msg: "voyageur added succesfully...",
//       newVoyageur,
//     });
//   } catch (error) {
//     res.status(400).send({
//       msg: "cannot be added",
//       error,
//     });
//   }
// };

///-----------------partie voyaaaage

/**
 * description: get all voyages
 * path: http://localhost:6060/api/voyageur/voyage/all
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
 * path: http://localhost:6060/api/voyageur/voyage/:_id
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