import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import notesRoute from "./routes/notesRoute.js";
import errorMiddelware from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("<H1>Welcome to Speer Assesment</H1>");
});

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoute);

app.get("*", (req, res) => {
    res.send("404 Page not found");
});

app.use(errorMiddelware);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
