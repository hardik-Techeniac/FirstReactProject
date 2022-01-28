import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";
import { Card } from 'react-native-shadow-cards';
export default class SlidreVC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree",
                require('..'../ Images / forest.jpg'),
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Card style={{ padding: 5, margin: 5 }}>
                        <SliderBox
                            images={this.state.images}
                            sliderBoxHeight={200}
                            paginationBoxVerticalPadding={0}
                            onCurrentImagePressed={index =>
                                console.warn(`image ${index} pressed`)
                            }
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={0}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            paginationBoxStyle={{
                                position: "absolute",
                                bottom: 0,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                                paddingVertical: 0
                            }}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                padding: 0,
                                margin: 0,
                                backgroundColor: "rgba(128, 128, 128, 0.92)"
                            }}
                            ImageComponentStyle={{ borderRadius: 15, width: '100%', marginTop: 5 }}
                            imageLoadingColor="#2196F3"
                        />
                    </Card>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    containerCard: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,

    },
    item: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'orange',
        position: 'relative',
        margin: 10,




    },
});
