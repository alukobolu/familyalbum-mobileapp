import React ,{ useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import { Context }  from "../globalContext/globalContext.js"; 

import Landing from "../screens/landing.js";
import Login from "../screens/login.js";
import Home from "../screens/home.js";
import Register from "../screens/register.js";
import Tabs from "./tabs.js";
import Signup from "../screens/signup"
import Feed from "../screens/album/feed.js";
import InAlbum from "../screens/album/index.js";
import SinglePost from "../screens/album/SinglePost.js";
import PostingPage from "../screens/album/post.js";
import upload from "../screens/album/cloudibyuload.js";

const Stack = createStackNavigator();

function Navigator(props) {

    const globalContext = useContext(Context);
    const { isLoggedIn,userObject } = globalContext;

    return(
        <Stack.Navigator initialRouteName ="Landing">
            {(!isLoggedIn)?
                <>
                    <Stack.Screen name ="landing" component={Landing} options={{headerShown: false }} />
                    <Stack.Screen name ="login" component={Login} options={{headerShown: false }} />
                    <Stack.Screen name ="register" component={Register} options={{headerShown: false }} />
                    <Stack.Screen name ="signup" component={Signup} options={{headerShown: false }} />
                    
                </>
                :
                <>
                <Stack.Screen name ="house" component={Tabs} options={{headerShown: false }} />
                <Stack.Screen name ="InAlbum" component={InAlbum} />
                <Stack.Screen name ="feed" component={Feed} options={{
                    title: 'Aluko Family of the Greats',
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    }} 
                    />
                <Stack.Screen name ="SinglePost" component={SinglePost} options={{headerShown: false }} />
                <Stack.Screen name ="Upload" component={upload} options={{title: 'Save Some Memories' }} />
                <Stack.Screen name ="PostingPage" component={PostingPage} options={{title: 'Post Something for the Family' }} />
                </>
            }
        </Stack.Navigator>
    )

};

export default Navigator;