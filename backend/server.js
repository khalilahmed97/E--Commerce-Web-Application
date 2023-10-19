import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import productRoute from "./routes/productRoute.js"
import cartRoute from "./routes/cartRoute.js"
import connection from "./config/connectionToDB.js"

const app = express();

app.use(express.json())
dotenv.config()
connection();

app.use("/cart", cartRoute)
app.use("/product", productRoute)
app.listen(process.env.PORT, (req, res) =>{
    console.log(`SERVER IS RUNNING AT LOCALHOST ${process.env.PORT}`)
})