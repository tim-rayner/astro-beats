import axios from "axios";
import express, { Request, Response } from "express";
import { getOpenResponse } from "../../helpers/getOpenResponse";
import { convertSongsToSpotify } from "../../helpers/getSpotifyResponse";

const router = express.Router();

router.post("/:starsign", async (req: Request, res: Response) => {
  const spotifyClientAccessToken = req.body.spotifyClientAccessToken;
  const sign = req.params.starsign;
  console.log(req.body);
  console.log({ spotifyClientAccessToken, sign });
  //handle if token or sign are undefined/null
  if (!spotifyClientAccessToken || !sign) return res.sendStatus(400);

  const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=today`;

  try {
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

    const rawSongList = await getOpenResponse(
      sign!,
      Horoscope.horoscopeReading
    );

    const horoscopeWithTrackData = {
      ...Horoscope,
      songs: rawSongList,
    };

    console.log({ rawSongList });
    const withSpotifyData = await convertSongsToSpotify(
      // @ts-ignore
      rawSongList,
      spotifyClientAccessToken!
    );

    horoscopeWithTrackData.songs = withSpotifyData;

    return res.send(horoscopeWithTrackData);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

export default router;
