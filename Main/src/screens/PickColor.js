import React, { useState } from "react";
import { render } from "react-dom";
import { Text, StyleSheet, View, Button } from "react-native";
// import { useState } from "react/cjs/react.development";

const PickColor = () => {
    const [red, setRed] = useState(0)
    const [green, setgreen] = useState(0)
    const [blue, setblue] = useState(0)

    return (<View>
        <Button title="Red +" onPress={() =>
            setRed(red + 1)
        }></Button>
        <Button title="Red -" onPress={() =>
            setRed(red - 1)
        }></Button>
        <Button title="Green +" onPress={() =>
            setRed(green + 1)
        }></Button>
        <Button title="Green -" onPress={() =>
            setRed(green - 1)
        }></Button>
        <Button title="Blue +" onPress={() =>
            setRed(blue + 1)
        }></Button>
        <Button title="Blue -" onPress={() =>
            setRed(blue - 1)
        }></Button>
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${0},${255},${0})` }}></View>
    </View>)
}
const styles = StyleSheet.create()
export default PickColor;