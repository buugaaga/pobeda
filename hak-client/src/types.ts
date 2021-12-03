export type Coordinates = number[]

export type OilSpill = {
  id: string;
  cts: number[];
  d: number
  desc?: string
  date?: string
}

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

// export type OilSpillAlert = {
//   id: string
//   cts: Coordinates;
//   dsc: string;
//   date: string;
// }