import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TutorialColorBox = ({ name, hex }: { name: string; hex: string }) => {
  return (
    <View style={[styles.container, { backgroundColor: hex }]}>
      <Text style={{ marginRight: 5 }}>{name}</Text>
      <Text>{hex}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default TutorialColorBox;
