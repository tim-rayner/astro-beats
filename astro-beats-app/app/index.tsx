import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

import { StarSign } from '../types/starsign-types';

//Constants
import { StarSigns as starSignsData } from '../constants/starsign-constants';
import { Link } from 'expo-router';
import base64 from 'base-64';
import axios from 'axios';
import * as secureAuthStore from '../services/auth/secure-store';

const clientId = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET;

const Home = () => {
  const [starSigns, setStarSigns] = useState<StarSign[]>([]);

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'client_credentials',
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + base64.encode(clientId + ':' + clientSecret),
    },
    json: true,
  };

  //on component mount
  useEffect(() => {
    getLocalStarSigns();
    getSpotifyAuthToken();
  }, []);

  const getLocalStarSigns = useCallback(async () => {
    setStarSigns(starSignsData);
  }, []);

  /**
   * @TODO extend this to safely store the token and refresh it when it expires
   */
  const getSpotifyAuthToken = useCallback(async () => {
    const token = await secureAuthStore.getTokenAsync();

    //delete token if it exists while we dont have expiry implemented
    if (token) {
      secureAuthStore.deleteTokenAsync();
    }

    //get token
    const resposne = await axios.post(
      authOptions.url,
      new URLSearchParams(authOptions.form).toString(),
      {
        headers: authOptions.headers,
      },
    );

    const accessToken = resposne.data.access_token;

    /**
     * @todo store the token in a secure way with expiry
     */
    const expiry = resposne.data.expires_in;

    //store the token
    secureAuthStore.setTokenAsync(accessToken);
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
