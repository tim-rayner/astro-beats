import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import { StarSign } from '../types/starsign-types';

//Constants
import { StarSigns as starSignsData } from '../constants/starsign-constants';
import { Link } from 'expo-router';

const Home = () => {
  const [starSigns, setStarSigns] = useState<StarSign[]>([]);

  useEffect(() => {
    getLocalStarSigns();
  }, []);

  const getLocalStarSigns = useCallback(async () => {
    setStarSigns(starSignsData);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={starSigns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: '/starSign/[starSign]',
              params: { starSign: item.name },
            }}
          >
            <View>
              <Image source={item.img} style={styles.image} />
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    marginBottom: 10,
    alignItems: 'center',
  },

  starSignItem: {
    flex: 1,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
  },
});

export default Home;
