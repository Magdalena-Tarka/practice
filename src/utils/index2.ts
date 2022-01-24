import { ICountry, ICurrency, IOrgToSort, ILanguageStatsShort } from "../types/interfaces";
import { SortDirection, SortOption } from "../types/enums";

interface IFunctionObject {
  resultArray: ICountry[],
  resultNumber: number,
  resultString: string,
  getByRegionalBlock: (x:string)=>IFunctionObject;
  getByIncludingCharacter: (x:SortOption, y:string)=>IFunctionObject;
  getSortedByKey: (x:string, y:SortDirection)=>IFunctionObject;
  getUniqueListBy: (x:keyof ICurrency)=>IFunctionObject;
  sumPopulation: (x:number)=>IFunctionObject;
  getChangedPopulationCountries: (x:ICountry[])=>IFunctionObject;
};

export const functionsObject:IFunctionObject = {
  resultArray: [],
  resultNumber: 0,
  resultString: '',

  getByRegionalBlock: function(regionalBlockName: string) {
    this.resultArray = this.resultArray.filter(country => country.regionalBlocs?.some(element => element.acronym === regionalBlockName));
    return this;
  },

  getByIncludingCharacter: function(option: SortOption, character: string) {
    const filterData = (country: ICountry) => country.name.toLowerCase().includes(character)
    this.resultArray = this.resultArray.filter(item => option === SortOption.excluding ? !filterData(item) : filterData(item));
    return this;
  },

  getSortedByKey: function(keyToSort: string, direction: SortDirection) {
    this.resultArray = this.resultArray.slice().sort((a: any, b: any) => {
      if (a[keyToSort] === b[keyToSort]) {
        return 0
      }
      if (direction === SortDirection.ascend) {
        return a[keyToSort] > b[keyToSort] ? 1 : -1
      }
      return a[keyToSort] > b[keyToSort] ? -1 : 1;
    });
    return this;
  },

  getUniqueListBy: function(keyToCompare: keyof ICurrency) {
    this.resultArray = [...new Map(this.resultArray.map((item: any) => [item[keyToCompare], item])).values()];
    return this;
  },

  sumPopulation: function(quantityToSum?: number) {
    const slicedData = quantityToSum ? this.resultArray.slice(0, quantityToSum) : this.resultArray;
    this.resultNumber = slicedData.reduce((prev, cur) => prev + cur.population, 0);
    return this;
  },

  getChangedPopulationCountries: function(arr2: ICountry[]) {
    const arr1 = this.resultArray;
    this.resultString = arr1
      .filter((country1) => !arr2.some((country2) => country1.population === country2.population))
      .map((item) => item.name)
      .join(", ");
    return this;
  }
};

/*export const compareAndPrintIfBigger = (number1: number, number2: number) => {
  if (number1 === number2) {
    return 'equal with';
  }
  return (number1 > number2) ? 'bigger than' : 'not bigger than';
};

export const getNameOfObjectByPosition = (arr: any, name: string, position: number = 1): string => {
  return arr[position - 1][name];
};

export const printChangedData = (changedData: string) => {
  if (!changedData.length) return console.log('None of the countries has been changed.');
  return console.log(`Countries which population has changed: ${changedData}.`);
};*/
