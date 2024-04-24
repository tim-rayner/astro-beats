import React, { useCallback, useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import { starSignApi } from '../../api/starSign';
import { useLocalSearchParams } from 'expo-router';
import * as secureAuthStore from '../../services/auth/secure-store';

const LoadingHoroscope = () => {
  return (
    <SafeAreaView>
      <Text>Loading horoscope...</Text>
    </SafeAreaView>
  );
};

const LoadingSongs = () => {
  return (
    <SafeAreaView>
      <Text>Loading songs...</Text>
    </SafeAreaView>
  );
};

const Horoscope = ({ horoscope }: any) => {
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(horoscope)}</Text>
    </SafeAreaView>
  );
};

const StarSignScreen = () => {
  const [horoscope, setHoroscope] = useState<any>();
  const [spotifyClientAccessToken, setSpotifyClientAccessToken] =
    useState<String>();

  const [loadingHoroScope, setLoadingHoroscope] = useState<boolean>(false);

  const { starSign } = useLocalSearchParams();

  const fetchAuthToken = useCallback(async () => {
    const token = await secureAuthStore.getTokenAsync();
    return token;
  }, []);

  const fetchHoroscope = useCallback(async () => {
    setLoadingHoroscope(true);
    await starSignApi
      // @ts-ignore
      .post(starSign, spotifyClientAccessToken)
      .then((response) => {
        setHoroscope({
          horoscope: response.horoscopeReading,
          date: response.date,
          songs: response.songs,
        });
        console.log('horoscope', horoscope);
      })
      .catch((error) => {
        console.warn('error', error);
      });
    setLoadingHoroscope(false);
  }, []);

  useEffect(() => {
    setLoadingHoroscope(true);
    fetchAuthToken().then((token) => {
      if (token) setSpotifyClientAccessToken(token);
    });

    if (spotifyClientAccessToken && starSign) fetchHoroscope();
  }, [starSign]);

  return (
    <SafeAreaView>
      <Text>Star Sign Screen for {starSign}</Text>
      {loadingHoroScope && <LoadingHoroscope />}
      {horoscope && <Horoscope horoscope={horoscope} />}
    </SafeAreaView>
  );
};

export default StarSignScreen;
