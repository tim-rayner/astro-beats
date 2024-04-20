import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TutorialColorBox from '../components/tutorial/TutorialColorBox';

const ColorPalette = ({ route }) => {
  const { colors, title } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item: any) => item.hexCode}
        renderItem={({ item }) => (
          <TutorialColorBox name={item.name} hex={item.hexCode} />
        )}
        ListEmptyComponent={<Text>No items to display</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
});

export default ColorPalette;
