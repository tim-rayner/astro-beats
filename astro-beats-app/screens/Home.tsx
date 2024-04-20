import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';

//components
import ColorPreview from '../components/tutorial/ColorPreview';

const Home = ({ navigation }: { navigation: any }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchColorPalettes = async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  };

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item: any) => item.paletteName}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ColorPalette', {
                colors: item.colors,
                title: item.paletteName,
              })
            }
          >
            <ColorPreview
              colors={item.colors.slice(0, 5)}
              title={item.paletteName}
            />
          </TouchableOpacity>
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default Home;
