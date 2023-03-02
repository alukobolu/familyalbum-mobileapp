import React ,{ useContext }  from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const button =(appSettings)=> StyleSheet.create({
    login:{
        backgroundColor:"white",
        color:"black",
        height: 25,
        width: "30%",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
    },
    loginbutton:{
        backgroundColor:(appSettings['foregroundColor'])? appSettings['foregroundColor']:"#6e7c85",
        height: 45,
        width: "100%",
        textAlign:"center",
        justifyContent:"center",
        borderRadius:6,
        borderEndColor:"white",
    },
});

export default button;