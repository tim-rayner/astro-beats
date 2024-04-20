import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text>Color Palette</Text>
      </TouchableOpacity>

      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
