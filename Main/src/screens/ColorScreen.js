import React,{useState} from "react";
import { Text,StyleSheet,Button, View, FlatList } from "react-native";



const ColorScreen = () =>
{
    const [colors,setColor] = useState([])
    console.log(colors)
    return (<View>
        <Button title="Add color" onPress={() =>
           setColor([...colors,rendomRGB()])
        }></Button>
        <FlatList 
        horizontal
        keyExtractor={(item)=> item}
        data={colors} 
        renderItem={
             ({item}) => 
             {
                 return <View style = {
                    {
                        height:100,
                        width:100,
                        backgroundColor:item
                    }
                } 
                />
             }
        } />
        <FlatList 
        
        keyExtractor={(item)=> item}
        data={colors} 
        renderItem={
             ({item}) => 
             {
                 return <View style = {
                    {
                        height:100,
                        width:100,
                        backgroundColor:item
                    }
                } 
                />
             }
        } />
        
        </View>
        );
}
const styles = StyleSheet.create()
const rendomRGB = () =>
{
    const Red = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);

    return `rgb(${Red},${Green},${Blue})`
}
export default ColorScreen;
