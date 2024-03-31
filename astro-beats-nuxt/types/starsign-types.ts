import type { Song } from "~/helpers/getOpenResponse";

export type StarSign = {
  id: number;
  img?: string;
  name: string;
  description: string;
};

export type HoroscopeResponse = {
  date: string;
  horoscopeReading: string;
  name: string;
  songs: Song[];
};
