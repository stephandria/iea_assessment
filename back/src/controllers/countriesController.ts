import { Request, Response } from "express";
import { getCountries } from "../services/countriesService";

export const fetchCountries = async (_req: Request, res: Response) => {
  try {
    const countries = await getCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
