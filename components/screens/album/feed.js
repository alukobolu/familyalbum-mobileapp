import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList, Button } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import * as Animatable from 'react-native-animatable';
import { Context }  from "../../globalContext/globalContext"; 
import { Video, AVPlaybackStatus } from 'expo-av';
import albumDatas from "../../modules/albumDatas"
const Feed = ({ navigation,route }) => {

    // Dummy Datas
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const { itemId } = route.params;
    const globalContext = useContext(Context);
    const { album, setAlbum } = globalContext;

    function getInfo (album,itemId){
        for (var i = 0; i < album.length; ++i) {
            if (album[i].id === itemId){
                return album[i].posts
            }
        }
        return
    }
    //const AuthStr = 'Bearer '.concat(userObject['access_token']); 
    // function getAlbumFeed (itemId){  
    //     return axios.get(`${domain}/albums/feeds/view_all/${itemId}`,{ headers: { Authorization: AuthStr } })
    //     .then(function (response) {
    //         // handle success
    //         // setAlbum(response.data.results)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         alert(error.message);
    //     });
        
    // }
    // useEffect(() => {
    //     getAlbumFeed(itemId)
    // },[])

    const infomation = getInfo(album,itemId)

 

    function renderAlbumList() {
        const imageType = ( item ) => {
            return(
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate("SinglePost",{ itemId: itemId,postId:item.postId, })} style={{elevation: 5,}}>
                        <Image source={item.photo} resizeMode="cover" style={styles.imageContainer} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("SinglePost",{ itemId: itemId,postId:item.postId, })} style={{elevation: 5,}}>
                        <View  style={{ height: 40,width: '100%',flexDirection: 'row',alignItems:'center',}} >
                            
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
                            <Text style={{color:COLORS.darkgray,...FONTS.body5}} >{item.comment} </Text>
                        </View>
                    </TouchableOpacity>   
                </View>
            )
        }
        const VideoType = ( item ) => {
            return(
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate("SinglePost",{ itemId: itemId,postId:item.postId, })} style={styles.containerV}>
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
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("SinglePost",{ itemId: itemId,postId:item.postId, })} style={{elevation: 5,}}>
                        <View  style={{ height: 40,width: '100%',flexDirection: 'row',alignItems:'center',}} >
                            
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
                            <Text style={{color:COLORS.darkgray,...FONTS.body5}} >{item.comment} </Text>
                        </View>
                    </TouchableOpacity>
                        
                </View>
            )
        }
        const TextType = ( item ) => {
            return  ( 
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate("SinglePost",{ itemId: itemId,postId:item.postId, })}  style={styles.textContainer} >
                        <View  style={{ height: 40,width: '100%',flexDirection: 'row',alignItems:'center',top:0,}} >
                            <Image source={item.userprofile} style={styles.icon} />
                            <Text style={{...FONTS.body3}} >{item.username}</Text>
                            <View style={{ display: 'flex',flexDirection: 'row', justifyContent: 'flex-end' ,alignItems: "flex-end",flex: 1  }}>
                                <Text style={{color: COLORS.darkgray, ...FONTS.body3 }}>. {item.time}</Text>
                            </View>
                        </View>
                        <Text style={{ padding:10, ...FONTS.body3 }} >{item.comment}</Text>
                    </TouchableOpacity>
                    <View  style={{ height: 40,width: '100%',flexDirection: 'row',alignItems:'center',top:0,}} >
                        <Text style={{ marginHorizontal:10, color: COLORS.darkgray, ...FONTS.body3 }}>9 responses</Text>
                        <View style={{ display: 'flex',flexDirection: 'row', justifyContent: 'flex-end' ,alignItems: "flex-end",flex: 1  }}>
                            <Image  source={icons.fire} style={[styles.icon,{ tintColor: (item.fire)? COLORS.primary:COLORS.darkgray,}]} />
                            <Image  source={icons.list} style={styles.icon} />
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
        const renderItem = ({ item }) => (
            <View style={{  marginTop: SIZES.padding*1.5,}} >
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
        )

        return (
            <FlatList
                data={infomation}
                keyExtractor={item => `${item.postId}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30,
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUpBig" >
            {renderAlbumList()}
            </Animatable.View>
            <TouchableOpacity
                onPress={()=> navigation.navigate("PostingPage")}
                activeOpacity={0.7}
                style={styles.touchableOpacityStyle}>
                <Image 
                    source={icons.plus} 
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.lightgrey4,
      },
    imageContainer:{ 
        width: "100%",
        height: 220,
        borderRadius: SIZES.radius,
        marginBottom:1,
    },
    textContainer:{
        width: "100%",
        height: "auto",
        padding:10,
        borderRadius: SIZES.radius,
        marginBottom:1,
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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      video: {
        alignSelf: 'center',
        width: 340,
        height: 220,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
      },
      textStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
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

export default Feed;