
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./database/dbconn.js";
import ProductRouter from './routes/ProductRoutes.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());


app.use("/", ProductRouter);

app.listen(4000, () => {
    connectDB();
    console.log("App is listen of the port 4000");
})