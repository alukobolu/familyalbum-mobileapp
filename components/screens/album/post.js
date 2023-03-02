import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList,TextInput} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import * as Animatable from 'react-native-animatable';

const PostingPage = ({ navigation,route }) => {

    function Page() {
        return (
            <View>
                <Text>THIS IS THE POSTING PAGE</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUpBig" >
            {Page()}
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.white,
      },
})

export default PostingPage;