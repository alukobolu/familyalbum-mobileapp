import React,{ useContext, useState } from "react";
import {View,Image,FlatList,Text,StyleSheet,Button} from "react-native";
import {Surface} from 'react-native-paper';
import 
import { FlatList } from "react-native-gesture-handler";

const upload2 = ({ navigation,route }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Select Document"
                onPress={selectMultipleFile}
            />
           <Surface>
                <Image 
                    sources={{uri:""}} 
                    style={{
                        width: "33%",
                        height: 150,
                        margin:1,
                    }} 
                />
           </Surface>
           <View>
                <FlatList 
                    data={images} 
                    renderItem={
                        ({item}) => 
                        <Surface>
                            <Image 
                                source={{uri: item.url}}
                                style={{
                                    width: "33%",
                                    height: 150,
                                    margin:1,
                                }}
                            />
                        </Surface>
                    } 
                >

                </FlatList>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.white,
      },
})

export default upload2;