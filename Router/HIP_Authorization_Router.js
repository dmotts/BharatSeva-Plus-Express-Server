const express = require("express");
// const { route } = require("express/lib/application");
const { Register, Login } = require("../Controllers/HIP_Authorization");

const router = express.Router();


router.post('/register', Register);
router.post('/login', Login)


module.exports = router;