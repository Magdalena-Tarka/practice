import axios from "axios";
import { ICountry } from "./interfaces";
import { url } from "./config";

export const getCountriesData = async (): Promise<ICountry[]> => {
  const response = await axios(url);
  return response.data;
};
