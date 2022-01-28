
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";




const FlatListDemo = (props) => {
    return (
        <View>
            <Text>React Native Demo </Text>
            <Button title='simple FlatList' onPress={() => props.navigation.navigate('FlatListSingleVC')}></Button>
            <Button title='Selected FlatList' onPress={() => props.navigation.navigate('FlatListSelectedVC')}></Button>

        </View>
    );
};

export default FlatListDemo;
