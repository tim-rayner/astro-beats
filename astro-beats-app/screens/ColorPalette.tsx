import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import TutorialColorBox from '../components/tutorial/TutorialColorBox';

const colors = [
  {
    name: 'Blue',
    hex: '#add8e6',
  },
  {
    name: 'Cyan',
    hex: '#00FFFF',
  },
  {
    name: 'Magenta',
    hex: '#FF00FF',
  },
  {
    name: 'Orange',
    hex: '#FFA500',
  },
];

const DRINKS = [
  { title: 'Acceptable', data: ['Blue', 'Guiness', 'Wine'] },
  { title: 'Unacceptable', data: ['Budweiser', 'Red Drinks?', 'Water'] },
];

const ColorPalette = () => {
  return (
    <View>
      <Text style={styles.header}>
        Here are some boxes of different colours
      </Text>

      {/* {colors.map((color) => {
          return (
            <TutorialColorBox
              key={color.name}
              name={color.name}
              hex={color.hex}
            />
          );
        })} */}

      <FlatList
        data={colors}
        keyExtractor={(item: any) => item.hex}
        renderItem={({ item }) => (
          <TutorialColorBox name={item.name} hex={item.hex} />
        )}
        ListEmptyComponent={<Text>No items to display</Text>}
        // numColumns={1}
        // onEndReached={() => console.warn('End reached')}
      />

      <SectionList
        sections={DRINKS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
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
