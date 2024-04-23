import React, { useCallback, useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import { starSignApi } from '../../api/starSign';
import { useLocalSearchParams } from 'expo-router';

const StarSignScreen = () => {
  const [horoscope, setHoroscope] = useState();

  const { starSign } = useLocalSearchParams();

  const fetchHoroscope = useCallback(async () => {
    await starSignApi
      .post(starSign, 'spotifyClientAccessToken')
      .then((response) => {
        console.warn('response', response);
        setHoroscope(response);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }, []);

  useEffect(() => {
    fetchHoroscope();
  }, [starSign]);

  return (
    <SafeAreaView>
      <Text>Star Sign Screen for {starSign}</Text>
    </SafeAreaView>
  );
};

export default StarSignScreen;
