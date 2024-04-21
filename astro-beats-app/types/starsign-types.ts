import type { Song } from './song-types';

export type StarSign = {
  id: number;
  img: string;
  name: string;
  description: string;
};

export type HoroscopeResponse = {
  date: string;
  horoscopeReading: string;
  name: string;
  songs: Song[];
};
