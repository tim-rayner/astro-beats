import React, { useCallback, useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { starSignApi } from '../api/starSign';

type RootStackParamList = {
  StarSign: { starSign: string };
};

type StarSignScreenRouteProp = RouteProp<RootStackParamList, 'StarSign'>;

type Props = {
  route: StarSignScreenRouteProp;
};

const StarSignScreen = ({ route }: Props) => {
  const [horoscope, setHoroscope] = useState();

  const fetchHoroscope = useCallback(async () => {
    await starSignApi
      .post(route.params.starSign, 'spotifyClientAccessToken')
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
  }, [route.params.starSign]);

  return (
    <SafeAreaView>
      <Text>Star Sign Screen for {route.params.starSign}</Text>
    </SafeAreaView>
  );
};

export default StarSignScreen;
