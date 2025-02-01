import fs from "fs";
import path from "path";

export const getCountries = (): Promise<any> => {
  const filePath = path.join(__dirname, "../../countries.json");

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return reject("Failed to read countries data");
      }

      try {
        const countries = JSON.parse(data);
        resolve(countries);
      } catch (parseErr) {
        reject("Failed to parse countries data");
      }
    });
  });
};
