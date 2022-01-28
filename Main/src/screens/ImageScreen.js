import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageDetail from './Components/ImageDetail';



const ImageScreen = props => {
  return (
    <View>
      <ImageDetail title="Testing1" ImageSource={require('../Images/assets/forest.jpg')} />
      <ImageDetail title="Testing2" ImageSource={require('../Images/assets/mountain.jpg')} />
      <ImageDetail title="Testing3" ImageSource={require('../Images/assets/beach.jpg')} />
      <ImageDetail title="Testing4" ImageSource={require('../Images/assets/forest.jpg')} />

    </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
