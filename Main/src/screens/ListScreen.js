import React from "react";
import { View,Text,FlatList,StyleSheet } from "react-native";


const ListScreen = () =>
{
   
    const Friend = [
        {name:'Friend 1' , age: 20},
        {name:'Friend 2' , age: 30},
        {name:'Friend 3' , age: 40},
        {name:'Friend 4' , age: 50},
        {name:'Friend 5' , age: 60},
        {name:'Friend 6' , age: 70},
        {name:'Friend 7' , age: 80},
        {name:'Friend 8' , age: 90},
        {name:'Friend 9' , age: 10},
        {name:'Friend 10', age: 20}
    ]
    return (<FlatList 
        
        keyExtractor={Friend => Friend.name}
        data = {Friend} 
        renderItem = {({item}) => {
            return <Text style={Styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}/>
        );
};
const Styles = StyleSheet.create(
    {
        textStyle:
        {
            marginVertical:50
        }
    }
)
export default ListScreen