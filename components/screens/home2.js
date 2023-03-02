import React,{ useContext } from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { Context }  from "../globalContext/globalContext.js"; 
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import button from "../styles/button.js";

function Home2({ navigation, route, props }){

    const globalContext = useContext(Context)
    const { isLoggedIn,setIsLoggedIn,appSettings,userObject  } = globalContext;

    function handleLogout(){
        console.log("Logging out ")
        setIsLoggedIn(false)
        navigation.navigate("landing")
    }

    return(
        <View style={containers(appSettings).outerPage}>
            <Text style={fonts(appSettings).h1}>Welcome to Family Album Once  Again </Text>
            <Text style={fonts(appSettings).p}> You are{ (isLoggedIn)? '': ' NOT'} Logged In</Text>
            <Text>{ userObject.access_token}</Text>
            <TouchableOpacity style={button(appSettings).login}  onPress ={()=> handleLogout()}>
                <Text>logout</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Home2;