import express from "express";
import countriesRouter from "./routes/countriesRouter";

const app = express();
const PORT = 3000;

app.use("/api", countriesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
