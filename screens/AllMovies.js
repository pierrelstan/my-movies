import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function AllMoVies() {
  const [state, setState] = React.useState({
    typeOfMovies: 'all',
  });

  const handlePicker = (itemValue) => {
    setState({ typeOfMovies: itemValue });
  };
  console.log(state);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  picker: {
    width: 200,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  pickerItem: {
    color: 'red',
  },
});
