// src/apis/productAPI.js

export const starSignApi = {
  getHoroscope: async function (
    starSign: string,
    // spotifyClientAccessToken: any,
  ): Promise<any> {
    // console.log('api recieved spotify token: ', spotifyClientAccessToken);
    console.log('api recieved star sign: ', starSign);

    const response = await fetch(
      `https://astro-beats-api.vercel.app/api/horoscopes/V2/reading/${starSign}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   spotifyClientAccessToken: spotifyClientAccessToken,
        // }),
      },
    );

    if (!response.ok) {
      console.error('HTTP error', response.status);
      return new Error('HTTP error');
    }

    if (response.status === 404) {
      console.error('404 error', response.status);
      return new Error('404 error');
    }

    const data = await response.json();
    // console.warn('response', data);

    return data;
  },

  getSongs: async function (
    starSign: string,
    spotifyClientAccessToken: any,
    horoscopeReading: string,
  ): Promise<any> {
    console.log('api recieved spotify token: ', spotifyClientAccessToken);
    console.log('api recieved star sign: ', starSign);

    const response = await fetch(
      `https://astro-beats-api.vercel.app/api/horoscopes/V2/songs/${starSign}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          spotifyClientAccessToken: spotifyClientAccessToken,
          horoscopeReading: horoscopeReading,
        }),
      },
    );

    if (!response.ok) {
      console.error('HTTP error', response.status);
      return new Error('HTTP error');
    }

    if (response.status === 404) {
      console.error('404 error', response.status);
      return new Error('404 error');
    }

    const data = await response.json();
    // console.warn('response', data);

    return data;
  },
};
