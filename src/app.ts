import dotenv from "dotenv";
import express from "express";
import router from "./router";
import dbConnect from "./config/db";
dotenv.config();
const app = express();


app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

// Database Connection
dbConnect();

app.use("/", router);

app.listen(process.env.PORT);

export default app;
