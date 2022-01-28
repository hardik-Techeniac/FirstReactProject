import React from "react";
import { StyleSheet, Text, View, Button, StatusBar, SafeAreaView, ScrollView } from "react-native";

export default ReactDemo = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ height: 1000 }}>
                    <Text>React Native Demo </Text>
                    <Button title='ActivityIndicator' onPress={() => props.navigation.navigate('ActivityIndicatorVC')}></Button>
                    <Button title='Button View' onPress={() => props.navigation.navigate('ButtonViewVC')}></Button>
                    <Button title='FlatList' onPress={() => props.navigation.navigate('FlatListDemoVC')}></Button>
                    <Button title='ImageView' onPress={() => props.navigation.navigate('ImageViewVC')}></Button>
                    <Button title='Image Background' onPress={() => props.navigation.navigate('ImageBackGroundVC')}></Button>
                    <Button title='KeyBoard Dismiss' onPress={() => props.navigation.navigate('KeyboardAvoidingComponentVC')}></Button>
                    <Button title='Model' onPress={() => props.navigation.navigate('ModelVC')}></Button>
                    <Button title='PressableView' onPress={() => props.navigation.navigate('PressableViewVC')}></Button>
                    <Button title='RefreshControlView' onPress={() => props.navigation.navigate('RefreshControlViewVC')}></Button>
                    <Button title='ScrollView Demo' onPress={() => props.navigation.navigate('ScrollViewViewVC')}></Button>
                    <Button title='SectionList' onPress={() => props.navigation.navigate('SectionListViewVC')}></Button>
                    <Button title='StatusBar' onPress={() => props.navigation.navigate('StatusBarVC')}></Button>
                    <Button title='SwitchDemo' onPress={() => props.navigation.navigate('SwitchDemoVC')}></Button>
                    <Button title='TextInANest' onPress={() => props.navigation.navigate('TextInANestVC')}></Button>
                    <Button title='UselessTextInput' onPress={() => props.navigation.navigate('UselessTextInputVC')}></Button>
                    <Button title='TouchableHighlightExample' onPress={() => props.navigation.navigate('TouchableHighlightExampleVC')}></Button>
                    <Button title='TochableOpacity' onPress={() => props.navigation.navigate('TochableOpacityVC')}></Button>
                    <Button title='TouchableWithoutFeedbackExampleVC' onPress={() => props.navigation.navigate('TouchableWithoutFeedbackExampleVC')}></Button>
                    <Button title='ViewBoxesWithColorAndText' onPress={() => props.navigation.navigate('ViewBoxesWithColorAndTextVC')}></Button>
                    <Button title='VirtualizedListDemo' onPress={() => props.navigation.navigate('VirtualizedListDemoVC')}></Button>
                    <Button title='InputAccessory' onPress={() => props.navigation.navigate('InputAccessoryVC')}></Button>
                    <Button title='Api Call' onPress={() => props.navigation.navigate('ApicallVC')}></Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});