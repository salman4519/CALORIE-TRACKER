const express = require("express")
const userRoute = express()

const userController = require("../controllers/userController")

userRoute.get("/",userController.loadDash)
userRoute.get("/foodlog",userController.loadFoodLog)
userRoute.get("/profile",userController.loadProfile)



module.exports = userRoute