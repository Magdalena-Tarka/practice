import { IStoredCountries } from "./types/interfaces";
import { downloadOrUpdateData } from "./downloadOrUpdateData";
import { printInfoWithStats } from "./printInfoWithStats";

const app = () => {

  // Init data - get the data from Local Storage, update the data in Local Storage if 7 days has been passed since the last update.

  const storedCountries: IStoredCountries = JSON.parse(
    localStorage.getItem("storedCountries") || "{}"
  );

  downloadOrUpdateData(storedCountries);

  // Prit statistics.

  printInfoWithStats(storedCountries);
};

app();
