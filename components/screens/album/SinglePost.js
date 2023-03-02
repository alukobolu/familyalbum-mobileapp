import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList,TextInput} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import * as Animatable from 'react-native-animatable';
import { Context }  from "../../globalContext/globalContext"; 
import { Video, AVPlaybackStatus } from 'expo-av';


const SinglePost = ({ navigation,route }) => {

    // Dummy Datas
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const { itemId,postId } = route.params;
    const globalContext = useContext(Context);
    const { album, setAlbum } = globalContext;

    function getInfo (album,itemId,postId){
        for (var i = 0; i <= album.length; ++i) {
            if (album[i].id === itemId){
                const posts = album[i].posts.map((item) => (item))
                for (var j = 0; j <= posts.length; ++j) {
                    if (posts[j].postId === postId){
                        return posts[j]
                    }
                }
                
            }
        }
        return
    }

    const information = getInfo(album,itemId,postId)

 

    function renderAlbumList() {
        const imageType = ( item ) => {
            return(
                <View>
                    <Image source={item.photo} resizeMode="cover" style={styles.imageContainer} />
                    
                    <View style={styles.container2}>
                        <View  style={styles.container3} >
                            
                            <TouchableOpacity >
                                <Image source={item.userprofile} style={styles.icon} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity >
                                <Text style={{color:"black",...FONTS.body3}} >{item.username}</Text>
                            </TouchableOpacity>
                            
                            <View style={{ display: 'flex',flexDirection: 'row', justifyContent: 'flex-end' ,alignItems: "flex-end",flex: 1  }}>
                                <TouchableOpacity >
                                    <Image source={icons.fire} style={[styles.icon,{ tintColor: (item.fire)? COLORS.primary:COLORS.darkgray,}]} />
                                </TouchableOpacity>

                                <TouchableOpacity >
                                    <Image source={icons.list} style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        <View>
                            <TouchableOpacity >
                                <Text style={{color:COLORS.darkgray,...FONTS.body5}} >{item.comment} </Text>
                            </TouchableOpacity>
                        </View>  
                    </View>
                </View>
            )
        }
        const TextType = ( item ) => {
            return  ( 
                <View>
                    <TouchableOpacity  style={styles.textContainer} >
                        <Text style={{ padding:10, ...FONTS.body2 }} >{item.comment}</Text>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <View  style={styles.container3} >
                            
                            <TouchableOpacity >
                                <Image source={item.userprofile} style={styles.icon} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity >
                                <Text style={{color:"black",...FONTS.body3}} >{item.username}</Text>
                            </TouchableOpacity>
                            
                            <View style={{ display: 'flex',flexDirection: 'row', justifyContent: 'flex-end' ,alignItems: "flex-end",flex: 1  }}>
                                <TouchableOpacity >
                                    <Image source={icons.fire} style={[styles.icon,{ tintColor: (item.fire)? COLORS.primary:COLORS.darkgray,}]} />
                                </TouchableOpacity>

                                <TouchableOpacity >
                                    <Image source={icons.list} style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </View>   
                    </View>
                </View>
            )
        }
        const VideoType = ( item ) => {
            return(
                <View>
                <View style={styles.containerV}>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            // onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    </View>
                <View style={styles.container2}>
                    <View  style={styles.container3} >
                        
                        <TouchableOpacity >
                            <Image source={item.userprofile} style={styles.icon} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity >
                            <Text style={{color:"black",...FONTS.body3}} >{item.username}</Text>
                        </TouchableOpacity>
                        
                        <View style={{ display: 'flex',flexDirection: 'row', justifyContent: 'flex-end' ,alignItems: "flex-end",flex: 1  }}>
                            <TouchableOpacity >
                                <Image source={icons.fire} style={[styles.icon,{ tintColor: (item.fire)? COLORS.primary:COLORS.darkgray,}]} />
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <Image source={icons.list} style={styles.icon}/>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View>
                        <TouchableOpacity >
                            <Text style={{color:COLORS.darkgray,...FONTS.body5}} >{item.comment} </Text>
                        </TouchableOpacity>
                    </View>  
                </View>
            </View>
            )
        }
        const AudioType = ( item ) => {
            return(
            <View></View>
            )
        }
        const renderItem = ( item ) => (
            
            <View>
                <View style={styles.container1}>
                    {(item.type =='image')?
                        imageType(item)
                        :
                        (item.type =='video')?
                            VideoType(item)
                            :
                            (item.type =='text')?
                                TextType(item)
                                :
                                (item.type =='audi')?
                                    AudioType(item)
                                    :
                                    <></>
                    
                    }
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                            width: '40%',
                            height: 50,
                            top:30,
                            position:'absolute',
                            flexDirection: 'row',
                            alignItems:'center',
                        }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row', 
                            justifyContent: 'flex-start' ,
                            alignItems: "flex-start",
                            flex: 1
                        }}>
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 20,
                            tintColor:"black",
                            top:2,
                            marginHorizontal:15,
                        }}
                    />
                    <Text style={{color:"black",...FONTS.h4}}>Comments</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        )

        return (
            <View>
            {renderItem(information)}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUpBig" >
            {renderAlbumList()}
            </Animatable.View>
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
    container1: { 
        backgroundColor:'lightgray',
        width: '100%',
        top:80,
        borderBottomLeftRadius: SIZES.radius*1.8,
        borderBottomRightRadius: SIZES.radius*1.8,
    },
    container2: {   
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:10,
    },
    container3: { 
        flexDirection: 'row',
        alignItems:'center',
    },
    imageContainer:{ 
        width: "100%",
        height:400,
        top:0,
        borderBottomLeftRadius: SIZES.radius*1.8,
        borderBottomRightRadius: SIZES.radius*1.8,
    },
    textContainer:{
        width: "100%",
        height: "auto",
        padding:10,
        borderBottomLeftRadius: SIZES.radius*1.8,
        borderBottomRightRadius: SIZES.radius*1.8,
        backgroundColor:"white",
    },
    icon: {
        height: 20, 
        width: 20,
        tintColor: COLORS.darkgray,
        marginHorizontal:10,
        
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
    containerV: {
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      video: {
        alignSelf: 'center',
        width: '100%',
        height: 220,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default SinglePost;