import axios from "axios";
import express, { Request, Response } from "express";
import { getOpenResponse } from "../../helpers/getOpenResponse";
import { convertSongsToSpotify } from "../../helpers/getSpotifyResponse";

const router = express.Router();

router.post("/reading/:starsign", async (req: Request, res: Response) => {
  const sign = req.params.starsign;

  //handle if sign is undefined/null
  const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=today`;

  try {
    console.log("(V2) - FETCHING HOROSCOPE FOR: ", sign);
    const { data: horoscope } = await axios.get(url);

    //handle if returned horoscope is undefined/null
    if (!horoscope) return res.sendStatus(404);

    const Horoscope = {
      date: horoscope.data.date,
      horoscopeReading: horoscope.data.horoscope_data,
      name:
        sign![0].toUpperCase() +
        sign!.slice(
          1
        ) /**@todo validate and sanitise this before request is made */,
    };
    return res.send(Horoscope);
  } catch (err) {
    return res.sendStatus(500);
  }
});

/**
 * @param {string} starsign - The starsign to get the horoscope for
 * @param {string} spotifyClientAccessToken - The Spotify access token to use for the request
 * @param {string} horoscopeReading - The horoscope reading to get songs for
 */
router.post("/songs/:starsign", async (req: Request, res: Response) => {
  const sign = req.params.starsign;
  const spotifyClientAccessToken = req.body.spotifyClientAccessToken;
  const horoscopeReading = req.body.horoscopeReading;

  //handle if token or sign are undefined/null
  if (!spotifyClientAccessToken || !sign || sign === null || !horoscopeReading)
    return res.sendStatus(400);

  try {
    const rawSongList = await getOpenResponse(sign!, horoscopeReading);

    const withSpotifyData = await convertSongsToSpotify(
      // @ts-ignore
      rawSongList,
      spotifyClientAccessToken!
    );

    const horoscopeTrackData = withSpotifyData;

    return res.send(horoscopeTrackData);
  } catch (err) {
    return res.sendStatus(500);
  }
});

export default router;
