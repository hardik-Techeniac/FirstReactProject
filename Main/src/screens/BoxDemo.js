import React from "react";
import { StyleSheet,Text,View, } from "react-native";

const BoxDemo = () =>
{
    return <View>
        <View style={Styles.ViewStyle}>
        <Text style={Styles.TextStyle}>Child #1</Text>
        <Text style={Styles.TextStyle}>Child #2</Text>
        <Text style={Styles.TextStyle}>Child #3</Text>
    </View>
    <View style={Styles.ViewStyle1}>
        <Text style={Styles.TextStyle}>Child #1</Text>
        <Text style={Styles.TextStyle}>Child #2</Text>
        <Text style={Styles.TextStyle}>Child #3</Text>
    </View>
    <View style={Styles.ViewStyle2}>
        <Text style={Styles.TextStyle}>Child #1</Text>
        <Text style={Styles.TextStyle}>Child #2</Text>
        <Text style={Styles.TextStyle}>Child #3</Text>
    </View>
    <View style={Styles.ViewStyle3}>
        <Text style={Styles.TextStyle}>Child #1</Text>
        <Text style={Styles.TextStyle}>Child #2</Text>
        <Text style={Styles.TextStyle}>Child #3</Text>
    </View>

    </View>
}
const Styles = StyleSheet.create({
    ViewStyle:{
       borderWidth:3,
       borderColor:'black',
       height:150,
       flexDirection:'row',
       justifyContent:'space-around',
       paddingVertical:30
    },
    ViewStyle1:{
        borderWidth:3,
        borderColor:'black',
        height:150,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingVertical:20
     },
     ViewStyle2:{
        borderWidth:3,
        borderColor:'black',
        height:150,
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:30
     },
     ViewStyle3:{
        borderWidth:3,
        borderColor:'black',
        height:150,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical:30
     },
    TextStyle:{
        borderWidth:3,
        borderColor:'red'
    }
})

export default BoxDemo;