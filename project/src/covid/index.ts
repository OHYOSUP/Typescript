export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CountrySummaryInfo {
  TotalRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

interface Global {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  ID: string;
  Message: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];

export interface CovidRecoverd {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
}

export type CovidDeathResponse = CovidDeath[];

export interface CovidDeath {
  Country: string;
  Provinc: string;
  City: string;
  CityCod: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
}
