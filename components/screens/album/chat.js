import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList,TextInput} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'


const chat = ({ navigation }) => {


    return (
        <View style={styles.container}>
            
            <View style={styles.bottomInputArea}>
            <TextInput style={styles.bottomInput} placeholder="Add comment" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.white,
      },
    bottomInput :{
        marginTop:2,
        flexDirection: 'row',
        alignItems: 'center',
        width:   SIZES.width * 0.9,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding * 2,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        height: 50,
        borderColor:COLORS.primary,
        elevation:1,
    },
    bottomInputArea:   {
        position: 'absolute',  
        bottom:0,
        backgroundColor:COLORS.lightGray,
        height:60,
        width:'100%',
        justifyContent:"center",
        alignItems:"center",
    },
   
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default chat;