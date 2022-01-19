import { IStoredCountries, ICountry } from "../types/interfaces";
import { getChangedPopulationCountries, printChangedData } from "../utils";
import { getCountriesData } from "../api";

export const saveAndCheckDataInLS = async (countriesDataInLS?: ICountry[]) => {
  const saveDataInLS = (arg: IStoredCountries) => localStorage.setItem("storedCountries", JSON.stringify(arg));

  if(countriesDataInLS) {
    const updatedCountries: ICountry[] = await getCountriesData();
    const changedPopulationCountries: string = getChangedPopulationCountries(countriesDataInLS, updatedCountries);
    const result: IStoredCountries = {
      data: updatedCountries,
      timestamp: new Date().getTime()
    };

    printChangedData(changedPopulationCountries);
    saveDataInLS(result);

  } else {
    const result: IStoredCountries = {
      data: await getCountriesData(),
      timestamp: new Date().getTime()
    };

    saveDataInLS(result);
  }
};
