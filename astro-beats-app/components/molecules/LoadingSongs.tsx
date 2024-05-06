import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import LottieAnimation from 'components/atoms/LottieAnimation';
import moonLoader from 'assets/lottie/moon-loader.json';

const LoadingSongs = () => {
  return (
    <View>
      <Text>Loading Songs...</Text>
      <LottieAnimation source={moonLoader} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoadingSongs;
