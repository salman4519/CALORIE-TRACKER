const express = require("express")
const userRoute = express()

const userController = require("../controllers/userController")

userRoute.get("/",userController.loadDash)

module.exports = userRoute