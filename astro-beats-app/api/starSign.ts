// src/apis/productAPI.js

export const starSignApi = {
  post: async function (
    starSign: string,
    spotifyClientAccessToken: string,
  ): Promise<any> {
    console.log(
      'starSign',
      starSign,
      'spotifyClientAccessToken',
      spotifyClientAccessToken,
    );

    const response = await fetch(`http://localhost:3001/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   spotifyClientAccessToken: spotifyClientAccessToken,
      // }),
    });

    if (!response.ok) {
      console.error('HTTP error', response.status);
      throw new Error('HTTP error');
    }

    const data = await response.json();
    console.warn('response', data);

    return data;
  },
};
