import { IStoredCountries } from "./types/interfaces";
import { handleData } from "./handleData/handleData";
import { printInfoWithStats } from "./printInfoWithStats/printInfoWithStats";

const app = () => {

  // Init data - get the data from Local Storage, update the data in Local Storage if 7 days has been passed since the last update.

  const storedCountries: IStoredCountries = JSON.parse(
    localStorage.getItem("storedCountries") || "{}"
  );

  handleData(storedCountries);

  // Prit statistics.

  printInfoWithStats(storedCountries);
};

app();
