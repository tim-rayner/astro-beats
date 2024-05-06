import React from 'react';

import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

const LottieAnimation = ({ source, styles }: { source: any; styles?: any }) => {
  return (
    <View>
      <LottieView source={source} autoPlay loop style={[styles]} />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
});

export default LottieAnimation;
