const Voyageur=require("../model/Voyageur")
const jwt = require("jsonwebtoken");

const isAuth=async(req,res,next)=>{
  try {
    const token=req.header("Authorization");
    if (!token) {
        res.status(401).send({errors:[{msg:"not authorized"}]});
    }
        const decoded= jwt.verify(token,process.env.SECRET_KEY);
        const foundVoyageur=await Voyageur.findOne({_id:decoded.id});
        if (!foundVoyageur) {
        res.status(401).send({errors:[{msg:"not authorized"}]});
        }
        req.voyageur=foundVoyageur;
        next();
  } catch (error) {
    res.status(401).send({errors:[{msg:"not authorized"}]});
  }
};
module.exports=isAuth;
