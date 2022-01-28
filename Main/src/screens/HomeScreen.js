import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = props => {
  return (
    <View style={{ paddingHorizontal: 40 }}>
      <Text>Getting started with React Native!</Text>
      <Button title='React Componet' onPress={() => props.navigation.navigate('ReactDemoVC')}></Button>
      <Button title='Go to Componet' onPress={() => props.navigation.navigate('ComponetVC')}></Button>
      <Button title='Go to List' onPress={() => props.navigation.navigate('ListScr')}></Button>
      <Button title='Go to ImageScreen' onPress={() => props.navigation.navigate('ImageScreenVC')}></Button>
      <Button title='Go to List' onPress={() => props.navigation.navigate('CurrentCounterVC')}></Button>
      <Button title='Goto color Screen' onPress={() => props.navigation.navigate('ColorScreenVC')}></Button>
      {/* <Button title='Pick color Screen' onPress={() => props.navigation.navigate('PickColorVC')}></Button> */}
      <Button title='Change Color' onPress={() => props.navigation.navigate('SqureScreenVC')}></Button>
      <Button title='Text Demo' onPress={() => props.navigation.navigate('TextScreenVC')}></Button>
      <Button title='Box Demo' onPress={() => props.navigation.navigate('BoxDemoVC')}></Button>
      <Button title='Box Demo1' onPress={() => props.navigation.navigate('BoxDemo1VC')}></Button>
      <Button title='GrideView Demo' onPress={() => props.navigation.navigate('GridViewVC')}></Button>

      <Button title='Slidre' onPress={() => props.navigation.navigate('SlidreVCC')}></Button>



      {/* <Button title='ScrollView' onPress={() => props.navigation.navigate('ScrollViewViewVC')}></Button> */}
    </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
