import React ,{ useContext }  from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const inputs =(appSettings)=> StyleSheet.create({
    textInput:{
        backgroundColor:"transparent",
        color:"black",
        height: 45,
        width: "100%",
        borderBottomWidth:1,
        borderColor:(appSettings['foregroundColor'])? appSettings['foregroundColor']:"#6e7c85",
    }
});

export default inputs;