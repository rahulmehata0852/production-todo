const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config({ path: "./.env" })
const path = require('path')

mongoose.connect(process.env.MONGO_URL)


const app = express()


app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "dist")))

app.use("/api/admin", require("./routes/todoRoute"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

mongoose.connection.once("open", () => {
    console.log("Mongoose connected");
    app.listen(process.env.PORT, console.log("Server running"))
})


