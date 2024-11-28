const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Calv")

const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.static('public'))
const userRoute = require("./routes/userRoute")
app.use('/',userRoute)

app.listen(3000, () => {
    console.log("Your Server is Working On Port 3000")
})
