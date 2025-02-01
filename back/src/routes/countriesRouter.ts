import express from "express";
import { fetchCountries } from "../controllers/countriesController";

const router = express.Router();

router.get("/countries", fetchCountries);

export default router;
