import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import consumerRoute from "./routes/consumerRoutes.js";
import dealerRoute from "./routes/dealerRoutes.js";
import userRoute from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";



dotenv.config({path: ".env"});

const app = express();
const PORT = process.env.PORT || 5002;


// middleware 
app.use(cors({
    origin: ["http://localhost:5173"]
}));
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(express.urlencoded({extended: true}));


// app.use(rateLimiter);

// our simple custom middleware

// app.use((req, res, next) => {
//     console.log(`Welcome to Custom Middle Function.`);
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

// root app
app.get("/", (req, res) => {
    res.status(200).json({message : "Post Created Successfully"});
});

app.use("/api/consumer", consumerRoute);
app.use("/api/dealer", dealerRoute);
app.use("/api/user", userRoute);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server started on URL : http://localhost:${PORT}/`);
});
})
.catch((error) => {
    console.log(`MongoDB Connected Successfully !`, error);
})