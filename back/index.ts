import express from "express";
import countriesRouter from "./routes/countriesRouter";

const app = express();
const PORT = 3000;

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Vue dev server
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api", countriesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
function cors(arg0: {
  origin: string; // Vue dev server
  methods: string[];
  allowedHeaders: string[];
}): any {
  throw new Error("Function not implemented.");
}
