import * as SecureStore from 'expo-secure-store';

/**
 * Less secure version for web only
 * Currently just for Cypress
 */

const TOKEN_KEY = 'token';

export async function getTokenAsync() {
  let token = null;
  try {
    token = await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (e) {
    console.log('Session token error:', e);
  }
  return token;
}

export function setTokenAsync(token: string) {
  return SecureStore.setItemAsync(TOKEN_KEY, token, {
    keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY,
  });
}

export function deleteTokenAsync() {
  return SecureStore.deleteItemAsync(TOKEN_KEY);
}
