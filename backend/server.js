import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



// app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());


//connecting DB
connectDB();

//api endpoint
app.use('/api/food',foodRouter)



app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});

