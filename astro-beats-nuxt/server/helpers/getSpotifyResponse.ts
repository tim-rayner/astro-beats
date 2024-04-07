import axios from "axios";
import type { Song } from "./getOpenResponse";

export const convertSongsToSpotify = async (
  songs: Song[],
  authToken: string
) => {
  const updatedSongs = await Promise.all(
    songs.map(async (song) => {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        params: {
          q: `{${song.song}+${song.artist}`,
          type: "track",
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const { items } = response.data.tracks;

      if (items.length > 0) {
        //pick song which matches the search query the closest
        const selectedSong = items[0];

        song.img = selectedSong.album.images[0].url;
        song.externalUrl = selectedSong.external_urls.spotify;
        song.previewUrl = selectedSong.preview_url;
      }

      return song;
    })
  );

  return updatedSongs;
};
