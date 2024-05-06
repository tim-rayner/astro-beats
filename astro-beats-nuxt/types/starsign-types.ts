import type { Song } from "~/types/song-types";

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
};

export type SongResponse = {
  songs: Song[];
};
