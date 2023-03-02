import React,{ useContext } from "react";
import {View, Dimensions,FlatList} from "react-native";
import Landing2 from "./landing2";
import landingContent from "../modules/landingContent";

function Landing({ navigation, route, props }){

    return(
        <View style={{width: "100%"}} >
        
            <FlatList 
                data ={landingContent}
                horizontal={true}
                keyExtractor={item => `${item.id}`}
                renderItem ={({item}) => <Landing2 navigation={navigation} car={item} />}
                snapToAlignment = {'start'}
                decelerationRate ={'normal'}
                snapToInterval ={Dimensions.get('screen').width}
            />
        
        </View>
    )
    
};

export default Landing;
