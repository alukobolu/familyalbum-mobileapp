import React ,{ useContext }  from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const containers =(appSettings)=> StyleSheet.create({
    landing:{
        backgroundColor:'transparent',//#f0efbc cream gray combo color
        color:(appSettings['foregroundColor'])? appSettings['foregroundColor']:"#6e7c85",
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        margin:0,
        alignItems:"center",
    },
    outerPage:{
        backgroundColor:(appSettings['backgroundColor'])? appSettings['backgroundColor']:"#ffffff",//#f0efbc cream gray combo color
        color:(appSettings['foregroundColor'])? appSettings['foregroundColor']:"#6e7c85",
        height: Dimensions.get('screen').height,
        width: Dimensions.get('window').width,
        padding:30,
        margin:0,
        alignItems:"center",
        justifyContent:"center",
    },
    foreBox:{
        backgroundColor:"transparent",
        height: '70%',
        width: '85%',
        margin:0,
    },
    formheader:{
        backgroundColor:"transparent",
        marginVertical:60,
    },
    formComponents:{
        backgroundColor:"transparent",
        marginVertical:22,
    },
    imageBackground:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        position:"absolute"
      },
});

export default containers;