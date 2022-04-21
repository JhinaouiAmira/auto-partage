const { validationResult, check } = require("express-validator");

//creation of registerValidation 
exports.registerValidation = () => [
  check("name", "name is required").notEmpty(),
  check("email", "email must be valid").isEmail(),
  check("password", "password should be at leat 6 carcters")
    .isLength({
      min: 6,
    })
    .notEmpty(),
];
//creation loginValidation
exports.loginValidation = () => [
  check("email", "email must be valid").isEmail(),
  check("password", "password should be at leat 6 carecters")
    .isLength({
      min: 6,
    })
    .notEmpty(),
];

//handling error

exports.validation = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(200).json({ errors: error.array() });
  }
  next();
};
