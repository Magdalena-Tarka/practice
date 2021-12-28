import { IStoredCountries } from "./interfaces";
import { handleData } from "./handleData/handleData";
//localStorage.clear();

const storedCountries: IStoredCountries = JSON.parse(
  localStorage.getItem("storedCountries") || "{}"
);

handleData(storedCountries);

