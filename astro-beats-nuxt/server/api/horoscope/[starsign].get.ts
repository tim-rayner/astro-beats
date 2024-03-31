import axios from "axios";
import { getOpenResponse } from "~/helpers/getOpenResponse";
import { convertSongsToSpotify } from "~/helpers/getSpotifyResponse";
import { HoroscopeResponse } from "~/types/starsign-types";

export default defineEventHandler(
  async (event): Promise<HoroscopeResponse | any> => {
    // Grab the parameter from the route
    const sign = getRouterParam(event, "starsign");
    const { spotifyClientAccessToken } = parseCookies(event);

    const today = new Date();

    //convert date to the following format: YYYY-MM-DD
    const formattedDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;

    const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${formattedDate}`;

    const { data: horoscope } = await axios.get(url);

    const returnedHoroscope = {
      date: horoscope.data.date,
      horoscopeReading: horoscope.data.horoscope_data,
      name: sign! /**@todo validate and sanitise this before request is made */,
    };

    const rawSongList = await getOpenResponse(
      sign!,
      returnedHoroscope.horoscopeReading
    );

    const horoscopeWithSongData = {
      ...returnedHoroscope,
      songs: rawSongList,
    };

    const withSpotifyData = await convertSongsToSpotify(
      rawSongList,
      spotifyClientAccessToken!
    );

    horoscopeWithSongData.songs = withSpotifyData;
    return horoscopeWithSongData;
  }
);
