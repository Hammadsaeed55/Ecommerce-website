import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoute from "../backend/routes/authRoute.js"
import cors from 'cors'
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoutes)

let port = process.env.PORT || 6000;

app.listen(port,()=>{
    connectDB();
    console.log("Hello from server")
})