import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

const Heading = ({
  size,
  children,
}: {
  size: 'h1' | 'h2' | 'h3' | 'h4';
  children: any;
}) => {
  return (
    <View>
      <Text
        h1={size === 'h1'}
        h2={size === 'h2'}
        h3={size === 'h3'}
        h4={size === 'h4'}
        style={{ textAlign: 'center', margin: 'auto' }}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Heading;
