import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();

// Allow requests from your frontend (localhost:5173 during local development and the deployed frontend URL)
const allowedOrigins = [
    'http://localhost:5173',  // For local development
    'https://book-nest.vercel.app',// For the deployed frontend (replace with actual URL)
    'http://192.168.0.105:3000'
];

app.use(cors({
    origin: allowedOrigins,  // Allow the specific origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // You can add more methods if needed
    allowedHeaders: ['Content-Type', 'Authorization'],  // Adjust headers if needed
}));

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
