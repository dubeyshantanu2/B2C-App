import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ListScreen = () => {
    return (
      <View style={styles.container}>
        <Text>List Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
