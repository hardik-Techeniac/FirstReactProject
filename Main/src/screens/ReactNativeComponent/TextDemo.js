import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = "This is not really a bird nest.";

    const onPressTitle = () => {
        setTitleText("Bird's Nest [pressed]");
    };

    return (
        <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={onPressTitle}>
                {titleText}
                {"\n"}
                {"\n"}
            </Text>
            <Text numberOfLines={5}>{bodyText}</Text>
            <Text style={styles.baseText}>
                I am bold
                <Text style={styles.innerText}> and red</Text>
            </Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    innerText: {
        color: 'red'
    }
});

export default TextInANest;