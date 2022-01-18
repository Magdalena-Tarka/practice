import { IStoredCountries, ICountry } from "../types/interfaces";
import { getChangedPopulationCountries } from "../utils/index";
import { getCountriesData } from "../api";

export const uploadDataInLocalStorage = async (countries?: ICountry[]) => {

  const result: IStoredCountries = {
    data: await getCountriesData(),
    timestamp: new Date().getTime()
  };

  if(countries) {
    const uploadedCountries: ICountry[] = await getCountriesData();
    const changedPopulationCountries: string = getChangedPopulationCountries(countries, uploadedCountries);
    result.data = uploadedCountries;

    if (!changedPopulationCountries.length) {
      console.log("None of the countries has been changed.");
    } else {
      console.log(
        `Countries which population has changed: ${changedPopulationCountries}.`
      );
    }
  }

  localStorage.setItem("storedCountries", JSON.stringify(result));
};
