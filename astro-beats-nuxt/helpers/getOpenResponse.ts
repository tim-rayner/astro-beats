import axios from "axios";

import OpenAI from "openai";

/**
 * @todo move this to a .env file
 */
const openai = new OpenAI({
  apiKey: "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",
});

export interface Song {
  song: string;
  artist: string;
  reason: string;
  img?: string;
  externalUrl?: string;
  previewUrl?: string;
}

function extractSongs(jsonString: string): Song[] {
  const jsonArray = JSON.parse(jsonString) as {
    song: string;
    reason: string;
    artist: string;
  }[];
  return jsonArray.map((item) => ({
    song: item.song.trim(),
    artist: item.artist.trim(),
    reason: item.reason.trim(),
  }));
}

export const getOpenResponse = async (sign: string, reading: string) => {
  //submit the reading to the openai api

  const promp = `The following is a horoscope reading for the star sign Aries. Please list me some songs from spotify which this reading can find some kind of relation within, striking resemblence, etc. here is the reading: ${reading}`;

  /**
   * @todo implement a catch which watches for when openai reaches its theshhold which can then be relayed
   * appropriately to the user.
   */
  const response = await openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You will be provided with a star sign, and a horoscope reading. Your task is to generate songs from spotify which this reading can find some kind of relation within, striking resemblence, etc.",
        },
        {
          role: "user",
          content: `Star sign: ${sign}\n  horoscope Reading: ${reading}`,
        },
        {
          role: "assistant",
          content:
            "Please list me some songs from spotify which this reading can find some kind of relation within, striking resemblence, etc. These songs should be related to the reading in some way. Pick from both older and newer songs and bring in the genres indie rock, rap, hiphop, and pop when possible. return the songs in a JSON array format with a field explaining why this song was chosen. there should be between 5-6 songs in the list. please return a raw json response, no need to format it. The JSON sould use the following format: [{song: 'song name', reason: 'reason for choosing this song', artist: 'artist name'}]. include in the explanation how the selected song resonates with the reading given. answers should be around 2 lines long",
        },
      ],
      temperature: 0.8,
      max_tokens: 356,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => response.choices[0].message.content);

  //DUMMY RESPONSE TO SAVE API CALLS WHILE TESTING
  // const response =
  //   '[{"song": "Brave", "reason": "Encouraging Cancer to be more expressive about their feelings and not be afraid to speak their mind.", "artist": "Sara Bareilles"}, {"song": "Emotions", "reason": "Emphasizing the importance of incorporating instincts and emotions into reactions, rather than relying solely on the mind.", "artist": "Mariah Carey"}, {"song": "Listen to Your Heart", "reason": "Suggesting Cancer should listen to their heart and trust their emotions in unexpected situations.", "artist": "Roxette"}, {"song": "Thinking Out Loud", "reason": "Encouraging Cancer to be open about their feelings and not rely solely on their brain for answers.", "artist": "Ed Sheeran"}, {"song": "Unwritten", "reason": "Inspiring Cancer to embrace the uncertainty of unexpected situations and trust their instincts and emotions.", "artist": "Natasha Bedingfield"}]';

  const songList = extractSongs(response!);

  return songList;
};
