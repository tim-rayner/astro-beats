import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import LottieAnimation from 'components/atoms/LottieAnimation';
import moonLoader from 'assets/lottie/moon-loader.json';

const LoadingHoroscope = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backdrop}></View>
      <View style={styles.content}>
        <Text style={styles.loadingText}>Loading Horoscope...</Text>
        <LottieAnimation source={moonLoader} styles={styles.lottie} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //TODO: make this full screen
  },

  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  },

  content: {
    position: 'relative',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lottie: {
    width: 300,
    height: 300,
  },

  loadingText: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
});

export default LoadingHoroscope;
