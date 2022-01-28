import React from "react";
import { StyleSheet, Text, View } from "react-native";


const BoxDemo2 = () => {
    return (
        <View style={Styles.StyleMain}>
            <Text style={Styles.Style1}></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={Styles.Style2}></Text>
                <Text style={Styles.Style3}></Text>
            </View>

        </View>
    );
};
const Styles = StyleSheet.create(
    {
        StyleMain:
        {
            borderColor: 'black',
            borderWidth: 3,
            height: 200,
            flexDirection: 'row',
            justifyContent: 'space-between'


        },
        Style2:
        {
            height: 50,
            width: 50,
            backgroundColor: 'red',
            alignSelf: 'flex-start'
        },
        Style3:
        {
            height: 50,
            width: 50,
            backgroundColor: 'blue',
        },
        Style1:
        {
            height: 50,
            width: 50,
            backgroundColor: 'green'
        },
    }
)

export default BoxDemo2;