import React,{useState} from "react";
import { Text,View,StyleSheet,Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";


const TextScreen = () =>
{
    const [name,setName] = useState('')
    const [password,setpassword] = useState('')
    return (<View>
        <Text style={Styles.TextStyle}>Enter Your Name</Text>
        <TextInput style={Styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false} 
        onChangeText={(newValue)=>
        setName(newValue)}/>
        <Text>My Name is {name}</Text>
        <Text>Enter your password</Text>
        <TextInput style={Styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false} 
        onChangeText={(newpassword)=>
        setpassword(newpassword)}/>
        {password.length < 4 ? <Text>Password must be 4 charecter </Text>:null}
    </View>);
    
};

const Styles =  StyleSheet.create({
    inputStyle:{
        margin:15,
        padding:10,
        borderColor:'green',
        borderWidth:1,
        borderRadius:5,
        fontSize:20,
        
    }
    ,
    TextStyle:{
        fontSize:30
    }

});
export default TextScreen ;


