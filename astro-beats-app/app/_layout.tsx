import NavHeader from 'components/molecules/NavHeader';
import { Slot } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeLayout() {
  return (
    <>
      <NavHeader heading="LunaTunes" />
      <Slot />
    </>
  );
}
