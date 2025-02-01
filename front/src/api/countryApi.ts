// src/api.ts
import axios from 'axios';
import { API_URL } from '../../fake.env';

export const fetchCountries = async (): Promise<
  string[]
> => {
  try {
    const response = await axios.get<string[]>(
      `${API_URL}/countries`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
