const Conducteur=require("../model/Conducteur")
const jwt = require("jsonwebtoken");

const isAuth=async(req,res,next)=>{
  try {
    const token=req.header("Authorization");
    if (!token) {
        res.status(401).send({errors:[{msg:"not authorized"}]});
    }
        const decoded= jwt.verify(token,process.env.SECRET_KEY);
        const foundConducteur=await Conducteur.findOne({_id:decoded.id});
        if (!foundConducteur) {
        res.status(401).send({errors:[{msg:"not authorized"}]});
        }
        req.conducteur=foundConducteur;
        next();
  } catch (error) {
    res.status(401).send({errors:[{msg:"not authorized"}]});
  }
};
module.exports=isAuth;
