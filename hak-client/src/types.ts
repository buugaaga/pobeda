export type Coordinates = number[]

export type OilSpill = {
  area: number;
  category: string
  id: number;
  lat: number
  location: string;
  lon: number
  map: string // url image
  reg_date: string // date
}
// export type OilSpill = {
//   id: string;
//   cts: number[];
//   d: number
//   desc?: string
//   date?: string
// }

export type MapsData = {
  center: Coordinates;
  drons: {
    cts: Coordinates;
    dsc: string;
  }[];
  base: {
    cts: Coordinates;
    dsc: string;
  }[];
}

export type OilSpillAlert = {
  id: string;
  cts: number[];
  d: number
  desc?: string
  date?: string
}