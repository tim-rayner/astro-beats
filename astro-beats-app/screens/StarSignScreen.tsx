import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  StarSign: { starSign: string };
};

type StarSignScreenRouteProp = RouteProp<RootStackParamList, 'StarSign'>;

type Props = {
  route: StarSignScreenRouteProp;
};
const StarSignScreen = ({ route }: Props) => {
  return (
    <SafeAreaView>
      <Text>Star Sign Screen for {route.params.starSign}</Text>
    </SafeAreaView>
  );
};

export default StarSignScreen;
