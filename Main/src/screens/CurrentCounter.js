import React,{useState} from "react";
import { View,Text,StyleSheet,Image,Button } from "react-native";




const CurrentCounter = ()=> 
{
    const [counter,setcounter] = useState(0)
  return(
      <View>
            <Button 
            title='Increment' 
            onPress = {()=> 
                setcounter(counter + 1)
            }></Button>
            <Button 
                title='Decrement' 
                onPress = {()=> 
                setcounter(counter - 1)
            }></Button>
            <Button 
                title='Alert' 
                onPress = {()=> 
                    alert("hardik")
            }></Button>
     <Text>Current count : {counter}</Text>
      </View>
 );
};

export default CurrentCounter;
