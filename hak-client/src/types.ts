export type Coordinates = number[]

export type OilSpill = {
  cts: number[];
  d: number
  desc?: string
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

export type OilSpillAlert = {
  cts: Coordinates;
  dsc: string;
  date: string;
}