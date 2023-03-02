import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList,Header} from "react-native";
import galleryData from "../../modules/galleryData";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import { TextInput } from "react-native-gesture-handler";

const InAlbumGallery = ({ navigation }) => {
    const [searchFocus, setsearchFocus] = useState(false)
    function searchArea(){
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 53,
                    left: 0,
                    right: 0,
                    height: '100%',
                    alignItems: 'center',
                    backgroundColor:COLORS.white,
                }}
            >

            </View>
        )
    }

    function searchbox() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 52.2,
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor:'rgba(205,205,210, 0.6)',
                }}
            >   
            {(searchFocus)?
            <>
                <TouchableOpacity 
                    onPress={click =>setsearchFocus(false)}
                    style={{
                        paddingHorizontal:20,
                        paddingVertical:10,
                    }}
                >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:"black",
                    }}
                />
                </TouchableOpacity>
                </>
                : null}
                <TextInput
                    onPressIn={text => setsearchFocus(true)}
                    style={{
                        marginTop:2,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width:  (searchFocus)? SIZES.width * 0.82:SIZES.width * 0.98,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        height: 50,
                        borderColor:COLORS.primary,
                    }}
                    placeholder="Search"
                />
            </View>
        )
    }

    const renderItem =({item})=>{
        
        return (
            <Image 
                source={item.photo}
                resizeMode="cover"
                style={{
                    width: "33%",
                    height: 150,
                    margin:1,
                }} 
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList 
            keyExtractor={item => `${item.id}`}
            horizontal={false}
            numColumns={3}
            data={galleryData}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingTop: SIZES.padding * 4,
                paddingBottom: 30
            }}
            />
            {searchbox()}
            {(searchFocus)?
            searchArea()
            :
            null
            }
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=> navigation.navigate("Upload")}
                style={styles.touchableOpacityStyle}>
                <Image 
                    source={icons.plus} 
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
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
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 60,
      height: 60,
      alignItems: 'center',
      backgroundColor:'white',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
      elevation: 8,
      borderBottomLeftRadius: SIZES.radius*1.8,
      borderBottomRightRadius: SIZES.radius*1.8,
      borderTopLeftRadius: SIZES.radius*1.8,
      borderTopRightRadius: SIZES.radius*1.8,
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 30,
      height: 30,
      //backgroundColor:'black'
    },
})

export default InAlbumGallery;