import cors from "cors";
import express from "express";
import { FRONT_URL, PORT } from "../fake.env";
import countriesRouter from "./routes/countriesRouter";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: FRONT_URL, // Vue dev server
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api", countriesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
