import React,{ useContext } from "react";
import { View,Text,TouchableOpacity,ImageBackground } from "react-native";
import { Context }  from "../globalContext/globalContext.js"; 
import containers from "../styles/containers.js";
import fonts from "../styles/fonts.js";
import button from "../styles/button.js";

function Landing2({navigation,car}){
    
    const {name,tagLine,tagLineCTA,image} = car;
    const globalContext = useContext(Context)
    const { isLoggedIn,appSettings  } = globalContext;

    return(
         <View style={containers(appSettings).landing}>
            <ImageBackground source={image} style={containers(appSettings).imageBackground}/>
            <Text style={fonts(appSettings).h1}>{name} </Text>
            <Text style={fonts(appSettings).p}>{tagLine}</Text>
            <Text style={fonts(appSettings).p}> You are{ (isLoggedIn)? '': ' NOT'} Logged In</Text>
            {(tagLineCTA)?
                <>
                    <TouchableOpacity style={button(appSettings).login} onPress ={()=> navigation.navigate("login")}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button(appSettings).login} onPress ={()=> navigation.navigate("signup")}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </>
                :
                <Text></Text>
            }
         </View>

    )
    
};

export default Landing2;
