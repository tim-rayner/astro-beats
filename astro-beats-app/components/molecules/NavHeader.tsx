import { Button } from '@rneui/themed';
import Heading from 'components/atoms/Heading';
import React from 'react';

import { View, StyleSheet } from 'react-native';

const NavHeader = ({ heading }: { heading: string }) => {
  return (
    <View style={[styles.navbar]}>
      {/* TODO: create back button here */}
      {/* <Button title="Back" /> */}
      <Heading size="h1">{heading}</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 50,
  },
});

export default NavHeader;
