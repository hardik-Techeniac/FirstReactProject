
import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Dimensions } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const dataList = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }]
const numColumns = 3
const WIDTH = Dimensions.get('window').width
export default class GridView extends Component {



    formatData = (dataList, numColumns) => {
        const totalRows = Math.floor(dataList.length / numColumns)
        let totalLastRow = dataList.length - (totalRows * numColumns)
        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            dataList.push({ key: 'blank', empty: true })
            totalLastRow++
        }
        return dataList
    }
    _renderItem = ({ item, index }) => {
        let { itemStyles, itemText, itemInvisible } = styles
        if (item.empty) {
            return <View style={itemStyles} />
        }
        return (
            <View style={itemStyles}>
                <Text style={styles.itemText}>{item.key}</Text>
            </View>
        )
    }
    render() {
        let { container, itemText } = styles
        return (<View style={styles.container}>
            <FlatList
                data={this.formatData(dataList, numColumns)}
                renderItem={this._renderItem}
                keyExtractor={(dataList, index) => index.toString()}
                numColumns={numColumns}
            />
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40

    },
    itemStyles:
    {
        backgroundColor: '#3232ff',
        alignItems: 'center',
        justifyContent: 'center',
        height: WIDTH / numColumns,
        flex: 1,
        margin: 1,
    },
    itemText: {
        fontSize: 30,
        color: 'white'
    },
    itemInvisible:
    {
        backgroundColor: 'transparent'
    }
});
// const GridView = () => {
//     const DataList = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }]
//     const WIDTH = Dimensions.get(`window`).width
//     const numColls = 2
//     formatData = (dataList, numColumns) => {
//         const totalRows = Math.floor(DataList.length / numColumns)
//         let totalLastrow = DataList.length - (totalRows * numColumns)
//         while (totalLastrow !== 0 && totalLastrow !== numColls) {
//             dataList.push({ key: 'blank', empty: true })
//             totalLastRow++
//             return dataList
//         }
//     }

//     return (<View style={styles.contener}>
//         <FlatList
//             data={this.formatData.dataList, numColls}
//             keyExtractor={(DataList, index) => index.toString()}
//             numColumns={numColls}
//             renderItem={({ item }) => {
//                 return (<View style={styles.ItemStyle}>
//                     <Text style={{
//                         height: WIDTH / numColls, fontSize: 30, color: 'white', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
//                         , rflexDirection: 'row', backgroundColor: 'red', flex: 1, textAlignVertical: 'center'
//                     }}>{item.key}</Text>
//                 </View>)
//             }}
//         />
//     </View>)
// }
// const styles = StyleSheet.create(
//     {
//         contener:
//         {
//             flex: 1
//         },
//         ItemStyle: {
//             backgroundColor: '#3332ff',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flex: 1,
//             margin: 1,

//         },

//     }
// );

// export default GridView;