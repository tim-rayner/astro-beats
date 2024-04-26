import React, { useCallback, useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text } from 'react-native';

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
      <ScrollView>
        <Text>{JSON.stringify(horoscope)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const Error = () => {
  return (
    <SafeAreaView>
      <Text>
        Ooops something went wrong whilst fetching your Horoscope, please try
        again
      </Text>
    </SafeAreaView>
  );
};

const StarSignScreen = () => {
  const [horoscope, setHoroscope] = useState<any>();
  const [songs, setSongs] = useState<any>();

  const [spotifyToken, setSpotifyToken] = useState<any>();

  const [error, setError] = useState<boolean>(false);
  const [loadingHoroScope, setLoadingHoroscope] = useState<boolean>(false);
  const [loadingSongs, setLoadingSongs] = useState<boolean>(false);

  const { starSign } = useLocalSearchParams();

  //get token from secure store, then get horoscope, then get songs
  const fetchStarSignData = useCallback(async () => {
    try {
      const token = await fetchAuthToken();
      const horoscopeData = await fetchHoroscope();
      console.log('horoscopeData', horoscopeData);
      await fetchSongs(token, horoscopeData.horoscope);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchAuthToken = useCallback(async () => {
    const token = await secureAuthStore.getTokenAsync();
    if (token) {
      setSpotifyToken(token);
    }
    return token;
  }, []);

  const fetchHoroscope = useCallback(async () => {
    setLoadingHoroscope(true);
    const resp = await starSignApi
      // @ts-ignore
      .getHoroscope(starSign)
      .then((response) => {
        const horoscope = {
          horoscope: response.horoscopeReading,
          date: response.date,
        };

        setHoroscope(horoscope);
        return horoscope;
      })
      .catch((error) => {
        console.warn('error', error);
        setError(true);
      });
    setLoadingHoroscope(false);
    return resp;
  }, []);

  const fetchSongs = useCallback(async (token, reading) => {
    setLoadingSongs(true);
    await starSignApi
      // @ts-ignore
      .getSongs(starSign, token, reading)
      .then((response) => {
        console.log('response', response);
        setSongs(response);
      })
      .catch((error) => {
        console.warn('error', error);
        setError(true);
      });
    setLoadingSongs(false);
  }, []);

  useEffect(() => {
    fetchStarSignData();
  }, []);

  return (
    <SafeAreaView>
      <Text>Star Sign Screen for {starSign}</Text>
      {loadingHoroScope && <LoadingHoroscope />}
      {horoscope && <Horoscope horoscope={horoscope} />}
      {loadingSongs && <LoadingSongs />}
      {songs && <Text>{JSON.stringify(songs)}</Text>}
      {error && <Error />}
    </SafeAreaView>
  );
};

export default StarSignScreen;
