import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CatagorieScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Catagorie Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default CatagorieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
