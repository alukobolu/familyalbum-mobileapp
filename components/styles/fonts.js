import React ,{ useContext }  from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const fonts =(appSettings)=> StyleSheet.create({
    h1:{
        color:(appSettings['foregroundColor'])? appSettings['foregroundColor']:"#ffffff",
        fontSize:34,
        fontWeight:"700",
        textAlign:"center",
        width:"100%",
        marginTop:"30%",
    },

    p:{
        color:(appSettings['foregroundColor'])? appSettings['foregroundColor']:"#6e7c85",
        fontSize:12,
        width:"100%",
        textAlign:"center",
        margin:0,
    },
    inputLabel:{
        color:(appSettings['foregroundColor'])? appSettings['foregroundColor']:"#6e7c85",
        fontSize:14,
        fontWeight:"600",
        width:"100%",
        margin:0,
    },
    buttonFonts:{
        color:"white",
        fontSize:13,
        width:"100%",
        textAlign:"center",
        margin:0,
    },
});

export default fonts;