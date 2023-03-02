import React,{ useContext, useEffect, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList} from "react-native";
import { Context }  from "../globalContext/globalContext.js"; 
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import axios from 'axios';

import albumDatas from "../modules/albumDatas"

const Home = ({ navigation }) => {
    const globalContext = useContext(Context);
    const { album, setAlbum,domain,userObject } = globalContext;

    useEffect(() => {
        setAlbum(albumDatas)
        //getAlbumslist()
    },[])
 
    
    function renderAlbumList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginTop: SIZES.padding * 2 }}
                onPress={()=> navigation.navigate("InAlbum",{ itemId: item.id,title:item.name, })}//{ itemId: item.album_id,title:item.name, }
            >
                <View
                   style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}//{item.URL}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 250,
                            borderBottomRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 30,
                            height: 40,
                            width: SIZES.width * 0.905,
                            backgroundColor: COLORS.white,
                            opacity:0.8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 35,
                            flex: 1,
                            width: SIZES.width * 0.905,
                            backgroundColor: COLORS.white,
                            borderBottomRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems:'center',
                            flexDirection: 'row',
                            paddingHorizontal:20,
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.body3 }}>{item.number_of_members} members</Text>
                        <View style={{ display: 'flex',flex: 1, justifyContent: 'flex-end',width:'100%', alignItems: "flex-end" }}>
                        <Image
                            source={icons.star}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor:(item.favourite)? COLORS.primary:COLORS.darkgray,
                                marginLeft: 20,
                                marginRight: 10,
                                
                            }}
                        />
                        </View>
                    </View>
                </View> 

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    
                    
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={albumDatas}
                keyExtractor={item => `${item.album_id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderAlbumList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
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

export default Home;