const express = require("express")
const usercontrol = require("../controllers/logincontroller")
const router = express.router()

router.post("/signup",usercontrol.SignupController)
router.post("/login",usercontrol.loginController)