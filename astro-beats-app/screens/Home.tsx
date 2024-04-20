import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

//components
import ColorPreview from '../components/tutorial/ColorPreview';

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() =>
          navigation.navigate('ColorPalette', {
            colors: RAINBOW,
            title: 'Rainbow',
          })
        }
      >
        <ColorPreview colors={RAINBOW} title="Rainbow" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            colors: FRONTEND_MASTERS,
            title: 'Frontend Masters',
          })
        }
      >
        <ColorPreview colors={FRONTEND_MASTERS} title="Frontend Masters" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
