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

  const [error, setError] = useState<boolean>(false);
  const [loadingHoroScope, setLoadingHoroscope] = useState<boolean>(false);

  const { starSign } = useLocalSearchParams();

  const fetchAuthToken = useCallback(async () => {
    const token = await secureAuthStore.getTokenAsync();
    if (token) {
      fetchHoroscope(token);
    }
  }, []);

  const fetchHoroscope = useCallback(async (token) => {
    setLoadingHoroscope(true);
    await starSignApi
      // @ts-ignore
      .post(starSign, token)
      .then((response) => {
        setHoroscope({
          horoscope: response.horoscopeReading,
          date: response.date,
          songs: response.songs,
        });
      })
      .catch((error) => {
        console.warn('error', error);
        setError(true);
      });
    setLoadingHoroscope(false);
  }, []);

  useEffect(() => {
    fetchAuthToken();
  }, []);

  return (
    <SafeAreaView>
      <Text>Star Sign Screen for {starSign}</Text>
      {loadingHoroScope && <LoadingHoroscope />}
      {horoscope && <Horoscope horoscope={horoscope} />}
      {error && <Error />}
    </SafeAreaView>
  );
};

export default StarSignScreen;