import React from 'react';

import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ColorPreview = ({ colors, title }: { colors: any[]; title: string }) => {
  return (
    <View>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item.hexCode,
              padding: 10,
              marginHorizontal: 5,
              height: 50,
              width: 50,
            }}
          ></View>
        )}
        ListHeaderComponent={
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        }
        numColumns={5}
      />
    </View>
  );
};

export default ColorPreview;
