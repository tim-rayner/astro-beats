import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavigationProp } from '@react-navigation/native';
import { StarSign } from '../types/starsign-types';

//Constants
import { StarSigns as starSignsData } from '../constants/starsign-constants';

type Props = {
  navigation: NavigationProp<any>;
};

const Home = ({ navigation }: Props) => {
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
          <TouchableOpacity
            style={styles.starSignItem}
            onPress={() =>
              navigation.navigate('StarSign', {
                starSign: item.name,
              })
            }
          >
            <Image source={item.img} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',

    flexDirection: 'row',
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
